import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>I am John Wick</h1>
    <p style={{ color: `purple` }}>You killed my dog</p>
    <p>Now I will shoot 700 people</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
    <br />
    <Link to="/page-3/">Go to page 3</Link>
    <br />
    <Link to="/about-css-modules/">About CSS Modules</Link>
    <br />
    <Link to="/my-files/">See my files</Link>
    <br />
    <Link to="/markdown-files/">See only markdown files</Link>
  </Layout>
)

export default IndexPage
