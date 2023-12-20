import { UrlParam, URL_PARAMS } from "./const/URL_PARAMS";
import { createSimpleLogger } from "./logger";
import { getValidatedParamValue } from "./validateAndFormatParamValue";

function utf8_to_b64(str: string) {
  return window.btoa(unescape(encodeURIComponent(str)));
}

function b64_to_utf8(str: string) {
  return decodeURIComponent(escape(window.atob(str)));
}

type MappedResult = Record<UrlParam, string>;

export const getSearchParamValues = (shouldEncode = true) => {
  const logger = createSimpleLogger("PARSE SEARCH PARAMS");
  const allSearchParams = new URLSearchParams(window.location.search);

  logger.log("raw", window.location.search);

  const isEncoded = allSearchParams.get("capture_data");

  if (isEncoded) {
    logger.log("Parsing encoded data");
    try {
      const res = JSON.parse(b64_to_utf8(isEncoded)) as Partial<{
        [K in UrlParam]: string;
      }>;

      const parsed = Object.entries(res).reduce((res, [key, value]) => {
        const validated = getValidatedParamValue(key as any, value);
        if (validated) {
          return {
            ...res,
            [key]: validated,
          };
        }
        return res;
      }, {} as Partial<MappedResult>);
      logger.log("Parsed values", parsed);
      return parsed;
    } catch {
      return {};
    }
  }
  logger.log("Parsing fresh data");
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
  }, {} as Partial<MappedResult>);

  if (shouldEncode && Object.keys(result).length > 0) {
    try {
      const encoded = utf8_to_b64(JSON.stringify(result));
      allSearchParams.set("capture_data", encoded);
      window.location.search = allSearchParams.toString();
    } catch {}
  }

  logger.log("Parsed values", result);

  return result;
};

export type SearchParamKeyValue = ReturnType<typeof getSearchParamValues>;
