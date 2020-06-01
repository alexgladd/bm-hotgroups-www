import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { colors, sizes, transitions } from './theme';

const SiteNav = styled.nav`
  position: absolute;
  top: ${sizes.headerSize};
  right: 0;
  background-color: ${colors.primary};
  box-shadow: -2px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 0.5rem 1rem;
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
    padding: unset;
  }
`;

const NavList = styled.ul`
  @media (min-width: 1024px) {
    display: flex;
  }
`;

const NavItem = styled.li`
  padding: 0.5rem 0;

  @media (min-width: 1024px) {
    display: block;
    padding: unset;
    margin-left: 2rem;
  }
`;

const propTypes = {
  showNav: PropTypes.bool,
};

const defaultProps = {
  showNav: true,
};

export default function Navigation({ showNav }) {
  return (
    <SiteNav show={showNav} role="navigation">
      <NavList>
        <NavItem>
          <a href="https://app.brandmeisteractivity.live/">Launch the App</a>
        </NavItem>
        
        { window.location.pathname !== '/' &&
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
