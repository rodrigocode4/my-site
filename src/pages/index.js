import React from "react"
import { Link } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Olá, gatsby</h1>
    <Link to="about">sobre</Link>
  </Layout>
)

export default IndexPage
