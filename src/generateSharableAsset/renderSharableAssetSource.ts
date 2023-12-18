import type { SearchParamKeyValue } from "../getParamValues";
import { createSimpleLogger } from "../logger";
import { isTruthy, replaceInnerText } from "../utils";
import { vscoImageResponsiveUrltoS3Path } from "../vscoUtils";

const fetchImageUrlAndGetLocalObjectUrl = async (url: string) => {
  const logger = createSimpleLogger("IMAGE PREFETCH");
  logger.log("start");
  const response = await fetch(url, {
    credentials: "include",
  });
  logger.log("response", response);

  const blob = await response.blob();

  logger.log("blob", blob);

  const objectUrl = URL.createObjectURL(blob);
  logger.log("object URL", objectUrl);
  return objectUrl;
};

const createLineItem = (title: string, value: string) => {
  const contentEl = document.getElementById("canvas-activity-items");

  const titleEl = document.createElement("div");
  titleEl.className = "canvas-activity-item-title";
  titleEl.innerText = title;

  const valueEl = document.createElement("div");
  valueEl.className = "canvas-activity-item-value";
  valueEl.innerText = value;

  const rowEl = document.createElement("div");
  rowEl.className = "canvas-activity-item";

  rowEl.appendChild(titleEl);
  rowEl.appendChild(valueEl);

  contentEl.appendChild(rowEl);
};

export const renderSharableAssetSource = async (
  data: SearchParamKeyValue,
  args: {
    testImageUrl?: string;
    testAvatarUrl?: string;
  },
  config: {
    imageCrossOrigin?: "anonymous";
  }
) => {
  const renderLogger = createSimpleLogger("Prepare HTML before render");
  renderLogger.log("START");
  /**
   * username
   */

  if (!data.username) {
    const shareButtonEl = document.getElementById("share-button");
    shareButtonEl.remove();
    return;
  }

  replaceInnerText("canvas-username", data.username);

  /**
   * presets
   */

  const presetsUsed = [
    data.snapshot23_filter_1,
    data.snapshot23_filter_2,
    data.snapshot23_filter_3,
  ].filter(isTruthy);

  if (presetsUsed.length > 0) {
    createLineItem("PRESETS", presetsUsed.join(", "));
  }

  /**
   * tools
   */
  const toolsUsed = [
    data.snapshot23_tool_1,
    data.snapshot23_tool_2,
    data.snapshot23_tool_3,
  ].filter(isTruthy);

  if (toolsUsed.length > 0) {
    createLineItem("TOOLS", toolsUsed.join(", "));
  }

  /**
   * month
   */

  if (data.snapshot23_most_creative_month) {
    createLineItem("Creative month", data.snapshot23_most_creative_month);
  }

  /**
   * week day
   */

  if (data.snapshot23_most_creative_day_of_week) {
    createLineItem(
      "Creative day",
      `${data.snapshot23_most_creative_day_of_week}s`
    );
  }

  /**
   * count items
   */

  const totalImages = parseInt(data.snapshot23_n_images) || 0;
  const totalVideos = parseInt(data.snapshot23_n_videos) || 0;
  const totalImagesAndVideos = totalImages + totalVideos;
  if (totalImagesAndVideos) {
    createLineItem(
      "POSTS",
      `EDITED ${totalImagesAndVideos} IMAGES and VIDEOS ON VSCO`
    );
  }
  // /**
  //  * author
  //  */

  try {
    const authorImageContainer = document.getElementById(
      "canvas-author-image-container"
    );

    // if (data.snapshot23_site_id) {
    //   const imageEl = document.getElementById("canvas-author-image-container");

    //   if (args.testAvatarUrl) {
    //     imageEl.style.backgroundImage = `url('${args.testAvatarUrl}')`;
    //   } else {
    //     const s3Src = await getSiteS3ImageUrl(data.snapshot23_site_id);
    //     const objectUrl = await fetchImageUrlAndGetLocalObjectUrl(s3Src);
    //     imageEl.style.backgroundImage = `url('${objectUrl}')`;
    //   }
    // } else {
    authorImageContainer.remove();
  } catch {}
  // }

  /**
   * image
   */

  const loggerSharableImage = createSimpleLogger("Sharable asset image");

  try {
    const imageContainer = document.getElementById("canvas-image-container");
    if (data.snapshot23_media_responsive_url) {
      if (args.testImageUrl) {
        loggerSharableImage.log("Loading custom test image", args.testImageUrl);
        const imageEl = document.createElement("img");
        const objectUrl = await fetchImageUrlAndGetLocalObjectUrl(
          args.testImageUrl
        );
        imageEl.src = objectUrl;
        imageContainer.appendChild(imageEl);
        loggerSharableImage.log("Custom image loaded");
      } else {
        loggerSharableImage.log(
          "Raw responsive image url",
          data.snapshot23_media_responsive_url
        );
        const s3Src = vscoImageResponsiveUrltoS3Path(
          data.snapshot23_media_responsive_url
        );
        loggerSharableImage.log("Built s3 url", s3Src);

        // fetch to local
        loggerSharableImage.log("Append <img /> with s3 url");
        const imageElWithS3Src = document.createElement("img");
        imageElWithS3Src.src = s3Src;
        if (config.imageCrossOrigin) {
          imageElWithS3Src.crossOrigin = config.imageCrossOrigin;
        }
        imageContainer.appendChild(imageElWithS3Src);

        // fetching image
        try {
          loggerSharableImage.log("Prefetch image");
          const imageElWithPrefetched = document.createElement("img");
          const objectUrl = await fetchImageUrlAndGetLocalObjectUrl(s3Src);
          imageElWithPrefetched.src = objectUrl;
          if (config.imageCrossOrigin) {
            imageElWithPrefetched.crossOrigin = config.imageCrossOrigin;
          }
          imageContainer.appendChild(imageElWithPrefetched);
        } catch (e) {
          loggerSharableImage.log("Failed to preload image", e, ...e);
        }
      }
    }
  } catch (e) {
    loggerSharableImage.log("FAILED rendering image", e);
  }

  renderLogger.log("FINISHED");
  return document.querySelector("#toCanvas") as HTMLDivElement;
};
