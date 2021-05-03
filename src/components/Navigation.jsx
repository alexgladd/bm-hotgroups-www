import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-gtag';
import { colors, sizes, transitions } from './theme';
import ga from './gaEvents';

const SiteNav = styled.nav`
  position: absolute;
  top: ${sizes.headerSize};
  right: 0;
  background-color: ${colors.primary};
  box-shadow: -2px 4px 4px rgba(0, 0, 0, 0.25);
  font-size: 1.2rem;
  font-weight: 500;
  visibility: hidden;
  opacity: 0;
  transition:
    visibility 0s ${transitions.timeMs},
    opacity ${transitions.timeMs} ease-in-out;
  
  ${({ show }) => show && `
  visibility: visible;
  opacity: 1;
  transition:
    visibility 0s 0s;
  `}
  
  @media (min-width: 425px) {
    font-size: 1.25rem;
  }

  @media (min-width: 768px) {
    font-size: 1.4rem;
  }

  @media (min-width: 1024px) {
    position: static;
    top: unset;
    right: unset;
    visibility: visible;
    opacity: 1;
    transition: none;
    box-shadow: none;
  }
`;

const NavList = styled.ul`
  @media (min-width: 1024px) {
    display: flex;
  }
`;

const NavItem = styled.li`
  & > a {
    height: ${sizes.headerSize};
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    padding: 0 1rem;
    background-color: ${colors.primary};
    transition:
      background-color ${transitions.timeMs} ease-in-out;
  }

  & > a:hover, a:focus {
    text-decoration: none;
    background-color: ${colors.backgroundTransparent};
  }
`;

const propTypes = {
  showNav: PropTypes.bool,
  onClose: PropTypes.func,
  path: PropTypes.string,
};

const defaultProps = {
  showNav: true,
  onClose: undefined,
  path: '/',
};

export default function Navigation({ showNav, onClose, path }) {
  return (
    <SiteNav show={showNav} onClick={onClose} role="navigation">
      <NavList>
        <NavItem>
          <OutboundLink href="https://app.brandmeisteractivity.live/" onClick={ga.sendLaunchCtaFromNav}>
            Launch the App
          </OutboundLink>
        </NavItem>
        
        { path !== '/' &&
        <NavItem>
          <Link to="/">Home</Link>
        </NavItem>
        }

        <NavItem>
          <a href="/#about">About</a>
        </NavItem>

        <NavItem>
          <a href="/#news">News</a>
        </NavItem>

        <NavItem>
          <a href="/#support">Support</a>
        </NavItem>
      </NavList>
    </SiteNav>
  );
}

Navigation.propTypes = propTypes;
Navigation.defaultProps = defaultProps;
