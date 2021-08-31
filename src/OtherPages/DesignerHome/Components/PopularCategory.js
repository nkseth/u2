import React from "react";
import { Link } from "react-router-dom";
import CustomDivider from "../../../utils/Custom Divider/divider";
import styles from "../Style/PopularCategory.module.scss";
import overlay from "../Images/p1.png";
//TRBL 
const PopularCategory = () => {
  const baseStyle = { padding: "5rem 3rem" };

  return (
    <>
      <div className={styles.popularcategory_content} style={baseStyle}>
        <div className={`${styles.PopularCategory_header}`}>
          Popular Category
          <CustomDivider style={{ height: "1px", background: "#857250" }} />
        </div>
        <div className={`${styles.Category} Category`}>
          <div className={`${styles.Category_item1} Category_item`}>
            <img src={overlay} className={styles.divOverlayImg} />

            <Link style={{ zIndex: 10, fontFamily: "DM Serif Display" }} to="designers-product-page"  >
              Celebrity Wear</Link>
          </div>
          <div className={`${styles.Category_item2} Category_item`}>
            <img src={overlay} className={styles.divOverlayImg} />
            <Link style={{ zIndex: 10, fontFamily: "DM Serif Display" }} to="designers-product-page"> Wedding Wear</Link>{" "}
          </div>
          <div className={`${styles.Category_item3} Category_item`}>
            <img src={overlay} className={styles.divOverlayImg} />
            <Link style={{ zIndex: 10, fontFamily: "DM Serif Display" }} to="designers-product-page"> Business Wear</Link>
          </div>
          <div className={`${styles.Category_item4} Category_item`}>
            <img src={overlay} className={styles.divOverlayImg} />
            <Link style={{ zIndex: 10, fontFamily: "DM Serif Display" }} to="designers-product-page"> Party Wear</Link>{" "}
          </div>
          <div className={`${styles.Category_item5} Category_item`}>
            <img src={overlay} className={styles.divOverlayImg} />
            <Link style={{ zIndex: 10, fontFamily: "DM Serif Display" }} to="designers-product-page">Formal Wear</Link>{" "}
          </div>
          <div className={`${styles.Category_item6} Category_item`}>
            <img src={overlay} className={styles.divOverlayImg} />
            <Link style={{ zIndex: 10, fontFamily: "DM Serif Display" }} to="designers-product-page"> Kids Wear</Link>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default PopularCategory;
