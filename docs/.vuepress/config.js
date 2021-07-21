module.exports = {
  title: "🌈 程晓辉",
  description: "Personal Website",
  base: '/',
  dest: "./dist",
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  themeConfig: {
    // 导航栏配置
    nav: [
      {
        text: "技术集",
        link: "/share/"
      },
      {
        text: "工程化",
        link: "/engineering/"
      },
      {
        text: "框架",
        link: "/frame/"
      },
      {
        text: "Node",
        link: "/node/",
      },
      {
        text: "泛客户端",
        link: "/panClient/",
        // items: [
        //   {
        //     text: "Taro",
        //     link: "/Taro/",
        //   },
        //   {
        //     text: "mpvue",
        //     link: "/mpvue/",
        //   },
        // ]
      },
      {
        text: "技术解决方案",
        link: "/technicalSolutions"
      },
      {
        text: "关于我",
        link: "/aboutMe/"
      },
    ],
    sidebar: "auto",
    sidebarDepth: 2,
    lastUpdated: "Last Updated",
    searchMaxSuggestoins: 10,
    serviceWorker: {
      updatePopup: {
        message: "有新的内容.",
        buttonText: "更新"
      }
    },
  }
};
