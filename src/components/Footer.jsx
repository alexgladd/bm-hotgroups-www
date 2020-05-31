import React from 'react';
import styled from '@emotion/styled';
import { colors, sizes } from './theme';
import pkg from '../../package.json';

const SiteFooter = styled.footer`
  height: ${sizes.footerSize};
  padding: 0 1.25rem;
  font-size: 0.9rem;
  background-color: ${colors.text};
  color: ${colors.accent};
  display: flex;
  justify-content: space-between;
  align-items: center;

  & a {
    color: ${colors.accent};
  }

  & a:hover {
    color: ${colors.background};
  }
`;

const SiteVersion = styled.div`
  display: inline;
  margin-right: 0.5rem;
`;

const propTypes = {};

const defaultProps = {};

export default function Footer() {
  return (
    <SiteFooter>
      <div>
        <SiteVersion>
          <i className="fas fa-tag"></i>
          {' '}
          { pkg.version }
        </SiteVersion>
        <a href="https://github.com/alexgladd/bm-hotgroups-www" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
      </div>

      <div>
        © {new Date().getFullYear()} Alex Gladd
      </div>
    </SiteFooter>
  );
}

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;
