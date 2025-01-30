import React from 'react';
import { Link } from 'gatsby';

import { StaticImage } from 'gatsby-plugin-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTelegram, faTwitter } from '@fortawesome/free-brands-svg-icons';

import Layout from '@components/Layout';
import Seo from '@components/Seo';

import '../styles/home.scss';

export const Head = () => (
  <Seo
    pageTitle="Home"
    description="Back-end developer, developing apps and apis"
    keywords="Ruby, Rails, API, developer"
  />
);

const Home = () => (
  <Layout>
    <header className="has-text-centered">
      <figure className="image">
        <StaticImage
          className="is-rounded"
          src="../assets/images/carloskvasir.png"
          alt="Carlos Kvasir"
          placeholder="blurred"
          width={150}
          height={150}
        />
      </figure>
      <h1 className="title">Carlos Kvasir</h1>
      <h2 className="subtitle">Backend developer</h2>
    </header>
    <section className="has-text-centered">
      <a href="https://github.com/carloskvasir" aria-label="github">
        <span className="icon is-large fa-2x">
          <FontAwesomeIcon icon={faGithub} />
        </span>
      </a>
      <a href="https://twitter.com/carloskvasir" aria-label="twitter">
        <span className="icon is-large fa-2x">
          <FontAwesomeIcon icon={faTwitter} />
        </span>
      </a>
      <a href="https://t.me/carloskvasir" aria-label="Telegram">
        <span className="icon is-large fa-2x">
          <FontAwesomeIcon icon={faTelegram} />
        </span>
      </a>
      <a href="https://linkedin.com/in/carloskvasir/" aria-label="linkedin">
        <span className="icon is-large fa-2x">
          <FontAwesomeIcon icon={faLinkedin} />
        </span>
      </a>
    </section>
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
