import React from "react";
import { Grid, Button, IconButton, useMediaQuery } from "@material-ui/core";
import ReactStars from "react-rating-stars-component";
import Container from "../../utils/Container/container";
import SideNavbar from "../../utils/Side-Navbar/sideNavbar";
import Breadcrumb from "../../utils/Breadcrumb/breadcrumb";
import styles from "./orders.module.scss";
import { ReactComponent as CameraIcon } from "../../Images/icons/camera.svg";

export default function Orders() {
  const mobileView = useMediaQuery("(max-width:550px)");
  const tabView = useMediaQuery("(max-width:768px)");
  const tabViewPro = useMediaQuery("(max-width:835px)");
  const productImg =
    "https://images.pexels.com/photos/2882694/pexels-photo-2882694.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
  return (
    <Container
      bottomDivider
      dividerConStyle={{ paddingBottom: 0 }}
      footerOnTabMob
    >
      <div className={styles.section}>
        {!tabView && (
          <div>
            <SideNavbar />
          </div>
        )}

        <div
          style={{
            padding: mobileView
              ? "1rem"
              : tabViewPro
              ? "30px"
              : "0 4rem 0 4rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            width: "100%",
          }}
        >
          {tabView && <Breadcrumb path='Home /' activePath='Profile' />}
          <div className={styles.productDiv}>
            <img src={productImg} alt='product' />
            <div>
              <span className={styles.productHeader}>
                10 Current Fashion Trends You’ll Be Wearing in 2021
              </span>
              <span className={styles.productDescription}>
                Solid Straight Kurta
              </span>
              <div className={styles.productQuantity}>
                <span>Quantity:</span>
                <span>01</span>
              </div>
              <span className={styles.price}>₹559</span>
            </div>
          </div>
          <div className={styles.productRatingDiv}>
            <span>Rate this product</span>
            <ReactStars size={40} edit={true} />
          </div>
          <div className={styles.productReviewDiv}>
            <span>Review this product</span>
            <textarea row={5} placeholder='Write your review' />
          </div>
          <div className={styles.addImgDiv}>
            <div>
              <input accept='image/*' type='file' id='addImg' />
              <label htmlFor='addImg'>
                <IconButton aria-label='add image' component='span'>
                  <CameraIcon />
                </IconButton>
              </label>
            </div>
            <span>Add image here</span>
          </div>
          <Button variant='text' color='default' className={styles.button}>
            Submit
          </Button>
        </div>
      </div>
    </Container>
  );
}
