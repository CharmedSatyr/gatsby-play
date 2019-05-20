import React from 'react'
import { navigate } from 'gatsby'
import { isLoggedIn } from '../services/auth'

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  if (!isLoggedIn() && location.pathname !== `/restricted/login`) {
    // If the user is not logged in, redirect to the login page
    navigate(`/restricted/login`)
    return null
  }

  return <Component {...rest} />
}

export default PrivateRoute
