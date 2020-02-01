import React from "react"
import { Link, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SkuCard from "../components/Products/SkuCard"

const IndexPage = ({ data }) => {
  const image = data.img.childImageSharp.fluid
  const newProducts = data.new.edges
  return (
    <Layout>
      <SEO title="Home" />
      <BackgroundImage
        Tag="section"
        fluid={image}
        className="background-default"
      >
        <Link
          to="/products/"
          className="btn btn-lg btn-secondary py-2 px-5 lead text-white"
        >
          shop now
        </Link>
      </BackgroundImage>
      <div className="container mt-5">
        <h2
          className="text-muted text-center"
          style={{ borderBottom: "1px solid black" }}
        >
          new products
        </h2>
        <div className="row">
          {newProducts.map(({ node: sku }) => (
            <SkuCard key={sku.id} sku={sku} />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    img: file(relativePath: { eq: "background.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    new: allStripeSku(sort: { fields: created, order: DESC }, limit: 4) {
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

export default IndexPage
