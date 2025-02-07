import React from 'react';

import { graphql, Link } from 'gatsby';

import Seo from '@components/Seo';
import Layout from '@components/Layout';

import '../styles/index.scss';

export const Head = () => (
  <Seo
    pageTitle="Posts"
    description="Back-end developer, developing apps and apis"
    keywords="Ruby, Rails, API, developer"
  />
);

const Posts = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes;
  return (
    <Layout>
      <section className="section content is-size-4-desktop is-size-5-touch">
        <h1 className="title">Posts</h1>
        <div>
          {posts.map(post => (
            <Link to={`/posts/${post.frontmatter.slug}`} key={post.id}>
              <div>
                <h2 className="subtitle">{post.frontmatter.title}</h2>
                <p>{post.frontmatter.stack}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query BlogPosts {
    allMarkdownRemark(filter: { frontmatter: { published: { eq: true } } }) {
      nodes {
        frontmatter {
          title
          stack
          slug
        }
        id
      }
    }
  }
`;

export default Posts;
