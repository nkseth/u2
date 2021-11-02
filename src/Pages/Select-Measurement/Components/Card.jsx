import React from 'react';
import {useMediaQuery } from '@material-ui/core';
import img from "../../../Images/image/Product.png"
import styles from './Card.module.scss'

export default function Card({ data }) {
    const mobileView = useMediaQuery("(max-width:550px)");

    return (
        <div style={{ display: 'inline-flex' }}>
            <img width='165px' height='186px' src={data.feature_image} alt="" className={styles.img}/>
            <div className={styles.product_details}>
                <div>
                    <p>{data.title}</p>
                    <span>product color</span>
                </div>
                <div>
                    <p>product type</p>
                    <span>{data.type}</span>
                </div>
                <div>
                    <p>₹{data.type == 'readymade' ? data.readymade_offer_price : data.custom_offer_price}</p>
                    <span>₹{data.type == 'readymade' ? data.readymade_price : data.custom_price} <span> {data.type == 'readymade' ? data.readymade_discount : data.custom_discount}% OFF</span></span>
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

