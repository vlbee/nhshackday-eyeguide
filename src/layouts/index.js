import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link';
import Helmet from 'react-helmet'
import { Header } from '../components/header'
import { Wrapper } from '../components/wrapper'
import styled from "styled-components"

const Description = styled.p`
  font-size: .7rem;
  margin-top: .4rem;
`

import './index.css'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header>
      <Wrapper>
        <Link to="/">{data.site.siteMetadata.title}</Link>
        <Description>{data.site.siteMetadata.description}</Description>
      </Wrapper>
    </Header>
    <div>
      {children()}
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
