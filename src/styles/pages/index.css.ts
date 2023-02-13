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
      overflow: "hidden",
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

  SlidesWrapper: style({
    width: "100%",
    margin: "0 auto",
    overflow: "hidden",
  }),
};

globalStyle(`${styles.MainSection} p`, {
  paddingRight: spacing.md,
  paddingLeft: spacing.md,
});
