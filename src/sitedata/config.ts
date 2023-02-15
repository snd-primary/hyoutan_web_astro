export const url = {
  root: import.meta.env.PROD
    ? (import.meta.env.PUBLIC_BASEURL as string) ?? ""
    : (import.meta.env.DEVURL as string),
  menu: "menu",
  shop: "shop",
  access: "access",
  contact: "contact",
};

export const thrdPartyUrl = {
  instagram: "https://www.instagram.com/sandaimehyoutan3/",
  twitter: "https://twitter.com/3Hyoutan",
  line: "/",
  base: "/",
  googleMap: "https://goo.gl/maps/7qi1qDRCFfqhER7j7",
};

export const phoneNumber = "123-4567-8910";

export const siteMeta = {
  globaltitle: `串とん亭日本酒居酒屋|三代目ひょうたん`,
  globalDesc: "米子市富士見町にある串とん亭日本酒居酒屋三代目ひょうたん",
};
