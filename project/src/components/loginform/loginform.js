import { useState } from "react";
import styles from "./styles.module.css";
import axios from 'axios'
import {useNavigate} from "react-router-dom"

function LoginForm() {

  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");


  const handleLogin= (e) =>{
    e.preventDefault();
    axios.get("http://localhost:3000/profile",{
      user: user,
      password : password,
    }).then(result =>{
      console.log(result);
      
        navigate("/");
      
    }).catch(error =>{
      console.log(error);
      alert("Đăng nhập thất bại");
    })
  }

  return (
    <>
      <form onSubmit={handleLogin}>
      <div className={styles.form}>
      <h1 className={styles.h1}>Login Form</h1>
      <div className={styles.user}>
        <label className={styles.lable}>Username </label>
        <input
          name="user"
          type="text"
          placeholder="UserName"
          className={styles.input}
          value={user}
          onChange={(e) => setUser(e.target.value)}
        ></input>
      </div>
      <div className={styles.pass}>
        <label className={styles.lable}>Password </label>
        <input
          name="password"
          type="password"
          placeholder="Password"
          className={styles.input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
      </div>
      <div></div>
      <button className={styles.button}>Login</button>
    </div>
      </form>
    </>
  );
}

export default LoginForm;
