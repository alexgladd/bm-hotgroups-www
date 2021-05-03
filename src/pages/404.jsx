import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import Section from '../components/Section';

const NotFoundPage = () => (
  <Layout title="Whoops!">
    <Section span title="404 Not Found">
      <p>Looks like you're lost! Try heading <Link to="/">home</Link>.</p>
    </Section>
  </Layout>
);

export default NotFoundPage;
