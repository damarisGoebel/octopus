import { useContext } from "react";
import CartContext from "../../context/cartcontext";
import styles from "./counter.module.css";

const Counter = () => {
  const { count, setCount } = useContext(CartContext);

  const decrement = () => {
    if (count === 0) {
      setCount(0);
    } else {
      setCount(count - 1);
    }
  };

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div className={styles.counter}>
      <div className={styles.decrement} onClick={decrement}>
        -
      </div>
      <div className={styles.quantity}>
        <div className={styles.quantityText}>Qty</div>
        <div className={styles.quantityValue} title="Current quantity">
          {count}
        </div>
      </div>
      <div className={styles.increment} onClick={increment}>
        +
      </div>
    </div>
  );
};

export default Counter;
