import { UrlParam, URL_PARAMS } from "./const/URL_PARAMS";
import { getValidatedParamValue } from "./validateAndFormatParamValue";

export const getSearchParamValues = () => {
  const allSearchParams = new URLSearchParams(window.location.search);

  const result = URL_PARAMS.reduce((res, key) => {
    const value = allSearchParams.get(key);
    const validated = getValidatedParamValue(key, value);
    if (validated !== null) {
      return {
        ...res,
        [key]: validated,
      };
    }

    return res;
  }, {} as Partial<{ [K in UrlParam]: string }>);

  return result;
};

export type SearchParamKeyValue = ReturnType<typeof getSearchParamValues>;
