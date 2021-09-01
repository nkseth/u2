import { Button, useMediaQuery } from "@material-ui/core";
<<<<<<< HEAD
import { Crop32Rounded, Crop32Sharp } from "@material-ui/icons";
import React, { useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
=======
import React, { useEffect, useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
>>>>>>> 9840c20e5582f9a06dd5df4e07eb8fbdecec64a6
import CustomDivider from "../../../utils/Custom Divider/divider";
import styles from "../Style/Trending.module.scss";
import c1 from "../Images/c1.png";
import c2 from "../Images/c2.png";
import c3 from "../Images/c3.png";
import c4 from "../Images/c4.png";
import { topTrending } from "../../../Redux/actions/designerHomePage";
import { useDispatch, useSelector } from "react-redux";
const Trending = () => {
  const dispatch = useDispatch();
  const imageSrc =
    "https://images.unsplash.com/photo-1585846416120-3a7354ed7d39?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHN1aXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
  const baseStyle = { padding: "5rem 3rem", background: "  #F3F1EE" };

<<<<<<< HEAD
  // const { push } = useLocation();
  const { push } = useHistory();
  const mobileView = useMediaQuery("(max-width:1024px)");

  const { items } = useSelector((state) => state.root.trending);

  useEffect(() => {
    dispatch(topTrending());
  }, []);
=======
  const location = useHistorys();
  const mobileView = useMediaQuery("(max-width:1024px)");

  useEffect(()=>{
    fetch_data()
  },[]);

  const fetch_data = async () => {
    
  }
>>>>>>> 9840c20e5582f9a06dd5df4e07eb8fbdecec64a6

  return (
    <div className={styles.trending_content} style={baseStyle}>
      <div className={`${styles.Trending_header}`} style={{ color: "#1A202C" }}  >
        Trending
        <CustomDivider style={{ height: "1px", background: "#857250" }} />
      </div>
      <div className={styles.Trending}>
        {items.map(({ name, cover_image }) => (
          <div className={styles.Trending_Items}>
            <img src={cover_image} alt={name} />
            <Link to="designers-product-page">{name}</Link>
          </div>
        ))}
        {/* <div className={styles.Trending_Items}>
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
        </div> */}
        {mobileView ? (
          items.map(({ name, cover_image }) => (
            <div className={styles.Trending_Items}>
              <img src={cover_image} alt={name} />
              <Link to="designers-product-page">{name}</Link>
            </div>
          ))
        ) : (
          <></>
        )}
      </div>
      <div className={`${styles.Trending_Button}`}>
<<<<<<< HEAD
        <Button onClick={() => push("/designers-product-page")}>
          View all
        </Button>
=======
        <Button onClick={() => location.push("designers-product-page")}>View all</Button>
>>>>>>> 9840c20e5582f9a06dd5df4e07eb8fbdecec64a6
      </div>
    </div>
  );
};

export default Trending;
