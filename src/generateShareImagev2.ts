import html2canvas from "./html2canvas/html2canvas";
import type { SearchParamKeyValue } from "./getParamValues";
import { renderSharableAssetSource } from "./generateSharableAsset/renderSharableAssetSource";
import { createSimpleLogger } from "./logger";
import { CANVAS_ID } from "./constants";
import { shouldLog } from "./utils";

const HTML2CANVAS_CONFIG = {
  scale: 1.5,
  logging: shouldLog(),
  // allowTaint: false,
  // useCORS: true,
  useCORS: false,
};

export const generateShareImageV2 = async (
  data: SearchParamKeyValue,
  args: {
    testImageUrl?: string;
    testAvatarUrl?: string;
  }
) => {
  const logger = createSimpleLogger("SHARABLE ASSET");
  const sourceEl = await renderSharableAssetSource(data, args, {
    imageCrossOrigin: HTML2CANVAS_CONFIG.useCORS ? "anonymous" : undefined,
  });
  logger.log("Start generating with config", HTML2CANVAS_CONFIG);
  try {
    const generatedCanvas = await html2canvas(
      sourceEl,
      HTML2CANVAS_CONFIG
    ).then((canvas: HTMLCanvasElement) => {
      canvas.id = CANVAS_ID;
      document.body.appendChild(canvas);
      return canvas;
    });

    logger.log("DONE");

    return generatedCanvas;
  } catch (e) {
    logger.log("ERROR");
  }
};
