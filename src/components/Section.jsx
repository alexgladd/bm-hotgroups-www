import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { colors, sizes } from './theme';

const SiteSection = styled.section`
  scroll-margin-top: ${sizes.headerSize};

  & h3 {
    font-weight: 500;
  }

  & h3, p {
    padding-top: 1rem;
  }

  & p a {
    color: ${colors.primary};
  }

  ${({ gridSpan }) => gridSpan && `
  @media (min-width: 1024px) {
    grid-column: span 2;
  }
  `}
`;

const SiteSectionHeader = styled.header`
  height: ${sizes.headerSize};
  margin: 0 -1.25rem;
  padding: 0 1.25rem;
  color: ${colors.background};
  background-color: ${colors.primary4};
  display: flex;
  align-items: center;

  & > h2 {
    font-weight: 500;
  }
`;

const propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  span: PropTypes.bool,
};

const defaultProps = {
  span: false,
};

export default function Section({ title, children, span }) {
  return (
    <SiteSection id={title.toLowerCase()} gridSpan={span}>
      <SiteSectionHeader>
        <h2>{ title }</h2>
      </SiteSectionHeader>

      { children }
    </SiteSection>
  );
}

Section.propTypes = propTypes;
Section.defaultProps = defaultProps;
