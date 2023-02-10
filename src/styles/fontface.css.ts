import { globalFontFace } from "@vanilla-extract/css";

const LINESeedJP = "LINESeedJP";
const Yuji_Syuku_subset = "Yuji_Syuku_subset";

globalFontFace(LINESeedJP, {
  src: `url(/fonts/LINESeedJP_OTF_Rg.woff2) format('woff2')`,
  fontDisplay: "swap",
  fontStyle: "normal",
  fontWeight: "400",
});
globalFontFace(LINESeedJP, {
  src: `url(/fonts/LINESeedJP_OTF_Bd.woff2) format('woff2')`,
  fontDisplay: "swap",
  fontStyle: "normal",
  fontWeight: "700",
});
globalFontFace(Yuji_Syuku_subset, {
  src: `url(/fonts/Yuji_Syuku_subset.ttf) format('truetype')`,
  fontDisplay: "swap",
  fontStyle: "normal",
  fontWeight: "normal",
});
