import React, { useContext } from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import { CartContext } from "../context/context"
import { formatPrice } from "../utils/utils"

const Modal = props => {
  const value = useContext(CartContext)

  const { modalOpen, closeModal } = value

  let hasAttrs = false
  let attrs = {}
  if (Object.keys(value.modalProduct).length > 0) {
    hasAttrs = true
    attrs = { ...value.modalProduct }
  }

  if (!modalOpen) return null

  return (
    <ModalContainer>
      <div className="container">
        <div className="row">
          <div
            id="modal"
            className="col-8 mx-auto col-md-6 col-lg-4 text-center p-4 rounded"
          >
            <h5>Item added to the cart!</h5>
            {/* <img src={img} className='img-fluid' alt='product' /> */}
            <Img
              fluid={
                hasAttrs &&
                value.modalProduct.localFiles[0].childImageSharp.fluid
              }
              className="img-fluid"
            />
            <h5 className="mt-3">{attrs.attributes.name}</h5>
            <h5 className="text-muted">
              price: {formatPrice(attrs.price, attrs.currency)}
            </h5>
            <div className="mt-3">
              <Link to={`/products/`}>
                <button
                  className="btn btn-primary btn-block btn-lg"
                  onClick={closeModal}
                >
                  continue shopping
                </button>
              </Link>
            </div>
            <div className="mt-1">
              <Link to="/cart">
                <button
                  className="btn btn-secondary btn-block btn-lg"
                  onClick={closeModal}
                >
                  go to cart
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </ModalContainer>
  )
}

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  #modal {
    background: white;
  }
`

export default Modal
