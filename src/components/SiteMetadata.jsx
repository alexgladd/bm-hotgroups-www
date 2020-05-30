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
    </Helmet>
  );
}

SiteMetadata.propTypes = propTypes;
SiteMetadata.defaultProps = defaultProps;
