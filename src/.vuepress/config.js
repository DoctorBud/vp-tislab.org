// https://github.com/vuejs/vuepress/blob/master/packages/docs/docs/theme/default-theme-config.md

module.exports = {
  base: '/vp-tislab.org/',
  plugins: [
    'vuepress-plugin-nprogress',
    require('./theme/plugins/blog'),
    require('./theme/plugins/index'),
  ],
  title: 'tislab.org',
  description: 'Translational and Integrative Sciences Lab',
  head: [
    ['link', { rel: 'icon', href: '/assets/img/avator.jpg' }],
  ],
  // locales: {
  //   '/': {
  //     lang: 'zh-CN',
  //   },
  // },
  themeConfig: {
    personalInfo: {
      nickname: 'TISL',
      description: 'Synergy<br/>Diversity',
      email: 'info@tislab.org',
      location: 'Oregon, USA',
      organization: 'Translational and Integrative Sciences Lab',
      avator: '/assets/img/avator.jpg',
      sns: {
        facebook: {
          account: 'meteorlxy.cn',
          link: 'https://www.facebook.com/meteorlxy.cn'
        },
        github: {
          account: 'meteorlxy',
          link: 'https://github.com/meteorlxy'
        },
        linkedin: {
          account: 'meteorlxy',
          link: 'http://www.linkedin.com/in/meteorlxy'
        },
        twitter: {
          account: 'meteorlxy_cn',
          link: 'https://twitter.com/meteorlxy_cn'
        },
        weibo: {
          account: '@焦炭君_Meteor',
          link: 'https://weibo.com/u/2039655434'
        }
      }
    },
    // headerBackground priority: url > useGeo
    headerBackground: {
      // url: '/assets/img/bg.jpg',
      useGeo: true
    },
    lastUpdated: true,
    nav: [
      { text: 'Home', link: '/', exact: true },
      { text: 'Posts', link: '/_posts/', exact: false  },
      { text: 'About', link: '/about/', exact: false  },
      { text: 'Team', link: '/team/', exact: false  },
    ]
  },
  markdown: {
    toc: {
      includeLevel: [2, 3, 4]
    }
  },
  chainWebpack: (config, isServer) => {
    if (isServer === false) {
      config.node.set('Buffer', false)

      config.optimization.splitChunks({
        maxInitialRequests: 5,
        cacheGroups: {
          vue: {
            test: /[\\/]node_modules[\\/](vue|vue-router)[\\/]/,
            name: 'vendor.vue',
            chunks: 'all'
          },
          commons: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
            name: 'vendor.commons',
            chunks: 'all'
          }
        }
      })
    }
  }
}
