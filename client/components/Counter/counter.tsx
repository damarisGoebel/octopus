import { useState } from "react";
import styles from "./counter.module.css";

const Counter = () => {
  const [quantity, setQuantity] = useState<number>(1);

  const decrement = () => {
    if (quantity === 0) {
      setQuantity(0);
    } else {
      setQuantity(quantity - 1);
    }
  };

  const increment = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className={styles.counter}>
      <div className={styles.decrement} onClick={decrement}>
        -
      </div>
      <div className={styles.quantity}>
        <div className={styles.quantityText}>Qtq</div>
        <div className={styles.quantityValue}>{quantity}</div>
      </div>
      <div className={styles.increment} onClick={increment}>
        +
      </div>
    </div>
  );
};

export default Counter;
