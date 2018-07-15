import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import titleCase from '../utils/titleCase'

const StyledH3 = styled.h3`
 margin-left: 1rem;
 text-decoration: underline;
 cursor: pointer;
 margin-bottom: .5rem;
`
const Subheading = styled.h4`
  margin: 0 0 .5rem 2rem;
`

const Hidden = styled.div`
  display: hidden;
`

class TableContents extends React.Component {
  constructor() {
    super()
    this.state = {
      clicked: ""
    }
  }

  handleClick = (category) => {
    category === this.state.clicked ? this.setState({ clicked: "" }) : this.setState({ clicked: category });
  }


  componentDidMount() {
    const queryCategory = window.location.href.replace(window.origin + '/?category=', '');
    queryCategory && this.setState({ clicked: queryCategory })
  }

  render() {
    const data = this.props.data;
    const categories = this.props.categories;
    return (
      <div>
        {categories.map(category => {
          return (
            <div>
              <StyledH3 onClick={() => this.handleClick(category)}> {titleCase(category)} </StyledH3>
              <div>
                {
                  this.state.clicked === category ?
                    data.allMarkdownRemark.edges.map(({ node }) => {
                      return (node.frontmatter.category[0] === category) ? <Link to={node.fields.slug}> <Subheading> {node.frontmatter.title} </Subheading> </Link> : null
                    })
                    : ''
                }
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}

export default TableContents