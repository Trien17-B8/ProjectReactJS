import { Routes, Route, Link } from "react-router-dom";
import { AiTwotoneHome } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { TbShoe } from "react-icons/tb";
import { BsBookHalf } from "react-icons/bs";
import { BsFillCartCheckFill } from "react-icons/bs";
import styles from "./styles.module.css";

function HeaderWeb(props) {
  

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
            <BsBookHalf /> <Link to="/guide">GUIDE</Link>
          </li>
        </ul>
        <Link to="/cart"><BsFillCartCheckFill size="30px" className={styles.cart}/></Link>
        <sup className={styles.count}>{props.count}</sup>
        <span className={styles.button}>
          <Link to="/login" className={styles.login}>Login</Link>
          <Link to="/register" className={styles.login}>Register</Link>
        </span>
      </div>
     
    </div>
  );
}

export default HeaderWeb;
