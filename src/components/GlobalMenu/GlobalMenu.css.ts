import { sprinkles } from "@styles/sprinkles.css";
import { radius, rgb, spacing } from "@styles/tokens.css";
import { globalStyle, style } from "@vanilla-extract/css";

const Border = `6px solid rgb(${rgb.black})`;

export const styles = {
  GlobalMenu: style([
    {
      borderTop: Border,
      borderBottom: Border,
      background: "inherit",
    },
    sprinkles({
      fontFamily: "yujiSyuku",
      fontSize: "xl",
      display: "grid",
      placeItems: "center",
      textAlign: "center",
      gap: "sm",
      paddingY: "sm",
    }),
  ]),
};

globalStyle(`${styles.GlobalMenu} li`, {
  transition: "all .3s ease",
  borderRadius: radius.md,
  background: "inherit",
  padding: `${spacing.sm} ${spacing.md}`,
});
globalStyle(`${styles.GlobalMenu} li:hover`, {
  background: `rgb(${rgb.black})`,
  color: `rgb(${rgb.white})`,
});
