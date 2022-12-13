import { useState, useEffect } from "react";
import styles from "./styles.module.css";
import axios from 'axios'
import {useNavigate} from "react-router-dom"

function LoginForm() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []);

  // logout the user
  const handleLogout = () => {
    navigate('/');
    setUser({});
    setUsername("");
    setPassword("");
    localStorage.clear();
  };

  // login the user
  const handleSubmit = async e => {
    e.preventDefault();
    const user = { username, password };
    // send the username and password to the server
    const response = await axios.get(
      "http://localhost:3000/profile",
      user
    );
    setUser(response.data);
    localStorage.setItem("user", JSON.stringify(response.data));
  };
  if (user) {
    return (
      <div>
        {user.name} is loggged in
        <button onClick={handleLogout}>logout</button>
      </div>
    );
  }

  

  return (
    <>
      <form onSubmit={handleSubmit}>
      <div className={styles.form}>
      <h1 className={styles.h1}>Login Form</h1>
      <div className={styles.user}>
        <label className={styles.lable}>Username </label>
        <input
          name="username"
          type="text"
          placeholder="UserName"
          className={styles.input}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
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
      <button className={styles.button} typeof='submit'>Login</button>
    </div>
      </form>
    </>
  );
}

export default LoginForm;
