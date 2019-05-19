import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { css } from '@emotion/core'
import { rhythm } from '../utils/typography'

const Header = ({ siteTitle }) => (
  <header
    css={css`
      background: rebeccapurple;
      margin-bottom: ${rhythm(0.5)};
      margin: 0 auto;
      maxwidth: 960px;
      padding: ${rhythm(1)};
    `}
  >
    <Link
      to={'/'}
      css={css`
        display: inline-block;
        margin-right: 1em;
      `}
    >
      <h3>{siteTitle}</h3>
    </Link>
    <Link
      to={'/about/'}
      css={css`
        display: inline-block;
        margin-right: 1em;
      `}
    >
      <h3>About that dog</h3>
    </Link>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
