import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SkuCard from "../components/Products/SkuCard"
import Pagination from "../components/pagination"

const ProductListTemplate = props => {
  const skus = props.data.allStripeSku
  const { currentPage, numPages } = props.pageContext
  return (
    <Layout>
      <SEO title="Products" />
      <div className="container mt-5">
        <div className="row">
          {skus.edges.map(({ node: sku }) => (
            <SkuCard key={sku.id} sku={sku} />
          ))}
        </div>
        <Pagination currentPage={currentPage} numPages={numPages} />
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query productListQuery($skip: Int!, $limit: Int!) {
    allStripeSku(limit: $limit, skip: $skip) {
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

export default ProductListTemplate
