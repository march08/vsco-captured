import html2canvas from "./html2canvas.js";
import type { SearchParamKeyValue } from "./getParamValues";
import { isTruthy, replaceInnerText } from "./utils";
import { vscoImageResponsiveUrltoS3Path } from "./vscoUtils";

const fetchImageUrlAndGetLocalObjectUrl = (url: string) => {
  return fetch(url)
    .then((res) => res.blob())
    .then((blob) => {
      return URL.createObjectURL(blob);
    });
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

export const generateShareImage = async (
  data: SearchParamKeyValue,
  args: {
    testImageUrl?: string;
    testAvatarUrl?: string;
  }
) => {
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
      "Creative month",
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
      "EDITS",
      `${totalImagesAndVideos} IMAGES and VIDEOS ON VSCO`
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

  const imageContainer = document.getElementById("canvas-image-container");
  if (data.snapshot23_media_responsive_url) {
    const imageEl = document.createElement("img");

    imageEl.onload = () => {};

    if (args.testImageUrl) {
      const objectUrl = await fetchImageUrlAndGetLocalObjectUrl(
        args.testImageUrl
      );
      imageEl.src = objectUrl;
    } else {
      const s3Src = vscoImageResponsiveUrltoS3Path(
        data.snapshot23_media_responsive_url
      );

      // imageEl.src = s3Src;
      const objectUrl = await fetchImageUrlAndGetLocalObjectUrl(s3Src);
      imageEl.src = objectUrl;
    }
    imageContainer.appendChild(imageEl);
  }
  // const imageContainer = document.getElementById("canvas-image-container");
  // if (data.snapshot23_media_id) {
  //   const imageEl = document.createElement("img");

  //   if (args.testImageUrl) {
  //     const objectUrl = await fetchImageUrlAndGetLocalObjectUrl(
  //       args.testImageUrl
  //     );
  //     imageEl.src = objectUrl;
  //   } else {
  //     const s3Src = await getMediaS3ImageUrl(data.snapshot23_media_id);
  //     // imageEl.src = s3Src;
  //     const objectUrl = await fetchImageUrlAndGetLocalObjectUrl(s3Src);
  //     imageEl.src = objectUrl;
  //   }
  //   imageContainer.appendChild(imageEl);
  // } else {
  //   imageContainer.remove();
  // }

  html2canvas(document.querySelector("#toCanvas"), {
    scale: 1.5,
    logging: true,
    allowTaint: false,
    // useCORS: true,
  }).then((canvas) => {
    canvas.id = "canvas-share";
    document.body.appendChild(canvas);

    // set download

    const image = (document.getElementById("canvas-share") as any)
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");

    // const anchorEl =
    //   document.getElementById("download-anchor") || document.createElement("a");
    const anchorEl = document.getElementById("share-button");
    anchorEl.setAttribute("href", image);
    anchorEl.setAttribute("download", `vsco_captured_${data.username}.png`);
    // anchorEl.click();
  });
};
