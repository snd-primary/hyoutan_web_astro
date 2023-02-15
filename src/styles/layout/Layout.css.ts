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
      height: "96vh",
      paddingBottom: spacing.xxl,
      display: "grid",
      gridTemplateRows: "0.9fr 0.6fr",
      justifyItems: "center",
      boxShadow: `0px 0px 15px 8px rgb(${rgb.black},0.28) inset`,
      "@media": {
        [media.lg]: {
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
    gap: spacing.xl,
    height: "94vh",

    "@media": {
      [media.lg]: {
        height: "initial",
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
  ConceptTitle: style({
    textAlign: "left",
    width: "100%",
    display: "grid",
    fontSize: fontSize.xxxl,
    fontWeight: "700",
    lineHeight: "1.3",
    marginBottom: spacing.xs,
    color: `rgb(${rgb.blue})`,
    borderBottom: `4px double rgb(${rgb.blue})`,
  }),
  Access: style({
    display: "grid",
    gridTemplateColumns: "1fr",
    gridTemplateRows: "min-content",
  }),
  AccessShopName: style({
    fontSize: fontSize.xl,
    fontWeight: "700",
    lineHeight: lineHeight.snug,
    marginBottom: spacing.sm,
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
    gridTemplateColumns: "1fr 0.6fr",
    gap: spacing.sm,
  }),
  FooterSnsLogos: style({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: spacing.md,
  }),
  LineCta: style({
    display: "grid",
    rowGap: spacing.sm,
    placeItems: "center",
    borderRight: `2px solid rgb(${rgb.black})`,
    paddingRight: spacing.sm,
  }),
};

globalStyle(`${styles.Access} ul`, {
  listStyleType: "disc",
  paddingLeft: spacing.xxl,
});
globalStyle(`${styles.FooterSnsLogos} svg`, {
  width: "35px",
  height: "35px",
  transition: "all ease 0.3s",
});
