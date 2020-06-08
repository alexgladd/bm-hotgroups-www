/*
 * News items hook
 */

import { graphql, useStaticQuery } from 'gatsby';

export default function useNewsItems() {
  const { allMarkdownRemark: newsItems } = useStaticQuery(graphql`
    query NewsItems {
      allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}, filter: {frontmatter: {tags: {in: "news"}}}) {
        edges {
          node {
            id
            fileAbsolutePath
            excerpt
            frontmatter {
              date
              title
            }
          }
        }
      }
    }
  `);

  return newsItems.edges.map((newsItem) => newsItem.node);
}
