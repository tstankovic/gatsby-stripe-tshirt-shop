import React, { useContext } from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { FaShoppingCart } from "react-icons/fa"

import { formatPrice } from "../../utils/utils"
import { CartContext } from "../../context/context"

const SkuCard = props => {
  const value = useContext(CartContext)
  const sku = props.sku
  const inCart = value.cart.find(el => el.sku === sku.id) ? true : false
  return (
    <SkuWrapper className="col-10 mx-auto col-md-3 my-3">
      <div className="card text-center">
        <div className="img-container">
          <Link to={`/details/${sku.id.split("_")[1]}/`}>
            <Img
              fluid={sku.localFiles[0].childImageSharp.fluid}
              className="card-img-top"
            />
          </Link>
          <button
            className="cart-btn align-middle"
            onClick={() => value.addToCart(sku.id, sku)}
            disabled={inCart}
          >
            {inCart ? (
              <span className="lead">in cart</span>
            ) : (
              <FaShoppingCart onClick={() => value.addToCart(sku.id)} />
            )}
          </button>
        </div>
        <div className="card-body">
          <h4 className="card-title text-muted">{sku.attributes.name}</h4>
          <h5 className="card-text">{formatPrice(sku.price, sku.currency)}</h5>
        </div>
      </div>
    </SkuWrapper>
  )
}

const SkuWrapper = styled.div`
  .card {
    border-color: transparent;
    border-radius: 0;
  }

  .card:hover {
    border-bottom: 1px solid black;
  }

  .img-container {
    position: relative;
    overflow: hidden;
  }

  .card-img-top {
    transition: all 0.5s linear;
  }

  .img-container:hover .card-img-top {
    transform: scale(1.2);
  }

  .cart-btn {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 15%;
    padding: 0.4rem 0.4rem;
    border: none;
    outline: none;
    font-size: 1.3rem;
    background: rgba(0, 0, 0, 0.3);
    color: white;
    transform: translate(0, 100%);
    transition: all 0.5s linear;
  }

  .img-container:hover .cart-btn {
    transform: translate(0, 0);
  }
`

export default SkuCard
