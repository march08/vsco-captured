import html2canvas from "./html2canvas/html2canvas";
import type { SearchParamKeyValue } from "./getParamValues";
import { renderSharableAssetSource } from "./generateSharableAsset/renderSharableAssetSource";

export const generateShareImageV2 = async (
  data: SearchParamKeyValue,
  args: {
    testImageUrl?: string;
    testAvatarUrl?: string;
  }
) => {
  const sourceEl = await renderSharableAssetSource(data, args);
  console.log("sourceEl", sourceEl);
  try {
    const generatedCanvas = await html2canvas(sourceEl, {
      scale: 1,
      logging: true,
      allowTaint: false,
      useCORS: true,
    }).then((canvas: HTMLCanvasElement) => {
      canvas.id = "canvas-share";
      document.body.appendChild(canvas);
      return canvas;
    });

    return generatedCanvas;
  } catch (e) {
    console.log("eeee", e);
  }
};
