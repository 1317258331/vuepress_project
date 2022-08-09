module.exports = {
  title: "聚通达前端组",
  description: "每天学一点,进步多一点",
  extend: "@vuepress/theme-default",
  plugins: ["@vuepress/back-to-top","demo-container"],
  base: "/",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: `/favicon.ico`
      }],
      [
        "script",
        {
          src:
            "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.slim.min.js"
        }
      ],
      [
        "script",
        {
          src:
            "https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.2/jquery.fancybox.min.js"
        }
      ],
      [
        "link",
        {
          rel: "stylesheet",
          type: "text/css",
          href:
            "https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.2/jquery.fancybox.min.css"
        }
      ]
    
  ],
  dest: "./docs/.vuepress/dist",
  ga: "",
  evergreen: true,
  serviceWorker: true,
  themeConfig: {
    smoothScroll: true,
    docsRepo: "",
    docsDir: "docs",
    docsBranch: "master",
    activeHeaderLinks: true,
    editLinks: true,
    lastUpdated: "上次更新 ",
    editLinkText: "发现问题!即使纠正",
    nav: [
      { text: "首页", link: "/" },
      { text: "ElectronUI", link: "/electron/" },
      { 
        text: "前端项目文档",
        items: [
          {
            text: "日常开发流程规范",
            link: "/Documentation/specification"
          },
          {
            text: "IM API概述",
            link: "/Documentation/IMApi"
          }
        ],
      },
      { text: "前端周刊", link: "/weekly/" },
      { 
        text: "笔记文档",
        items: [
          {
            text: "笔记文档",
            link: "/home/"
          },
          {
            text: "面试题",
            link: "/code/"
          },
          {
            text: "最后冲刺",
            link: "/once/"
          },
        ],
      },

      // {
      //   text: "LuoZhiXiang",
      //   items: [
      //     {
      //       text: "博客园",
      //       link: "https://www.cnblogs.com/luozhixiang/"
      //     },
      //     {
      //       text: "github",
      //       link: "https://github.com/1317258331"
      //     }
      //   ]
      // }
    ],
    sidebarDepth: 2,
    sidebar: {
      "/home/": [
        "",
        {
          title: "前端基础",
          collapsable: true,
          children: ["jichu/css", "jichu/html"]
        },
        {
          title: "js学习",
          collapsable: true,
          children: [
            "jsstudy/jscj",
            "jsstudy/jsgao",
            "jsstudy/this",
            "jsstudy/es6"
          ]
        },
        {
          title: "常用UI库",
          collapsable: true,
          children: ["ui/jquery", "ui/fullpage", "ui/bootstrap"]
        },
        {
          title: "版本控制",
          collapsable: true,
          children: ["ban/svn", "ban/git"]
        },
        {
          title: "css预处理",
          collapsable: true,
          children: ["Less", "Sass"]
        },
        {
          title: "node",
          collapsable: true,
          children: [
            "node/npm",
            "node/pm2",
            "node/chang",
            "node/node",
            "node/nodebao"
          ]
        },
        {
          title: "Vue学习",
          collapsable: true,
          children:["Vue/chuji"]
        },
        {
          title: "前端进阶",
          collapsable: true,
          children: ["jin/sheji", "jin/ts", "jin/you", "jin/anquan", "jin/ce"]
        },
        {
          title: "高阶框架学习",
          collapsable: true,
          children: ["ku/study"]
        },
        {
          title: "网络基础",
          collapsable: true,
          children: ["wang/http", "wang/request"]
        },
        {
          title: "打包工具",
          collapsable: true,
          children: ["bao/webpack", "bao/zhuan"]
        },
        {
          title: "性能优化",
          collapsable: true,
          children: ["youhua/First","youhua/Network", "youhua/Page","youhua/Js","youhua/Fuhe"]
        },
        {
          title: "服务器基础",
          collapsable: true,
          children: ["fu/nginx", "fu/linux"]
        },
      
        {
          title: "reactNative开发",
          collapsable: true,
          children: ["rn"]
        },
        {
          title: "vscode入门",
          collapsable: true,
          children: ["vscode"]
        }
      ],
      "/once/": [
        "",
        {
          title: "精选面试题",
          collapsable: true,
          children: [
            "f_10/first.md",
            "f_10/this.md",
            "f_10/shen.md",
            "f_10/fang.md",
            "f_10/call.md",
            "f_10/ke.md",
            "f_10/bi.md",
            "f_10/yi.md",
            "f_10/cang.md",
            "f_10/let.md",
            "f_10/frist_two.md",
            "f_10/second_two.md",
            "f_10/three_two.md"
          ]
        },
        {
          title: "最新和常问的问题",
          collapsable: true,
          children: [
            "f_20/sleep.md",
            "f_20/jie.md",
            "f_20/less-shan.md",
            "f_20/shu.md",
            "f_20/vue-sheng.md",
            "f_20/yi.md",
            "f_20/wei.md",
            "f_20/fen.md",
            "f_20/vuex-demo.md"
          ]
        },
        {
          title: "React问题",
          collapsable: true,
          children: [
            "f_30/diff.md",
            "f_30/dom.md",
            "f_30/pure.md",
            "f_30/redux.md"
          ]
        },{
          title: "遍历数组以及对象的方法",
          collapsable: true,
          children: [
            "f_40/array.md",
            "f_40/obj.md",
          ]
        }
      ],
      "/code/": [
        "",
        {
          title: "44道js难题",
          collapsable: true,
          children: ["first"]
        },
        {
          title: "随意整理面试题",
          collapsable: true,
          children: ["second"]
        },
        {
          title: "面试题.pdf",
          collapsable: true,
          children: [
            "fourth/first.md",
            "fourth/second.md",
            "fourth/third.md",
            "fourth/fourth.md",
            "fourth/fifth.md",
            "fourth/sixth.md",
            "fourth/seventh.md",
            "fourth/eighth.md",
            "fourth/ninth.md",
            "fourth/tenth.md",
            "fourth/eleventh.md"
          ]
        },
        {
          title: "前端面试题汇总.pdf",
          collapsable: true,
          children: ["chen"]
        },
        {
          title: "反问面试官?",
          collapsable: true,
          children: ["fan"]
        },
        {
          title: "2018大厂面试题汇总",
          collapsable: true,
          children: ["third"]
        },
        {
          title: "城市面试题",
          collapsable: true,
          children: ["city/Beijing.md", "city/Hangzhou.md"]
        },
        {
          title: "答案整理",
          collapsable: true,
          children: ["answer"]
        }
      ],
      "/Documentation/": ["specification.md","IMApi.md"],
      "/electron/": [
        "",
        // {
        //   title: "组件",
        //   collapsable: false,
        //   children: ["basis.md","layout.md","navigation.md","form.md","view.md","chart.md","rest.md"]
        // },
        {
          title: "基础",
          sidebarDepth: 1,
          collapsable: true,
          children: ["basis/icon.md","basis/button.md"]
        },
        {
          title: "布局",
          sidebarDepth: 1,
          collapsable: true,
          children: [
            "layout/grid.md","layout/list.md","layout/card.md","layout/collapse.md",
            "layout/split.md","layout/divider.md","layout/cell.md"
          ]
        },
        {
          title: "导航",
          collapsable: true,
          children: [
            "navgation/menu.md","navgation/tabs.md","navgation/dropdwon.md","navgation/page.md",
            "navgation/breadcrumb.md","navgation/badge.md","navgation/anchor.md",
            "navgation/steps.md","navgation/loadingbar.md",
          ]
        },
        {
          title: "表单",
          collapsable: true,
          children: [
            "form/form.md","form/input.md","form/radio.md","form/checkbox.md","form/switch.md","form/table.md",
            "form/select.md","form/auto.md","form/slider.md","form/data.md","form/time.md","form/cascader.md",
            "form/transfer.md","form/inputnumber.md","form/rate.md","form/upload.md","form/color.md",
          ]
        },
        {
          title: "视图",
          collapsable: true,
          children: [
            "view/alert.md","view/message.md","view/notice.md","view/modal.md","view/drawer.md",
            "view/tree.md","view/tooltip.md","view/poptip.md","view/progress.md","view/avatar.md",
            "view/tag.md","view/carousel.md","view/timeline.md","view/time.md",
          ]
        },
        {
          title: "图表",
          collapsable: true,
          children: ["chart/circle.md"]
        },
        {
          title: "其它",
          collapsable: true,
          children: ["rest/affix.md","rest/back.md","rest/spin.md","rest/scroll.md",]
        },
      ],
      "/weekly/": [
        "",
        {
          title: "二月份",
          collapsable: false,
          children: ["weekly1.md"]
        },
        {
          title: "三月份",
          collapsable: false,
          children: ["weekly2.md","weekly3.md","weekly4.md"]
        },
      ],
    }
  },
  markdown: {
    lineNumbers: true
  }
};
