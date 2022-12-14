import { UrlParam, URL_PARAMS } from "./const/URL_PARAMS";
import { getValidatedParamValue } from "./validateAndFormatParamValue";

function utf8_to_b64(str: string) {
  return window.btoa(unescape(encodeURIComponent(str)));
}

function b64_to_utf8(str: string) {
  return decodeURIComponent(escape(window.atob(str)));
}

export const getSearchParamValues = () => {
  const allSearchParams = new URLSearchParams(window.location.search);

  const isEncoded = allSearchParams.get("capture_data");

  if (isEncoded) {
    try {
      const res = JSON.parse(b64_to_utf8(isEncoded)) as Partial<{
        [K in UrlParam]: string;
      }>;
      return res;
    } catch {
      return {};
    }
  }

  const result = URL_PARAMS.reduce((res, key) => {
    const value = allSearchParams.get(key);
    allSearchParams.delete(key);
    const validated = getValidatedParamValue(key, value);
    if (validated !== null) {
      return {
        ...res,
        [key]: validated,
      };
    }

    return res;
  }, {} as Partial<{ [K in UrlParam]: string }>);

  try {
    const encoded = utf8_to_b64(JSON.stringify(result));
    allSearchParams.set("capture_data", encoded);
    window.location.search = allSearchParams.toString();
  } catch {}

  return result;
};

export type SearchParamKeyValue = ReturnType<typeof getSearchParamValues>;
