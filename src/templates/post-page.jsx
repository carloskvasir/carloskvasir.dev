import React from 'react';

import { Link } from 'gatsby';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';

export default function PostPage({ data }) {
  const { html } = data.markdownRemark;
  const { title, stack } = data.markdownRemark.frontmatter;

  return (
    <Layout>
      <Seo
        pageTitle={title}
        description="Back-end developer, developing apps and apis"
        keywords="Ruby, Rails, API, developer"
      />
      <section className="section content is-size-4-desktop is-size-5-touch">
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <p>
          {'Check out mostly '}
          <Link to="/posts">Posts</Link>
        </p>
      </section>
    </Layout>
  );
}

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
