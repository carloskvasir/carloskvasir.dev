const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const result = await graphql(`
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

  if (result.errors) {
    throw result.errors;
  }

  const { data } = result;
  data.allMarkdownRemark.nodes.forEach(node => {
    actions.createPage({
      path: '/posts/' + node.frontmatter.slug,
      component: path.resolve('./src/templates/post-page.jsx'),
      context: { slug: node.frontmatter.slug }
    });
  });
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, 'src/components'),
        '@styles': path.resolve(__dirname, 'src/styles'),
        '@utils': path.resolve(__dirname, 'src/utils'),
        '@templates': path.resolve(__dirname, 'src/templates')
      }
    }
  });
};
