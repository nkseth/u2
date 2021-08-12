import React from 'react';
import Product from '../../../Images/image/Product.png';
import styles from './product.module.scss'

function product(props) {
    return (
        <div className={styles.container}>
        <div className={styles.imgContainer}>
          <img src={Product} alt='product' />
        </div>
       
      </div>
    );
}

export default product;