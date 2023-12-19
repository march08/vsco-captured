import { generateShareImageV2 } from "./generateShareImagev2";
import { getSearchParamValues } from "./getParamValues";
import { mapToDom } from "./mapToDom";
import { shareAsset } from "./shareImage2";
import type { VscoSnapshotConfig } from "./types";

const init = (args: VscoSnapshotConfig) => {
  const params = getSearchParamValues(args.base64);

  mapToDom(params);
  const shareButtonEl = document.getElementById("share-button");

  setTimeout(() => {
    generateShareImageV2(params, args);
  }, 500);

  shareButtonEl.addEventListener("click", async () => {
    shareAsset(params, args);
  });

  if (args.onSuccess) {
    args.onSuccess();
  }
};

(window as any).VSCOCaptured = {
  init,
};

export default init;
