import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Seo from '@components/Seo';
import Layout from '@components/Layout';

export const Head = () => (
  <Seo
    pageTitle="Projetos"
    description="Desenvolvedor back-end, criando aplicativos e APIs"
    keywords="Ruby, Rails, API, desenvolvedor"
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

  function projectRender(projeto) {
    // Gerar um ID único baseado no nome do projeto para obter imagens diferentes
    const imageId = Math.abs(
      projeto.name.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0) % 100
    );

    return (
      <div key={projeto.id} className="column is-one-third">
        <div className="card">
          <div className="card-image">
            <figure className="image is-4by3">
              <img
                src={`https://picsum.photos/seed/${imageId}/400/300`}
                alt={`Imagem ilustrativa do projeto ${projeto.name}`}
              />
            </figure>
          </div>
          <div className="card-content">
            <h3 className="title is-4">{projeto.name}</h3>
            <p className="subtitle is-6">{projeto.description}</p>
            <div className="tags">
              {projeto.tags.map(tag => (
                <span key={tag} className="tag is-info">
                  {tag}
                </span>
              ))}
            </div>
            <a href={projeto.url} className="button is-link is-outlined">
              Ver Projeto
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Layout>
      <section className="section is-size-4-desktop is-size-5-touch">
        <h1 className="title has-text-centered">Projetos</h1>

        <div className="columns is-multiline">
          {projects.map(projectRender)}
        </div>
        <p className="has-text-centered">
          {'Veja mais dos meus projetos no meu '}
          <a href="http://github.com/carloskvasir">GitHub</a>
        </p>
      </section>
    </Layout>
  );
};

export default Projects;
