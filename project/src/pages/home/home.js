import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

function HomePage() {
  const [shoes, setShoes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/shoes")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setShoes(data);
      });
  }, []);

  return (
    <div className={styles.container}>
      {shoes.map((shoes) => (
        <div className={styles["product-container"]}>
          <div className={styles["product-image-area"]}>
            <a key={shoes.id}>
              <div className={styles["product-image"]}>
                <img src={shoes.images}></img>
              </div>
            </a>
          </div>
          <div className={styles.info}>
                <span className={styles["product-name"]}>{shoes.name}</span>
                <div className={styles["avai-tag"]}>Hàng có sẵn</div>
                <div className={styles["product-price"]}>{shoes.price}đ</div>
                <div className={styles["product-size"]}>{shoes.size}</div>
                <div className={styles["product-detail"]}>
                  {shoes.description}
                </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HomePage;