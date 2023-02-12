import { sprinkles } from "@styles/sprinkles.css";
import { globalStyle, style } from "@vanilla-extract/css";
import {
  fontSize,
  lineHeight,
  media,
  radius,
  rgb,
  spacing,
} from "../tokens.css";

export const styles = {
  Container: style({
    position: "relative",
    background: `rgb(${rgb.black})`,
    backgroundImage: `url(/public/bg_hyoutan.svg)`,
    backgroundRepeat: "repeat",
    backgroundSize: "20%",
    backgroundAttachment: "fixed",
    display: "grid",
    justifyContent: "center",
    justifyItems: "center",
    gap: spacing.xxl,
    padding: spacing.sm,
    "@media": {
      [media.lg]: {
        backgroundSize: "8%",
      },
    },
  }),
  Header: style([
    {
      background: `rgb(${rgb.white})`,
      borderRadius: radius.lg,
      width: "100%",
      height: "97vh",
      paddingBottom: spacing.xl,
      display: "grid",
      gridTemplateRows: "0.9fr 0.6fr",
      justifyItems: "center",
      boxShadow: `0px 0px 20px 10px rgb(${rgb.black},0.45) inset`,
      "@media": {
        [media.lg]: {
          height: "initial",
          position: "fixed",
          top: spacing.sm,
          left: spacing.sm,
          width: "28%",
        },
      },
    },
  ]),
  Footer: style({
    overflow: "hidden",
    width: "100%",
    "@media": {
      [media.lg]: {
        position: "fixed",
        top: spacing.sm,
        right: spacing.sm,
        width: "28%",
      },
    },
  }),
  FooterSection: style([
    {
      background: `rgb(${rgb.white})`,
      borderRadius: radius.lg,
    },
    sprinkles({
      paddingX: "xl",
      paddingY: "md",
    }),
  ]),
  Access: style({
    display: "grid",
    gridTemplateColumns: "1fr",
    rowGap: spacing.md,
  }),
  AccessShopName: style({
    fontSize: fontSize.xl,
    fontWeight: "700",
    lineHeight: lineHeight.relaxed,
  }),
  LinkText: style({
    color: `rgb(${rgb.warmRed})`,
    textDecoration: "underline",
    transition: "all .3s ease",
    selectors: {
      "&:hover": {
        color: `rgb(${rgb.blue})`,
      },
    },
  }),
};

globalStyle(`${styles.Access} h2`, {
  fontSize: fontSize.xxl,
  fontWeight: "700",
  borderBottom: `3px solid rgb(${rgb.black})`,
  lineHeight: lineHeight.snug,
});

globalStyle(`${styles.Access} ul`, {
  listStyleType: "disc",
  paddingLeft: spacing.xxl,
});
