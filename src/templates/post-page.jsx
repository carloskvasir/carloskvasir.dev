import React from 'react';
import { Link, graphql } from 'gatsby';

import Seo from '@components/Seo';
import Layout from '@components/Layout';

export const Head = ({ data }) => {
  const { title, stack } = data.markdownRemark.frontmatter;
  return (
    <Seo
      pageTitle={title}
      description="Back-end developer, developing apps and apis"
      keywords={stack}
    />
  );
};


const PostPage = ({ data }) => {
  const {
    markdownRemark: { html }
  } = data;

  return (
    <Layout>
      <section className="section content is-size-4-desktop is-size-5-touch">
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <p>
          Check out mostly <Link to="/posts">Posts</Link>
        </p>
      </section>
    </Layout>
  );
};

export default PostPage;

export const query = graphql`
  query BlogPost($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        stack
        title
      }
    }
  }
`;
