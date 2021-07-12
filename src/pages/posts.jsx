import React from 'react';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import { graphql, Link } from 'gatsby';

export default function Posts({ data }) {
  console.log(data);
  const posts = data.allMarkdownRemark.nodes;
  return (
    <Layout>
      <Seo
        pageTitle="Posts"
        description="Back-end developer, developing apps and apis"
        keywords="Ruby, Rails, API, developer"
      />
      <h1>Posts</h1>
      <div>
        {posts.map(post => (
          <Link to={`/posts/${post.frontmatter.slug}`} key={post.id}>
            <div>
              <h3>{post.frontmatter.title}</h3>
              <p>{post.frontmatter.stack}</p>
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  );
}

export const query = graphql`
  query BlogPosts {
    allMarkdownRemark {
      nodes {
        frontmatter {
          title
          stack
          slug
          plublished
        }
        id
      }
    }
  }
`;
