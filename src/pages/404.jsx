import React from 'react';

import Layout from '@components/Layout';
import Seo from '@components/Seo';

import '../styles/home.scss';

export const Head = () => (
  <Seo
    pageTitle="404: Not Found"
    description="404: Not Found"
    keywords="404, not-found"
  />
);

const NotFoundPage = () => (
  <Layout>
    <section className="section">
      <h1 className="title has-text-centered">404: Not Found</h1>
      <hr />
      <p className="has-text-centered">You just hit a route that does not exist.</p>
    </section>
  </Layout>
);

export default NotFoundPage;
