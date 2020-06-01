import React from 'react';
import PropTypes from 'prop-types';
import { Global } from '@emotion/core';
import styled from '@emotion/styled';
import SiteMetadata from './SiteMetadata';
import Header from './Header';
import useSiteFonts from '../hooks/siteFonts';
import { sizes, getFontStyles, globalStyles } from './theme';
import './reset.css';
import Footer from './Footer';

const SiteMain = styled.main`
  margin-top: ${sizes.headerSize};
  padding: 1.25rem;
  min-height: calc(100vh - ${sizes.headerSize} - ${sizes.footerSize});
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  gap: 1rem;

  @media (min-width: 1024px) {
    grid-template-columns: 2fr 1fr;
  }
`;

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

      <Header />

      <SiteMain>
        { children }
      </SiteMain>

      <Footer />
    </>
  );
}

Layout.propTypes = propTypes;
Layout.defaultProps = defaultProps;
