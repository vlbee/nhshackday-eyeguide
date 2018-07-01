import React, { Component } from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { Wrapper } from '../components/wrapper'
const StyledH3 = styled.h3`
 margin-left: 1rem;
 text-decoration: none;
`

const Subheading = styled.h4`
  margin: 0 0 .5rem 2rem;
`

export default ({ data }) => {

  const categories = data.allMarkdownRemark.edges.map(({ node }) => node.frontmatter.category[0]).filter(function (value, index, self) { return self.indexOf(value) === index });
  return (
    <Wrapper>
      <h1>Guidelines</h1>
      <div categories={categories}>
        {categories.map(category => {
          return (
            <div>
              <StyledH3> {category} </StyledH3>
              <div>
                {data.allMarkdownRemark.edges.map(({ node }) => {
                  return (node.frontmatter.category[0] === category) ? <Link to={node.fields.slug}> <Subheading> {node.frontmatter.title} </Subheading> </Link> : null
                })}
              </div>

            </div>
          )
        })}
      </div>
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