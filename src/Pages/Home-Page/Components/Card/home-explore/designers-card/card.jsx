import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import styles from "./card.module.scss";
import { Link } from "react-router-dom";
//icon
import { Button } from "@material-ui/core";

const useStyles = makeStyles({
  
  btn:{
      backgroundColor:'#857250',
      height:"43px",
      color:"white",
      marginTop:40
  }

})
export default function ProductCard() {
  const [isAddToWishList, setAddToWishList] = useState(false);
  const classes= useStyles();
  const img =
    "https://cdn.pixabay.com/photo/2017/08/07/12/49/people-2603521__340.jpg";
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>"
        <img src={img} alt="product" style={{borderRadius:"50%"}} />
        
      </div>
      <Link to="product-description" className={styles.productDetails}>
        <span className={styles.productName}>Name</span>
        <Button style={{background:"#857250", color:"white",borderRadius: "100px"}} clasName={classes.btn}>Follow</Button>
      </Link>
    </div>
  );
}
