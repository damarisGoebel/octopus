import React from "react";

const CartContext = React.createContext({
  cart: 0,
  setCart: (cart: number) => {},
  count: 0,
  setCount: (count: number) => {},
});

export default CartContext;
