import React from "react"

const Checkout = class extends React.Component {
  // Initialise Stripe.js with your publishable key.
  // You can find your key in the Dashboard:
  // https://dashboard.stripe.com/account/apikeys
  componentDidMount() {
    this.stripe = window.Stripe("pk_test_VixoEEpSNVbTGileJPstiK5T", {
      betas: ["checkout_beta_4"],
    })
  }

  async redirectToCheckout(event) {
    event.preventDefault()
    const { error } = await this.stripe.redirectToCheckout({
      items: this.props.cart,
      successUrl: `http://custos-fidelis.netlify/page-2/`,
      cancelUrl: `http://custos-fidelis.netlify/products/`,
    })

    if (error) {
      console.error("Error:", error)
    }
  }

  render() {
    return (
      <button
        className="btn btn-outline-primary btn-lg btn-block"
        onClick={event => this.redirectToCheckout(event)}
      >
        go to checkout
      </button>
    )
  }
}

export default Checkout
