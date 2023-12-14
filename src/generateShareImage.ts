import html2canvas from "html2canvas";
import type { SearchParamKeyValue } from "./getParamValues";
import { isTruthy, replaceInnerText } from "./utils";

async function getS3ImageUrl(mediaID: string) {
  const media = await fetchMedia(mediaID);
  if (!media) {
    return;
  }

  const s3Path = toS3Path(media.responsive_url);
  console.log("Media", mediaID, ": s3 path", s3Path);
  return s3Path;
}

// fetches the specified media object in order to access its responsive_url property
async function fetchMedia(mediaID: string) {
  try {
    const resp = await fetch(`https://vsco.co/api/2.0/medias/${mediaID}`, {
      method: "GET",
      credentials: "same-origin",
      headers: {
        authorization: "Bearer 7356455548d0a1d886db010883388d08be84d0c9",
      },
    });

    const result = await resp.json();
    return result.media;
  } catch (err) {
    console.error("[fetchMedia] err: ", err);
  }
}

// Converts the responsive_url to URL that points directly to the asset in S3.
function toS3Path(url: string) {
  const segments = url.split("/");
  const partialUrl = segments.slice(2).join("/");

  return `https://image-${segments[1]}.vsco.co/${partialUrl}`;
}

const fetchImage = (url: string) => {
  return fetch(url).then((res) => res.blob());
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

    if (args.testImageUrl) {
      const imageBlob = await fetchImage(args.testImageUrl);
      console.log("imageBlob", imageBlob);
      const blobUrl = URL.createObjectURL(imageBlob);
      console.log("blobUrl", blobUrl);
      imageEl.src = blobUrl;
    } else {
      const s3Src = await getS3ImageUrl(data.snapshot23_media_id);
      // imageEl.src = s3Src;
      const imageBlob = await fetchImage(s3Src);
      console.log("imageBlob", imageBlob);
      const blobUrl = URL.createObjectURL(imageBlob);
      console.log("blobUrl", blobUrl);
      imageEl.src = URL.createObjectURL(imageBlob);
    }
    imageContainer.appendChild(imageEl);
  }

  /**
   * author
   */

  if (data.snapshot23_site_id) {
    const imageEl = document.getElementById("canvas-author-image-container");
    imageEl.style.backgroundImage = `url('${
      args.testAvatarUrl || (await getS3ImageUrl(data.snapshot23_site_id))
    }')`;
  }

  html2canvas(document.querySelector("#toCanvas"), {
    scale: 1.5,
    // useCORS: true,
    // allowTaint: false,
    // logging: false,
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
