import { styles } from "./GlobalMenu.css";
import { sprinkles } from "@styles/sprinkles.css";
import { ReactComponent as ACCESS } from "./svg/access.svg";
import { ReactComponent as CONTACT } from "./svg/contact.svg";
import { ReactComponent as MENUS } from "./svg/menus.svg";
import { ReactComponent as SHOPINFO } from "./svg/shopinfo.svg";
import { url } from "@sitedata";
import type { ReactNode } from "react";

interface Menu {
  id: number;
  href: string;
  svg: ReactNode;
}
const Menu_Access = () => {
  return <ACCESS />;
};
const Menu_Contact = () => {
  return <CONTACT />;
};
const Menu_Menus = () => {
  return <MENUS />;
};
const Menu_ShopInfo = () => {
  return <SHOPINFO />;
};

export const menu: Menu[] = [
  { id: 1, href: `/#${url.contact}`, svg: <Menu_Contact /> },
  { id: 2, href: `/#${url.access}`, svg: <Menu_Access /> },
  { id: 3, href: `/#${url.shop}`, svg: <Menu_ShopInfo /> },
  { id: 4, href: `/#${url.menu}`, svg: <Menu_Menus /> },
];

export const GlobalMenu = () => {
  return (
    <nav
      className={sprinkles({
        display: "grid",
      })}
    >
      <ul className={styles.GlobalMenu}>
        {menu.map((i) => (
          <li key={i.id} className={styles.GlobalMenu_Item}>
            <a href={i.href}>{i.svg}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
