import styles from "./styles.module.css";

function RegisterForm() {
  return (
    <div className={styles.form}>
      <h1 className={styles.h1}>Register Form</h1>
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
        <label className={styles.lable}>Email </label>
        <input
          name="email"
          type="text"
          placeholder="Email"
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
      <div className={styles.pass}>
        <label className={styles.lable}>Password Confirm </label>
        <input
          name="passConfirm"
          type="password"
          placeholder="Password Confirm"
          className={styles.input}
        ></input>
      </div>
      <button className={styles.button}>Register</button>
    </div>
  );
}

export default RegisterForm;
