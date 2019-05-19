import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const MyFiles = ({ data }) => {
  const content = data.allFile.edges.map((obj, index) => {
    const { node } = obj
    return (
      <div
        key={index}
        style={{ border: '1px solid black', margin: 2, padding: 10 }}
      >
        Name: <code>{node.name}</code>
        <br />
        Extension: <code>{node.extension}</code>
        <br />
        Size: <code>{node.prettySize}</code>
        <br />
        Relative Path: <code>{node.relativePath}</code>
      </div>
    )
  })

  return (
    <Layout>
      <div>Files and such live here</div>
      <div>{content}</div>
    </Layout>
  )
}

export default MyFiles

export const query = graphql`
  {
    allFile {
      edges {
        node {
          name
          extension
          relativePath
          prettySize
        }
      }
    }
  }
`
