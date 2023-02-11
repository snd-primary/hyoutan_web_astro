import { url } from "./config";

interface Menu {
  name: string;
  id: number;
  href: string;
}

export const menu: Menu[] = [
  { id: 1, href: url.menu, name: "おしながき" },
  { id: 2, href: url.shop, name: "店舗概要" },
  { id: 3, href: url.access, name: "アクセス" },
  { id: 4, href: url.contact, name: "ご予約・お問い合わせ" },
];
