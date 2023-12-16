import styles from './style.module.css';

import instagramIcon from '../../assets/images/instagram.svg'
import footerSmallFigure from '../../assets/images/footer-small-figure.svg';
import footerBigFigure from '../../assets/images/footer-big-figure.svg';

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
          <img className={styles.small_figure} src={footerSmallFigure} alt="figure" />
        <div className={styles.info}>
          <div className={styles.account_block}>
            <span className={styles.title}>МЫ В СОЦИАЛЬНЫХ СЕТЯХ</span>
            <span><img src={instagramIcon} alt="instagram" /></span>
          </div>
          <div className={styles.tel_block}>
            <span className={styles.title}>КОНТАКТНЫЕ ТЕЛЕФОНЫ</span>
            <div className={styles.tel}>
              <span>+375 29 292-29-29 (VEL)</span>
              <span>+375 33 333-33-33 (МТС)</span>
            </div>
          </div>
          <div className={styles.aboutUs_block}>
            <span className={styles.title}>О НАС</span>
            <div className={styles.aboutUs}>
              <span>Индивидуальное изготовление EVA ковриков для вашего автомобиля</span>
              <span>ваш город</span>
            </div>
          </div>
        </div>
        <img className={styles.big_figure} src={footerBigFigure} alt="figure" />
      </footer>
    </>
  )
}

export default Footer
