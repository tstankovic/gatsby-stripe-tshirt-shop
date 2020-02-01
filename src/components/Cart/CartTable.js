import React, { useContext } from "react"
import { Link } from "gatsby"

import CartItem from "./CartItem"
import CartColums from "./CartColums"
import CartSummary from "./CartSummary"
import { CartContext } from "../../context/context"

export default function CartTable(props) {
  const value = useContext(CartContext)
  const cart = value.cart.map(item => {
    const data = props.skus.find(sku => sku.node.id === item.sku).node
    return {
      ...data,
      qty: item.quantity,
    }
  })
  return (
    <>
      {cart.length > 0 ? (
        <>
          <CartColums />
          <div className="container">
            {cart.map(item => (
              <CartItem
                key={item.id}
                sku={item}
                increment={value.increment}
                decrement={value.decrement}
                remove={value.remove}
              />
            ))}
          </div>
          <div
            className="d-lg-none my-5"
            style={{ borderBottom: "1px solid black" }}
          />
          <CartSummary
            cart={cart}
            cart_stripe={value.cart}
            clearCart={value.clearCart}
          />
        </>
      ) : (
        <div className="container mt-5 text-center">
          <h1>your cart is empty</h1>
          <h2 className="text-muted">
            return to <Link to="/">shop</Link>
          </h2>
        </div>
      )}
    </>
  )
}
