import { useState } from "react";
import Header from "../components/Header/header";
import CartContext from "../context/cartcontext";
import Product from "./product";

export default function Home() {
  const [cart, setCart] = useState<number>(0);
  const [count, setCount] = useState<number>(1);
  return (
    <CartContext.Provider value={{ cart, setCart, count, setCount }}>
      <main>
        <div className="home">
          <Header />
          <Product />
        </div>
      </main>
    </CartContext.Provider>
  );
}
