import { sprinkles } from "@styles/sprinkles.css";
import { fontSize, media, rgb, spacing } from "@styles/tokens.css";
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
      background: "transparent",
      border: `1px solid rgb(${rgb.black})`,
      height: "45px",
      flex: "1",
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      columnGap: spacing.sm,
    },
    sprinkles({
      fontSize: { initial: "lg" },
      fontWeight: "bold",
    }),
  ]),
  AccordionChevron: style({
    transition: `transform 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
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
  }),
  SakeMenus: style([
    {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      "@media": {
        [media.md]: {},
      },
    },
    sprinkles({
      paddingX: "lg",
      paddingY: "lg",
      gap: { initial: "xxl" },
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
  fontWeight: "bold",
});
globalStyle(`${styles.SakeMenus} ul `, {
  paddingLeft: spacing.xl,
});
