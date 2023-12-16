import { getSearchParamValues } from "./getParamValues";
import { mapToDom } from "./mapToDom";
import { handleShare } from "./shareImage";
import { handleShareV2 } from "./shareImageV2";
import type { VscoSnapshotConfig } from "./types";

const init = (args: VscoSnapshotConfig) => {
  const params = getSearchParamValues(args.base64);

  console.log("PARSED PARAMS", params);

  mapToDom(params);
  const shareButtonEl = document.getElementById("share-button");

  shareButtonEl.addEventListener("click", async () => {
    handleShare(params, args);
  });

  if (args.onSuccess) {
    args.onSuccess();
  }
};

(window as any).VSCOCaptured = {
  init,
};

export default init;
