import { useState } from "react";
import styles from "./styles.module.css";

function LoginForm() {

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");


  return (
    <>
      <form>
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
          name="pass"
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
