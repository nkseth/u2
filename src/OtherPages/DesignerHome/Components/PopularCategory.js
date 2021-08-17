import React from "react";
import { Link } from "react-router-dom";
import CustomDivider from "../../../utils/Custom Divider/divider";
import styles from "../Style/PopularCategory.module.scss";
//TRBL
const PopularCategory = () => {
  const baseStyle = { width: "90%", margin: "1rem auto 3rem auto" };

  return (
    <>
      <div style={baseStyle}>
        <div className={`${styles.PopularCategory_header}`}>
          Popular Category
          <CustomDivider style={{ height: "2px", background: "#857250" }} />
        </div>
        <div className={`${styles.Category} Category`}>
          <div className={`${styles.Category_item1} Category_item1`}>
            <Link to="designers-product-page">Wear</Link>
          </div>
          <div className={`${styles.Category_item2} Category_item2`}>
            <Link to="designers-product-page">Wear</Link>{" "}
          </div>
          <div className={`${styles.Category_item3} Category_item3`}>
            <Link to="designers-product-page">Wear</Link>
          </div>
          <div className={`${styles.Category_item4} Category_item4`}>
            <Link to="designers-product-page">Wear</Link>{" "}
          </div>
          <div className={`${styles.Category_item5} Category_item5`}>
            <Link to="designers-product-page">Wear</Link>{" "}
          </div>
          <div className={`${styles.Category_item6} Category_item6`}>
            <Link to="designers-product-page">Wear</Link>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default PopularCategory;
