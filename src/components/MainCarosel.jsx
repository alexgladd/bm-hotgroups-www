import React, { useState } from 'react';
import styled from '@emotion/styled';
import { GatsbyImage } from 'gatsby-plugin-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { colors, transitions } from './theme';
import useCaroselImages from '../hooks/caroselImages';

const Section = styled.section`
  @media (min-width: 1024px) {
    margin-right: 1rem;
  }
`;

const Frame = styled.div`
  position: relative;
  height: 175px;
  margin-bottom: 1rem;
  border: 2px solid ${colors.accent};
  overflow: hidden;

  @media (min-width: 375px) {
    height: 208px;
  }

  @media (min-width: 425px) {
    height: 240px;
  }

  @media (min-width: 768px) {
    height: 455px;
  }

  @media (min-width: 1024px) {
    height: 402px;
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
  const { images, screenshots } = useCaroselImages();

  return (
    <Section id="carosel">
      <Frame>
        { images.map((img, idx) => (
          <Item selected={idx === selected} tx={(idx - selected) * 100} key={img.title}>
            <GatsbyImage
              image={screenshots[img.src]}
              alt={img.title}
              loading={idx === 0 ? 'eager' : 'lazy'}
            />
            <ItemCaption>{img.caption}</ItemCaption>
          </Item>
        ))}
      </Frame>

      <Controls>
        <ControlBtn onClick={() => selected > 0 && setSelected(selected - 1)}>
          <FontAwesomeIcon icon={faChevronLeft} />
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
          <FontAwesomeIcon icon={faChevronRight} />
        </ControlBtn>
      </Controls>

      <Cta>
        <CtaButton href="https://app.brandmeisteractivity.live/">
          Launch the App
        </CtaButton>
      </Cta>
    </Section>
  );
}

MainCarosel.propTypes = propTypes;
MainCarosel.defaultProps = defaultProps;
