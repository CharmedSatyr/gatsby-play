import React from 'react'
import PrivateRoute from '../components/private-route'
import { Router } from '@reach/router'
import Layout from '../components/layout'
import Profile from '../components/profile'
import SecretSwapi from '../components/secret-swapi'
import Login from '../components/login'

const Restricted = () => (
  <Layout>
    <Router>
      <PrivateRoute path="/restricted/profile" component={Profile} />
      <PrivateRoute path="/restricted/secret-swapi" component={SecretSwapi} />
      <Login path="/restricted/login" />
    </Router>
  </Layout>
)

export default Restricted
