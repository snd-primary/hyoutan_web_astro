import { style } from "@vanilla-extract/css";

export const styles = {
  swiperContainer: style({
    transitionTimingFunction: "liner !important",
    display: "grid",
    width: "100%",
  }),
  swiperSlide: style({
    textAlign: "center",
    fontSize: "18px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }),
};
