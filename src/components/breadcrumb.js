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
      <Link to="/">Home</Link>{
        breadcrumb.map((item, i) => {
          const url = currentURL.split(item)[0] + item;
          return (
            <span key={`key-${i}`} >
              <span key={`key-${i}`} > > </span>
              <Link key={`key-${i}`} to={`/?category=${item}`}>{titleCase(item)}</Link>
            </span>
          )
        })
      }
    </Margin>)
}