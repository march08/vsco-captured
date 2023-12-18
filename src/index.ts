import { getSearchParamValues } from "./getParamValues";
import { mapToDom } from "./mapToDom";
import { handleShare } from "./shareImage";
import type { VscoSnapshotConfig } from "./types";

const init = (args: VscoSnapshotConfig) => {
  const params = getSearchParamValues(args.base64);

  console.log("CUSTOM UNSPLASH IMAGE");
  console.log("PARSED PARAMS", params);

  mapToDom(params);
  const shareButtonEl = document.getElementById("share-button");

  shareButtonEl.addEventListener("click", async () => {
    handleShare(params, {
      ...args,
      // testImageUrl:
      // "https://images.unsplash.com/photo-1588599467405-aadcd12aa047?q=80&w=3408&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    });
  });

  if (args.onSuccess) {
    args.onSuccess();
  }
};

(window as any).VSCOCaptured = {
  init,
};

export default init;
