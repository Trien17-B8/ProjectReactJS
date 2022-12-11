import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";

function HomePage({ addtoCart }) {
  const [shoes, setShoes] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:3000/shoes")
      .then((res) => res.json())
      .then((data) => {
        setShoes(data);
      });
  }, []);
  const handlgoCardList = () => {
    navigate('/cart');
  }

  //  useEffect(() => {
  //   fetch(`http://localhost:3000/shoes?size=${sizes}`)
  //   .then(res => res.json())
  //   .then(data =>{
  //     console.log(data);
  //   })
  //  },[])
  return (
    <div className={styles.container}>
      {shoes.map((shoes) => (
        <div className={styles["product-container"]}>
          <div className={styles["product-image-area"]}>
            <a key={shoes.id}>
              <div className={styles["product-image"]}>
                <img
                  src={shoes.images}
                  onClick={() => {
                    navigate(`/products/${shoes.id}`);
                  }}
                ></img>
              </div>
            </a>
          </div>
          <div className={styles.info}>
            <span className={styles["product-name"]}>{shoes.name}</span>
            <div className={styles["avai-tag"]}>Hàng có sẵn</div>
            <div className={styles["product-price"]}>Price: {shoes.price}đ</div>
            <div className={styles["product-size"]}>Size: {shoes.size}</div>
            <div className={styles["product-detail"]}>
              Description: {shoes.description}
            </div>
          </div>
          <button
            className={styles["add-to-cart"]}
            onClick={() => {
              addtoCart(shoes);
              handlgoCardList()
            }}
          >
            Thêm vào giỏ
          </button>
        </div>
      ))}
    </div>
  );
}

export default HomePage;