import { sprinkles } from "@styles/sprinkles.css";
import { radius, rgb, spacing } from "@styles/tokens.css";
import { globalStyle, style } from "@vanilla-extract/css";

const Border = `6px double rgb(${rgb.black})`;

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
  transition: "border-color .4s ease",
  borderRadius: radius.sm,
  background: "inherit",
  border: `3px solid rgba(${rgb.black},0)`,
  padding: `${spacing.xs} ${spacing.md}`,
});
globalStyle(`${styles.GlobalMenu} li:hover`, {
  border: `3px solid rgb(${rgb.black})`,
});
