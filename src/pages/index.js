import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

const Home = () => (
  <Layout>
    <Seo />
    <h1>Carlos Kvasir</h1>
    <h2>Backend developer</h2>
    <h4>Hello, I'm Carlos Lima Junior but in internet aka Carlos Kvasir</h4>
    <p>{`I'm a Backend Developer and study about devops.`}</p>
    <p>I develop projects mostly with Ruby on Rails.</p>
    <p>
      {`Check out mostly `}
      <Link to="/projects">projects</Link>
    </p>
  </Layout>
)

export default Home
