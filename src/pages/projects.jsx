import React from 'react';

import Seo from '../components/Seo';
import Layout from '../components/Layout';

const Projects = () => (
  <Layout>
    <Seo pageTitle="Projects" />
    <section className="section is-size-4-desktop is-size-5-touch">
      <h1 className="title has-text-centered">Projects</h1>
      <hr />
      <p className="has-text-centered">
        {'Some of my projects, see more on my '}
        <a href="http://github.com/carloskvasir">GitHub</a>
      </p>
      <ul className="has-text-centered">
        <li>
          <a href="https://github.com/carloskvasir/terraform-in-action">Terraform</a>
        </li>
        <li>
          <a href="https://github.com/carloskvasir/terraform-in-action">Terraform 1</a>
        </li>
        <li>
          <a href="https://github.com/carloskvasir/terraform-in-action">Terraform 2</a>
        </li>
      </ul>
    </section>
  </Layout>
);

export default Projects;
