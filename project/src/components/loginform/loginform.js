import styles from "./styles.module.css";

function LoginForm() {
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
        ></input>
      </div>
      <div className={styles.pass}>
        <label className={styles.lable}>Password </label>
        <input
          name="pass"
          type="password"
          placeholder="Password"
          className={styles.input}
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
