import React from 'react';
import Container from '../components/Container';
import Flex from '../components/Flex';
import ArchiveSidebar from './components/ArchiveSidebar';
import MarkdownExcerpt from '../components/MarkdownExcerpt';
import Layout from '../components/layout';

const Years = ({ pathContext }) => {
  const { tags, nums, posts, years, year } = pathContext;

  return (
    <Layout>
      <Flex>
        <ArchiveSidebar tags={tags} nums={nums} years={years} />
        <Container>
          {
            <div style={{ marginBottom: 50 }}>
              <h1 style={{ marginBottom: 10 }}>{year}</h1>
              {posts.map(post => (
                <MarkdownExcerpt key={post.frontmatter.title} post={post} />
              ))}
            </div>
          }
        </Container>
      </Flex>
    </Layout>
  );
};

export default Years;
