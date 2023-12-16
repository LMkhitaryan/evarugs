import styles from './style.module.css';

import { BsFillTelephoneFill } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";

const Header = () => {

  return (
    <>
        <header className={styles.header}>
            <div className={styles.tel_block}>
                <span className={styles.icon}><BsFillTelephoneFill size={20}/></span>
                <a href='#' className={styles.tel}>+375 29 292-29-29 (VEL)</a>
                <a href='#' className={styles.tel}>+375 33 333-33-33 (МТС)</a>
            </div>
            <div className={styles.town_block}>
                <span className={styles.icon}><IoLocationSharp size={20}/></span>
                <a href='#' className={styles.town}>ваш город</a>
            </div>
            <div className={styles.account_block}>
                <span className={styles.icon}><FaInstagram size={30}/></span>
                <a href='#' className={styles.account}>посетите нашу страницу</a>
            </div>
        </header>
    </>
  )
}

export default Header
