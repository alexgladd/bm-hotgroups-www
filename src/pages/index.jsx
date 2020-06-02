import React from 'react';
import styled from '@emotion/styled';
import Layout from '../components/Layout';
import Section from '../components/Section';
import MainCarosel from '../components/MainCarosel';
import SupportBtn from '../components/SupportBtn';

const Center = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

const IndexPage = ({ location }) => (
  <Layout title="About" path={location.pathname}>
    <MainCarosel />

    <Section title="About">
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Amet justo donec enim diam vulputate ut pharetra sit. Fermentum
      et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Magna eget est lorem ipsum
      dolor sit amet.
      </p>

      <p>
        This app is open-source on
        {' '}
        <a href="https://github.com/alexgladd/bm-hotgroups" target="_blank" rel="noopener noreferrer">
          Github
          {' '}
          <i className="fab fa-github"></i>
        </a>
      </p>
    </Section>

    <Section title="News">
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Amet justo donec enim diam vulputate ut pharetra sit. Fermentum
      et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Magna eget est lorem ipsum
      dolor sit amet.
      </p>
    </Section>

    <Section title="Support">
      <p>
        If you like my Brandmeister Top Activity app and find it useful, consider buying me a
        coffee. Thanks for your support!
      </p>

      <Center>
        <SupportBtn />
      </Center>
    </Section>
  </Layout>
);

export default IndexPage;
