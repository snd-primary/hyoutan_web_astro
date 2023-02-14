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
    padding: spacing.md,
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
      height: "94vh",
      paddingBottom: spacing.xl,
      display: "grid",
      rowGap: spacing.md,
      gridTemplateRows: "0.9fr 0.6fr",
      justifyItems: "center",
      boxShadow: `0px 0px 15px 8px rgb(${rgb.black},0.3) inset`,
      "@media": {
        [media.lg]: {
          height: "initial",
          position: "fixed",
          top: spacing.md,
          left: spacing.md,
          width: "28%",
        },
      },
    },
  ]),
  Footer: style({
    overflow: "hidden",
    width: "100%",
    display: "grid",
    gridAutoColumns: "1fr",
    gridTemplateRows: "1fr auto",
    gap: spacing.xxl,
    "@media": {
      [media.lg]: {
        position: "fixed",
        top: spacing.md,
        right: spacing.md,
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
  Baners: style({
    display: "grid",
    gridTemplateColumns: "1fr 0.8fr",
    gap: spacing.sm,
  }),
  FooterSnsLogos: style({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: spacing.md,
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
globalStyle(`${styles.FooterSnsLogos} svg`, {
  width: "35px",
  height: "35px",
  transition: "all ease 0.3s",
});
// globalStyle(`${styles.FooterSnsLogos} svg:hover`, {
//   stroke: `rgb(${rgb.blue})`,
// });
