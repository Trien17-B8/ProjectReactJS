import { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import { useParams } from "react-router-dom";
import axios from "axios";
import { AiFillMinusCircle } from "react-icons";

function Products() {
  const [shoes, setShoes] = useState({});
  const [size, setSize] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    async function getshoesByID() {
      const response = await axios.get(`http://localhost:3000/shoes/${id}/`);
      return response;
    }
    getshoesByID().then((res) => setShoes(res.data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/shoes")
      .then((res) => res.json())
      .then((data) => {
        setSize(data.size);
      });
  }, []);

  return (
    <div className={styles["main-container"]}>
      <div className={styles["col-main"]}>
        <div className={styles.row}>
          <div className={styles["product-view"]}>
            <div className={styles["product-image"]}>
              <img src={shoes.images} alt="Ảnh Giày Nike Mercurial"></img>
            </div>
            <div className={styles["product-detail"]}>
              <div className={styles.detail}>
                <div className={styles.name}>
                  <h1>{shoes.name}</h1>
                </div>
                <div className={styles["price-box"]}>
                  <span className={styles["product-price"]}>
                    <h1>Giá: {shoes.price}₫</h1>
                  </span>
                </div>
                <div className={styles.avai}>
                  <div className={styles["item-content-tag"]}>HÀNG CÓ SẴN</div>
                </div>
                <div className={styles["product-size"]}>
                  Chọn size:
                  <button>{shoes.size}</button>
                </div>
                <div className={styles["add-to-cart"]}>
                  Chọn số lượng:
                  {/* <button><AiFillMinusCircle/></button> */}
                </div>

                <div>
                  <input className={styles["cart"]} type="submit" value="Đặt Hàng"></input>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
