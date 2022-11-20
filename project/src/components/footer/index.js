import {DiApple} from 'react-icons/di'

import styles from './styles.module.css'

function Footer() {
    return ( 
        <Footer>
            <div className = {styles.start}>
                <ul>
                    <li>

                    </li>
                </ul>
            </div>
            <div className = {styles.end}>
             <DiApple/>{(new Date().getFullYear())} Copyright: <a href="https://www.facebook.com/trien222003/"> 17B8 </a>
            </div>
        </Footer>
     );
}

export default Footer;