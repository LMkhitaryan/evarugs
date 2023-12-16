import styles from './style.module.css';

import Product1 from '../../../assets/images/product1.png';
import Product2 from '../../../assets/images/product2.png';
import Product3 from '../../../assets/images/product3.png';

import Figure1 from '../../../assets/images/products-section-figure1.svg';
import Figure2 from '../../../assets/images/products-section-figure2.svg';
import Figure3 from '../../../assets/images/products-section-figure3.svg';

const Product = () => {

    const products = [
        {title: 'Материал', src: Product1, descr: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur fugit vitae sapiente corporis temporibus reiciendis officiis fugiat! Esse sed suscipit ab mollitia dignissimos perspiciatis placeat culpa illum, libero quos error.'},
        {title: 'отличия', src: Product2, descr: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur fugit vitae sapiente corporis temporibus reiciendis officiis fugiat! Esse sed suscipit ab mollitia dignissimos perspiciatis placeat culpa illum, libero quos error.'},
        {title: 'расцветка', src: Product3, descr: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur fugit vitae sapiente corporis temporibus reiciendis officiis fugiat! Esse sed suscipit ab mollitia dignissimos perspiciatis placeat culpa illum, libero quos error.'}
    ]
  return (
    <>
      <section className={styles.products_section}>
        <img className={styles.figure1} src={Figure1} alt="" />
        <img className={styles.figure2} src={Figure2} alt="" />
        <img className={styles.figure3} src={Figure3} alt="" />
        <div style={{textAlign: 'center'}}>
            <h2 className={styles.title}>Что такое <span>EVA</span> коврики?</h2>
        </div>
        
        <div className={styles.products_block}>
            {products.map((item) => {
              return (
                <div className={styles.product}>
                    <div className={styles.product_img} style={{backgroundImage: `url(${item.src})`}}>
                        {/* <img src={item.src} alt="" /> */}
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', paddingLeft: '15px', paddingRight: '15px', rowGap: '15px', paddingBottom: '15px'}}>
                      <h3 className={styles.product_title}>{item.title}</h3>
                      <p className={styles.product_descr}>{item.descr}</p>
                    </div>
                    
                </div>
              )
            })}
           
        </div>
      </section>
    </>
  )
}

export default Product
