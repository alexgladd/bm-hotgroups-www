/*
 * Carosel images query hook
 */

import { graphql, useStaticQuery } from 'gatsby';

export default function useCaroselImages() {
  const { allCaroselImagesJson } = useStaticQuery(graphql`
    query CaroselImages {
      allCaroselImagesJson {
        edges {
          node {
            src
            title
            caption
          }
        }
      }
    }
  `);

  return allCaroselImagesJson.edges.map((img) => img.node);
}
