import styles from './style.module.css'

import Figure1 from '../../../assets/images/figures1.png';
import Figure2 from '../../../assets/images/figures2.png';
import Figure3 from '../../../assets/images/figure3.svg';
import Figure4 from '../../../assets/images/figure4.svg';
import Figure5 from '../../../assets/images/figure5.svg';
import Figure6 from '../../../assets/images/figure6.svg';
import Figure7 from '../../../assets/images/figure7.svg';

const SectionMain = () => {
  return (
    <>
      <section className={styles.main}>
          <div className={styles.main_block}>
              <h1 className={styles.title}>Инновационные коврики для автомобиля</h1>
              <p className={styles.descr}>в вашем городе</p>
              <button className={styles.button}>ЗАКАЗАТЬ</button>
          </div>
          <img className={styles.figures1} src={Figure1} alt="" />
          <img className={styles.figures2} src={Figure2} alt="" />
          <img className={styles.figure3} src={Figure3} alt="" />
          <img className={styles.figure4} src={Figure4} alt="" />
          <img className={styles.figure5} src={Figure5} alt="" />
          <img className={styles.figure6} src={Figure6} alt="" />
          <img className={styles.figure7} src={Figure7} alt="" />
        </section>
    </>
  )
}

export default SectionMain
