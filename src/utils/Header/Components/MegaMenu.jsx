import React from "react";
import MegaMenuCard from "./card";
import styles from "./MegaMenu.module.scss";
import { useSelector } from "react-redux";

function MegaMenu({ Close, visible, type }) {
  const { category_subgrp } = useSelector((state) => state.root.main);

  const arr = category_subgrp[type];

  return (
    <div
      className={visible ? styles.container : styles.hiddenContainer}
      onMouseLeave={() => Close(false)}
    >
      {arr?.sub_grp?.map((item) => (
        <MegaMenuCard
          key={item.id?.toString()}
          background={item.cover_image}
          title={item.name}
          categories={item.categories}
        />
      ))}
    </div>
  );
}

export default MegaMenu;
