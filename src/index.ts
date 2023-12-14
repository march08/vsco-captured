import { generateShareImage } from "./generateShareImage";
import { getSearchParamValues } from "./getParamValues";
import { mapToDom } from "./mapToDom";

const init = (args: {
  onSuccess?: VoidFunction;
  base64?: boolean;
  testImageUrl?: string;
  testAvatarUrl?: string;
}) => {
  const params = getSearchParamValues(args.base64);
  mapToDom(params);

  const shareButtonEl = document.getElementById("share-button");
  generateShareImage(params, args);
  // shareButtonEl.addEventListener("click", () => {
  //   const downloadAnchor = document.getElementById("download-anchor");
  //   if (downloadAnchor) {
  //     downloadAnchor.click();
  //   } else {
  //     generateShareImage(params, args);
  //   }
  // });

  if (args.onSuccess) {
    args.onSuccess();
  }
};

(window as any).VSCOCaptured = {
  init,
};

export default init;
