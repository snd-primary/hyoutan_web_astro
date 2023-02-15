import { styles } from "./GlobalMenu.css";
import { menu } from "@sitedata";
import { sprinkles } from "@styles/sprinkles.css";

export const GlobalMenu = () => {
  return (
    <nav
      className={sprinkles({
        paddingX: "xxl",
        display: "grid",
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
