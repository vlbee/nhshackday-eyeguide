import React from 'react'
import Script from 'react-load-script';
import { Wrapper } from '../components/wrapper'
import TableContents from "../components/tablecontents"

export default class IndexPage extends React.Component {
  handleScriptLoad() {
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on('init', user => {
        if (!user) {
          window.netlifyIdentity.on('login', () => {
            document.location.href = '/admin/';
          });
        }
      });
    }
    window.netlifyIdentity.init();
  }

  render() {

    const { data } = this.props;
    const categories = data.allMarkdownRemark.edges.map(({ node }) => node.frontmatter.category[0]).filter(function (value, index, self) { return self.indexOf(value) === index });

    return (

      <div>

        <Wrapper>
          <h1>Guidelines</h1>
          <TableContents categories={categories} data={data} />
        </Wrapper>
        <Script
          url="https://identity.netlify.com/v1/netlify-identity-widget.js"
          onLoad={this.handleScriptLoad.bind(this)}
        />
      </div>
    )

  }

}





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