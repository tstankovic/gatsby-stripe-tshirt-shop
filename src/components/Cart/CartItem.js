import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { FaTrashAlt } from "react-icons/fa"

import { formatPrice } from "../../utils/utils"

export default function CartItem(props) {
  return (
    <CartItemWrapper className="row mt-2 py-2 text-center">
      <div className="col-10 mx-auto col-lg-2">
        <Img fluid={props.sku.localFiles[0].childImageSharp.fluid} />
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <div className="mt-4 text-muted">
          <strong className="lead">{props.sku.attributes.name}</strong>
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <div className="mt-4">
          <h4>{formatPrice(props.sku.price, props.sku.currency)}</h4>
        </div>
      </div>
      <div className="col-5 mx-auto col-lg-2">
        <div className="d-flex justify-content-around mt-4">
          <button
            className="btn-black"
            onClick={() => props.decrement(props.sku.id)}
          >
            <span>-</span>
          </button>
          <div className="d-flex justify-content-center align-items-center btn-black">
            <span>{props.sku.qty}</span>
          </div>
          <button
            className="btn-black"
            onClick={() => props.increment(props.sku.id)}
          >
            <span>+</span>
          </button>
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <FaTrashAlt
          className="lead mt-4 remove"
          onClick={() => props.remove(props.sku.id)}
        />
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <div className="mt-4">
          <h5 className="d-lg-none text-muted">item total</h5>
          <h4>
            {formatPrice(props.sku.qty * props.sku.price, props.sku.currency)}
          </h4>
        </div>
      </div>
    </CartItemWrapper>
  )
}

const CartItemWrapper = styled.div`
  .btn-black {
    cursor: pointer;
    background: transparent;
    border: 1px solid black;
    width: 2rem;
    height: 2rem;
  }

  .btn-black:hover {
    background: black;
    color: white;
  }

  .remove {
    cursor: pointer;
  }

  .remove:hover {
    color: #d9534f;
  }
`
