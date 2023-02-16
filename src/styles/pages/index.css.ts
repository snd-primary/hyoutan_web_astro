import { sprinkles } from "@styles/sprinkles.css";
import { media, radius, rgb, spacing } from "@styles/tokens.css";
import { globalStyle, style, createContainer } from "@vanilla-extract/css";

export const mainContainer = createContainer();

export const styles = {
  Main: style({
    containerName: mainContainer,
    // containerType: "inline-size",
    display: "grid",
    gridTemplateColumns: "1fr",
    rowGap: spacing.md,
    "@media": {
      [media.lg]: {
        rowGap: spacing.xl,
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
      paddingTop: { initial: "xxl", md: "xxl" },
      paddingBottom: { initial: "xxxxl", md: "xxxxl" },
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
      rowGap: "xl",
      position: "relative",
    }),
  ]),
  Concept: style({
    backgroundImage: `url(/hyoutan_stroked.svg)`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "155px 22px",
    backgroundSize: "104%",
  }),
  PhoneNumber: style([
    sprinkles({
      fontSize: { initial: "xl" },
      fontWeight: "bold",
      display: "flex",
      gap: "sm",
      letterSpacing: "wider",
      color: "warmRed",
    }),

    {
      alignItems: "center",
      textDecoration: "underline",
      transition: "all .3s ease",
      selectors: {
        "&:hover": {
          color: `rgb(${rgb.blue})`,
        },
      },
    },
  ]),
  Contact: style({}),
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
globalStyle(`${styles.PhoneNumber} > svg`, {
  fill: `rgb(${rgb.cream})`,
  width: "24px",
  height: "24px",
});
globalStyle(`${styles.Contact} p `, {
  padding: 0,
});
