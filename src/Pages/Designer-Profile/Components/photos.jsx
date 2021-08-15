import React from 'react';
import Image from "./../../../Images/image/Select.png"
import styles from './product.module.scss'
function photos(props) {
    return (
        <div className={styles.container}>
        <div className={styles.imgContainer}>
          <img src={Image} alt='product' />
        </div>
       
      </div>
    );
}

export default photos;