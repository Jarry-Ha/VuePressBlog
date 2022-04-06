var path = require('path')
let { getArticles, getFiles } = require(path.join(__dirname, './dong_util'))
// console.log(getFiles(''))
// console.log(getArticles(''))
module.exports = {
  title: "Jarry의 개발일기",
  description: "Hello World",
  themeConfig: {
    sidebar: [
        {
            title: 'Vuepress',
            collapsable: true,
            children: getArticles('')
        }
    ]
  },
  head: [
    ['link', { rel: 'icon', href: `/images/logo-144.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }]
  ],
  markdown: {
    lineNumbers: true
  },
  plugins: ['@vuepress/pwa']
};
