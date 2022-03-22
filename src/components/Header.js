import HeaderButton from "./HeaderButton";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <h1>ReactMeals</h1>
      <HeaderButton />
    </div>
  );
};

export default Header;
