import React from 'react'
import { Link, navigate } from 'gatsby'
import { getUser, isLoggedIn, logout } from '../services/auth'
import If from 'react-ifs'

const LoginLink = () => <Link to="/restricted/login">Login</Link>

const Nav = () => {
  const content = { message: '', login: true }
  if (isLoggedIn()) {
    content.message = `Hello, ${getUser().name}`
  } else {
    content.message = 'You are not logged in'
  }
  return (
    <div>
      <span>{content.message}</span>
      <nav>
        <Link to="/">Home</Link>
        {` `}
        <Link to={'/about/'}>About that dog</Link>
        {` `}
        <If condition={isLoggedIn()} else={<LoginLink />}>
          <Link to="/restricted/profile">Profile</Link>
          {` `}
          <a
            href="/"
            onClick={e => {
              e.preventDefault()
              logout(() => navigate(`/restricted/login`))
            }}
          >
            Logout
          </a>
        </If>
      </nav>
    </div>
  )
}

export default Nav
