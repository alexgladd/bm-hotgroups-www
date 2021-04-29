import React from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Layout from '../components/Layout';
import Section from '../components/Section';
import MainCarosel from '../components/MainCarosel';
import News from '../components/News';
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
        The <a href="https://brandmeister.network/" target="_blank" rel="noopener noreferrer">Brandmeister</a> network
        provides a fun way to connect with amateur radio enthusiasts across
        the globe without needing to invest in expensive high-frequency (HF) equipment. There are lots
        of different talkgroups on the network ranging from local to global and a variety of special
        interests, but as a new user, it can be hard to figure out what talkgroups exist and which are
        the most active.
      </p>

      <p>
        <em>Brandmeister Top Activity</em> provides a way to see current activity and the most
        active talkgroups and users on the Brandmeister network so you can join the
        conversation! I created this app because I was once a new Brandmeister user myself, and
        found it hard to figure out which talkgroups were active so I could test my setup and
        eventually start chatting. I hope you enjoy it!
      </p>

      <p>
        The app is open-source on
        {' '}
        <a href="https://github.com/alexgladd/bm-hotgroups" target="_blank" rel="noopener noreferrer">
          Github
          {' '}
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </p>
    </Section>

    <News />

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
