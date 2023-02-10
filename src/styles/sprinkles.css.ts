import {
  defineProperties,
  createSprinkles,
  createMapValueFn,
  createNormalizeValueFn,
  ConditionalValue,
} from "@vanilla-extract/sprinkles";

import { themeVars } from "./themes.css";
import { media, tokens } from "./tokens.css";

const space = tokens.spacing;
export type Space = keyof typeof space;
const radius = tokens.radius;
export type Radius = keyof typeof radius;
const fontSize = tokens.fontSize;
export type FontSize = keyof typeof fontSize;
const fontWeight = tokens.fontWeight;
export type FontWeight = keyof typeof fontWeight;
const letterSpacing = tokens.letterSpacing;
export type LetterSpacing = keyof typeof letterSpacing;
const lineHeight = tokens.lineHeight;
export type LineHeight = keyof typeof lineHeight;
const maxWidth = tokens.contentWidth;
export type MaxWidth = keyof typeof maxWidth;
const font = tokens.font;
export type Font = keyof typeof font;
const color = themeVars.color;
export type Color = keyof typeof color;

const responsiveProperties = defineProperties({
  conditions: {
    initial: {},
    sm: { "@media": media.sm },
    md: { "@media": media.md },
    lg: { "@media": media.lg },
    xl: { "@media": media.xl },
    "2xl": { "@media": media["2xl"] },
  },
  defaultCondition: "initial",
  properties: {
    position: ["relative", "absolute"],
    display: [
      "none",
      "flex",
      "inline-flex",
      "grid",
      "block",
      "inline",
      "inline-block",
    ],
    flexDirection: ["row", "row-reverse", "column"],
    justifyContent: [
      "stretch",
      "flex-start",
      "center",
      "flex-end",
      "space-around",
      "space-between",
    ],
    alignItems: ["stretch", "flex-start", "center", "flex-end", "baseline"],
    alignContent: ["baseline"],
    placeItems: ["center"],
    placeContent: ["center"],
    paddingTop: space,
    paddingBottom: space,
    paddingLeft: space,
    paddingRight: space,
    marginTop: space,
    marginRight: space,
    marginBottom: space,
    marginLeft: space,
    gap: space,
    rowGap: space,
    columnGap: space,
    aspectRatio: ["1/1", "4/3"],
    maxWidth: maxWidth,
    width: space,
    height: space,
    fontFamily: font,
    fontSize,
    textAlign: ["left", "center", "right"],
  },
  shorthands: {
    padding: ["paddingTop", "paddingBottom", "paddingLeft", "paddingRight"],
    paddingX: ["paddingLeft", "paddingRight"],
    paddingY: ["paddingTop", "paddingBottom"],
    placeItems: ["justifyContent", "alignItems"],
    marginX: ["marginLeft", "marginRight"],
    marginY: ["marginTop", "marginBottom"],
  },
});

export const mapResponsiveValue = createMapValueFn(responsiveProperties);
export const normalizeResponsiveValue =
  createNormalizeValueFn(responsiveProperties);

export type ResponsiveValue<Value extends string | number> = ConditionalValue<
  typeof responsiveProperties,
  Value
>;

const unresponsiveProperties = defineProperties({
  properties: {
    color: themeVars.color,
    backgroundColor: themeVars.color,
    pointerEvents: ["auto", "none"],
    borderColor: themeVars.color,
    borderRadius: radius,
    overflow: ["hidden"],
    flexShrink: [0],
    flexGrow: [0, 1],
    fontWeight,
    letterSpacing,
    lineHeight,
  },
});

export const sprinkles = createSprinkles(
  responsiveProperties,
  unresponsiveProperties
);

export type Sprinkles = Parameters<typeof sprinkles>[0];
