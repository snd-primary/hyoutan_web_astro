import { style } from "@vanilla-extract/css";
import { media, radius, rgb, spacing } from "../tokens.css";

export const styles = {
  Container: style({
    position: "relative",
    width: "100%",
    maxWidth: "100%",
    background: `rgb(${rgb.black})`,
    backgroundImage: `url(/public/bg_hyoutan.svg)`,
    backgroundRepeat: "repeat",
    backgroundSize: "20%",
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: spacing.md,
    // padding: spacing.md,
    "@media": {
      [media.lg]: {
        gridTemplateColumns: "25% 50% 25%",
        backgroundSize: "5%",
      },
    },
  }),
  Header: style({
    background: `rgb(${rgb.white})`,
    borderRadius: radius.lg,
    height: "100vh",
  }),
  Footer: style({
    height: "100vh",
    overflow: "hidden",
  }),
  FooterSection: style({
    background: `rgb(${rgb.white})`,
    borderRadius: radius.lg,
  }),
};
