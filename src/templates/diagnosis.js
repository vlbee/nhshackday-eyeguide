import React from "react";

export default ({ data }) => {
  const condition = data.markdownRemark;
  return (
    < div >
      <h1>{condition.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: condition.tableOfContents }} />

      <div dangerouslySetInnerHTML={{ __html: condition.html }} />
    </div >
  );
};

export const query = graphql`
  query guidelines($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
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