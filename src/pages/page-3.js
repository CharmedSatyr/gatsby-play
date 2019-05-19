import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ThirdPage = () => (
  <Layout>
    <SEO title="Page three" />
    <h1>Hi from the third page</h1>
    <p>Welcome to page 3</p>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
    <br />
    <Link to="/page-2/">Go to the second page</Link>
    <br />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ThirdPage
