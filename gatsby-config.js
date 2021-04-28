// Gatsby configuration

module.exports = {
  siteMetadata: {
    title: 'Brandmeister Top Activity',
    description:
      'Brandmeister Top Activity provides a way to see the most active talk groups and users on the Brandmeister DMR network',
    author: '@alexgladd',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
      resolve: `gatsby-transformer-remark`,
      options: {
        excerpt_separator: `<!-- excerpt -->`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-json`,
  ],
};
