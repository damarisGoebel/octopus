import { useContext } from "react";
import CartContext from "../../context/cartcontext";
import styles from "./Header.module.css";

const Header = () => {
  const { cart } = useContext(CartContext);
  return (
    <header className={styles.header}>
      <figure className={styles.figure}>
        <img
          className={styles.logo}
          src="/octopus-logo.svg"
          alt="Octopus Energy Logo"
        />
      </figure>
      <img className={styles.basket} src="/basket.svg" alt="Basket" />
      {cart > 0 && <span className={styles.number}>{cart}</span>}
    </header>
  );
};

export default Header;
