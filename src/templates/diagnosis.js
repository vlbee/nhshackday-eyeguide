import React from "react";
import { Wrapper } from "../components/wrapper"
import Link from 'gatsby-link';
import styled from "styled-components"
import deletePTag from '../utils/deletePTag'
import Breadcrumb from "../components/breadcrumb";

const Back = styled.span`
 position: fixed;
 bottom: 1rem;
 right: 15%;
 background-color: #fcfcfc;
 padding: .5rem;
 text-decoration: underline;
 font-weight: 700;
`
const TableOfContents = styled.div`
  li {
    margin-top: .5rem;
    margin-bottom: .5rem;
  }
  margin-bottom: 3rem;
`

const LastUpdated = styled.p`
  font-style: italic;
`


export default ({ data }) => {
  const condition = data.markdownRemark;

  return (
    <Wrapper>
      <Breadcrumb currentURL={condition.fields.slug} />
      <h1>{condition.frontmatter.title}</h1>
      <TableOfContents dangerouslySetInnerHTML={{ __html: deletePTag(condition.tableOfContents) }} />
      <div dangerouslySetInnerHTML={{ __html: condition.html }} />
      <br />
      <LastUpdated>Last Updated: {condition.frontmatter.date}</LastUpdated>

      <Link to={condition.fields.slug}><Back>Back to top</Back></Link>
    </Wrapper >
  );
};

export const query = graphql`
  query guidelines($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug } }) {
      frontmatter {
        title
        date
      }
      fields {
        slug
      }
      tableOfContents
      html
    }
  }
`;