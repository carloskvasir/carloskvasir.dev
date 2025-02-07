import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Seo from '@components/Seo';
import Layout from '@components/Layout';

export const Head = () => (
  <Seo
    pageTitle="Projects"
    description="Back-end developer, developing apps and apis"
    keywords="Ruby, Rails, API, developer"
  />
);

const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      allProjectJson {
        edges {
          node {
            id
            name
            description
            url
            repository
            tags
          }
        }
      }
    }
  `);

  const projects = data.allProjectJson.edges.map(edge => edge.node);

  return (
    <Layout>
      <section className="section is-size-4-desktop is-size-5-touch">
        <h1 className="title has-text-centered">Projects</h1>

        <div className="columns is-multiline">
          {projects.map(project => (
            <div key={project.id} className="column is-one-third">
              <div className="card">
                <div className="card-content">
                  <h3 className="title is-4">{project.name}</h3>
                  <p className="subtitle is-6">{project.description}</p>
                  <div className="tags">
                    {project.tags.map(tag => (
                      <span key={tag} className="tag is-info">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a href={project.url} className="button is-link is-outlined">
                    Ver Projeto
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="has-text-centered">
          {'Some of my projects, see more on my '}
          <a href="http://github.com/carloskvasir">GitHub</a>
        </p>

      </section>
    </Layout>
  );
};

export default Projects;
