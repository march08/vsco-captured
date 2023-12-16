import { generateShareImageWithHtmlToImage } from "./generateShareImageWithHtmlToImage";
import type { SearchParamKeyValue } from "./getParamValues";
import type { VscoSnapshotConfig } from "./types";

const TRIGGER_EL_ID = "download-anchor";
const BLOB_TYPE = "image/jpeg";

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
  src: string,
  triggerEl: HTMLAnchorElement,
  username: string
) => {
  triggerEl.setAttribute("href", src);
  triggerEl.setAttribute("download", `vsco_snapshot_2023_${username}`);
  triggerEl.setAttribute("data-sharable-initialized", "true");
  triggerEl.click();
};

export const handleShareV2 = async (
  data: SearchParamKeyValue,
  args: VscoSnapshotConfig
) => {
  const triggerEl = getTriggerElementId();

  console.log("triggerEl", triggerEl);
  if (triggerEl.getAttribute("data-sharable-initialized") === "true") {
    console.log("ALREADY GENERATED");
    triggerEl.click();
    return;
  }

  console.log("GENERATE DATA");

  const filename = `vsco_snapshot_2023_${data.username}.jpg`;

  if (navigator.canShare && /Android|iPhone/i.test(navigator.userAgent)) {
    const blob = await generateShareImageWithHtmlToImage(data, args, "blob");
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
            });
        });
        triggerEl.click();
        return;
      }
    }
  }

  // if above checks fails

  const jpegSrc = (await generateShareImageWithHtmlToImage(
    data,
    args,
    "jpeg"
  )) as string;
  initiateDownload(jpegSrc, triggerEl, data.username);
};
