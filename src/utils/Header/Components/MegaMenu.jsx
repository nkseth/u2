import React, { useEffect } from 'react'
import MegaMenuCard from './card'
import styles from "./MegaMenu.module.scss"
import Img1 from "../Images/1.png"
import Img2 from "../Images/2.png"
import Img3 from "../Images/3.png"
import Img4 from "../Images/4.png"
import Img5 from "../Images/5.png"
import Img6 from "../Images/6.png"
import { useSelector } from 'react-redux'

function MegaMenu({ Close, visible, type }) {

    const { category_subgrp } = useSelector(state => state.root.main)

    const arr = category_subgrp[type]

    if(!arr){
        return null;
    }

    return (
        <div className={visible ? styles.container : styles.hiddenContainer}
            onMouseLeave={() => Close(false)}>
            {arr['sub-group'].map((item) => {
                return (
                    <MegaMenuCard key={item.id?.toString()} background={item.cover_image} title={item.name} categories={item.categories} />
                )
            })}
        </div>
    )
}

export default MegaMenu

