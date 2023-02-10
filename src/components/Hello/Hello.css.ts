import { style } from "@vanilla-extract/css";
import { tokens } from "src/styles/tokens.css";

export const styles = {
  fonts: style({
    fontFamily: tokens.font.yujiSyuku,
    fontSize: "100px",
  }),
};
