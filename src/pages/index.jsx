import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import Seo from '../components/Seo';

const Home = () => (
  <Layout>
    <Seo
      description="Back-end developer, developing apps and apis"
      keywords="Ruby, Rails, API, developer"
    />
    <header className="has-text-centered">
      <h1 className="title">Carlos Kvasir</h1>
      <h2 className="subtitle">Backend developer</h2>
    </header>
    <section className="section content is-size-4-desktop is-size-5-touch">
      <h4 className="title">Hello, I'm Carlos Lima Junior but in internet aka Carlos Kvasir</h4>
      <p>I'm a Backend Developer and study about devops.</p>
      <p>I develop projects mostly with Ruby on Rails.</p>
      <p>
        {'Check out mostly '}
        <Link to="/projects">projects</Link>
      </p>
    </section>
  </Layout>
);

export default Home;
