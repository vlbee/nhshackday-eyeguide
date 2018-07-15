import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import titleCase from '../utils/titleCase'


const Category = styled.h3`
  display: inline-block;
  margin: .6rem 0rem .6rem 1rem;
  text-decoration: underline;
  cursor: pointer;
`
const StyledList = styled.ul`
  margin: 0;
`

const StyledListItem = styled.li`
  list-style: none;
  margin: 0 0 .5rem 0rem;
  font-weight: 700;
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
    console.log()
    category === this.state.clicked ? this.setState({ clicked: '' }) : this.setState({ clicked: category });
  }


  render() {
    const data = this.props.data;
    const categories = this.props.categories;
    return (
      <div>
        {categories.map(category => {
          return (
            <div>
              <Category tabIndex="1" onClick={() => this.handleClick(category)} onKeyDown={(e) => { e.keyCode === 13 ? this.handleClick(category) : null }}> {titleCase(category)} </Category>
              <StyledList>
                {
                  this.state.clicked === category ?
                    data.allMarkdownRemark.edges.map(({ node }) => {
                      return (node.frontmatter.category[0] === category) ? <Link tabIndex="1" to={node.fields.slug}> <StyledListItem> {node.frontmatter.title} </StyledListItem> </Link> : null
                    })
                    : ''
                }
              </StyledList>
            </div>
          )
        })}
      </div>
    )
  }
}

export default TableContents