import { sprinkles } from "@styles/sprinkles.css";
import { rgb, zIndex } from "@styles/tokens.css";
import { style, createVar } from "@vanilla-extract/css";
import { recipe, RecipeVariants } from "@vanilla-extract/recipes";

const BGCOLOR = createVar();

export const styles = {
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
      zIndex: zIndex[5],
      selectors: {
        "&::before": {
          content: "",
          position: "absolute",
          right: "-1.1%",
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
          background: BGCOLOR,
          clipPath:
            "polygon(0 0, 50% 8%, 100% 0, 99% 50%, 100% 100%, 50% 92%, 0 100%, 1% 50%)",
        },
      },
    },
  ]),
};

export const ColorRecipe = recipe({
  variants: {
    bgColor: {
      blue: {
        vars: {
          [BGCOLOR]: `rgb(${rgb.blue})`,
        },
      },
      cream: {
        vars: {
          [BGCOLOR]: `rgb(${rgb.cream})`,
        },
      },
      yellow: {
        vars: {
          [BGCOLOR]: `rgb(${rgb.yellow})`,
        },
      },
    },
    textColor: {
      black: {
        color: `rgb(${rgb.gray})`,
      },
      white: {
        color: `rgb(${rgb.white})`,
      },
    },
  },
  defaultVariants: {
    bgColor: "blue",
    textColor: "white",
  },
});

export type ColorRecipeVariants = RecipeVariants<typeof ColorRecipe>;
