/*
 * Site metadata query hook
 */

import { graphql, useStaticQuery } from 'gatsby';

export default function useSiteFonts() {
  const { regular, medium, bold } = useStaticQuery(graphql`
    query Fonts {
      regular: allFile(filter: {sourceInstanceName: {eq: "fonts"}, name: {regex: "/Regular/"}}) {
        edges {
          node {
            publicURL
            name
          }
        }
      },
      medium: allFile(filter: {sourceInstanceName: {eq: "fonts"}, name: {regex: "/Medium/"}}) {
        edges {
          node {
            publicURL
            name
          }
        }
      },
      bold: allFile(filter: {sourceInstanceName: {eq: "fonts"}, name: {regex: "/Bold/"}}) {
        edges {
          node {
            publicURL
            name
          }
        }
      }
    }  
  `);

  return {
    regular: regular.edges[0].node,
    medium: medium.edges[0].node,
    bold: bold.edges[0].node,
  };
}
