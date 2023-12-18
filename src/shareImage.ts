import { generateShareImageV2 } from "./generateShareImagev2";
import type { SearchParamKeyValue } from "./getParamValues";
import type { VscoSnapshotConfig } from "./types";

const TRIGGER_EL_ID = "download-anchor";
const BLOB_TYPE = "image/jpeg";

const getCanvasBlob = (canvas: HTMLCanvasElement) => {
  return new Promise<Blob | null>((resolve) => {
    canvas.toBlob(resolve, BLOB_TYPE);
  });
};

const getTriggerElementId = () => {
  const existingTriggerEl = document.getElementById(TRIGGER_EL_ID);

  console.log("existingTriggerEl", existingTriggerEl);

  if (existingTriggerEl) {
    return existingTriggerEl as HTMLAnchorElement;
  } else {
    const triggerEl = document.createElement("a");
    triggerEl.id = TRIGGER_EL_ID;
    document.body.appendChild(triggerEl);
    triggerEl.style.display = "none";
    return triggerEl as HTMLAnchorElement;
  }
};

const initiateDownload = (
  canvas: HTMLCanvasElement,
  triggerEl: HTMLAnchorElement,
  username: string
) => {
  const image = canvas.toDataURL(BLOB_TYPE);

  triggerEl.setAttribute("href", image);
  triggerEl.setAttribute("download", `vsco_snapshot_2023_${username}`);
  triggerEl.setAttribute("data-sharable-initialized", "true");
  triggerEl.click();
};

let isGenerating = false;

export const handleShare = async (
  data: SearchParamKeyValue,
  args: VscoSnapshotConfig
) => {
  const triggerEl = getTriggerElementId();

  if (isGenerating) {
    console.log("Image generator running");
    return;
  }

  if (triggerEl.getAttribute("data-sharable-initialized") === "true") {
    console.log("ALREADY GENERATED");
    triggerEl.click();
    return;
  }

  console.log("GENERATE DATA");
  isGenerating = true;

  const canvas = await generateShareImageV2(data, args);

  const filename = `vsco_snapshot_2023_${data.username}.jpg`;

  if (navigator.canShare && /Android|iPhone/i.test(navigator.userAgent)) {
    const blob = await getCanvasBlob(canvas);
    console.log("blob", blob);
    if (blob) {
      const filesArray = [
        new File([blob], filename, {
          type: BLOB_TYPE,
          lastModified: new Date().getTime(),
        }),
      ];
      const shareData = {
        title: filename,
        files: filesArray,
      };

      console.log("shareData", shareData);
      console.log(
        "navigator.canShare(shareData)",
        navigator.canShare(shareData)
      );
      if (navigator.canShare(shareData)) {
        // initiale share dialog
        triggerEl.setAttribute("data-sharable-initialized", "true");

        triggerEl.addEventListener("click", () => {
          console.log("click", shareData);
          navigator
            .share(shareData)
            .then(() => {
              console.log("DOWNLOADED");
            })
            .catch((e) => {
              console.log("share err", e);
              console.log("Not allowed", e.name === "NotAllowedError");
              if (e.name === "NotAllowedError") {
                initiateDownload(canvas, triggerEl, data.username);
              }
            });
        });
        triggerEl.click();
        isGenerating = false;
        return;
      }
    }
  }

  // if above checks fails

  initiateDownload(canvas, triggerEl, data.username);
  isGenerating = false;
};
