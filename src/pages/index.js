import React from 'react'
import { Link, graphql } from 'gatsby'
import { css } from '@emotion/core'
import If from 'react-ifs'

import { rhythm } from '../utils/typography'
import { getUser, isLoggedIn } from '../utils/auth'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const MsgNotLogged = () => (
  <p>
    You should <Link to="/restricted/login">log in</Link>
  </p>
)
const MsgLogged = () => (
  <p>
    You are logged in. Check your <Link to="/restricted/profile">profile</Link>
  </p>
)

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>Hello {isLoggedIn() ? getUser().name : 'stranger'}!</h1>
    <If condition={isLoggedIn()} then={<MsgLogged />} else={<MsgNotLogged />} />
    <hr />
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
    <br />
    <br />
    <hr />
    <h3>Pages generated from Markdown Files</h3>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <div key={node.id}>
        <Link
          to={node.fields.slug}
          css={css`
            text-decoration: none;
            color: inherit;
          `}
        >
          <h3
            css={css`
              margin-bottom: ${rhythm(1 / 4)};
            `}
          >
            {node.frontmatter.title}{' '}
            <small
              css={css`
                color: #bbb;
              `}
            >
              - {node.frontmatter.date}
            </small>
          </h3>
          <p>{node.excerpt}</p>
        </Link>
      </div>
    ))}
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
