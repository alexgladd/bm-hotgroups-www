import React from 'react';
import PropTypes from 'prop-types';
import { Global } from '@emotion/core';
import Header from './header';
import SiteMetadata from './SiteMetadata';
import useSiteFonts from '../hooks/siteFonts';
import { getFontStyles, globalStyles } from './theme';
import './reset.css';

const propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const defaultProps = {};

export default function Layout({ title, children }) {
  const fonts = useSiteFonts();
  const fontStyles = getFontStyles(fonts.regular, fonts.medium, fonts.bold);

  return (
    <>
      <SiteMetadata title={title} />
      <Global styles={fontStyles} />
      <Global styles={globalStyles} />

      <Header siteTitle={title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  );
}

Layout.propTypes = propTypes;
Layout.defaultProps = defaultProps;
