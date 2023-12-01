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
    case "snapshot23_edits_with_this_filter_1":
    case "snapshot23_edits_with_this_filter_2":
    case "snapshot23_edits_with_this_filter_3":
    case "snapshot23_tool_edits_1":
    case "snapshot23_tool_edits_2":
    case "snapshot23_tool_edits_3":
    case "snapshot23_favorites":
    case "snapshot23_filter_used":
    case "snapshot23_follows":
    case "snapshot23_messages":
    case "snapshot23_n_images":
    case "snapshot23_n_videos":
    case "snapshot23_reposts":
    case "snapshot23_spaces_created_count":
    case "snapshot23_spaces_joined":
    case "snapshot23_webstudio":
    case "snapshot23_n_captures":
    case "snapshot23_n_montages":
      return formatInteger(value);

    case "snapshot23_most_creative_day_of_week":
      return weekdays.includes(value.toLocaleLowerCase())
        ? value.toUpperCase()
        : null;
    case "snapshot23_most_creative_month":
      return months.includes(value.toLowerCase()) ? value.toUpperCase() : null;
    case "snapshot23_filter_1":
    case "snapshot23_filter_2":
    case "snapshot23_filter_3":
      return getPresetFormattedValue(value);

    case "snapshot23_tool_1":
    case "snapshot23_tool_2":
    case "snapshot23_tool_3":
      return getToolsFormattedValue(value);
    default:
      return value;
  }
};
