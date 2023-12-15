import html2canvas from "html2canvas";
import type { SearchParamKeyValue } from "./getParamValues";
import { isTruthy, replaceInnerText } from "./utils";
import { vscoImageResponsiveUrltoS3Path } from "./vscoUtils";

const fetchImageUrlAndGetLocalObjectUrl = (url: string) => {
  return fetch(url)
    .then((res) => res.blob())
    .then((blob) => {
      const objectUrl = URL.createObjectURL(blob);
      console.log("URL.createObjectURL(blob)", objectUrl);
      return objectUrl;
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

  try {
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
        console.log("Image urllll", s3Src);

        const objectUrl = await fetchImageUrlAndGetLocalObjectUrl(s3Src);
        imageEl.src = objectUrl;
      }
      imageContainer.appendChild(imageEl);
    }
  } catch (e) {
    console.log("cannot render image", e);
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
    scale: 1,
    logging: true,
    allowTaint: false,
    // useCORS: true,
  }).then(async (canvas: HTMLCanvasElement) => {
    // canvas.id = "canvas-share";
    // document.body.appendChild(canvas);
    const anchorEl = document.getElementById("share-button");

    // const image = canvas.toDataURL("image/jpeg");
    // .replace("image/png", "image/octet-stream"); // probably not necessary

    // anchorEl.setAttribute("href", image);
    // anchorEl.setAttribute("download", `vsco_captured_${data.username}`);

    await share(canvas, data.username)
      .then((data) => {
        console.log("Share", data);
        anchorEl.addEventListener("click", () => {
          console.log("click", data);
          navigator
            .share(data)
            .then(() => {
              console.log("DOWNLOADED");
            })
            .catch((e) => {
              console.log("share err", e);
            });
        });
      })
      .catch(() => {
        // set download

        console.log("REGULAR DOWNLOAD");

        const image = canvas.toDataURL("image/jpeg");
        // .replace("image/png", "image/octet-stream"); // probably not necessary

        anchorEl.setAttribute("href", image);
        anchorEl.setAttribute(
          "download",
          `vsco_snapshot_2023_${data.username}`
        );
      });
  });
};

const getCanvasBlob = (canvas: HTMLCanvasElement) => {
  return new Promise<Blob | null>((resolve) => {
    canvas.toBlob(resolve);
  });
};

const share = async (canvas: HTMLCanvasElement, username: string) => {
  console.log("navigator.canShare", navigator.canShare);

  if (!/Android|iPhone/i.test(navigator.userAgent)) {
    console.log("Desktop device");
    return Promise.reject("Desktop device");
  }

  console.log("Mobile device");

  if (navigator.canShare) {
    const blob = await getCanvasBlob(canvas);
    console.log("blob", blob);
    if (blob) {
      const filesArray = [
        new File([blob], `vsco_snapshot_2023_${username}.png`, {
          type: "image/png",
          lastModified: new Date().getTime(),
        }),
      ];
      const shareData = {
        title: `vsco_snapshot_2023_${username}.png`,
        files: filesArray,
      };

      console.log("shareData", shareData);
      console.log(
        "navigator.canShare(shareData)",
        navigator.canShare(shareData)
      );
      if (navigator.canShare(shareData)) {
        return shareData;
      }
    }
  }

  return Promise.reject();
};
