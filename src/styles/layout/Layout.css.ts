import { style } from "@vanilla-extract/css";
import { media, radius, rgb, spacing } from "../tokens.css";

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
          width: "30%",
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
        width: "30%",
      },
    },
  }),
  FooterSection: style({
    background: `rgb(${rgb.white})`,
    borderRadius: radius.lg,
  }),
};
