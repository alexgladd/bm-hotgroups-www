import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import useSiteMetadata from '../hooks/siteMetadata';

const propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  lang: PropTypes.string,
};

const defaultProps = {
  lang: 'en',
  description: '',
};

export default function SiteMetadata({ title, description, lang }) {
  const siteMetadata = useSiteMetadata();

  const metaDescription = description || siteMetadata.description;

  return (
    <Helmet htmlAttributes={{ lang }} title={title} titleTemplate={`${siteMetadata.title} - %s`}>
      <meta property="description" content={metaDescription} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={lang} />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:creator" content={siteMetadata.author} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={metaDescription} />

      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/fontawesome.min.css" integrity="sha256-CuUPKpitgFmSNQuPDL5cEfPOOJT/+bwUlhfumDJ9CI4=" crossorigin="anonymous" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/brands.min.css" integrity="sha256-wfbbsQFYKnizQi/WLPXS3wVDu0Dpi2yUQpZBDsb2H1s=" crossorigin="anonymous" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/solid.min.css" integrity="sha256-pIAzc/BIIo/hSvtNEDIiMTBtR9EfK3COmnH2pt8cPDY=" crossorigin="anonymous" />
    </Helmet>
  );
}

SiteMetadata.propTypes = propTypes;
SiteMetadata.defaultProps = defaultProps;
