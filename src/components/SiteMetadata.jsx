import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import useSiteMetadata from '../hooks/siteMetadata';
import useSiteFonts from '../hooks/siteFonts';

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
  const fonts = useSiteFonts();
  const siteMetadata = useSiteMetadata();

  const metaDescription = description || siteMetadata.description;

  return (
    <Helmet htmlAttributes={{ lang }} title={title} titleTemplate={`${siteMetadata.title} - %s`}>
      <meta name="description" property="og:description" content={metaDescription} />
      <meta name="keywords" content="brandmeister activity, brandmeister talkgroups live, brandmeister talkgroups, brandmeister, brandmeister live, best brandmeister talkgroups"></meta>
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={lang} />
      <meta property="twitter:card" content="summary" />
      <meta name="twitter:creator" content={siteMetadata.author} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      {/* Preload fonts */}
      <link rel="preload" as="font" href={fonts.regular.publicURL} crossOrigin="anonymous" />
      <link rel="preload" as="font" href={fonts.medium.publicURL} crossOrigin="anonymous" />
      <link rel="preload" as="font" href={fonts.bold.publicURL} crossOrigin="anonymous" />
    </Helmet>
  );
}

SiteMetadata.propTypes = propTypes;
SiteMetadata.defaultProps = defaultProps;
