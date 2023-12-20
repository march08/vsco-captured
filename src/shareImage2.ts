import { CANVAS_ID } from "./constants";
import type { SearchParamKeyValue } from "./getParamValues";
import { createSimpleLogger } from "./logger";
import type { VscoSnapshotConfig } from "./types";

const TRIGGER_EL_ID = "download-anchor";
const BLOB_TYPE = "image/jpeg";

const getCanvasBlob = (canvas: HTMLCanvasElement) => {
  return new Promise<Blob | null>((resolve) => {
    canvas.toBlob(resolve, BLOB_TYPE);
  });
};

const initiateDownload = (canvas: HTMLCanvasElement, username: string) => {
  const triggerEl =
    document.getElementById(TRIGGER_EL_ID) || document.createElement("a");

  if (triggerEl.getAttribute("data-sharable-initialized") === "true") {
    triggerEl.click();
    return;
  }

  const image = canvas.toDataURL(BLOB_TYPE);

  triggerEl.id = TRIGGER_EL_ID;
  triggerEl.setAttribute("href", image);
  triggerEl.setAttribute("download", `vsco_snapshot_2023_${username}`);
  triggerEl.setAttribute("data-sharable-initialized", "true");
  triggerEl.click();
};

let storedCanvas: HTMLCanvasElement | undefined = undefined;
let canvasBlob: Blob | undefined = undefined;

const logger = createSimpleLogger("SHARE ACTION");

const shareWithNavigator = async (
  canvas: HTMLCanvasElement,
  filename: string
) => {
  if (navigator.canShare && /Android|iPhone/i.test(navigator.userAgent)) {
    canvasBlob = canvasBlob || (await getCanvasBlob(canvas));
    if (canvasBlob) {
      const filesArray = [
        new File([canvasBlob], filename, {
          type: BLOB_TYPE,
          lastModified: new Date().getTime(),
        }),
      ];
      const shareData = {
        title: "My VSCO Snapshot 2023",
        files: filesArray,
        url: window.location.href,
      };

      if (navigator.canShare(shareData)) {
        logger.log("navigator.share data", shareData);
        navigator
          .share(shareData)
          .then(() => {
            logger.log("Downloaded");
          })
          .catch((e) => {
            if (e.name === "NotAllowedError") {
              throw e;
            }
          });
      }
      throw new Error("Cannot use navigator.share");
    }
  }

  throw new Error("Not a mobile device");
};

let retries = 0;

export const shareAsset = async (
  data: SearchParamKeyValue,
  args: VscoSnapshotConfig
) => {
  if (!storedCanvas) {
    // check if the canvas was rendered already
    const domCanvas = document.getElementById(CANVAS_ID) as HTMLCanvasElement;
    if (!domCanvas) {
      if (retries < 10) {
        setTimeout(() => {
          retries += 1;
          shareAsset(data, args);
        }, 500);
      } else {
        throw new Error("Cannot load canvas");
      }
    } else {
      storedCanvas = domCanvas;
    }
  }

  if (storedCanvas) {
    const filename = `vsco_snapshot_2023_${data.username}.jpg`;
    try {
      await shareWithNavigator(storedCanvas, filename);
    } catch (e) {
      initiateDownload(storedCanvas, data.username);
    }
  }
};
