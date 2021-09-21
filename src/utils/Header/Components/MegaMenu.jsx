import React, { useEffect } from "react";
import MegaMenuCard from "./card";
import styles from "./MegaMenu.module.scss";
import { useSelector } from "react-redux";

function MegaMenu({ Close, visible, type }) {
  const { category_subgrp } = useSelector((state) => state.root.main);
  const arr = category_subgrp[type];

  if (!arr) {
    return null;
  }
  console.log(arr);
  return (
    <div
      className={visible ? styles.container : styles.hiddenContainer}
      onMouseLeave={() => Close(false)}
    >
      {arr.length > 0 &&
        arr["sub_group"].map((item) => {
          console.log(item);
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
