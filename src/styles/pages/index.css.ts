import { sprinkles } from "@styles/sprinkles.css";
import { media, radius, rgb, spacing, zIndex } from "@styles/tokens.css";
import { globalStyle, style } from "@vanilla-extract/css";

export const styles = {
  Main: style({
    display: "grid",
    gridTemplateColumns: "1fr",
    rowGap: spacing.xl,
    "@media": {
      [media.lg]: {
        width: "38%",
      },
    },
  }),
  MainSection: style([
    {
      background: `rgb(${rgb.white})`,
      borderRadius: radius.lg,
      display: "grid",
      gridTemplateColumns: "1fr",
      placeItems: "center",
      rowGap: spacing.sm,
    },
    sprinkles({
      padding: { initial: "md", md: "xxl" },
    }),
  ]),
  ImageLocation: style([
    sprinkles({
      borderRadius: "lg",
    }),
  ]),
  MainSectionTitle: style([
    sprinkles({
      fontFamily: "lsJP",
      fontWeight: "bold",
      fontSize: "xxl",
      letterSpacing: "wide",
      textAlign: "center",
      display: "inline-block",
      position: "relative",
      width: "fitContent",
      paddingX: "md",
      paddingY: "xs",
    }),
    {
      selectors: {
        "&::before": {
          content: "",
          position: "absolute",
          inset: "0",
          background: `rgb(${rgb.gray})`,
          width: "100%",
          height: "100%",
        },
        "&::after": {
          content: "",
          position: "absolute",
          inset: "0",
          width: "100%",
          height: "100%",
          background: `rgb(${rgb.blue})`,
          clipPath:
            "polygon(0 0, 50% 8%, 100% 0, 99% 50%, 100% 100%, 50% 92%, 0 100%, 1% 50%)",
        },
      },
    },
  ]),
};

globalStyle(`${styles.MainSectionTitle} h2`, {
  display: "inline-block",
  zIndex: zIndex[2],
});
globalStyle(`${styles.MainSection} p`, {
  paddingRight: spacing.md,
  paddingLeft: spacing.md,
});
