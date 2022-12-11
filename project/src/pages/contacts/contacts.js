import styles from './styles.module.css'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


function Contacts() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1wmew8o', 'template_i87c969', form.current, 'Uv-Zm4arBwu4iTpO9')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
    }
    return ( 
        <div className={styles.container}>
        <div>
          <img className={styles.img} src='https://channel.mediacdn.vn/thumb_w/640/428462621602512896/2022/9/26/image001-1664195121764113911391.png'></img>
        </div>
        <div>
          <h1 className={styles.title}>Contacts</h1>
            <form className={styles.form} ref={form} onSubmit={sendEmail}>
              <div className={styles.name}>
                <label className={styles.text}>Name</label>
                <input className={styles.inputUser} type="text" name="user_name" />
              </div>
              <div className={styles.email}>
                <label className={styles.text}>Email</label>
                <input className={styles.inputMail} type="email" name="user_email" />
              </div>
              <div className={styles.message}>
                <label className={styles.text}>Message</label>
                <textarea className={styles.inputMessage} name="message" />
              </div>
              <input className={styles.button} type="submit" value="Send" />
            </form>
        </div>
        </div>
     );
}

export default Contacts;

