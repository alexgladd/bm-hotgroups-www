import React, { useState } from 'react';
import styled from '@emotion/styled';
import { colors, transitions } from './theme';
import useCaroselImages from '../hooks/caroselImages';

const Frame = styled.div`
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

const Item = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  opacity: 0;
  transition:
    transform ${transitions.timeMs} ease-in-out,
    opacity ${transitions.timeMs} ease-in-out;
  
  ${({ tx }) => `
  transform: translateX(${tx}vw);
  `}
  
  ${({ selected }) => selected && `
  opacity: 1;
  `}
`;

const ItemImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ItemCaption = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${colors.accentTransparent};
  padding: 0.5rem;
  text-align: center;
  font-size: 0.8rem;

  @media (min-width: 768px) {
    font-size: 0.9rem;
  }
`;

const Controls = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ControlBtn = styled.button`
  color: ${colors.primary};
  background-color: ${colors.background};
  width: 20vw;
  font-size: 1.25rem;
  padding: 0;
  border: none;
`;

const Selectors = styled.div`
  flex: 1 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SelectorBtn = styled.button`
  width: 1rem;
  height: 1rem;
  background-color: ${colors.lightPrimary};
  border: none;
  border-radius: 50%;
  margin: 0 0.5rem;

  ${({ active }) => active && `
  background-color: ${colors.accent};
  `}
`;

const Cta = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem 0;
`;

const CtaButton = styled.a`
  padding: 0.5rem 1rem;
  font-size: 1.25rem;
  background-color: ${colors.primary};
  color: ${colors.background};
  border: none;
  border-radius: 6px;
  font-weight: 500;
  box-shadow: 0px 4px 0px ${colors.lightPrimary};
  transform: translateY(2px);
  transition: transform ${transitions.timeMs} ease-in-out;

  &:hover {
    text-decoration: none;
    transform: translateY(0px);
  }
`;

const propTypes = {};

const defaultProps = {};

export default function MainCarosel() {
  const [selected, setSelected] = useState(0);
  const images = useCaroselImages();

  return (
    <section id="carosel">
      <Frame>
        { images.map((img, idx) => (
          <Item selected={idx === selected} tx={(idx - selected) * 100} key={img.title}>
            <ItemImg src={img.src} alt={img.title} />
            <ItemCaption>{img.caption}</ItemCaption>
          </Item>
        ))}
      </Frame>

      <Controls>
        <ControlBtn onClick={() => selected > 0 && setSelected(selected - 1)}>
          <i className="fas fa-chevron-left"></i>
        </ControlBtn>

        <Selectors>
          { images.map((img, idx) => (
            <SelectorBtn
              active={idx === selected}
              onClick={() => setSelected(idx)}
              key={`sbtn-${idx}`} />
          ))}
        </Selectors>

        <ControlBtn onClick={() => selected < images.length - 1 && setSelected(selected + 1)}>
          <i className="fas fa-chevron-right"></i>
          </ControlBtn>
      </Controls>

      <Cta>
        <CtaButton href="https://app.brandmeisteractivity.live/">
          Launch the App
        </CtaButton>
      </Cta>
    </section>
  );
}

MainCarosel.propTypes = propTypes;
MainCarosel.defaultProps = defaultProps;
