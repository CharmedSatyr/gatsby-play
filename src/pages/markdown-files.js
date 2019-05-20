import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { css } from '@emotion/core'

const MarkdownFiles = ({ data }) => {
  const files = data.allFile.edges
    .filter(({ node }) => node.extension === 'md')
    .map(({ node }) => (
      <div
        key={node.id}
        css={css`
          border: 1px solid black;
          margin: 2px;
          padding: 10px;
        `}
      >
        Name: <code>{node.name}</code>
        <br />
        Extension: <code>{node.extension}</code>
        <br />
        Size: <code>{node.prettySize}</code>
        <br />
        Relative Path: <code>{node.relativePath}</code>
        <br />
      </div>
    ))
  const content = data.allMarkdownRemark.edges.map(({ node }) => (
    <div
      key={node.id}
      css={css`
        border: 1px solid black;
        margin: 2px;
        padding: 10px;
      `}
    >
      Title: <code>{node.frontmatter.title}</code>
      <br />
      Date: <code>{node.frontmatter.date}</code>
      <br />
      Excerpt: <code>{node.excerpt}</code>
    </div>
  ))

  return (
    <Layout>
      <h2>{data.allMarkdownRemark.totalCount} Markdown Files live here</h2>
      <h3>File Metadata</h3>
      <div>{files}</div>
      <br />
      <h3>File Content</h3>
      <div>{content}</div>
    </Layout>
  )
}

export default MarkdownFiles

export const query = graphql`
  {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          html
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
          excerpt
        }
      }
    }
    allFile {
      edges {
        node {
          id
          name
          extension
          relativePath
          prettySize
        }
      }
    }
  }
`
