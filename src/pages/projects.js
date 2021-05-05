import React from "react"
import Helmet from "react-helmet"

import Layout from "../components/Layout"

const Projects = () => (
  <Layout>
    <Helmet title="Projects | Carlos Lima" />
    <h1>Projects</h1>
    <hr />
    <p>
      {`Some of my projects, see more on my `}
      <a href="http://github.com/carloskvasir">GitHub</a>
    </p>
    <ul>
      <a href="https://github.com/carloskvasir/terraform-in-action">
        Terraform
      </a>
    </ul>
  </Layout>
)

export default Projects
