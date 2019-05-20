import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { css } from '@emotion/core'
import { rhythm } from '../utils/typography'
import Nav from './nav'
import * as a from '../actions/'

class Header extends Component {
  render() {
    return (
      <header
        css={css`
          background: rebeccapurple;
          margin-bottom: ${rhythm(0.5)};
          margin: 0 auto;
          maxwidth: 960px;
          padding: ${rhythm(1)};
        `}
      >
        <h3>{this.props.siteTitle}</h3>
        <span>
          Redux Proof of Life:{' '}
          <span
            css={css`
              color: orange;
            `}
          >
            {this.props.pol}
          </span>
        </span>{' '}
        <button onClick={this.props.doPol}>Dispatch proof of life</button>
        <Nav />
      </header>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

const mapStateToProps = ({ pol }) => ({ pol })

const mapDispatchToProps = dispatch => ({
  doPol: () => dispatch(a.pol()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
