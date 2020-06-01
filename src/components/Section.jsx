import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { colors, sizes } from './theme';

const SiteSection = styled.section`
  & > p {
    padding-top: 1rem;
  }

  & p a {
    color: ${colors.primary};
  }
`;

const SiteSectionHeader = styled.header`
  height: ${sizes.headerSize};
  margin: 0 -1.25rem;
  padding: 0 1.25rem;
  color: ${colors.background};
  background-color: ${colors.primary4};
  display: flex;
  align-items: center;
`;

const propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const defaultProps = {};

export default function Section({ title, children }) {
  return (
    <SiteSection id={title.toLowerCase()}>
      <SiteSectionHeader>
        <h2>{ title }</h2>
      </SiteSectionHeader>

      { children }
    </SiteSection>
  );
}

Section.propTypes = propTypes;
Section.defaultProps = defaultProps;
