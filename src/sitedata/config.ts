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
  instagram: "/",
  twitter: "/",
  line: "/",
  base: "/",
};

export const phoneNumber = "123-4567-8910";
