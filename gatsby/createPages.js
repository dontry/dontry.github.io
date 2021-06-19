const path = require('path');
const createArchivePages = require('./createArchivePages');

// #Create pages in gatsby-node.js: https://www.gatsbyjs.org/docs/creating-and-modifying-pages/
module.exports = async ({ actions, graphql }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve(
    __dirname,
    '../src/templates/blog-post.js'
  );

  const portfoliosTemplate = path.resolve(
    __dirname,
    '../src/templates/portfolios.js'
  );

  const res = await graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            frontmatter {
              title
              excerpt
              tags
            }
            fields {
              path
            }
          }
        }
      }
    }
  `);

  if (res.errors) {
    return Promise.reject(res.errors);
  }

  const posts = res.data.allMarkdownRemark.edges;

  posts.forEach(({ node }, index) => {
    const id = node.id
    const path = node.fields.path;
    const prev = index === posts.length - 1 ? null : posts[index + 1].node;
    const next = index === 0 ? null : posts[index - 1].node;

    createPage({
      path: path,
      component: blogPostTemplate,
      context: {
        id,
        prev,
        next,
      },
    });
  });

  createArchivePages(createPage, posts);

  // portfoliosPage
  createPage({
    path: '/portfolios',
    component: portfoliosTemplate,
  });
};
