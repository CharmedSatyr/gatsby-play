import PropTypes from 'prop-types'
import React from 'react'
import { css } from '@emotion/core'
import { rhythm } from '../utils/typography'
import Nav from './nav'

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
    <h3>{siteTitle}</h3>
    <Nav />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
