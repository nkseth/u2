import { Button, useMediaQuery } from "@material-ui/core";
import { Crop32Rounded, Crop32Sharp } from "@material-ui/icons";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import CustomDivider from "../../../utils/Custom Divider/divider";
import styles from "../Style/Trending.module.scss";
import c1 from '../Images/c1.png'
import c2 from '../Images/c2.png'
import c3 from '../Images/c3.png'
import c4 from '../Images/c4.png'
const Trending = () => {
  const imageSrc =
    "https://images.unsplash.com/photo-1585846416120-3a7354ed7d39?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHN1aXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
  const baseStyle = { padding: "5rem 3rem", background: "  #F3F1EE" };

  const { push } = useLocation();
  const mobileView = useMediaQuery("(max-width:1024px)");

  return (
    <div className={styles.trending_content} style={baseStyle}>
      <div className={`${styles.Trending_header}`} style={{ color: "#1A202C" }}  >
        Trending
        <CustomDivider style={{ height: "1px", background: "#857250" }} />
      </div>
      <div className={styles.Trending}>
        <div className={styles.Trending_Items}>
          <img src={c1} alt="items" />
          <Link to="designers-product-page">Wear</Link>
        </div>
        <div className={styles.Trending_Items}>
          <img src={c2} alt="items" />
          <Link to="designers-product-page">Wear</Link>
        </div>
        <div className={styles.Trending_Items}>
          <img src={c3} alt="items" />
          <Link to="designers-product-page">Wear</Link>
        </div>
        <div className={styles.Trending_Items}>
          <img src={c4} alt="items" />
          <Link to="designers-product-page">Wear</Link>
        </div>
        <div className={styles.Trending_Items}>
          <img src={c2} alt="items" />
          <Link to="designers-product-page">Wear</Link>
        </div>
        {mobileView ?
          <div className={styles.Trending_Items}>
            <img src={c1} alt="items" />
            <Link to="designers-product-page">Wear</Link>
          </div>
          :
          <></>
        }
      </div>
      <div className={`${styles.Trending_Button}`}>
        <Button onClick={() => push("designers-product-page")}>View all</Button>
      </div>
    </div>
  );
};

export default Trending;
