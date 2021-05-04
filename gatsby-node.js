/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const newsTemplate = path.resolve(`src/templates/NewsPage.jsx`);

  const result = await graphql(`
    query NewsPages {
      allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}, filter: {frontmatter: {tags: {in: "news"}}}) {
        edges {
          node {
            id
            fileAbsolutePath
            parent {
              ... on File {
                modifiedTime
              }
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query for News pages.`)
    return
  }

  const pathRE = /(\/news\/\d{4}-\d{2}-\d{2}-.+)\.md$/;

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const pagePath = pathRE.exec(node.fileAbsolutePath)[1];

    createPage({
      path: pagePath,
      component: newsTemplate,
      context: {
        id: node.id,
        modifiedTime: node.parent.modifiedTime,
      },
    })
  });
}
