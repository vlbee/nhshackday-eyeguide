import React, { Component } from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { Wrapper } from '../components/wrapper'
import TableContents from "../components/tablecontents.js"

export default ({ data }) => {

  const categories = data.allMarkdownRemark.edges.map(({ node }) => node.frontmatter.category[0]).filter(function (value, index, self) { return self.indexOf(value) === index });
  return (
    <Wrapper>
      <h1>Guidelines</h1>
      <TableContents categories={categories} data={data} />
    </Wrapper>
  );
};

export const query = graphql`
query IndexQuery {
  allMarkdownRemark(sort: {order: ASC, fields: [frontmatter___category, frontmatter___title]}) {
    edges {
      node {
        id
        fileAbsolutePath
        frontmatter {
          title
          date
          category
        }
        fields {
          slug
        }
      }
    }
  }
}
`;