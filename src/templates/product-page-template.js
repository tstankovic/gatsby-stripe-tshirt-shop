import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SkuDetails from "../components/Products/SkuDetails"

const ProductPageTemplate = ({ data }) => {
  const product = data.stripeSku
  return (
    <Layout>
      <SEO title="Product" />
      <SkuDetails sku={product} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query GetSingleSku($id: String!) {
    stripeSku(id: { eq: $id }) {
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
`

export default ProductPageTemplate
