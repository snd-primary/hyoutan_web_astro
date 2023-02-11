import { style } from "@vanilla-extract/css";
import { rgb } from "../tokens.css";

export const styles = {
  container: style({
    background: `rgb(${rgb.black})`,
  }),
};
