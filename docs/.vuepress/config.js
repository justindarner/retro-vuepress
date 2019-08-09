module.exports = {
  title: "Video Game Archives",
  description: "Your source for retro-gaming preservation and documentation",
  serviceWorker: true,
  themeConfig: {
    serviceWorker: {
      updatePopup: true
    },
    // github
    repo: "justindarner/retro-vuepress",
    repoLabel: "Contribute!",
    docsDir: "docs",
    docsBranch: "master",
    editLinks: true,
    editLinkText: "Help us improve this page!",
    // nav
    nav: [
      {
        text: "Home",
        link: "/"
      },
      {
        text: "Consoles",
        link: "/consoles/snes/"
      }
    ],
    sidebar: {
      "/consoles/snes/": ["", "1chip/", "csync", "digital-audio/", "tips"],
      "/": [""]
    }
  }
};
