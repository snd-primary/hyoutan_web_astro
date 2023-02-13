import { sprinkles } from "@styles/sprinkles.css";
import { rgb, zIndex } from "@styles/tokens.css";
import { style } from "@vanilla-extract/css";

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
