import { Routes, Route, Link } from "react-router-dom";
import { BiSearchAlt2 } from "react-icons/bi";
import { AiTwotoneHome } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { TbShoe } from "react-icons/tb";
import { BsBookHalf } from "react-icons/bs";
import { BsFillCartCheckFill } from "react-icons/bs";

import styles from "./styles.module.css";
import HomePage from "../../pages/home/home";
import Contacts from "../../pages/contacts/contacts";
import Products from "../../pages/product/product";
import Guide from "../../pages/guide/guide";

function HeaderWeb() {
  return (
    <div className={styles.body}>
        <img className={styles.banner} src="https://hanoitop10.net/wp-content/uploads/banner-giay-da-bong-nike_493a933a8d0a41f0b8a1aa346b0a34e5.jpg"></img>
      <div className={styles.header}>
        <input
          className={styles.search}
          name="search"
          placeholder="  Search"
        ></input>
        <ul className={styles.title}>
          <li className={styles.a}>
            <AiTwotoneHome /> <Link to="/">HOME</Link>
          </li>
          <li className={styles.a}>
            <BiCommentDetail /> <Link className={styles.texta} to="/contacts">CONTACTS</Link>
          </li>
          <li className={styles.a}>
            <TbShoe/> <Link to="/products">PRODUCTS</Link>
          </li>
          <li className={styles.a}>
            <BsBookHalf /> <Link to="/guide">INSTRUCTION</Link>
          </li>
        </ul>
        <BsFillCartCheckFill size="25px" className={styles.cart} />
        <span className={styles.button}>
          <button name="login">Login </button>
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
