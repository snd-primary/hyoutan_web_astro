import { sprinkles } from "@styles/sprinkles.css";
import {
  fontSize,
  lineHeight,
  media,
  radius,
  rgb,
  spacing,
  zIndex,
} from "@styles/tokens.css";
import { globalStyle, style, createContainer } from "@vanilla-extract/css";

export const mainContainer = createContainer();

export const styles = {
  Main: style({
    containerName: mainContainer,
    // containerType: "inline-size",
    display: "grid",
    gridTemplateColumns: "1fr",
    rowGap: spacing.xl,
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
      rowGap: spacing.xl,
      overflow: "hidden",
    },
    sprinkles({
      paddingY: { initial: "xxl", md: "xxl" },
      paddingX: { initial: "md", md: "xl" },
    }),
  ]),
  MainSectionContent: style([
    { width: "100%" },
    sprinkles({
      paddingX: { initial: "xs", md: "md" },
    }),
  ]),
  ImageLocation: style([
    sprinkles({
      borderRadius: "md",
    }),
  ]),

  SlidesWrapper: style({
    width: "100%",
    margin: "0 auto",
    overflow: "hidden",
  }),
  ShopInfo: style({}),
  ConceptTitle: style({
    textAlign: "left",
    width: "100%",
    display: "grid",
    fontSize: "2.55rem",
    fontWeight: "700",
    lineHeight: "1.3",
    marginBottom: spacing.xs,
    color: `rgb(${rgb.blue})`,
    paddingBottom: spacing.xs,
    borderBottom: `4px double rgb(${rgb.blue})`,
  }),
  ConceptContent: style([
    sprinkles({
      display: "grid",
      rowGap: "md",
      position: "relative",
    }),
  ]),
  Concept: style({
    backgroundImage: `url(/hyoutan_stroked.svg)`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "155px 22px",
    backgroundSize: "104%",
  }),
};

globalStyle(`${styles.MainSection} p`, {
  paddingRight: spacing.sm,
  paddingLeft: spacing.sm,
});
globalStyle(`${styles.ConceptTitle} span`, {
  fontSize: "1.1rem",
  paddingLeft: "0.21rem",
});
globalStyle(`${styles.ShopInfo} ul`, {
  width: "1",
  textAlign: "left",
  listStyleType: "circle",
  paddingLeft: spacing.md,
  display: "grid",
  rowGap: spacing.sm,
});
