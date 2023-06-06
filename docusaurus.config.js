// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
require('dotenv').config()

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Codex',
  url: 'https://codex.storage/',
  baseUrl: '/',

  customFields: {},

  markdown: {
    mermaid: true,
  },

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      '@acid-info/logos-docusaurus-preset',
      /** @type {import('@acid-info/logos-docusaurus-preset').PluginOptions} */
      ({
        businessUnit: 'Codex',
        theme: {
          name: 'default',
          options: {
            customCss: [require.resolve('./src/css/custom.scss')],
            docs: {
              default: {
                sidebar: {
                  hide: false,
                },
              },
            },
          },
        },
        docs: {
          routeBasePath: '/',
          path: 'root-pages',
        },
      }),
    ],
  ],
  themes: ['@docusaurus/theme-mermaid'],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'about',
        routeBasePath: '/about',
        path: 'about',
      },
    ],
  ],

  themeConfig:
  /** @type {import('@acid-info/logos-docusaurus-preset').ThemeConfig} */
      ({
        navbar: {
          hideOnScroll: true,
          items: [
            {
              type: 'search',
            },
            {
              label: 'About',
              to: '/about',
            },
            {
              label: 'Docs',
              href: 'https://docs.your.domain',
            },
            {
              label: 'Github',
              href: 'https://github.com/<GITHUB_HANDLE>',
            },
          ],
        },
        footer: {
          copyright: '<BU name> @2023<br/>All Rights Reserved.',
          links: [
            {
              items: [
                {
                  href: 'https://twitter.com/<TWITTER_HANDLE>',
                  label: 'Twitter',
                },
                {
                  href: 'https://discord.gg/<DISCORD_HANDLE>',
                  label: 'Discord',
                },
                {
                  href: '/',
                  label: 'Docs',
                },
                {
                  href: 'https://github.com/<GITHUB_HANDLE>',
                  label: 'Github',
                },
              ],
            },
            {
              items: [
                {
                  href: '/',
                  label: 'Contact us',
                },
                {
                  href: 'https://jobs.status.im/',
                  label: 'Work with us',
                },
                {
                  href: '/terms',
                  label: 'Terms & conditions',
                },
              ],
            },
          ],
        },
      }),
}

module.exports = config
