import svgr from "vite-plugin-svgr";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

export default {
  plugins: [vanillaExtractPlugin(), svgr()],
  ssr: {
    noExternal: ["usehooks-ts"],
  },
};
