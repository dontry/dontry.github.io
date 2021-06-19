/*
 * @Author: caidong
 * @Date:   2018-06-19 15:43:53
 * @Last Modified by:   caidong
 * @Last Modified time: 2018-06-19 15:59:55
 */
import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import MarkdownDoc from '../components/MarkdownDoc';
import Container from '../components/Container';
import Button from '../components/Button';
import Flex from '../components/Flex';
import Layout from '../components/layout';
import { graphql } from 'gatsby';

const ButtonGroup = styled(Flex)`
  margin-top: 50px;
  justify-content: center;
  & button {
    margin-right: 20px;
  }
`;

const BlogPostTemplate = ({ data, location, pathContext }) => {
  const { next, prev } = pathContext;
  const { markdownRemark: post } = data;
  const { frontmatter, html, fields } = post;

  const { title } = frontmatter;

  const meta = {
    date: fields.date,
    tags: frontmatter.tags,
  };

  return (
    <Layout>
      <Container>
        <Helmet title={`${title} - My blog`} />
        <MarkdownDoc title={title} meta={meta} html={html} />
        <ButtonGroup>
          {prev && (
            <Link to={prev.fields.path}>
              <Button>Previous</Button>
            </Link>
          )}
          {next && (
            <Link to={next.fields.path}>
              <Button>Next</Button>
            </Link>
          )}
        </ButtonGroup>
      </Container>
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($id: String!) {
    markdownRemark( id: { eq: $id }) {
      html
      frontmatter {
        title
        tags
        excerpt
      }
      fields {
        date(formatString: "MMMM DD, YYYY")
        path
        slug
      }
    }
  }
`;
