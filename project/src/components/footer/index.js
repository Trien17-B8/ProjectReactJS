import {DiApple} from 'react-icons/di'
import {BsFacebook} from 'react-icons/bs'
import {FiMail} from 'react-icons/fi'
import {AiFillPhone} from 'react-icons/ai'
import {SiZalo} from 'react-icons/si'

import styles from './styles.module.css'

function Footer() {
    return ( 
        <div>
            <div className = {styles.start}>
                <a className={styles.contacts} href='/'><BsFacebook className={styles.text} size='30px'/>Facebook</a>
                <a className={styles.contacts2} href=''><FiMail className={styles.text2} size='30px'/>Send to gmail</a>
                <a className={styles.contacts3} href=''><AiFillPhone className={styles.text3} />Leo: 0356169620</a>
                <a className={styles.contacts3} href=''><SiZalo className={styles.text3} size='30px' />0356169620</a>
                <img className={styles.images} src='https://khothietke.net/wp-content/uploads/2021/03/taiPNGmienphi-free-01979-bong-da-cau-thu-bong-da.png'></img>
            </div>
            <div className = {styles.end}>
             <DiApple className={styles.icons} size='15px'/> © Created for <a href="">mindX Technology School</a>
            </div>
        </div>
     );
}

export default Footer;