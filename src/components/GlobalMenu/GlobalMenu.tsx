import { styles } from "./GlobalMenu.css";
import { menu } from "@sitedata";
import classnames from "classnames";

// type Props = {
//   className: string;
// };

export const GlobalMenu = () => {
  return (
    <nav className={classnames(styles.GlobalMenu)}>
      <ul>
        {menu.map((i) => (
          <li key={i.id}>
            <a href={i.href}>{i.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
