import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = (props) => {
  return (
    <Layout>
      <SEO title="Home" />
      {props.data.allRecipe.edges.map(edge => (
        <div key={edge.node.id}>
          <h2>{edge.node.name} - <small>{edge.node.cook.name}</small></h2>
          <div>{edge.node.summary}</div>
          <div>{edge.node.link}</div>
          <Link to={`/recipe/${edge.node.id}`}>Comment</Link>
        </div>
      ))}
    </Layout>
  )
}

export const query = graphql`
  {
    allRecipe {
      edges {
        node {
          id
          link
          name
          summary
            cook {
              name
            }
        }
      }
    }
  }
`;

export default IndexPage
