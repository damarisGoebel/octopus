import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <figure className={styles.figure}>
        <img className={styles.logo} src="/octopus-logo.svg" alt="Octopus Energy Logo"/>
      </figure>
      <img className={styles.basket} src="/basket.svg" alt="Basket" />
    </header>
  );
};

export default Header;
