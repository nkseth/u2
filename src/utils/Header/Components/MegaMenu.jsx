import React from "react";
import MegaMenuCard from "./card";
import styles from "./MegaMenu.module.scss";
import { useSelector } from "react-redux";

function MegaMenu({ Close, visible, type }) {
  const { category_subgrp } = useSelector((state) => state.root.main);
  const arr = category_subgrp[type];
  console.log(arr);
  return (
    <div
      className={visible ? styles.container : styles.hiddenContainer}
      onMouseLeave={() => Close(false)}
    >
      {arr?.sub_grp?.slice(0, 6).map((item) => (
        <MegaMenuCard
          key={item.id?.toString()}
          background={item.cover_image}
          title={item.name}
          categories={item.categories}
          type={arr.slug}
        />
      ))}
    </div>
  );
}

export default MegaMenu;
