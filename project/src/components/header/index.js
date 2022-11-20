import { Routes, Route, Link } from "react-router-dom";

import styles from "./styles.module.css";
import HomePage from "../../pages/home/home";
import Contacts from "../../pages/contacts/contacts";
import Products from "../../pages/product/product";
import Guide from "../../pages/guide/guide";

function HeaderWeb() {
  return (
    <div className={styles.body}>
      <div className={styles.banner}>
        <img src="https://hanoitop10.net/wp-content/uploads/banner-giay-da-bong-nike_493a933a8d0a41f0b8a1aa346b0a34e5.jpg"></img>
      </div>
      <div className={styles.header}>
        
          <input className={styles.search} name="search" placeholder="Search"></input>
          <ul className={styles.title}>
          <li className={styles.a}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.a}>
            <Link to="/contacts">Contacts</Link>
          </li>
          <li className={styles.a}>
            <Link to="/products">Products</Link>
          </li>
          <li className={styles.a}>
            <Link to="/guide">Hướng Dẫn</Link>
          </li>
        </ul>

        <span className={styles.button}>
          <button name="login">Login</button>
          <button name="signUp">Sign Up</button>
        </span>
      </div>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/guide" element={<Guide />} />
                </Routes>
    </div>
  );
}

export default HeaderWeb;
