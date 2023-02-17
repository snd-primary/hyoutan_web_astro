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
    gap: spacing.sm,
    padding: `${spacing.sm} ${spacing.md}`,
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
      height: "fit-content",
      paddingBottom: spacing.xxl,
      display: "grid",
      gridTemplateRows: "0.9fr 0.6fr",
      justifyItems: "center",
      gap: spacing.xl,
      boxShadow: `0px 0px 15px 8px rgb(${rgb.black},0.28) inset`,
      "@media": {
        [media.lg]: {
          position: "fixed",
          top: spacing.sm,
          left: spacing.sm,
          width: "29%",
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
    gap: spacing.sm,
    "@media": {
      [media.lg]: {
        position: "fixed",
        top: spacing.sm,
        right: spacing.sm,
        width: "29%",
      },
    },
  }),
  FooterSection: style([
    {
      background: `rgb(${rgb.white})`,
      borderRadius: radius.lg,
    },
    sprinkles({
      paddingX: "md",
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
    gridTemplateColumns: "1fr",
    gap: spacing.sm,
  }),
  FooterSnsLogos: style([
    {},
    sprinkles({
      display: "flex",
      flexDirection: { initial: "column" },
      alignItems: "center",
      justifyContent: "center",
      gap: "md",
    }),
  ]),
  Cta: style({
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
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
globalStyle(`${styles.FooterSnsLogos} p`, {
  fontSize: fontSize.smallest,
  whiteSpace: "nowrap",
  writingMode: "vertical-lr",
});
globalStyle(`${styles.Baners}  a`, {
  maxWidth: "90%",
  aspectRatio: "5/3",
});
globalStyle(`${styles.Baners}  picture`, {});

//  width={361} height={215}
