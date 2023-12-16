import styles from './style.module.css';

import Logo from '../../assets/images/logo.svg';

const Nav = () => {
  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.logo_block}>
            <img src={Logo} alt="logo" />
            <a className={styles.logo_title} href="#">EVARUGS</a>
        </div>
        <ul className={styles.nav_list}>
          <li className={styles.item}>
            <a className={styles.link} href="#">отзывы</a>
          </li>
          <li className={styles.item}>
            <a className={styles.link} href="#">что это?</a>
          </li>
          <li className={styles.item}>
            <a className={styles.link} href="#">контакты</a>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Nav
