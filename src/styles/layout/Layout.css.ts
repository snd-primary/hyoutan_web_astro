import { style } from "@vanilla-extract/css";
import { rgb } from "../tokens.css";

export const styles = {
  container: style({
    background: `rgb(${rgb.black})`,
    backgroundImage: `url(/public/bg_hyoutan.svg)`,
    backgroundRepeat: "repeat",
    backgroundSize: "20%",
  }),
};
