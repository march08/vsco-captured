import html2canvas from "./html2canvas/html2canvas";
import type { SearchParamKeyValue } from "./getParamValues";
import { renderSharableAssetSource } from "./generateSharableAsset/renderSharableAssetSource";
import { createSimpleLogger } from "./logger";

const HTML2CANVAS_CONFIG = {
  scale: 1.5,
  logging: true,
  allowTaint: false,
  useCORS: true,
};

const logger = createSimpleLogger("Sharable asset");

export const generateShareImageV2 = async (
  data: SearchParamKeyValue,
  args: {
    testImageUrl?: string;
    testAvatarUrl?: string;
  }
) => {
  const sourceEl = await renderSharableAssetSource(data, args, {
    imageCrossOrigin: HTML2CANVAS_CONFIG.useCORS ? "anonymous" : undefined,
  });
  logger.log("Start generating");
  logger.log("canvas config", HTML2CANVAS_CONFIG);
  try {
    const generatedCanvas = await html2canvas(
      sourceEl,
      HTML2CANVAS_CONFIG
    ).then((canvas: HTMLCanvasElement) => {
      canvas.id = "canvas-share";
      document.body.appendChild(canvas);
      return canvas;
    });

    logger.log("canvas done");

    return generatedCanvas;
  } catch (e) {
    console.log("eeee", e);
  }
};
