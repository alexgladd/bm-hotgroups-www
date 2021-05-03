import React from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { OutboundLink } from 'gatsby-plugin-google-gtag';
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
          <FontAwesomeIcon icon={faTag} />
          {' '}
          { pkg.version }
        </SiteVersion>
        <OutboundLink href="https://github.com/alexgladd/bm-hotgroups-www" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </OutboundLink>
      </div>

      <div>
        © {new Date().getFullYear()} Alex Gladd
      </div>
    </SiteFooter>
  );
}

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;
