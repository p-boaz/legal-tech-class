module.exports = {
  title: 'Docassemble Open Class',
  tagline: 'A collaboratively-built class for teaching Docassemble',
  url: 'https://nonprofittechy.github.io',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'nonprofittechy', // Usually your GitHub org/user name.
  projectName: 'docassemble-class', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Docassemble Class',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      links: [
        {to: 'docs/introduction', label: 'Docs', position: 'left'},
        /*{to: 'blog', label: 'Blog', position: 'left'},*/
        {href: 'https://docassemble.org/docs.html',
         label: 'Official Documentation',
         position: 'left'
        },
        {
          href: 'https://github.com/nonprofittechy/docassemble-class',
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
              label: 'Overview of Docassemble',
              to: 'docs/introduction',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Slack',
              href: 'https://docassemble.org/docs/support.html#tocAnchor-1-1',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Blog',
              href: 'https://nonprofittechy.com',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/nonprofittechy/docassemble-class',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/qsteenhuis',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Quinten Steenhuis. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
