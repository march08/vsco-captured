export const URL_PARAMS_OLD = [
  "username",

  "most_creative_day_of_week",
  "most_creative_month",

  // presets
  "preset_1",
  "preset_1_used",
  "preset_2",
  "preset_2_used",
  "preset_3",
  "preset_3_used",

  "presets_used",
  // tools
  "tool_1",
  "tool_1_used",
  "tool_2",
  "tool_2_used",
  "tool_3",
  "tool_3_used",
  // images posted
  "images_posted",
  // favourites
  "number_of_favorites",
  // reposts
  "number_of_reposts",

  // spaces
  "spaces_created",
  "spaces_joined",
  // videos
  "videos_posted",
  // webstudio
  "studio_edits",
  // fav image id
  "favorite_photo_img",
  // follows
  "creators_followed",
  // messages
  "messages",
  "number_of_montages",
  "number_of_captures",
] as const;

export const URL_PARAMS = [
  "username",
  // creative period
  "snapshot23_most_creative_month",
  "snapshot23_most_creative_day_of_week",
  // presets
  "snapshot23_filter_1",
  "snapshot23_filter_2",
  "snapshot23_filter_3",
  "snapshot23_edits_with_this_filter_1",
  "snapshot23_edits_with_this_filter_2",
  "snapshot23_edits_with_this_filter_3",

  "snapshot23_filter_used",
  // tools

  "snapshot23_tool_1",
  "snapshot23_tool_2",
  "snapshot23_tool_3",
  "snapshot23_tool_edits_1",
  "snapshot23_tool_edits_2",
  "snapshot23_tool_edits_3",
  // images posted
  "snapshot23_n_images",
  // favourites
  "snapshot23_favorites",
  // reposts
  "snapshot23_reposts",
  // spaces
  "snapshot23_spaces_joined",
  "snapshot23_spaces_created_count",
  // videos
  "snapshot23_n_videos",
  // webstudio
  "snapshot23_webstudio",
  // fav image id
  "snapshot23_media_id",
  // follows
  "snapshot23_follows",
  // messages
  "snapshot23_messages",
  "snapshot23_site_id",

  "snapshot23_n_montages",
  "snapshot23_n_captures",
] as const;

export type UrlParam = (typeof URL_PARAMS)[number];
