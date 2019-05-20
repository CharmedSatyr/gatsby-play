import React from 'react'
import PrivateRoute from '../components/private-route'
import { Router } from '@reach/router'
import Layout from '../components/layout'
import Profile from '../components/profile'
import Login from '../components/login'
import { isLoggedIn } from '../services/auth'
import If from 'react-ifs'

const Restricted = () => (
  <Layout>
    <h1>This page has auth routes in it... OMG!!</h1>

    <If condition={!isLoggedIn()}>
      <p>You aren't logged in and won't be able to see anything.</p>
    </If>
    <Router>
      <PrivateRoute path="/restricted/profile" component={Profile} />
      <Login path="/restricted/login" />
    </Router>
  </Layout>
)

export default Restricted
