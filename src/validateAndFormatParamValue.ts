import { PRESET_KEYS } from "./const/PRESETS";
import { TOOLS } from "./const/TOOLS";
import type { UrlParam } from "./const/URL_PARAMS";

const formatInteger = (value: string) => {
  const parsedNumber = parseInt(value);
  if (parsedNumber < 0) {
    return null;
  }

  const res = Intl.NumberFormat().format(parsedNumber);
  return res;
};

const weekdays = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];
const months = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
];

const getPresetFormattedValue = (val: string) => {
  return PRESET_KEYS.includes(val.toLowerCase()) ? val : null;
};
const getToolsFormattedValue = (val: string) => {
  return TOOLS.includes(val.toLowerCase() as any) ? val : null;
};

export const getValidatedParamValue = (
  param: UrlParam,
  value?: string
): string | null => {
  if (!value) {
    return null;
  }
  switch (param) {
    case "images_posted":
      return formatInteger(value);
    case "longest_session":
      return formatInteger(value);
    case "most_creative_day_of_week":
      return weekdays.includes(value.toLocaleLowerCase())
        ? value.toUpperCase()
        : null;
    case "most_creative_month":
      return months.includes(value.toLowerCase()) ? value.toUpperCase() : null;
    case "number_of_favorites":
      return formatInteger(value);
    case "number_of_reposts":
      return formatInteger(value);
    case "preset_1":
      return getPresetFormattedValue(value);
    case "preset_2":
      return getPresetFormattedValue(value);
    case "preset_3":
      return getPresetFormattedValue(value);
    case "preset_1_used":
      return formatInteger(value);
    case "preset_2_used":
      return formatInteger(value);
    case "preset_3_used":
      return formatInteger(value);
    case "spaces_created":
      return formatInteger(value);
    case "spaces_joined":
      return formatInteger(value);
    case "tool_1":
      return getToolsFormattedValue(value);
    case "tool_1_used":
      return formatInteger(value);
    case "tool_2":
      return getToolsFormattedValue(value);
    case "tool_2_used":
      return formatInteger(value);
    case "tool_3":
      return getToolsFormattedValue(value);
    case "tool_3_used":
      return formatInteger(value);
    default:
      return value;
  }
};
