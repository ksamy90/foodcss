import mealsImage from "../assets/meals.jpg";
import styles from "./Image.module.css";

const Image = () => {
  return (
    <div className={styles.data}>
      <div className={styles.image}>
        <img src={mealsImage} alt="delicious food" />
      </div>
      <h1>Delicious food</h1>
    </div>
  );
};

export default Image;
