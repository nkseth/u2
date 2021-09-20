import React, { useEffect } from "react";
import MegaMenuCard from "./card";
import styles from "./MegaMenu.module.scss";
import { useSelector } from "react-redux";

function MegaMenu({ Close, visible, type }) {
    const { category_subgrp } = useSelector((state) => state.root.main);
    const arr = Object.values(category_subgrp);
    console.log('arr', arr)
    return (
        <div
            className={visible ? styles.container : styles.hiddenContainer}
            onMouseLeave={() => Close(false)}
        >
            {arr?.map((item) => {
                return (

                    <MegaMenuCard
                        key={item.id?.toString()}
                        background={item.cover_image}
                        title={item.name}
                        categories={item.categories}
                    />
                );
            })}
        </div>
    );
}


export default MegaMenu;