import React from "react"

import { CartProvider } from "./src/context/context"

export const wrapRootElement = ({ element }) => (
  <CartProvider>{element}</CartProvider>
)
