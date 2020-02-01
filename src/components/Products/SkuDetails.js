import React, { useState, useContext } from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import { formatPrice } from "../../utils/utils"
import { CartContext } from "../../context/context"

export default function SkuDetails(props) {
  const [qty, setQty] = useState(1)
  const value = useContext(CartContext)

  const sku = props.sku
  const inCart = false

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-10 mx-auto col-lg-6">
          <Img fluid={props.sku.localFiles[0].childImageSharp.fluid} />
        </div>
        <div className="col-10 mx-auto col-lg-6 text-center">
          <h2 className="mt-5 text-muted">{props.sku.attributes.name}</h2>
          <h3 className="mt-5">
            {formatPrice(props.sku.price, props.sku.currency)}
          </h3>

          <div className="row mt-5">
            <div className="col-3 mx-auto">
              <span>qty</span>
              <input
                type="number"
                placeholder="1"
                min="1"
                className="form-control"
                value={qty}
                onChange={e => setQty(e.target.value)}
              />
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-10 col-lg-8 mx-auto">
              <button
                type="button"
                className="btn btn-outline-primary btn-lg btn-block mt-2"
                disabled={inCart}
                onClick={() => value.addToCart(props.sku.id, qty)}
              >
                {inCart ? "in cart" : "add to cart"}
              </button>

              <Link
                to="/"
                className="btn btn-outline-secondary btn-lg btn-block mt-2"
              >
                back to shop
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
