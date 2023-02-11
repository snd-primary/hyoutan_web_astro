import { style } from "@vanilla-extract/css";
import { media, radius, rgb, spacing } from "../tokens.css";

export const styles = {
  Container: style({
    position: "relative",
    background: `rgb(${rgb.black})`,
    backgroundImage: `url(/public/bg_hyoutan.svg)`,
    backgroundRepeat: "repeat",
    backgroundSize: "20%",
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: spacing.md,
    padding: spacing.md,
    overflowY: "hidden",
    "@media": {
      [media.lg]: {
        gridTemplateColumns: "1fr 1.8fr 1fr",
        backgroundSize: "5%",
      },
    },
  }),
  Header: style({
    background: `rgb(${rgb.white})`,
    borderRadius: radius.lg,
  }),
  Footer: style({
    overflow: "hidden",
  }),
  FooterSection: style({
    background: `rgb(${rgb.white})`,
    borderRadius: radius.lg,
  }),
};
