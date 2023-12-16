import type { SearchParamKeyValue } from "./getParamValues";
import { toBlob, toJpeg } from "html-to-image";
import { renderSharableAssetSource } from "./generateSharableAsset/renderSharableAssetSource";

export const generateShareImageWithHtmlToImage = async (
  data: SearchParamKeyValue,
  args: {
    testImageUrl?: string;
    testAvatarUrl?: string;
  },
  format: "jpeg" | "blob"
) => {
  const htmlSource = renderSharableAssetSource(data, args);

  try {
    const htmlSource = document.querySelector("#toCanvas") as HTMLElement;

    if (format === "jpeg") {
      return toJpeg(htmlSource);
    }

    return toBlob(htmlSource);
  } catch (e) {
    console.log("eeee", e);
  }
};
