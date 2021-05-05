import React from "react"
import { Link } from "gatsby"
import Helmet from "react-helmet"

import Layout from "../components/Layout"

const Home = () => (
  <Layout>
    <Helmet title="Carlos Lima" />
    <h1>Carlos Lima</h1>
    <h2>Backend developer</h2>
    <h4>Hello, I'm Carlos Lima</h4>
    <p>{`I'm a Backend Developer and study about devops.`}</p>
    <p>I develop projects mostly with Ruby on Rails.</p>
    <p>
      {`Check out mostly `}
      <Link to="/projects">projects</Link>
    </p>
  </Layout>
)

export default Home
