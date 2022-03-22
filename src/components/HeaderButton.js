import styles from "./HeaderButton.module.css";

const HeaderButton = () => {
  return (
    <div className={styles.cart}>
      <p className={styles.cart2}>Your Cart</p>
      <p className={styles.cart3}>3</p>
    </div>
  );
};

export default HeaderButton;
