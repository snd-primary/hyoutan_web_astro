import { sprinkles } from "@styles/sprinkles.css";
import {
  fontSize,
  media,
  radius,
  rgb,
  spacing,
  zIndex,
} from "@styles/tokens.css";
import { globalStyle, style, createContainer } from "@vanilla-extract/css";

const mainContainer = createContainer();

export const styles = {
  Main: style({
    display: "grid",
    gridTemplateColumns: "1fr",
    rowGap: spacing.xxl,

    "@media": {
      [media.lg]: {
        width: "40%",
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
      rowGap: spacing.lg,
      containerName: mainContainer,
    },
    sprinkles({
      paddingY: { initial: "md", md: "xl" },
      paddingX: { initial: "md", md: "xxxl" },
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
      letterSpacing: "wide",
      textAlign: "center",
      display: "inline-block",
      position: "relative",
      width: "fitContent",
      paddingX: "md",
      paddingY: "xs",
      fontSize: { initial: "lg", md: "xxl" },
      marginBottom: "lg",
    }),
    {
      color: `rgb(${rgb.white})`,
      zIndex: zIndex[5],
      selectors: {
        "&::before": {
          content: "",
          position: "absolute",
          right: "-0.5%",
          bottom: "-8%",
          background: `rgb(${rgb.gray})`,
          width: "97%",
          height: "97%",
          zIndex: zIndex.minus,
        },
        "&::after": {
          zIndex: zIndex.minus,
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

globalStyle(`${styles.MainSection} p`, {
  paddingRight: spacing.md,
  paddingLeft: spacing.md,
});
