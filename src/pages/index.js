import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const StyledH3 = styled.h3`
 margin-left: 1rem;
 text-decoration: none;
`

export default ({ data }) => {
  const categories = data.allMarkdownRemark.edges.map(({ node }) => node.frontmatter.category[0]).filter(function (value, index, self) { return self.indexOf(value) === index });
  console.log("these are categories", categories)
  return (
    <div categories={categories}>
      {categories.map(category => {
        return <Link to=""> <StyledH3> {category} </StyledH3> </Link>
      })}
    </div>
  );
};

export const query = graphql`
  query IndexQuery {
        allMarkdownRemark(
          sort: {order: ASC, fields: [frontmatter___category, frontmatter___title]}
)

    {
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