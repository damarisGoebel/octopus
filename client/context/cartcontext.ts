import React from "react";

const CartContext = React.createContext({
  cart: 0,
  setCart: (cart: number) => {},
});

export default CartContext;
