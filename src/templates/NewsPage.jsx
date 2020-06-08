import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { parseISO, format } from 'date-fns';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Section from '../components/Section';

const NewsDate = styled.div`
  font-weight: bold;
  margin-top: 1rem;
`;

const propTypes = {
  path: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
};

const defaultProps = {};

export default function NewsPage({ path, data }) {
  const { markdownRemark: newsItem } = data;
  const date = format(parseISO(newsItem.frontmatter.date), 'PP');

  return (
    <Layout title={newsItem.frontmatter.title} path={path}>
      <Section span title={newsItem.frontmatter.title}>
        <NewsDate>Published: {date}</NewsDate>
        <div dangerouslySetInnerHTML={{ __html: newsItem.html }} />
      </Section>
    </Layout>
  );
}

NewsPage.propTypes = propTypes;
NewsPage.defaultProps = defaultProps;

export const pageQuery = graphql`
  query NewsPage($id: String!) {
    markdownRemark(id: {eq: $id}) {
      frontmatter {
        date
        title
      }
      html
    }
  }
`;
