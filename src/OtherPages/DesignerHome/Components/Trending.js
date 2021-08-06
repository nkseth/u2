import { Button } from "@material-ui/core";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import CustomDivider from "../../../utils/Custom Divider/divider";
import styles from "../Style/Trending.module.scss";
const Trending = () => {
  const imageSrc =
    "https://images.unsplash.com/photo-1585846416120-3a7354ed7d39?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHN1aXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
  const baseStyle = { padding: "3rem", background: " #e9e9e9" };

  const { push } = useLocation();
  return (
    <div style={baseStyle}>
      <div className={`${styles.Trending_header}`}>
        Trending
        <CustomDivider style={{ height: "2px", background: "#857250" }} />
      </div>
      <div className={styles.Trending}>
        <div className={styles.Trending_Items}>
          <img src={imageSrc} alt="items" />
          <Link to="designers-product-page">Wear</Link>
        </div>
        <div className={styles.Trending_Items}>
          <img src={imageSrc} alt="items" />
          <Link to="designers-product-page">Wear</Link>
        </div>
        <div className={styles.Trending_Items}>
          <img src={imageSrc} alt="items" />
          <Link to="designers-product-page">Wear</Link>
        </div>
        <div className={styles.Trending_Items}>
          <img src={imageSrc} alt="items" />
          <Link to="designers-product-page">Wear</Link>
        </div>
      </div>
      <div className={`${styles.Trending_Button}`}>
        <Button onClick={() => push("designers-product-page")}>View all</Button>
      </div>
    </div>
  );
};

export default Trending;
