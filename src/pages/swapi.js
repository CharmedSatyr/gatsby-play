import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const Swapi = ({ data }) => {
  const content = data.swapi.allFilms.map(num => <li>{num.title}</li>)

  return (
    <Layout>
      <h3>Remote API Info from SWAPI!</h3>
      <h4>Film titles:</h4>
      <ul>{content}</ul>
    </Layout>
  )
}

export default Swapi

export const query = graphql`
  {
    swapi {
      allFilms {
        title
      }
    }
  }
`
