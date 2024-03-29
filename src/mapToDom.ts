import { getPresetConfigByKey } from "./const/PRESETS_2023";
import { displayValueTools, toolsImageSources } from "./const/TOOLS";
import type { SearchParamKeyValue } from "./getParamValues";
import { hideUsernameTab, replaceInnerText } from "./utils";

const removeFromDomById = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.parentNode.removeChild(el);
  }
};

const replaceTextOrHide = (elementTextId: string, value: string) => {
  if (value) {
    replaceInnerText(elementTextId, value);
  } else {
    removeFromDomById(elementTextId);
  }
};

const replaceTextOrHideContainer = (
  containerId: string,
  elementTextId: string,
  value: string
) => {
  if (value) {
    replaceInnerText(elementTextId, value);
  } else {
    removeFromDomById(containerId);
  }
};

const addPresetItem = (presetCode: string, usedCount: string) => {
  try {
    const presetItem = document.getElementById("preset-item");
    const presetConfig = getPresetConfigByKey(presetCode);
    const codeEl = presetItem.querySelector(
      ".cap__us-filter-code"
    ) as HTMLDivElement;
    if (codeEl) {
      codeEl.style.background = presetConfig.background;
      codeEl.style.color = presetConfig.color;
      if (presetConfig.borderColor) {
        codeEl.style.boxShadow = `inset 0px 2px 0px 0px ${presetConfig.borderColor}, inset 0px -2px 0px 0px ${presetConfig.borderColor}`;
      } else {
        codeEl.style.boxShadow = "none";
      }
    }
    const nextInnerHtml = presetItem.innerHTML
      .replace("AL1", presetCode)
      .replace("Fluorescent Soften", presetConfig.title)
      .replace("X edits", usedCount + (usedCount === "1" ? " edit" : " edits"));

    presetItem.getElementsByClassName;
    const clonedNode = presetItem.cloneNode(true);
    (clonedNode as any).id = "";
    (clonedNode as any).innerHTML = nextInnerHtml;

    presetItem.parentElement.appendChild(clonedNode);
  } catch (e) {}
};

const addToolItem = (tool: string, usedCount: string) => {
  try {
    const presetItem = document.getElementById("card-tools-item");

    const imgSrc = toolsImageSources[tool.toLowerCase()];
    if (imgSrc) {
      const imgEl = presetItem.querySelector("img");
      imgEl.id = "";
      imgEl.style.filter =
        "invert(85%) sepia(100%) saturate(733%) hue-rotate(0deg) brightness(80%) contrast(100%)";
      if (imgEl) {
        imgEl.src = "";
      }
    }

    const nextInnerHtml = presetItem.innerHTML
      .replace("Grain", displayValueTools[tool] || tool)
      .replace("X edits", usedCount + (usedCount === "1" ? " edit" : " edits"))
      .replace('src=""', `src="${imgSrc}"`);

    presetItem.getElementsByClassName;
    const clonedNode = presetItem.cloneNode(true);
    (clonedNode as any).id = "";
    (clonedNode as any).innerHTML = nextInnerHtml;
    presetItem.parentElement.appendChild(clonedNode);
  } catch (e) {}
};

export const mapToDom = (data: SearchParamKeyValue) => {
  /**
   * 2 - Most used presets
   * presets
   */
  if (data.snapshot23_edits_with_this_filter_1 && data.snapshot23_filter_1) {
    addPresetItem(
      data.snapshot23_filter_1,
      data.snapshot23_edits_with_this_filter_1
    );
  }
  if (data.snapshot23_edits_with_this_filter_2 && data.snapshot23_filter_2) {
    addPresetItem(
      data.snapshot23_filter_2,
      data.snapshot23_edits_with_this_filter_2
    );
  }
  if (data.snapshot23_edits_with_this_filter_3 && data.snapshot23_filter_3) {
    addPresetItem(
      data.snapshot23_filter_3,
      data.snapshot23_edits_with_this_filter_3
    );
  }
  // presets
  const presetItem = document.getElementById("preset-item");
  const presetParent = presetItem.parentElement;
  presetParent.removeChild(presetItem);
  if (presetParent.childElementCount === 0) {
    removeFromDomById("card-preset");
  }

  /**
   * 3 - most loved tools
   * tools
   */
  if (data.snapshot23_tool_1 && data.snapshot23_tool_edits_1) {
    addToolItem(data.snapshot23_tool_1, data.snapshot23_tool_edits_1);
  }
  if (data.snapshot23_tool_2 && data.snapshot23_tool_edits_2) {
    addToolItem(data.snapshot23_tool_2, data.snapshot23_tool_edits_2);
  }
  if (data.snapshot23_tool_3 && data.snapshot23_tool_edits_3) {
    addToolItem(data.snapshot23_tool_3, data.snapshot23_tool_edits_3);
  }
  // tools
  const toolItem = document.getElementById("card-tools-item");
  const toolParent = toolItem.parentElement;
  toolParent.removeChild(toolItem);
  if (toolParent.childElementCount === 0) {
    removeFromDomById("card-tools");
  }

  /**
   * 4 - spaces
   */
  if (data.snapshot23_spaces_joined || data.snapshot23_spaces_created_count) {
    replaceTextOrHide(
      "space-value-created",
      data.snapshot23_spaces_created_count
        ? `You created ${data.snapshot23_spaces_created_count} ${
            data.snapshot23_spaces_created_count === "1" ? "space" : "spaces"
          }`
        : null
    );
    replaceTextOrHide(
      "space-value-joined",
      data.snapshot23_spaces_joined
        ? `You joined ${data.snapshot23_spaces_joined} ${
            data.snapshot23_spaces_joined === "1" ? "space" : "spaces"
          }`
        : null
    );
  } else {
    removeFromDomById("card-spaces");
  }

  /**
   * 5 - studio edits
   */
  replaceTextOrHideContainer(
    "card-studio",
    "studio-value",
    !data.snapshot23_webstudio
      ? null
      : data.snapshot23_webstudio === "1"
        ? "1 STUDIO EDIT ON DESKTOP"
        : `${data.snapshot23_webstudio} STUDIO EDITS ON DESKTOP`
  );

  /**
   * 6 - sharing stats
   */
  if (!data.snapshot23_favorites && !data.snapshot23_reposts) {
    removeFromDomById("card-images-stats");
  } else {
    replaceTextOrHideContainer(
      "images-stats-favorite",
      "images-stats-favorite-value",
      data.snapshot23_favorites
    );
    replaceTextOrHideContainer(
      "images-stats-reposted",
      "images-stats-reposted-value",
      data.snapshot23_reposts
    );
  }

  /**
   * 7 - messages
   */

  replaceTextOrHideContainer(
    "card-messages",
    "messages-value",
    !data.snapshot23_messages
      ? null
      : data.snapshot23_messages === "1"
        ? "SENT 1 MESSAGE"
        : `SENT ${data.snapshot23_messages} MESSAGES`
  );

  /**
   * 8 - images posted
   */
  replaceTextOrHideContainer(
    "card-posted-images",
    "posted-images-value",
    data.snapshot23_n_images
  );

  /**
   * 9 - creators followed
   */

  replaceTextOrHideContainer(
    "card-creators",
    "creators-value",
    !data.snapshot23_follows
      ? null
      : data.snapshot23_follows === "1"
        ? "1 CREATOR"
        : `${data.snapshot23_follows} CREATORS`
  );

  /**
   * 10 - videos edited
   */
  replaceTextOrHideContainer(
    "card-posted-videos",
    "posted-videos-value",
    data.snapshot23_n_videos
  );

  /**
   * 11 - creative month
   */
  replaceTextOrHideContainer(
    "card-creative-month",
    "creative-month-value",
    data.snapshot23_most_creative_month
  );

  /**
   * 12 - montages captures
   */

  if (!data.snapshot23_n_montages && !data.snapshot23_n_captures) {
    removeFromDomById("card-secondary-stats");
  } else {
    replaceTextOrHideContainer(
      "montages-stats-created",
      "montages-stats-created-value",
      data.snapshot23_n_montages
    );
    replaceTextOrHideContainer(
      "photos-stats-captured",
      "photos-stats-captured-value",
      data.snapshot23_n_captures
    );
  }

  /**
   * 13 - most active day
   */
  replaceTextOrHideContainer(
    "card-active-day",
    "active-day-value",
    data.snapshot23_most_creative_day_of_week
  );

  /**
   * 14 - presets used
   */

  replaceTextOrHideContainer(
    "card-presets-used",
    "presets-used-value",
    data.snapshot23_filter_used
  );

  // session length
  // replaceTextOrHideContainer(
  //   "card-longest-session",
  //   "longest-session-value",
  //   data.longest_session
  // );

  const swiperWrapperCardsEl = document.querySelector(".swiper-wrapper");
  /**
   * 1 - favourite photo image
   */

  if (data.snapshot23_media_responsive_url) {
    const imageEl = document.getElementById("favorite-photo-img");

    // const src = vscoImageResponsiveUrltoS3Path(
    //   data.snapshot23_media_responsive_url
    // );
    const src = data.snapshot23_media_responsive_url;

    imageEl.parentElement.style.background = "#000";
    imageEl.style.transition = "1s all";
    imageEl.style.opacity = "0";

    imageEl.setAttribute("sizes", "");
    imageEl.setAttribute("srcset", "");
    imageEl.setAttribute("src", src);
    imageEl.onload = (e, ...rest) => {
      imageEl.style.opacity = "1";
    };
  } else {
    removeFromDomById("card-favorite-photo");
  }

  if (swiperWrapperCardsEl.childElementCount === 0) {
    hideUsernameTab();
    return;
  }

  // username
  replaceInnerText("tab-username", data.username);
  replaceInnerText("username", data.username);
};
