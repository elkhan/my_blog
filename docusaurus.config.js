// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import("@docusaurus/types").Config} */
const config = {
  title: 'Blog',
  tagline: 'DSA, JavaScript and all that comes with it',
  url: 'https://elkhan.me',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'elkhan', // Usually your GitHub org/username.
  projectName: 'my_blog', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en']
  },

  presets: [
    [
      'classic',
      /** @type {import("@docusaurus/preset-classic").Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js')
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        },
        blog: { routeBasePath: '/' }
      })
    ]
  ],

  themeConfig:
    /** @type {import("@docusaurus/preset-classic").ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true
        }
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true
      },
      navbar: {
        title: 'Elkhan.me',
        items: [
          {
            type: 'doc',
            docId: 'index',
            position: 'left',
            label: 'Reference'
          },
          {
            to: '/tags',
            position: 'left',
            label: 'Tags'
          },
          {
            href: 'https://github.com/elkhan/my_blog',
            className: 'header-github-link',
            position: 'right',
            'aria-label': 'GitHub repository'
          },
          {
            href: 'https://twitter.com/elkhanme',
            className: 'header-twitter-link',
            position: 'right',
            'aria-label': 'Twitter'
          }
        ]
      },
      footer: {
        style: 'light',
        copyright: `Copyright © ${new Date().getFullYear()} Elkhan.me, Built with Docusaurus.`
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme
      }
    })
}

module.exports = config
