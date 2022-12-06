import { getSearchParamValues } from "./getParamValues";
import { mapToDom } from "./mapToDom";

const init = (args: { onSuccess?: VoidFunction }) => {
  const params = getSearchParamValues();
  mapToDom(params);

  if (args.onSuccess) {
    args.onSuccess();
  }
};

(window as any).VSCOCaptured = {
  init,
};

export default init;
