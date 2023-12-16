import styles from './style.module.css';

import SectionMain from './sectionMain/SectionMain';
import Product from './sectionProduct/Product';
import Reviews from './sectionReviews/Reviews';

const Main = () => {
  return (
    <>
      <main className={styles.main}>
        <SectionMain/>
        <Product/>
        <Reviews/>
      </main>
    </>
  )
}

export default Main
