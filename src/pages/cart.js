import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CartTable from "../components/Cart/CartTable"

const CartPage = ({ data }) => {
  const skus = data.skus.edges
  return (
    <Layout>
      <SEO title="Cart" />
      <CartTable skus={skus} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    skus: allStripeSku(sort: { fields: [price] }) {
      edges {
        node {
          id
          currency
          price
          attributes {
            name
          }
          localFiles {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`

export default CartPage
