const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const productPageTemplate = path.resolve(
    `src/templates/product-page-template.js`
  )

  const result = await graphql(
    `
      query loadPagesQuery($limit: Int!) {
        allStripeSku(limit: $limit) {
          edges {
            node {
              id
            }
          }
        }
      }
    `,
    { limit: 1000 }
  )
  if (result.errors) {
    throw result.errors
  }
  const products = result.data.allStripeSku.edges
  products.map(({ node }) => {
    createPage({
      path: `/details/${node.id.split("_")[1]}/`,
      component: productPageTemplate,
      context: {
        id: node.id,
        product: node,
      },
    })
  })

  const productsPerPage = 8
  const numPages = Math.ceil(products.length / productsPerPage)
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/products/` : `/products/${i + 1}/`,
      component: path.resolve("./src/templates/product-list-template.js"),
      context: {
        limit: productsPerPage,
        skip: i * productsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })
}
