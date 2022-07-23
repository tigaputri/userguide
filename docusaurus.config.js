// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'TigaPutri',
  tagline: 'Automatic Recharge System',
  url: 'https://tigaputri.asia',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // baseUrl: '/'
  //baseUrl: '/webreport-userguide/',
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'tigaputri', // Usually your GitHub org/user name.
  projectName: 'userguide', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'id',
    locales: ['id'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
            //'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
        title: 'TigaPutri',
        logo: {
          alt: 'Logo TigaPutri',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'User Guide',
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
                label: 'User Guide',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Software TigaPutri',
                href: 'https://tigaputri.asia/harga-software-tigaputri/',
              },
              {
                label: 'Fitur-fitur',
                href: 'https://tigaputri.asia/tigaputri-software-pulsa/fitur-utama-software-tigaputri/',
              },
              {
                label: 'Downloads',
                href: 'https://tigaputri.asia/tigaputri-software-pulsa/download-software-pulsa-gratis/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Marketing',
                href: 'https://tigaputri.asia/tigaputri-software-pulsa/support-dan-marketing/',
              },
              {
                label: 'Kontak',
                href: 'https://tigaputri.asia/tigaputri-software-pulsa/kontak-tigaputri/',
              },
              {
                label: 'Website',
                href: 'https://tigaputri.asia',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} TigaPutri. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
