import { generateShareImageV2 } from "./generateShareImagev2";
import { getSearchParamValues } from "./getParamValues";
import { mapToDom } from "./mapToDom";
import { shareAsset } from "./shareImage2";
import type { VscoSnapshotConfig } from "./types";

const init = (args: VscoSnapshotConfig) => {
  const params = getSearchParamValues(args.base64);

  if (params.username) {
    mapToDom(params);
    const shareButtonEl = document.getElementById("share-button");

    setTimeout(async () => {
      shareButtonEl.style.opacity = "0";
      await generateShareImageV2(params, args);
      shareButtonEl.style.opacity = "1";
      /**
       * big delay because we need to wait for fonts to load
       * html2canvas doesn't load them automatically unfortunately
       */
    }, 2500);

    shareButtonEl.addEventListener("click", async () => {
      shareAsset(params, args);
    });
  } else {
    // no username, display login button instead
    try {
      const loginButtonEl = document.getElementById("login-button");
      loginButtonEl.style.display = "inline-block";
      loginButtonEl.style.opacity = "1";
    } catch {}
  }

  if (args.onSuccess) {
    args.onSuccess();
  }
};

(window as any).VSCOCaptured = {
  init,
};

export default init;
