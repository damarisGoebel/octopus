import { useState } from "react";
import Header from "../components/Header/header";
import CartContext from "../context/cartcontext";
import Product from "./product";

export default function Home() {
  const [cart, setCart] = useState<number>(0);
  return (
    <CartContext.Provider value={{cart, setCart}}>
      <main>
        <div className="home">
          <Header />
          <Product />
        </div>
      </main>
    </CartContext.Provider>
  );
}
