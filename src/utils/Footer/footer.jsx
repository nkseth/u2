import React from "react";
import { Grid, Button, IconButton, useMediaQuery } from "@material-ui/core";
import { Link } from "react-router-dom";
import cx from "classnames";
import CustomSection from "../Custom Section/section";
import CustomDivider from "../Custom Divider/divider";
import styles from "./footer.module.scss";
// social media icons
import InstagramIcon from "../../Images/icons/social media/instagram.svg";
import FacebookIcon from "../../Images/icons/social media/facebook.svg";
import LinkedInIcon from "../../Images/icons/social media/linkedIn.svg";
// other images
import TalkToUsIcon from "../../Images/icons/talkToUs.svg";
import OriginalIcon from "../../Images/icons/original.svg";
import GooglePlayImg from "../../Images/icons/playStore.svg";
import AppleStoreImg from "../../Images/icons/appStore.svg";

const popularSearches = [
  {
    title: "Sherwani",
    redirect: "/sherwani",
  },
  {
    title: "Track Pants",
    redirect: "/track-pants",
  },
  {
    title: "Sweaters For Men",
    redirect: "/sweaters-for-men",
  },
  {
    title: "Men Wedding Dresses",
    redirect: "/men-wedding-dresses",
  },
  {
    title: "Kurta Pajama",
    redirect: "/kurta-pajama",
  },
  {
    title: "Raincoats ",
    redirect: "/raincoats ",
  },
  {
    title: "Shorts",
    redirect: "/shorts ",
  },
  {
    title: "Trousers ",
    redirect: "/trousers ",
  },
  {
    title: "Waistcoat ",
    redirect: "/waistcoat ",
  },
  {
    title: "Inner Wear",
    redirect: "/inner-wear",
  },
  {
    title: "Nightwear ",
    redirect: "/nightwear ",
  },
  {
    title: "Jeans ",
    redirect: "/jeans ",
  },
  {
    title: "Shirts",
    redirect: "/shirts",
  },
  {
    title: "Jogger Jeans",
    redirect: "/jogger-jeans",
  },
  {
    title: "Men Suits",
    redirect: "/men-suits",
  },
  {
    title: "T Shirts",
    redirect: "/t-shirts",
  },

  {
    title: "Sweatshirts ",
    redirect: "/sweatshirts ",
  },
  {
    title: "Jackets For Men",
    redirect: "/jackets-for-men",
  },
  {
    title: "Tracksuits ",
    redirect: "/tracksuits ",
  },
  {
    title: "Ripped Jeans",
    redirect: "/ripped-jeans",
  },
  {
    title: "Ethnic Wear",
    redirect: "/ethnic-wear",
  },
  {
    title: "Hoodies",
    redirect: "/hoodies",
  },
  {
    title: "Raksha Bandhan Gifts",
    redirect: "/raksha-bandhan-gifts",
  },
];
export default function Footer() {
  const tabView = useMediaQuery("(max-width:768px)");
  const mobileView = useMediaQuery("(max-width:550px)");
  return (
    <>
      <CustomSection
        style={{
          paddingTop: mobileView ? "27px" : tabView ? "33px" : "50px",
          paddingBottom: "30px",
          background: "#F9F9F7",
        }}
      >
        <Grid container className={styles.gridContainer} spacing={2}>
          <Grid
            className={cx(styles.gridItem, styles.logoContainer)}
            item
            xs={12}
            sm={4}
            md={3}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <span className={styles.logo}>Logo</span>
              {mobileView && (
                <Grid
                  item
                  sm={3}
                  md={3}
                  classname={styles.socialMediaContainer}
                >
                  <span className={styles.linksHeader}>Connect with us</span>
                  <div>
                    <IconButton aria-label='instagram'>
                      <img src={InstagramIcon} alt='instagram' />
                    </IconButton>
                    <IconButton aria-label='facebook'>
                      <img src={FacebookIcon} alt='facebook' />
                    </IconButton>
                    <IconButton aria-label='linkedIn'>
                      <img src={LinkedInIcon} alt='facebook' />
                    </IconButton>
                  </div>
                </Grid>
              )}
            </div>

            <div className={styles.emailContianer}>
              <span>Write email with us</span>
              <label>Enter email*</label>
              <input type='text' placeholder='thirdeyeinnovation@gmail.com' />
            </div>
            <Button
              className={styles.emailSubmitBtn}
              variant='contained'
              color='default'
            >
              submit
            </Button>
          </Grid>
          <Grid className={styles.gridItem} item xs={6} sm={4} md={2}>
            <span className={styles.linksHeader}>Useful Links</span>
            <div className={styles.linksContainer}>
              <Link className={styles.link}>About us</Link>
              <Link className={styles.link}>Contact us</Link>
              <Link className={styles.link}>FAQ</Link>
              <Link className={styles.link}>Blog</Link>
              <Link className={styles.link}>Careers</Link>
              <Link className={styles.link}>Sitemap</Link>
              <Link className={styles.link}>Store Locator</Link>
            </div>
          </Grid>
          <Grid className={styles.gridItem} item xs={6} sm={4} md={2}>
            <span className={styles.linksHeader}>Buying Guide</span>
            <div className={styles.linksContainer}>
              <Link className={styles.link}>Gift Card</Link>
              <Link className={styles.link}>
                Coupon Code &amp; Offers T&amp;C
              </Link>
              <Link className={styles.link}>Returns &amp; Exchanges</Link>
              <Link className={styles.link}>Shipping &amp; Delivery</Link>
              <Link className={styles.link}>Payment Options</Link>
              <Link className={styles.link}>Give Us Feedback</Link>
              <Link className={styles.link}>Order Customization</Link>
            </div>
          </Grid>
          <Grid className={styles.gridItem} item xs={6} sm={3} md={2}>
            <span className={styles.linksHeader}>Shopping</span>
            <div className={styles.linksContainer}>
              <Link className={styles.link}>New Arrivals</Link>
              <Link className={styles.link}>Men</Link>
              <Link className={styles.link}>Women</Link>
              <Link className={styles.link}>Kids</Link>
              <Link className={styles.link}>Desiners</Link>
              <Link className={styles.link}>Comtempory</Link>
              <Link className={styles.link}>Offers</Link>
            </div>
          </Grid>
          <Grid className={styles.gridItem} item xs={6} sm={3} md={2}>
            <span className={styles.linksHeader}>Policies</span>
            <div className={styles.linksContainer}>
              <Link className={styles.link}>Terms &amp; Conditions</Link>
              <Link className={styles.link}>Security &amp; Privacy</Link>
              <Link className={styles.link}>Purchase Order Policy</Link>
              <div className={styles.talkToUsContainer}>
                <div>
                  <img src={TalkToUsIcon} alt='talk to us' />
                  <span>Talk to us</span>
                </div>

                <div>
                  <span>+919663406663</span>
                  <span>+917762989531</span>
                </div>
              </div>
            </div>
          </Grid>
          {tabView && (
            <Grid item sm={6} md={9} className={styles.storeContainer}>
              <div className={styles.linksHeader}>
                Experience U2 App on Mobile
              </div>
              <div style={{ display: "grid" }}>
                <a href='#'>
                  <img
                    src={GooglePlayImg}
                    alt='google play'
                    style={{ width: "70%" }}
                  />
                </a>
                <a href='#'>
                  <img
                    src={AppleStoreImg}
                    alt='app store'
                    style={{ width: "70%" }}
                  />
                </a>
              </div>
            </Grid>
          )}
        </Grid>

        <Grid
          container
          className={cx(styles.mediaHandlerContainer, styles.gridContainer)}
          spacing={2}
        >
          {!mobileView && (
            <Grid item sm={3} md={3} classname={styles.socialMediaContainer}>
              <span className={styles.linksHeader}>Connect with us</span>
              <div>
                <IconButton aria-label='instagram'>
                  <img src={InstagramIcon} alt='instagram' />
                </IconButton>
                <IconButton aria-label='facebook'>
                  <img src={FacebookIcon} alt='facebook' />
                </IconButton>
                <IconButton aria-label='linkedIn'>
                  <img src={LinkedInIcon} alt='facebook' />
                </IconButton>
              </div>
            </Grid>
          )}

          {tabView && (
            <Grid
              item
              sm={8}
              style={{
                display: "grid",
                placeItems: "center",
                justifyItems: "flex-start",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "1rem" }}
              >
                <img src={OriginalIcon} alt='100% original' />
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span
                    style={{
                      fontSize: "16px",
                      fontWeight: 700,
                      lineHeight: "22px",
                    }}
                  >
                    100% ORIGINAL
                  </span>
                  <span
                    style={{
                      fontSize: "14px",
                      fontWeight: 400,
                      lineHeight: "18px",
                      color: "#3B3B3B",
                    }}
                  >
                    guarantee for all products at U2.com
                  </span>
                </div>
              </div>
            </Grid>
          )}
          {!tabView && (
            <Grid item sm={4} md={9} className={styles.storeContainer}>
              <div className={styles.linksHeader}>
                Experience U2 App on Mobile
              </div>
              <div className={styles.storeImageContainer}>
                <a href='#'>
                  <img
                    className={styles.googlePlay}
                    src={GooglePlayImg}
                    alt='google play'
                  />
                </a>
                <a href='#'>
                  <img
                    className={styles.appStore}
                    src={AppleStoreImg}
                    alt='app store'
                  />
                </a>
                <div className={styles.originalIconContainer}>
                  <img src={OriginalIcon} alt='100% original' />
                  <div>
                    <span>100% ORIGINAL</span>
                    <span>guarantee for all products at U2.com</span>
                  </div>
                </div>
              </div>
            </Grid>
          )}
        </Grid>
        <Grid
          container
          classname={styles.gridContainer}
          spacing={3}
          style={{ padding: "0 .5rem" }}
        >
          {!mobileView && (
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              style={{ display: "flex", alignItems: "center", gap: "1rem" }}
            >
              <span style={{ margin: 0 }} className={styles.linksHeader}>
                Popular searches
              </span>
              <CustomDivider />
            </Grid>
          )}

          <Grid item md={12} className={styles.searchTagContainer}>
            {popularSearches.map((item) => (
              <Link to={item.redirect}>{item.title}&nbsp;|&nbsp;</Link>
            ))}
            {popularSearches.map((item) => (
              <Link to={item.redirect}>{item.title}&nbsp;|&nbsp;</Link>
            ))}
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <CustomDivider />
          </Grid>
          <Grid item xs={12} sm={12} md={12} className={styles.endTagline}>
            &copy;{new Date().getFullYear()} U2.com All rights reserved.
          </Grid>
        </Grid>
      </CustomSection>
    </>
  );
}
