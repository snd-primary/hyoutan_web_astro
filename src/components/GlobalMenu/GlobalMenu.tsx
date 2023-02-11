import { styles } from "./GlobalMenu.css";
import { menu } from "@sitedata";
import classnames from "classnames";
import { sprinkles } from "@styles/sprinkles.css";

// type Props = {
//   className: string;
// };

export const GlobalMenu = () => {
  return (
    <nav
      className={sprinkles({
        width: "full",
        paddingX: "xxl",
      })}
    >
      <ul className={styles.GlobalMenu}>
        {menu.map((i) => (
          <li key={i.id}>
            <a href={i.href}>{i.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
