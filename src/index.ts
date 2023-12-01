import { generateShareImage } from "./generateShareImage";
import { getSearchParamValues } from "./getParamValues";
import { mapToDom } from "./mapToDom";

const init = (args: {
  onSuccess?: VoidFunction;
  base64?: boolean;
  testImageUrl?: string;
}) => {
  const params = getSearchParamValues(args.base64);
  mapToDom(params);
  generateShareImage(params, args.testImageUrl);

  if (args.onSuccess) {
    args.onSuccess();
  }
};

(window as any).VSCOCaptured = {
  init,
};

export default init;
