import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link';
import Helmet from 'react-helmet'
import styled from 'styled-components';

const Header = styled.div`
  background-color: #d6ebf2;
  padding: .5rem;
  width: 100%;
`
// import Header from '../components/header'
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
    <Header><Link to="/">{data.site.siteMetadata.title}</Link></Header>
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
      }
    }
  }
`
