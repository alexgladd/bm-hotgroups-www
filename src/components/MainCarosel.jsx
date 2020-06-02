import React from 'react';
import styled from '@emotion/styled';

const CaroselFrame = styled.div`
  position: relative;
  height: 200px;
  margin-bottom: 1rem;
  overflow: hidden;

  @media (min-width: 425px) {
    height: 250px;
  }

  @media (min-width: 768px) {
    height: 400px;
  }
`;

const propTypes = {};

const defaultProps = {};

export default function MainCarosel() {
  return (
    <section id="carosel">
      <CaroselFrame>Hello carosel!</CaroselFrame>
    </section>
  );
}

MainCarosel.propTypes = propTypes;
MainCarosel.defaultProps = defaultProps;
