export const TOOLS = [
  "white balance",
  "exposure",
  "grain",
  "shadows",
  "border",
  "text",
  "blur",
  "trim",
  "remove",
  "vignette",
  "volume",
  "magic wand",
  "skin",
  "hsl",
  "highlights",
  "clarity",
  "crop",
  "straighten",
  "saturation",
  "speed",
  "contrast",
  "fade",
  "reverse",
  "sharpen",
  "splittone",
  "dodge and burn",
  "split tone",
  "tone",
] as const;

type Values = {
  [K in typeof TOOLS[number]]: string;
};

export const displayValueTools: Values = {
  "white balance": "White Balance",
  exposure: "Exposure",
  grain: "Grain",
  shadows: "Shadows",
  border: "Border",
  text: "Text",
  blur: "Blur",
  trim: "Trim",
  remove: "Remove",
  vignette: "Vignette",
  volume: "Volume",
  "magic wand": "Magic Wand",
  skin: "Skin",
  hsl: "HSL",
  highlights: "Highlights",
  clarity: "Clarity",
  crop: "Crop",
  straighten: "Straighten",
  saturation: "Saturation",
  speed: "Speed",
  contrast: "Contrast",
  fade: "Fade",
  reverse: "Reverse",
  sharpen: "Sharpen",
  "dodge and burn": "Dodge and Burn",
  "split tone": "Split tone",
  splittone: "Split tone",
  tone: "Tone",
};

export const toolsImageSources: Values = {
  trim: "https://uploads-ssl.webflow.com/624de812dd74b622858823f2/639a513868868bcd3bf76def_Trim.svg",
  crop: "https://uploads-ssl.webflow.com/624de812dd74b622858823f2/638f7fa059e09c4d668a1cb1_tool-adjust.svg",
  blur: "https://uploads-ssl.webflow.com/624de812dd74b622858823f2/638f7fa0a2fce28affca5877_tool-blur.svg",
  border:
    "https://uploads-ssl.webflow.com/624de812dd74b622858823f2/638f7fa0b274e6059f087ad0_tool-borders.svg",
  contrast:
    "https://uploads-ssl.webflow.com/624de812dd74b622858823f2/638f7fa0ff8b2545cdbdb519_tool-contrast.svg",
  clarity:
    "https://uploads-ssl.webflow.com/624de812dd74b622858823f2/638f7fa088317efa9e718c90_tool-clarity.svg",
  "dodge and burn":
    "https://uploads-ssl.webflow.com/624de812dd74b622858823f2/638e5c7afdd5338120c24c2d_dodge.svg",
  exposure:
    "https://uploads-ssl.webflow.com/624de812dd74b622858823f2/624eb6ecf5df5b29cff4ca81_icon-exposure.svg",
  fade: "https://uploads-ssl.webflow.com/624de812dd74b622858823f2/638f7fa0d9d1ba0815a8b8fd_tool-fade.svg",
  grain:
    "https://uploads-ssl.webflow.com/624de812dd74b622858823f2/638e5c7a8ec38dc5506578fe_grain.svg",
  hsl: "https://uploads-ssl.webflow.com/624de812dd74b622858823f2/638e5c7a370461b0bd8706e3_hsl.svg",
  remove:
    "https://uploads-ssl.webflow.com/624de812dd74b622858823f2/638f7fa0a8b011fd01d5a7e3_tool-remove.svg",
  saturation:
    "https://uploads-ssl.webflow.com/624de812dd74b622858823f2/638f7fa10944d9b10e068793_tool-saturation.svg",
  sharpen:
    "https://uploads-ssl.webflow.com/624de812dd74b622858823f2/638f7fa174c6be69bf821d21_tool-sharpen.svg",
  skin: "https://uploads-ssl.webflow.com/624de812dd74b622858823f2/638f7fa176c6302a157f0e2d_tool-skintone.svg",
  splittone:
    "https://uploads-ssl.webflow.com/624de812dd74b622858823f2/638f7fa1292e661ce1b3d4ff_tool-splittone.svg",
  "split tone":
    "https://uploads-ssl.webflow.com/624de812dd74b622858823f2/638f7fa1292e661ce1b3d4ff_tool-splittone.svg",
  text: "https://uploads-ssl.webflow.com/624de812dd74b622858823f2/638f7fa1292ae99a440bebfd_tool-text.svg",
  vignette:
    "https://uploads-ssl.webflow.com/624de812dd74b622858823f2/638f7fa12c160c2784776064_tool-vignette.svg",
  "white balance":
    "https://uploads-ssl.webflow.com/624de812dd74b622858823f2/638f7fa1d909d4eb6b58fc99_tool-whitebalance.svg",

  tone: "https://uploads-ssl.webflow.com/624de812dd74b622858823f2/638f7fa15f50a12dcd601866_tool-tone.svg",

  shadows:
    "https://uploads-ssl.webflow.com/624de812dd74b622858823f2/638f7fa15f50a12dcd601866_tool-tone.svg",
  highlights:
    "https://uploads-ssl.webflow.com/624de812dd74b622858823f2/638f7fa15f50a12dcd601866_tool-tone.svg",
  speed:
    "https://uploads-ssl.webflow.com/624de812dd74b622858823f2/639a55a6abb53c47dda6a4e5_Speed.svg",
  reverse:
    "https://uploads-ssl.webflow.com/624de812dd74b622858823f2/639a55a6545ab2e986731b98_Reverse.svg",
  volume:
    "https://uploads-ssl.webflow.com/624de812dd74b622858823f2/639a55a668e2d006e622e2aa_Volume.svg",
  "magic wand":
    "https://uploads-ssl.webflow.com/624de812dd74b622858823f2/639a55a6fd9c2587718cb89f_Magic%20Wand.svg",
  straighten:
    "https://uploads-ssl.webflow.com/624de812dd74b622858823f2/639a56301f205c6c2c4114f5_Straighten.svg",
};
