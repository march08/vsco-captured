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
  console.log("generateShareImageV2");
  const sourceEl = await renderSharableAssetSource(data, args);
  console.log("sourceEl", sourceEl);
  const html2canvasConfig = {
    scale: 1.5,
    logging: true,
    allowTaint: false,
    useCORS: true,
  };
  console.log("html2canvasConfig", html2canvasConfig);
  try {
    const generatedCanvas = await html2canvas(sourceEl, html2canvasConfig).then(
      (canvas: HTMLCanvasElement) => {
        canvas.id = "canvas-share";
        document.body.appendChild(canvas);
        return canvas;
      }
    );

    return generatedCanvas;
  } catch (e) {
    console.log("eeee", e);
  }
};
