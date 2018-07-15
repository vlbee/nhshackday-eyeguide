import Link from "gatsby-link";
import styled from "styled-components";
import React from "react";
import titleCase from '../utils/titleCase'

const Margin = styled.div`
margin-top: 2rem;
margin-bottom: 1rem;
`

export default ({ currentURL }) => {
  let breadcrumb = currentURL.split("/").filter(Boolean);
  breadcrumb.shift();
  breadcrumb.pop();
  return (
    <Margin>
      <Link to="/">Home</Link>
      {
        breadcrumb.map((item, i) => (
          <span key={`key-${i}a`} >
            <span key={`key-${i}b`} > ></span>
            <Link key={`key-${i}c`} to="/">{titleCase(item)}</Link>
          </span>
        ))
      }
    </Margin>)
}