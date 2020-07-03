// Colours
const black = "#000000";
const white = "#ffffff";
const pink = "#ff0088";
const purple = "#dd00ee";

const primary = pink;
const secondary = purple;

const grey_100 = "#f7fafc";
const grey_200 = "#edf2f7";
const grey_300 = "#e2e8f0";
const grey_400 = "#cbd5e0";
const grey_500 = "#a0aec0";
const grey_600 = "#718096";
const grey_700 = "#4a5568";
const grey_800 = "#2d3748";
const grey_900 = "#1a202c";

const blackTransparent = (transparency = "0.5") =>
  `rgba(0, 0, 0, ${transparency})`;

const whiteTransparent = (transparency = "0.5") =>
  `rgba(255, 255, 255, ${transparency})`;

// Gradients
const primaryGradient = `linear-gradient(90deg, ${primary}, ${secondary});`;
const multiLinearGradient =
  "linear-gradient(90deg, rgba(69,197,196,1) 0%, rgba(122,117,157,1) 25%, rgba(225,93,104,1) 50%, rgba(244,139,94,1) 75%, rgba(255,209,87,1) 100%)";

// Breakpoints
const screen_xs_max = "575px";
const screen_sm_min = "576px";
const screen_sm_max = "767px";
const screen_md_min = "768px";
const screen_md_max = "991px";
const screen_lg_min = "992px";
const screen_lg_max = "1199px";
const screen_xl_min = "1200px";

export default {
  // Export Colours
  black,
  white,
  pink,
  purple,

  primary,
  secondary,

  grey_100,
  grey_200,
  grey_300,
  grey_400,
  grey_500,
  grey_600,
  grey_700,
  grey_800,
  grey_900,

  blackTransparent,
  whiteTransparent,

  // Export Gradients
  primaryGradient,
  multiLinearGradient,

  // Export Breakpoints
  screen_xs_max,
  screen_sm_min,
  screen_sm_max,
  screen_md_min,
  screen_md_max,
  screen_lg_min,
  screen_lg_max,
  screen_xl_min,
};
