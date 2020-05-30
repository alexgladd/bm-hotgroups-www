// Gatsby configuration

module.exports = {
  siteMetadata: {
    title: 'Brandmeister Top Activity',
    description:
      'Brandmeister Top Activity provides a way to see the most active talk groups and users on the Brandmeister DMR network',
    author: `@alexgladd`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
};
