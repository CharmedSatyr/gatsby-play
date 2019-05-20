import React from 'react'
import { Link, graphql } from 'gatsby'
import { css } from '@emotion/core'
import { rhythm } from '../utils/typography'
import { getUser, isLoggedIn } from '../services/auth'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>Hello {isLoggedIn() ? getUser().name : 'world'}!</h1>
    <p>
      {isLoggedIn() ? (
        <>
          You are logged in. Check your{' '}
          <Link to="/restricted/profile">profile</Link>
        </>
      ) : (
        <>
          You should <Link to="/restricted/login">log in</Link>
        </>
      )}
    </p>
    <h1>I am John Wick</h1>
    <p style={{ color: `purple` }}>You killed my dog</p>
    <p>Now I will shoot 700 people</p>
    <Link to="/restricted/">Restricted Views</Link>
    <br />
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
