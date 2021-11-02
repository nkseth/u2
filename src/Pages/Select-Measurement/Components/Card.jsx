import React from 'react';
import {useMediaQuery } from '@material-ui/core';
import img from "../../../Images/image/Product.png"
import styles from './Card.module.scss'

export default function Card() {
    const mobileView = useMediaQuery("(max-width:550px)");

    return (
        <div style={{ display: 'inline-flex' }}>
            <img width='165px' height='186px' src={img} alt="" className={styles.img}/>
            <div className={styles.product_details}>
                <div>
                    <p>product title</p>
                    <span>product color</span>
                </div>
                <div>
                    <p>product type</p>
                    <span>customized</span>
                </div>
                <div>
                    <p>₹559</p>
                    <span>₹1499 <span> 63% OFF</span></span>
                </div>
                <div>
                    {
                        mobileView && (
                            <p>Offer ends in 4hrs</p>
                        )
                    }
                </div>
            </div>
        </div>
    );
}

