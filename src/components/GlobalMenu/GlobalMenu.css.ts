import { sprinkles } from "@styles/sprinkles.css";
import { radius, rgb, spacing } from "@styles/tokens.css";
import { globalStyle, style } from "@vanilla-extract/css";

const Border = `2px solid rgb(${rgb.black})`;

export const styles = {
  GlobalMenu: style([
    {
      gridTemplateColumns: "repeat(4,1fr)",
      borderTop: Border,
      background: "inherit",
    },
    sprinkles({
      width: "full",
      display: "grid",
      placeItems: "center",
      textAlign: "center",
      gap: "xl",
      paddingBottom: "sm",
      paddingTop: "xl",
    }),
  ]),
  GlobalMenu_Item: style([
    {
      background: `rgb(${rgb.white})`,
      boxShadow: `3px 3px 5px rgba(${rgb.black}, 0.4)`,
      borderRadius: "2px",
      border: `4px solid #FF613E`,
      transition: "all 0.2s ease",
      selectors: {
        "&::before": {
          content: "",
          position: "absolute",
          top: "1%",
          right: "50%",
          left: "50%",
          transform: "translate(-50%, 0)",
          width: "10px",
          height: "10px",
          background: `#FF481F`,
          boxShadow: `1px 1px 1px rgba(${rgb.black}, 0.4), -1px -1px 1px rgba(${rgb.black}, 0.4) inset`,
          borderRadius: radius.full,
        },
        "&:hover": {
          transform: "translateY(-15px)",
        },
      },
    },
    sprinkles({
      paddingX: "xs",
      paddingBottom: "sm",
      paddingTop: "md",
      backgroundColor: "white",
      position: "relative",
    }),
  ]),
};
