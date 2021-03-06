/*
 * Global styles
 */

import { css } from '@emotion/react';

export const colors = {
  primary: '#DD4B39',
  primary2: '#E16251',
  primary3: '#E57567',
  primary4: '#E9887C',
  lightPrimary: '#DE9E8E',
  text: '#382D39',
  accent: '#898695',
  accentTransparent: '#898695ee',
  background: '#F6F1F2',
  backgroundTransparent: '#F6F1F222'
};

export const sizes = {
  headerSize: '3.75rem',
  footerSize: '2.5rem',
};

export const transitions = {
  timeMs: '200ms',
};

export const globalStyles = css`
  body {
    background-color: ${colors.background};
    font-family: 'Noto Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h2 {
    font-size: 1.2rem;
  }

  h3 {
    font-size: 1.1rem;
  }

  button:active, button:focus {
    outline: none;
  }

  a, a:visited {
    color: ${colors.background};
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;

export function getFontStyles(regular, medium, bold) {
  return css`
    @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
    @font-face {
      font-family: 'Noto Sans';
      src: url(${regular.publicURL}) format('truetype');
      font-style: normal;
      font-weight: 400;
      font-display: swap;
    }
    @font-face {
      font-family: 'Noto Sans';
      src: url(${medium.publicURL}) format('truetype');
      font-style: normal;
      font-weight: 500;
      font-display: swap;
    }
    @font-face {
      font-family: 'Noto Sans';
      src: url(${bold.publicURL}) format('truetype');
      font-style: normal;
      font-weight: 700;
      font-display: swap;
    }
  `;
}
