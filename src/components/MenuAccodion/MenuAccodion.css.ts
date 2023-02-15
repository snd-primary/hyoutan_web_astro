import { sprinkles } from "@styles/sprinkles.css";
import { fontSize, media, radius, rgb, spacing } from "@styles/tokens.css";
import { globalStyle, keyframes, style, fontFace } from "@vanilla-extract/css";

const SlideDown = keyframes({
  from: {
    height: "0",
  },
  to: {
    height: `var(--radix-accordion-content-height)`,
  },
});
const SlideUp = keyframes({
  from: {
    height: `var(--radix-accordion-content-height)`,
  },
  to: {
    height: "0",
  },
});

const YUJISYUKU_VERTICAL = fontFace({
  src: `url(/fonts/Yuji_Syuku_subset_vertical.ttf) format('truetype')`,
  fontDisplay: "swap",
  fontStyle: "normal",
  fontWeight: "normal",
});

export const styles = {
  AccordionHeader: style({
    display: "flex",
    width: "100%",
  }),
  AccordionTrigger: style([
    {
      height: "58px",
      flex: "1",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      borderBottom: `1px solid rgb(${rgb.black})`,
      columnGap: spacing.sm,
      transition: "all ease 0.3s",
    },
    sprinkles({
      paddingX: "sm",
      paddingY: "sm",
      fontSize: { initial: "xl" },
      letterSpacing: "wider",
      fontWeight: "bold",
      color: "gray",
    }),
  ]),
  AccordionChevron: style({
    transition: `transform 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
    width: "20px",
    height: "20px",
  }),
  AccordionContent: style({
    overflow: "hidden",
  }),
  AccordionItem: style({
    display: "grid",
    gridTemplateColumns: "1fr",
  }),
  AccordionRoot: style({
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    borderRadius: radius.md,
  }),
  SakeMenus: style([
    {
      display: "grid",
      gridTemplateColumns: "repeat(1, 1fr)",
      "@media": {
        [media.md]: {
          gridTemplateColumns: "repeat(2, 1fr)",
        },
      },
    },
    sprinkles({
      paddingX: "xs",
      paddingY: "sm",
      gap: { initial: "xl", md: "md" },
    }),
  ]),
  SakeMenuAnnotation: style({
    display: "grid",
  }),
  KushiTonMenus: style({}),
  KushiTonMenusHeader: style([
    {
      display: "grid",
      gridTemplateColumns: "1fr",
      placeItems: "center",
    },
    sprinkles({
      fontFamily: "yujiSyuku",
      fontSize: "lg",
      lineHeight: "snug",
      paddingY: "xl",
    }),
  ]),
  KushiTonMenusHeaderTitle: style([
    {},
    sprinkles({
      fontSize: "largest",
      color: "red",
      fontWeight: "bold",
      lineHeight: "snug",
    }),
  ]),
  KushiTonList: style([
    {
      border: `2px solid rgb(${rgb.black})`,
      borderRadius: radius.md,
    },
    sprinkles({
      marginX: "md",
      marginY: "md",
      padding: "md",
    }),
  ]),
  FoodMenu: style([
    {
      display: "grid",
      gridTemplateColumns: "1fr",
      alignItems: "center",
      "@media": {
        [media.md]: {
          gridTemplateColumns: "1fr 0.4fr",
        },
      },
    },
    sprinkles({
      paddingX: "lg",
      paddingY: "lg",
      gap: { initial: "xxl" },
    }),
  ]),
  FoodMenuCopy: style([
    {
      writingMode: "vertical-lr",
      fontFamily: YUJISYUKU_VERTICAL,
      fontSize: fontSize.xl,
      boxShadow: `2px 2px 6px rgba(${rgb.black}, 0.17)`,
      display: "grid",
      borderRadius: radius.md,
      alignItems: "center",
      alignContent: "center",
      width: "40vw",
      margin: "0 auto",
      position: "relative",
      "@media": {
        [media.md]: {
          width: "initial",
          margin: "initial",
        },
      },
      selectors: {
        "&::before": {
          content: "",
          position: "absolute",
          top: "2%",
          right: "50%",
          left: "50%",
          transform: "translate(-50%, 0)",
          width: "15px",
          height: "15px",
          background: `#ceb100`,
          boxShadow: `1px 1px 1px rgba(${rgb.black}, 0.4), -1px -1px 1px rgba(${rgb.black}, 0.4) inset`,
          borderRadius: radius.full,
        },
      },
    },
    sprinkles({
      color: "gray",
      paddingBottom: "md",
      paddingTop: "xxl",
    }),
  ]),
};
globalStyle(`${styles.AccordionTrigger}:nth-child(3)`, {
  borderBottom: "none",
});
globalStyle(
  `${styles.AccordionTrigger}[data-state='open'] > ${styles.AccordionChevron}`,
  {
    transform: `rotate(180deg)`,
  }
);
globalStyle(`${styles.AccordionTrigger}[data-state='open']`, {
  color: `rgb(${rgb.cream})`,
  background: `rgb(${rgb.blue})`,
});
globalStyle(`${styles.AccordionContent}[data-state='open']`, {
  animation: `${SlideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
});
globalStyle(`${styles.AccordionContent}[data-state='closed']`, {
  animation: `${SlideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
});
globalStyle(`${styles.SakeMenus} ruby `, {
  fontSize: fontSize.lg,
  fontWeight: "700",
  padding: "0",
});
globalStyle(`${styles.SakeMenus} rt `, {
  fontSize: fontSize.smallest,
});
globalStyle(`${styles.SakeMenus} > div `, {
  border: `1.5px solid rgb(${rgb.black})`,
  padding: spacing.sm,
  borderRadius: radius.md,
});
globalStyle(`${styles.SakeMenus} ul `, {
  paddingLeft: spacing.xxl,
  paddingTop: spacing.xs,
  listStyleType: "circle",
  display: "grid",
  gridAutoColumns: "1fr",
  rowGap: spacing.sm,
  fontSize: fontSize.sm,
});
globalStyle(`${styles.KushiTonMenusHeaderTitle} span`, {
  fontSize: fontSize.xl,
  whiteSpace: "nowrap",
  display: "inline-block",
});
globalStyle(`${styles.FoodMenu} ul`, {
  display: "grid",
  rowGap: spacing.sm,
  border: `2px solid rgb(${rgb.black})`,
  borderRadius: radius.md,
  padding: spacing.md,
});
globalStyle(`${styles.FoodMenuCopy} p`, {
  paddingRight: "0",
  paddingLeft: "0",
});
globalStyle(`${styles.FoodMenuCopy} p:nth-child(1)`, {
  paddingTop: spacing.xxxl,
});
globalStyle(`${styles.FoodMenuCopy} p:nth-child(1) > span`, {
  // textEmphasis: `circle rgb(${rgb.red})`,
  // WebkitTextEmphasis: `circle rgb(${rgb.red})`,
});
globalStyle(`${styles.SakeMenuAnnotation} p`, {
  color: `rgb(${rgb.red})`,
  fontWeight: "700",
  textAlign: "center",
});
