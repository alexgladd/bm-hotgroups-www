/*
 * Carosel images query hook
 */

import { graphql, useStaticQuery } from 'gatsby';

export default function useCaroselImages() {
  const { allCaroselImagesJson, allFile } = useStaticQuery(graphql`
    query CaroselImagesAndScreenshots {
      allCaroselImagesJson {
        edges {
          node {
            src
            title
            caption
          }
        }
      }
      allFile(filter: {sourceInstanceName: {eq: "screenshots"}}) {
        edges {
          node {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
            relativePath
          }
        }
      }
    }
  `);

  const images = allCaroselImagesJson.edges.map((img) => img.node);
  const screenshots = allFile.edges.reduce((acc, f) => {
    acc[f.node.relativePath] = f.node.childImageSharp.gatsbyImageData;
    return acc;
  }, {});

  return {
    images,
    screenshots,
  };
}

// export function useScreenshots() {
//   const { allFile } = useStaticQuery(graphql`
//     query Screenshots {
      
//     }
//   `);

//   return allFile.edges.reduce((acc, f) => {
//     acc[f.node.relativePath] = f.node.childImageSharp.gatsbyImageData;
//     return acc;
//   }, {});
// }
