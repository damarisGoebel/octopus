import React, { useContext, useEffect, useState } from "react";
import styles from "./product.module.css";
import Counter from "../components/Counter/counter";
import CartContext from "../context/cartcontext";
import { getProduct } from "../api/product";

interface IProduct {
  id: string;
  name: string;
  power: string;
  description: string;
  price: number;
  quantity: number;
  brand: string;
  weight: number;
  height: number;
  width: number;
  length: number;
  model_code: string;
  colour: string;
  img_url: string;
}

export default function Product() {
  const [productData, setProductData] = useState<IProduct | undefined>(
    undefined
  );
  const { count, setCart } = useContext(CartContext);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getProduct()
      .then((data) => {
        const fetchedData = data.data.Product;
        if (fetchedData !== undefined) {
          setProductData(fetchedData);
          setLoading(false);
        }
      })
      .catch((e) => console.log(e));
  }, []);

  const addToCart = () => {
    setCart(count);
  };
  return (
    <React.Fragment>
      {productData && (
        <div>
          <div className={styles.product}>
            <div className={styles.productHeader}>
              <img
                className={styles.image}
                src={productData.img_url}
                alt="Philips Plumen Bulb"
                width="100%"
              />
              <div className={styles.productInfo}>
                <h1>{productData.name}</h1>
                <p className={styles.paragraph}>
                  {productData.power} // Packet of {productData.quantity}
                </p>
              </div>
            </div>
            <div className={styles.priceQuantiy}>
              <h3>
                £{" "}
                {[
                  productData.price.toString().slice(0, 2),
                  ".",
                  productData.price.toString().slice(2),
                ].join("")}
              </h3>
              <Counter />
            </div>
            <button className={styles.button} onClick={addToCart}>
              Add to cart
            </button>
          </div>

          <div className={styles.description}>
            <h2>Description</h2>
            <p>{productData.description}</p>
          </div>
          <div className={styles.product}>
            <h2>Specifications</h2>
            <div className={styles.specifiations}>
              <div>Brand</div>
              <div>{productData.brand}</div>
              <div>Item weight (g)</div>
              <div>{productData.weight}</div>
              <div>Dimensions (cm)</div>
              <div>
                {productData.height} x {productData.length} x{" "}
                {productData.width}{" "}
              </div>
              <div>Item Model Number</div>
              <div>{productData.model_code}</div>
              <div>Colour</div>
              <div>{productData.colour}</div>
            </div>
          </div>
          <div className={styles.footer}>
            <p>
              Octopus Energy Ltd is a company registered in England and Wales.
              Registered number: 09263424. Registered office: UK House, 5th
              floor, 164-182 Oxford Street, London, W1D 1NN.
            </p>
          </div>
        </div>
      )}
      {isLoading && <p>Loading ...</p>}
    </React.Fragment>
  );
}
