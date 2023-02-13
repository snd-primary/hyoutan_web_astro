import classNames from "classnames";
import {
  styles,
  ColorRecipe,
  ColorRecipeVariants,
} from "./MainSectionTitle.css";

type Props = {
  text: string;
} & ColorRecipeVariants;

export const MainSectionTitle = ({
  text,
  bgColor = "blue",
  textColor = "white",
}: Props) => {
  return (
    <h2
      className={classNames(
        styles.MainSectionTitle,
        ColorRecipe({
          bgColor,
          textColor,
        })
      )}
    >
      {text}
    </h2>
  );
};
