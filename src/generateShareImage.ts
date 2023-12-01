import html2canvas from "html2canvas";
import type { SearchParamKeyValue } from "./getParamValues";
import { isTruthy } from "./utils";

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
  testImageUrl?: string
) => {
  const canvasEl = document.getElementById("toCanvas");

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
    imageEl.src =
      testImageUrl || `https://vsco.co/i/${data.snapshot23_media_id}`;
    imageContainer.appendChild(imageEl);
  }

  html2canvas(document.querySelector("#toCanvas"), {
    useCORS: true,
  }).then((canvas) => {
    canvas.id = "canvas-share";
    document.body.appendChild(canvas);

    // set download
    const anchorEl = document.getElementById("share-button");

    const image = (document.getElementById("canvas-share") as any)
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    anchorEl.setAttribute("href", image);
    anchorEl.setAttribute("download", `vsco_captured_${data.username}.png`);
  });
};
