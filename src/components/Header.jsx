import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Navigation from './Navigation';
import { colors, sizes } from './theme';
import burgerMenu from './burger-menu.svg';

const SiteHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
  height: ${sizes.headerSize};
  background-color: ${colors.primary};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  color: ${colors.background};
`;

const SiteTitle = styled.h1`
  flex: 1 0 auto;
  font-size: 1.2rem;
  font-weight: 700;

  @media (min-width: 425px) {
    font-size: 1.3rem;
  }

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const SiteMenu = styled.div`
  cursor: pointer;
  height: 1.25rem;

  @media (min-width: 1024px) {
    display: none;
  }
`;

const BurgerMenu = styled.img`
  width: 2rem;
  height: 1.25rem;
`;

const propTypes = {
  path: PropTypes.string,
};

const defaultProps = {
  path: '/',
};

export default function Header({ path }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <SiteHeader>
      <SiteTitle>
        <i className="fas fa-broadcast-tower"></i>
        &nbsp;&nbsp;
        Brandmeister Top Activity
      </SiteTitle>

      <SiteMenu onClick={() => setMenuOpen(!menuOpen)}>
        <BurgerMenu src={burgerMenu} alt="Hamburger menu" />
      </SiteMenu>

      <Navigation path={path} showNav={menuOpen} onClose={() => setMenuOpen(false)} />
    </SiteHeader>
  );
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;
