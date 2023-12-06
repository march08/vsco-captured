import html2canvas from "html2canvas";
import type { SearchParamKeyValue } from "./getParamValues";
import { getImageUrl, isTruthy, replaceInnerText } from "./utils";

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

export const generateShareImage = (
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
      "POSTS",
      `POSTED ${totalImagesAndVideos} IMAGES and VIDEOS ON VSCO`
    );
  }

  /**
   * image
   */

  if (data.snapshot23_media_id) {
    const imageContainer = document.getElementById("canvas-image-container");
    const imageEl = document.createElement("img");
    imageEl.src = args.testImageUrl || getImageUrl(data.snapshot23_media_id);
    imageContainer.appendChild(imageEl);
  }

  /**
   * author
   */

  if (data.snapshot23_site_id) {
    const imageEl = document.getElementById("canvas-author-image-container");
    imageEl.style.backgroundImage = `url('${
      args.testAvatarUrl || getImageUrl(data.snapshot23_site_id)
    }')`;
  }

  html2canvas(document.querySelector("#toCanvas"), {
    scale: 1.5,
    logging: false,
  }).then((canvas) => {
    canvas.id = "canvas-share";
    document.body.appendChild(canvas);

    // set download
    const shareButtonEl = document.getElementById("share-button");

    const image = (document.getElementById("canvas-share") as any)
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    shareButtonEl.setAttribute("href", image);
    shareButtonEl.setAttribute(
      "download",
      `vsco_captured_${data.username}.png`
    );
  });
};
