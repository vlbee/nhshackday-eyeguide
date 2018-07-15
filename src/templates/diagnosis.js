import React from "react";
import { Wrapper } from "../components/wrapper"
import Link from 'gatsby-link';
import styled from "styled-components"
import deletePTag from '../utils/deletePTag'


const Back = styled.span`
 position: fixed;
 bottom: 1rem;
 right: 15%;
 background-color: #fcfcfc;
 padding: .5rem;
 text-decoration: underline;
 font-weight: 700;
`
const Margin = styled.div`
  margin-top: 2rem;
  margin-bottom: 1rem;
`
const TableOfContents = styled.div`
  li {
    margin-top: .5rem;
    margin-bottom: .5rem;
  }
  margin-bottom: 3rem;
`

export default ({ data }) => {
  const condition = data.markdownRemark;
  const currentURL = condition.fields.slug;
  let breadcrumb = currentURL.split("/").filter(Boolean);
  breadcrumb.shift();
  breadcrumb.pop();


  return (
    <Wrapper>
      <Margin>
        <Link to="/">Home</Link>{
          breadcrumb.map((item, i) => {
            const url = currentURL.split(item)[0] + item;
            return (
              <span>
                <span> > </span>
                <Link key={`key-${i}`} to={url}>{item}</Link>
              </span>
            )
          })
        }
      </Margin>
      <h1>{condition.frontmatter.title}</h1>
      <TableOfContents dangerouslySetInnerHTML={{ __html: deletePTag(condition.tableOfContents) }} />
      <div dangerouslySetInnerHTML={{ __html: condition.html }} />
      <Link to={condition.fields.slug}><Back>Back to top</Back></Link>
    </Wrapper>
  );
};

export const query = graphql`
  query guidelines($slug: String!) {
        markdownRemark(fields: {slug: {eq: $slug } }) {
        frontmatter {
      title
    }
      fields {
        slug
      }
      tableOfContents
      html
    }
  }
`;