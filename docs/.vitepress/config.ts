import { defineConfig } from "vitepress";

export default defineConfig({
  title: "\n",
  description: "hello world",
  base: "/blog/",
  head: [["link", { rel: "icon", type: "image/svg+xml", href: "logo.svg" }]],
  lastUpdated: true,
  themeConfig: {
    logo: "/logo.svg",
    nav: [
      { text: "首页", link: "/" },
      { text: "我的笔记", link: "/daily/" },
      { text: "关于我", link: "/me/" },
    ],
    socialLinks: [{ icon: "github", link: "https://github.com/Virkano" }],
    // footer: {
    //   message: "Released under the MIT License.",
    //   copyright: "Copyright © 2022-07-27～ Kano",
    // },

    sidebar: {
      "/daily/": [
        {
          text: "介绍",
          collapsible: true,
          items: [{ text: "", link: "/daily/" }],
        },
      ],
    },
  },
  vite: {
    server: {
      host: true,
      port: 3000,
      open: true,
      proxy: {
        "/so": {
          target: "http://139.159.245.209:5000", // 代理接口
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/so/, ""),
        },
      },
    },
  },
});
