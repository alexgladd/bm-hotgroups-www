/*
 * Site metadata query hook
 */

import { graphql, useStaticQuery } from 'gatsby';

export default function useSiteMetadata() {
  const { site } = useStaticQuery(graphql`
    query SiteMetadata {
      site {
        siteMetadata {
          author
          description
          title
        }
      }
    }
  `);

  return site.siteMetadata;
}
