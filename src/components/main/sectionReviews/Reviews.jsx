import styles from './style.module.css';

import Vector from '../../../assets/images/vector.svg';
import Person1 from '../../../assets/images/person1.png';
import Person2 from '../../../assets/images/person2.png';
import Person3 from '../../../assets/images/person3.png';

const Reviews = () => {
  return (
    <>
      <section className={styles.reviews_section}>
        <div className={styles.scroll_block}>
            <div className={styles.review_block}>
                <div className={styles.img_wrapper} style={{backgroundImage: `url(${Person1})`}}>
                    {/* <img src={Vector} alt="" style={{backgroundImage: `url(${Person1})`}}/> */}
                </div>
                <p className={styles.review}>Коврики супер!!! Качество на высшем уровне!!! Удачи и побольше заказов вам!!! Большое спасибо!</p>
                <div className={styles.line}></div>
                <span className={styles.name}>Константин В.</span>
            </div>

            <div className={styles.review_block}>
                <div className={styles.img_wrapper} style={{backgroundImage: `url(${Person2})`}}>
                    {/* <img src={Vector} alt="" style={{backgroundImage: `url(${Person1})`}}/> */}
                </div>
                <p className={styles.review}>Покупала у ребят коврики для Хундай солярис в подарок молодому человеку. Все очень понравилось. Буду советовать только вас.</p>
                <div className={styles.line}></div>
                <span className={styles.name}>Вера К.</span>
            </div>

            <div className={styles.review_block}>
                <div className={styles.img_wrapper} style={{backgroundImage: `url(${Person3})`}}>
                    {/* <img src={Vector} alt="" style={{backgroundImage: `url(${Person1})`}}/> */}
                </div>
                <p className={styles.review}>Спасибо, все приехало, поставил. Результатом доволен, в машине супер! Заказывал на Ниссан.</p>
                <div className={styles.line}></div>
                <span className={styles.name}>Николай П.</span>
            </div>
        </div>
        

        
      </section>
    </>
  )
}

export default Reviews
