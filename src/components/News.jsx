import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { parseISO, format } from 'date-fns';
import Section from './Section';
import useNewsItems from '../hooks/newsItems';

const NewsItem = styled.div`
  padding-bottom: 1rem;
`;

const NewsHeader = styled.header`
  font-weight: bold;
  margin-top: 1rem;
`;

const Content = styled.p`
  padding-top: 0.5rem;
`;

const propTypes = {};

const defaultProps = {};

export default function News() {
  const newsItems = useNewsItems();

  return (
    <Section title="News">
      { newsItems.map((newsItem) => (
        <NewsItem key={newsItem.id}>
          <NewsHeader>
            {format(parseISO(newsItem.frontmatter.date), 'PP')} &middot; <em>{newsItem.frontmatter.title}</em>
          </NewsHeader>
          <Content>
            {newsItem.excerpt}
            {' '}
            <Link to={/(\/news\/\d{4}-\d{2}-\d{2}-.+)\.md$/.exec(newsItem.fileAbsolutePath)[1]}>Read more...</Link>
          </Content>
        </NewsItem>
      ))}
    </Section>
  );
}

News.propTypes = propTypes;
News.defaultProps = defaultProps;
