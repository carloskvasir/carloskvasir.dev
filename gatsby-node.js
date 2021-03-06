const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query BlogPosts {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `);

  data.allMarkdownRemark.nodes.forEach(node => {
    actions.createPage({
      path: '/posts/' + node.frontmatter.slug,
      component: path.resolve('./src/templates/post-page.jsx'),
      context: { slug: node.frontmatter.slug }
    });
  });
};
