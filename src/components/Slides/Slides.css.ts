import { radius } from "@styles/tokens.css";
import { globalStyle, style } from "@vanilla-extract/css";

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
globalStyle(`${styles.swiperSlide} img`, {
  borderRadius: radius.md,
});
