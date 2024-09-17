import { defineUserConfig } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";
import { plumeTheme } from "vuepress-theme-plume";

export default defineUserConfig({
  port: 8081,
  bundler: viteBundler(),
  lang: "zh-CN",
  title: "Life",
  description: "Cherish Life",
  head: [["link", { rel: "icon", href: "/heartPulse.svg" }]],
  theme: plumeTheme({
    home: "/",
    logo: "/heart.svg",
    docsRepo: "https://github.com/Echlorine/life",
    docsBranch: "main",
    autoFrontmatter: false, // 是否自动填充
    docsDir: "docs",
    lastUpdated: {
      text: "Last Updated",
      formatOptions: { dateStyle: "short", timeStyle: "short" },
    },
    editLink: true,
    footer: { copyright: "©2021 - 2024 Echlorine" },
    navbar: [
      { text: "首页", link: "/" },
      {
        text: "健康",
        items: [
          { text: "急救知识", link: "/health/firstAid/" },
          { text: "抑郁症", link: "/health/depression/" },
        ],
      },
      {
        text: "旅游",
        items: [
          {
            text: "亚洲",
            items: [
              { text: "中国", link: "/travel/Asia/China/" },
              { text: "日本", link: "/travel/Asia/Japan/" },
            ],
          },
        ],
      },
      {
        text: "学习笔记",
        items: [
          { text: "社会科学概论", link: "/study/SocialSciences/" },
          { text: "政治经济学", link: "/study/PoliticalEconomy/" },
        ],
      },
      { text: "关于", link: "/about/" },
    ],
    notes: false,
    sidebar: {
      "/health/firstAid/": ["", "scenario"],
      "/travel/Asia/China/": [
        { text: "湖南省", link: "HN" },
        { text: "吉林省", link: "JL" },
        { text: "江苏省", link: "JS" },
        { text: "广东省", link: "GD" },
        { text: "香港特别新政区", link: "HK" },
      ],
      "/study/SocialSciences/": [
        "",
        { text: "第一讲 序言", link: "preface" },
        { text: "第二讲 读书", link: "booklist" },
        { text: "第三讲 自然科学", link: "naturalScience" },
        { text: "第四讲 马列主义、毛泽东思想", link: "marxism" },
        { text: "第五、六讲 哲学", link: "philosophy" },
        { text: "第十六讲 经济学", link: "economics" },
        { text: "写在最后", link: "summary" },
      ],
      "/study/PoliticalEconomy/": [""],
    },
  }),
});
