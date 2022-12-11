import { useEffect } from "react";
import { useState } from "react";
import styles from "./styles.module.scss";
import { AiOutlineCheck } from "react-icons/ai";

function CardList({ cart }) {
  const [CART, setCART] = useState([]);

  useEffect(() => {
    setCART(cart);
  }, [cart]);
  return (
    <div className={styles.product}>
      <div className={styles["page-title"]}>
        <h1>Giỏ Hàng</h1>
      </div>
      <div className={styles["nav"]}>
        <tr>
          <th>
            <span>Tên sản phẩm</span>
          </th>
          <th>Số lượng</th>
          <th>Thành tiền</th>
        </tr>
      </div>
      {CART?.map((cartItem, cartindex) => {
        return (
          <div className={styles["cart-item"]}>
            <tr>
              <td className={styles['image']}>
                <img src={cartItem.images} width={80} height={70}></img>
              </td>
              <td className={styles['product-name']}>
                <span>{cartItem.name}</span>
              </td>
              <td className={styles['product-quantity']}>
                <button
                  onClick={() => {
                    const _CART = CART.map((item, index) => {
                      return cartindex === index
                        ? {
                            ...item,
                            quantity:
                              item.quantity > 0 ? item.quantity - 1 : item,
                          }
                        : item;
                    });
                    setCART(_CART);
                  }}
                >
                  -
                </button>
                <span>Số lượng: {cartItem.quantity}</span>
                <button
                  onClick={() => {
                    const _CART = CART.map((item, index) => {
                      return cartindex === index
                        ? { ...item, quantity: item.quantity + 1 }
                        : item;
                    });
                    setCART(_CART);
                  }}
                >
                  +
                </button>
              </td>
              <td className={styles['product-price']}>
                <span>Giá: {cartItem.price * cartItem.quantity}đ</span>
              </td>
            </tr>
          </div>
        );
      })}
      <p>
        Tổng cộng: 
        {CART.map((item) => item.price * item.quantity).reduce(
          (total, value) => total + value,
          0
        )}
        đ
      </p>

      <button className={styles["check-cart"]}>
        <AiOutlineCheck />
        Chốt đơn
      </button>
    </div>
  );
}

export default CardList;