import React from "react"

const CartContext = React.createContext()

class CartProvider extends React.Component {
  state = {
    cart: [],
  }

  componentDidMount() {
    // Get existing cart from localstorage if present.
    const existingCart = JSON.parse(
      localStorage.getItem("stripe_checkout_items")
    )
    if (existingCart && existingCart.length) {
      this.setState({ cart: existingCart })
    }
  }

  getCart() {
    return this.state.cart
  }

  addToCart(newItem, qty = 1) {
    let itemExisted = false
    let updatedCart = this.state.cart.map(item => {
      if (newItem === item.sku) {
        itemExisted = true
        return { sku: item.sku, quantity: item.quantity + qty }
      } else {
        return item
      }
    })
    if (!itemExisted) {
      updatedCart = [...updatedCart, { sku: newItem, quantity: qty }]
    }
    this.setState({ cart: updatedCart })
    // Store the cart in the localStorage.
    localStorage.setItem("stripe_checkout_items", JSON.stringify(updatedCart))
  }

  increment(sku) {
    const updatedCart = this.state.cart.map(item => {
      if (sku === item.sku) {
        return {
          sku: item.sku,
          quantity: ++item.quantity,
        }
      } else {
        return item
      }
    })
    this.setState({ cart: updatedCart })
    localStorage.setItem("stripe_checkout_items", JSON.stringify(updatedCart))
  }

  decrement(sku) {
    if (this.state.cart.find(item => item.sku === sku).quantity === 1) {
      return this.remove(sku)
    }
    const updatedCart = this.state.cart.map(item => {
      if (sku === item.sku) {
        return {
          sku: item.sku,
          quantity: --item.quantity,
        }
      } else {
        return item
      }
    })
    this.setState({ cart: updatedCart })
    localStorage.setItem("stripe_checkout_items", JSON.stringify(updatedCart))
  }

  remove(sku) {
    const updatedCart = this.state.cart.filter(item => sku !== item.sku)
    this.setState({ cart: updatedCart })
    localStorage.setItem("stripe_checkout_items", JSON.stringify(updatedCart))
  }

  clearCart() {
    this.setState({ cart: [] })
    localStorage.setItem("stripe_checkout_items", JSON.stringify([]))
  }

  render() {
    return (
      <CartContext.Provider
        value={{
          cart: this.state.cart,
          increment: this.increment.bind(this),
          decrement: this.decrement.bind(this),
          addToCart: this.addToCart.bind(this),
          remove: this.remove.bind(this),
          clearCart: this.clearCart.bind(this),
        }}
      >
        {this.props.children}
      </CartContext.Provider>
    )
  }
}

export { CartContext, CartProvider }
