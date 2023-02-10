import {
  createGlobalThemeContract,
  createGlobalTheme,
} from "@vanilla-extract/css";
import { rgb } from "./tokens.css";

export const themeVars = createGlobalThemeContract({
  color: {
    white: "color-white",
    black: "color-black",
    yellow: "color-yellow",
    warmRed: "color-warmRed",
    blue: "color-blue",
    gray: "color-gray",
    cream: "color-cream",
  },
});

createGlobalTheme(":root", themeVars, {
  color: {
    white: `rgb${rgb.white}`,
    black: `rgb${rgb.black}`,
    yellow: `rgb${rgb.yellow}`,
    warmRed: `rgb${rgb.warmRed}`,
    blue: `rgb${rgb.blue}`,
    gray: `rgb${rgb.gray}`,
    cream: `rgb${rgb.cream}`,
  },
});
