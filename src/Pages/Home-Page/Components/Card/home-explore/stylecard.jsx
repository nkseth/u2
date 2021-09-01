import React from 'react';
import styles from './card.module.scss';
import { Container } from '@material-ui/core';
function Stylecard(props) {
    return (
        <div className={styles.container}>
          <div className={styles.imgContainer}>
            <img src={props.image} alt='product' height="444px" width="360px" />
            <div className={styles.productDetails}>
        <span className={styles.productName}>{props.title}</span></div>
          </div>
         
        </div>
      );
}

export default Stylecard;