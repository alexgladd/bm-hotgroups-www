// Gatsby configuration

module.exports = {
  siteMetadata: {
    title: 'Brandmeister Top Activity',
    description:
      'Brandmeister Top Activity provides a way to see the most active talk groups and users on the Brandmeister DMR network',
    author: '@alexgladd',
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-json`,
    `gatsby-plugin-fontawesome-css`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `About Brandmeister Top Activity`,
        short_name: `Brandmeister Top Activity`,
        start_url: `/`,
        background_color: `#F6F1F2`,
        theme_color: `#DD4B39`,
        display: `standalone`,
        icon: `src/images/site-icon.png`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `fonts`,
        path: `${__dirname}/src/fonts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `news`,
        path: `${__dirname}/src/news`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `caroselImages`,
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `screenshots`,
        path: `${__dirname}/src/images`,
        ignore: [`**/site-icon.png`],
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        excerpt_separator: `<!-- excerpt -->`,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          'G-XQ1WPKS4XJ', // analytics
        ],
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 30 * 24 * 60 * 60,
          // debug_mode: true,
        },
        pluginConfig: {
          head: true,
        },
      },
    },
  ],
};
