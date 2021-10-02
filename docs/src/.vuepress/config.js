const { description } = require('../../package');

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'KeyLimePie',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Guide',
        link: '/guide/'
      },
      {
        text: 'Services',
        link: '/services/'
      },
      {
        text: 'API',
        link: '/api/'
      },
      {
        text: 'GitHub',
        link: 'https://github.com/mGGk-fr/keylimepie'
      },
      {
        text: 'NPM',
        link: 'https://www.npmjs.com/package/keylimepie'
      }
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Installation',
          collapsable: false,
          children: [
            ['from-js-file', 'From JS File'],
            ['from-npm', 'From NPM']
          ]
        },
        {
          title: 'How to use',
          collapsable: false,
          children: ['how-to-use']
        },
        {
          title: 'Advanced',
          collapsable: false,
          children: [['add-custom-service', 'Add custom service']]
        }
      ],
      '/services/': [
        {
          title: 'Analytics',
          collapsable: true,
          children: ['hotjar']
        },
        {
          title: 'Api',
          collapsable: true,
          children: ['googletagmanager']
        }
      ],
      '/api/': [
        {
          title: 'Classes',
          collapsable: true,
          children: ['key-lime-pie']
        },
        {
          title: 'Types',
          collapsable: true,
          children: ['service']
        }
      ]
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: ['@vuepress/plugin-back-to-top', '@vuepress/plugin-medium-zoom']
};
