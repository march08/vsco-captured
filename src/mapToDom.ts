import { getPresetConfigByKey } from "./const/PRESETS";
import { displayValueTools, toolsImageSources } from "./const/TOOLS";
import type { SearchParamKeyValue } from "./getParamValues";

const removeFromDomById = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.parentNode.removeChild(el);
  }
};

const replaceInnerText = (id: string, value: string) => {
  const el = document.getElementById(id);
  try {
    el.innerText = value;
  } catch (e) {}
};

const replaceTextOrHide = (
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
    const codeEl = presetItem.querySelector(".cap__us-filter-code");
    if (codeEl) {
      (codeEl as any).style.background = presetConfig.background;
      (codeEl as any).style.color = presetConfig.color;
    }
    const nextInnerHtml = presetItem.innerHTML
      .replace("AL1", presetCode)
      .replace("Fluorescent Soften", presetConfig.title)
      .replace("22", usedCount);

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
        imgEl.src = "___IMG_SRC___";
      }
    }

    const nextInnerHtml = presetItem.innerHTML
      .replace("Grain", displayValueTools[tool] || tool)
      .replace("58", usedCount)
      .replace("___IMG_SRC___", imgSrc);

    presetItem.getElementsByClassName;
    const clonedNode = presetItem.cloneNode(true);
    (clonedNode as any).id = "";
    (clonedNode as any).innerHTML = nextInnerHtml;
    presetItem.parentElement.appendChild(clonedNode);
  } catch (e) {}
};

const hideTab = () => {
  const tabUser = document.getElementById("tab-user");
  if (tabUser) {
    tabUser.style.display = "none";
  }
};

export const mapToDom = (data: SearchParamKeyValue) => {
  if (!data.username) {
    hideTab();
    return;
  }

  // images posted
  replaceTextOrHide(
    "card-posted-images",
    "posted-images-value",
    data.images_posted
  );
  // most active day
  replaceTextOrHide(
    "card-active-day",
    "active-day-value",
    data.most_creative_day_of_week
  );
  // most active month
  replaceTextOrHide(
    "card-creative-month",
    "active-month-value",
    data.most_creative_month
  );
  // session length
  replaceTextOrHide(
    "card-longest-session",
    "longest-session-value",
    data.longest_session
  );

  // sharing stats
  if (!data.number_of_favorites && !data.number_of_reposts) {
    removeFromDomById("card-images-stats");
  } else {
    replaceTextOrHide(
      "images-stats-favorite",
      "images-stats-favorite-value",
      data.number_of_favorites
    );
    replaceTextOrHide(
      "images-stats-reposted",
      "images-stats-reposted-value",
      data.number_of_reposts
    );
  }

  // spaces
  if (data.spaces_joined || data.spaces_created) {
    const rootEl = document.getElementById("space-value");
    if (rootEl) {
      if (data.spaces_created) {
        const nextNode = rootEl.cloneNode(true);
        nextNode.textContent = data.spaces_created + " SPACES CREATED";
        (nextNode as any).id = "";
        rootEl.parentElement.appendChild(nextNode);
      }
      if (data.spaces_joined) {
        const nextNode = rootEl.cloneNode(true);
        (nextNode as any).id = "";
        nextNode.textContent = data.spaces_joined + " SPACES JOINED";
        rootEl.parentElement.appendChild(nextNode);
      }
      rootEl.parentElement.removeChild(rootEl);
    }
  } else {
    removeFromDomById("card-spaces");
  }

  /**
   * presets
   */
  if (data.preset_1 && data.preset_1_used) {
    addPresetItem(data.preset_1, data.preset_1_used);
  }
  if (data.preset_2 && data.preset_2_used) {
    addPresetItem(data.preset_2, data.preset_2_used);
  }
  if (data.preset_3 && data.preset_3_used) {
    addPresetItem(data.preset_3, data.preset_3_used);
  }
  // presets
  const presetItem = document.getElementById("preset-item");
  const presetParent = presetItem.parentElement;
  presetParent.removeChild(presetItem);
  if (presetParent.childElementCount === 0) {
    removeFromDomById("card-preset");
  }

  /**
   * tools
   */
  if (data.tool_1 && data.tool_1_used) {
    addToolItem(data.tool_1, data.tool_1_used);
  }
  if (data.tool_2 && data.tool_2_used) {
    addToolItem(data.tool_2, data.tool_2_used);
  }
  if (data.tool_3 && data.tool_3_used) {
    addToolItem(data.tool_3, data.tool_3_used);
  }
  // presets
  const toolItem = document.getElementById("card-tools-item");
  const toolParent = toolItem.parentElement;
  toolParent.removeChild(toolItem);
  if (toolParent.childElementCount === 0) {
    removeFromDomById("card-tools");
  }

  const swiperWrapperCardsEl = document.querySelector(".swiper-wrapper");

  if (swiperWrapperCardsEl.childElementCount === 0) {
    hideTab();
  }

  // username
  replaceInnerText("tab-username", data.username);
  replaceInnerText("username", data.username);
};
