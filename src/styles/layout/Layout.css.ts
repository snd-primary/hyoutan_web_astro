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
    "@media": {
      [media.lg]: {
        backgroundSize: "8%",
      },
    },
  }),
  Header: style({
    background: `rgb(${rgb.white})`,
    borderRadius: radius.lg,
    "@media": {
      [media.lg]: {
        position: "fixed",
        top: "0",
        left: "0",
        width: "30%",
      },
    },
  }),
  Footer: style({
    overflow: "hidden",

    "@media": {
      [media.lg]: {
        position: "fixed",
        top: "0",
        right: "0",
        width: "30%",
      },
    },
  }),
  FooterSection: style({
    background: `rgb(${rgb.white})`,
    borderRadius: radius.lg,
  }),
};
