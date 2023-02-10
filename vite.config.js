import { macaronVitePlugin } from "@macaron-css/vite";
import svgr from "vite-plugin-svgr";

export default {
  plugins: [macaronVitePlugin(), svgr()],
  ssr: {
    noExternal: ["usehooks-ts"],
  },
};
