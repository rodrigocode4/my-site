import React from "react"
import { Link } from 'gatsby'

import Layout from "../components/Layout"
import SEO from "../components/SEO"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Olá, gatsby</h1>
    <Link to="about">sobre</Link>
  </Layout>
)

export default IndexPage
