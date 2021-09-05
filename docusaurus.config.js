const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'Food Lib',
  tagline: 'Here you can Record and reminders Ingredients.',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'nasawz', // Usually your GitHub org/user name.
  projectName: 'foodlib-website', // Usually your repo name.
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-cn'],
  },
  // clientModules: [
  //   require.resolve('./mySiteGlobalJs.js'),
  //   require.resolve('./mySiteGlobalCss.css'),
  // ],
  scripts: [
    "/js/vendor/modernizr-3.5.0.min.js",
    "/js/vendor/jquery-1.12.4.min.js",
    "/js/popper.min.js",
    "/js/bootstrap.min.js",
    "/js/owl.carousel.min.js",
    "/js/isotope.pkgd.min.js",
    "/js/one-page-nav-min.js",
    "/js/slick.min.js",
    "/js/jquery.meanmenu.min.js",
    "/js/ajax-form.js",
    "/js/wow.min.js",
    "/js/jquery.scrollUp.min.js",
    "/js/imagesloaded.pkgd.min.js",
    "/js/jquery.magnific-popup.min.js",
    "/js/plugins.js",
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/nasawz/foodlib-website/edit/main/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/nasawz/foodlib-website/edit/main/website/blog/',
        },
        theme: {
          customCss: [
            require.resolve('./src/styles/css/custom.css'),
            require.resolve('./src/styles/css/bootstrap.min.css'),
            require.resolve('./src/styles/css/owl.carousel.min.css'),
            require.resolve('./src/styles/css/animate.min.css'),
            require.resolve('./src/styles/css/magnific-popup.css'),
            require.resolve('./src/styles/css/fontawesome-all.min.css'),
            require.resolve('./src/styles/css/themify-icons.css'),
            require.resolve('./src/styles/css/meanmenu.css'),
            require.resolve('./src/styles/css/slick.css'),
            require.resolve('./src/styles/css/responsive.css'),
            require.resolve('./src/styles/css/style.css'),
          ],
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'FoodLib',
        logo: {
          alt: 'Foodlib Logo',
          src: 'img/logo.svg',
        },
        items: [
          // {
          //   type: 'doc',
          //   docId: 'intro',
          //   position: 'left',
          //   label: 'Tutorial',
          // },
          // { to: '/blog', label: 'Blog', position: 'left' },
          // {
          //   href: 'https://github.com/nasawz/foodlib-website',
          //   label: 'GitHub',
          //   position: 'right',
          // },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          // {
          //   title: 'Docs',
          //   items: [
          //     {
          //       label: 'Tutorial',
          //       to: '/docs/intro',
          //     },
          //   ],
          // },
          // {
          //   title: 'Community',
          //   items: [
          //     {
          //       label: 'Stack Overflow',
          //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
          //     },
          //     {
          //       label: 'Discord',
          //       href: 'https://discordapp.com/invite/docusaurus',
          //     },
          //     {
          //       label: 'Twitter',
          //       href: 'https://twitter.com/docusaurus',
          //     },
          //   ],
          // },
          // {
          //   title: 'More',
          //   items: [
          //     {
          //       label: 'Blog',
          //       to: '/blog',
          //     },
          //     {
          //       label: 'GitHub',
          //       href: 'https://github.com/nasawz/foodlib-website',
          //     },
          //   ],
          // },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Foodlib, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
});
