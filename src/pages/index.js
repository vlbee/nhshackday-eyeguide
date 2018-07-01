import React from 'react'
import Link from 'gatsby-link'
import { Wrapper } from '../components/wrapper'

export default ({ data }) => {
  return (
    <Wrapper>
      <h1>
        Guidelines
      </h1>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <Link
            to={node.fields.slug}
          >
            <h3>
              {node.frontmatter.title}{" "}
            </h3>
          </Link>
        </div>
      ))}
    </Wrapper>
  );
};

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;