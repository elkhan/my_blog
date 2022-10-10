// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Personal Blog',
  tagline: 'JavaScript and all that comes with it',
  url: 'https://elkhan.me',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'elkhan', // Usually your GitHub org/user name.
  projectName: 'my_blog', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Elkhan.me',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'javascript',
            position: 'left',
            label: 'JavaScript',
          },
          {
            type: 'doc',
            docId: 'algorithms',
            position: 'left',
            label: 'Algorithms',
          },
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Intro',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/elkhan/my_blog',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Interview preparation',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Social',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/elkhanme',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/elkhan',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Elkhan.me, Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
}

module.exports = config
