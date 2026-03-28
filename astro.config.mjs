import { defineConfig } from "astro/config";
import mdjs from "@astrojs/mdx"; // if using MDX
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import icon from "astro-icon";

export default defineConfig({
  integrations: [mdjs(), icon()], // include if you're using .mdx files
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
    shikiConfig: {
      themes: {
        light: "github-light",
        dark: "github-dark",
      },
    },
  },
});
