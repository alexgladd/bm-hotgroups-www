import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';

const NotFoundPage = () => (
  <Layout title="Whoops!">
    <h1>NOT FOUND</h1>
    <p>Looks like you're lost! Try heading <Link to="/">home</Link>.</p>
  </Layout>
);

export default NotFoundPage;
