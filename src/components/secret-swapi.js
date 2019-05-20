import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

const SecretSwapi = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          swapi {
            allPersons {
              id
              name
            }
          }
        }
      `}
      render={data => {
        const content = data.swapi.allPersons.map(num => (
          <li key={num.id}>{num.name}</li>
        ))
        return (
          <>
            <h1>
              Secret SWAPI <small>...an authorized route</small>
            </h1>
            <h2>All the characters in Star Wars:</h2>
            <ul>{content}</ul>
          </>
        )
      }}
    />
  )
}
export default SecretSwapi
