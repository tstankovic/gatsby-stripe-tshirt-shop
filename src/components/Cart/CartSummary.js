import React from "react"

import Checkout from "./Checkout"

export default function CartSummary(props) {
  const subTotal = props.cart.reduce((acc, cur) => {
    const price = (cur.price / 100).toFixed(2)
    const itemTotal = price * cur.qty
    return acc + itemTotal
  }, 0)
  const tax = +((subTotal * 1) / 10).toFixed(2)
  const total = subTotal + tax
  return (
    <div className="container mt-2">
      <div className="row text-center">
        <div className="col-10 col-lg-4 mx-auto">
          <div className="row">
            <div className="col-12">
              <h4 className="text-muted">subtotal: ${subTotal.toFixed(2)}</h4>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <h4 className="text-muted">tax: ${tax.toFixed(2)}</h4>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <h2>total price: ${total.toFixed(2)}</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-10 col-lg-4 mx-auto">
          <button
            className="btn btn-outline-danger btn-lg btn-block"
            onClick={() => props.clearCart()}
          >
            clear cart
          </button>
        </div>
      </div>
      <div className="row my-2">
        <div className="col-10 col-lg-4 mx-auto">
          <Checkout cart={props.cart_stripe} />
        </div>
      </div>
    </div>
  )
}
