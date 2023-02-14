import { sprinkles } from "@styles/sprinkles.css";
import {
  font,
  fontSize,
  media,
  radius,
  rgb,
  spacing,
} from "@styles/tokens.css";
import { globalStyle, keyframes, style } from "@vanilla-extract/css";

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
export const styles = {
  AccordionHeader: style({
    display: "flex",
  }),
  AccordionTrigger: style([
    {
      height: "45px",
      flex: "1",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      border: `2px dotted rgb(${rgb.black})`,
      columnGap: spacing.sm,
    },
    sprinkles({
      paddingX: "md",
      paddingY: "sm",
      fontSize: { initial: "xl" },
      letterSpacing: "wider",
      fontWeight: "bold",
      fontFamily: "yujiSyuku",
    }),
  ]),
  AccordionChevron: style({
    transition: `transform 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
    width: "20px",
    height: "20px",
  }),
  AccordionContent: style({
    border: `2px dotted rgb(${rgb.black})`,

    overflow: "hidden",
  }),
  AccordionItem: style({
    display: "grid",
    gridTemplateColumns: "1fr",
  }),
  AccordionRoot: style({
    width: "100%",
    maxWidth: "100%",
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
      paddingX: "lg",
      paddingY: "lg",
      gap: { initial: "xxl" },
    }),
  ]),
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
      fontSize: "xxxl",
      color: "red",
      fontWeight: "bold",
      lineHeight: "snug",
    }),
  ]),
  KushiTonList: style([
    {
      border: `2px solid rgb(${rgb.black})`,
    },
    sprinkles({
      marginX: "xl",
      marginY: "xl",
      padding: "md",
    }),
  ]),
};
globalStyle(
  `${styles.AccordionTrigger}[data-state='open'] > ${styles.AccordionChevron}`,
  {
    transform: `rotate(180deg)`,
  }
);
globalStyle(`${styles.AccordionContent}[data-state='open']`, {
  animation: `${SlideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
});
globalStyle(`${styles.AccordionContent}[data-state='closed']`, {
  animation: `${SlideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
});
globalStyle(`${styles.SakeMenus} p `, {
  fontSize: fontSize.lg,
  fontWeight: "700",
  padding: "0",
});
globalStyle(`${styles.SakeMenus} ul `, {
  paddingLeft: spacing.xxl,
  paddingTop: spacing.xs,
  listStyleType: "disc",
  display: "grid",
  gridAutoColumns: "1fr",
  rowGap: spacing.sm,
});
globalStyle(`${styles.KushiTonMenusHeaderTitle} span`, {
  fontSize: fontSize.xl,
  whiteSpace: "nowrap",
  display: "inline-block",
});
