import { radius, rgb, spacing } from "@styles/tokens.css";
import { style } from "@vanilla-extract/css";

export const styles = {
  Main: style({
    display: "grid",
    gridTemplateColumns: "1fr",
    columnGap: spacing.md,
    overflowY: "scroll",
    height: "100vh",
  }),
  MainSection: style({
    background: `rgb(${rgb.white})`,
    borderRadius: radius.lg,
  }),
};
