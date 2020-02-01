import React, { Component } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class SecondPage extends Component {
  componentDidMount() {
    // Empty localStorage after successful payment.
    localStorage.removeItem("stripe_checkout_items")
  }

  render() {
    return (
      <Layout>
        <SEO title="Payment Success" />
        <div className="container mt-5 text-center">
          <h1 className="display-4">Sucess!</h1>
          <Link to="/products/" className="lead">
            Shop again
          </Link>
        </div>
      </Layout>
    )
  }
}

export default SecondPage
