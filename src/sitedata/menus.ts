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

//日本酒のメニュー
type SakeProps = {
  id: number;
  title: string;
  item1: string;
  item2?: string;
  item3?: string;
  item4?: string;
  item5?: string;
  item6?: string;
  item7?: string;
};
export const sake_data: SakeProps[] = [
  {
    id: 1,
    title: "黒竜（福井）",
    item1: "純米吟醸・・・440円",
    item2: "季節酒秋あがり・・・580円",
    item3: "大吟醸・・・935円",
  },
  {
    id: 2,
    title: "九頭竜（福井）",
    item1: "逸品・・・385円",
    item2: "吟醸・・・440円",
  },
  {
    id: 3,
    title: "新政（秋田）",
    item1: "No6X・・・935円",
    item2: "No6S・・・925円",
    item3: "No6R・・・660円",
    item4: "コスモス・・・770円",
    item5: "陽乃島・・・770円",
    item6: "エクリュ -生成-・・・660円",
    item7: "亜麻猫・・・660円",
  },
  {
    id: 4,
    title: "飛露喜（福島）",
    item1: "特別純米生詰・・・605円",
    item2: "純米吟醸・・・748円",
    item3: "純米大吟醸・・・990円",
  },
  {
    id: 5,
    title: "くどき上手（山形）",
    item1: "純米医大吟醸Jr.ジューシー辛口・・・495円",
    item2: "純米医大吟醸Jr.愛山・・・693円",
  },
  {
    id: 6,
    title: "鳳凰美田（栃木）",
    item1: "純米酒・・・528円",
  },
  {
    id: 7,
    title: "楯野川（山形）",
    item1: "純米大吟醸・・・440円",
  },
  {
    id: 8,
    title: "田酒（青森）",
    item1: "特別純米酒・・・440円",
  },
  {
    id: 9,
    title: "紀土（和歌山）",
    item1: "純米吟醸・・・440円",
  },
  {
    id: 10,
    title: "写楽（福島）",
    item1: "純米酒・・・440円",
  },
  {
    id: 11,
    title: "仙禽（栃木）",
    item1: "モダン無垢・・440円",
  },

  {
    id: 12,
    title: "獺祭（山口）",
    item1: "純米大吟醸45・・・440円",
  },
  {
    id: 13,
    title: "宮泉（福島）",
    item1: "純米酒・・・385円",
  },
  {
    id: 14,
    title: "出羽桜（山形）",
    item1: "霊女沖大吟醸・・・495円",
  },
  {
    id: 15,
    title: "AKABU（岩手）",
    item1: "純米酒・・・385円",
  },
  {
    id: 16,
    title: "川中島幻舞（長野）",
    item1: "吟醸・・・528円",
  },
];
