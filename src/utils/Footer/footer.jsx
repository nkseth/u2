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

import configObject from "../../Configurations/objectConfig";
const {
  usefullLinks,
  buyingGuide,
  shopping,
  policies,
  talkToUs,
  popularSearches,
} = configObject;

export default function Footer() {
  const tabView = useMediaQuery("(max-width:768px)");
  const mobileView = useMediaQuery("(max-width:550px)");

  const GetCustomizedList = ({ data, image }) => {
    const spanClassName = !mobileView
      ? styles.linksHeader
      : styles.linksHeaderForMobile;

    const containerClassName = !mobileView
      ? styles.linksContainer
      : image
      ? styles.linksContainerWithImageForMobile
      : styles.linksContainerForMobile;

    const linkClassName = !mobileView ? styles.link : styles.linkForMobile;

    const imageSize = { height: 15, width: 15 };

    return (
      data &&
      data.map((item) => {
        return (
          <>
            {image ? (
              <div>
                <img src={TalkToUsIcon} alt="talk to us" style={imageSize} />
                <span className={spanClassName}>{item.title}</span>
              </div>
            ) : (
              <span className={spanClassName}>{item.title}</span>
            )}

            <div className={containerClassName}>
              {item.links &&
                item.links.map((linkItem) => {
                  return <Link className={linkClassName}>{linkItem}</Link>;
                })}
            </div>
          </>
        );
      })
    );
  };

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
              {!mobileView && <span className={styles.logo}>Logo</span>}
            </div>

            {!mobileView && (
              <>
                <div className={styles.emailContianer}>
                  <span>Write email with us</span>
                  <label>Enter email*</label>
                  <input
                    type="text"
                    placeholder="thirdeyeinnovation@gmail.com"
                  />
                </div>
                <Button
                  className={styles.emailSubmitBtn}
                  variant="contained"
                  color="default"
                >
                  submit
                </Button>
              </>
            )}
          </Grid>

          {!mobileView ? (
            <>
              <Grid className={styles.gridItem} item xs={6} sm={4} md={2}>
                <GetCustomizedList data={usefullLinks} />
              </Grid>
              <Grid className={styles.gridItem} item xs={6} sm={4} md={2}>
                <GetCustomizedList data={buyingGuide} />
              </Grid>
              <Grid className={styles.gridItem} item xs={6} sm={3} md={2}>
                <GetCustomizedList data={shopping} />
              </Grid>
              <Grid className={styles.gridItem} item xs={6} sm={3} md={2}>
                <GetCustomizedList data={policies} />

                <div
                  className={
                    !mobileView
                      ? styles.talkToUsContainer
                      : styles.talkToUsContainerForMobile
                  }
                >
                  <GetCustomizedList data={talkToUs} image={TalkToUsIcon} />
                </div>
              </Grid>
            </>
          ) : (
            <>
              <div
                style={{
                  display: "flex",
                  gap: "0.5rem",
                  paddingLeft: "10px",
                  paddingRight: "5px",
                  marginBottom: "10px",
                }}
                className={cx(styles.logoContainerForMobile)}
              >
                <div style={{ width: 205 }}>
                  <span className={styles.logo}>Logo</span>
                  <div className={styles.emailContianer}>
                    <span>Write email with us</span>
                    <label>Enter email*</label>
                    <input
                      type="text"
                      placeholder="thirdeyeinnovation@gmail.com"
                      style={{ fontSize: 12 }}
                    />
                  </div>
                  <Button
                    className={styles.emailSubmitBtn}
                    variant="contained"
                    color="default"
                  >
                    submit
                  </Button>
                </div>
                <Grid className={styles.gridItem} item xs={6} sm={4} md={2}>
                  <GetCustomizedList data={usefullLinks} />
                </Grid>
                <Grid className={styles.gridItem} item xs={6} sm={4} md={2}>
                  <GetCustomizedList data={buyingGuide} />
                </Grid>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "0.5rem",
                  paddingLeft: "10px",
                  paddingRight: "5px",
                }}
              >
                <Grid className={styles.gridItem} item xs={6} sm={3} md={2}>
                  <GetCustomizedList data={shopping} />
                </Grid>
                <Grid className={styles.gridItem} item xs={6} sm={3} md={2}>
                  <GetCustomizedList data={policies} />

                  <div
                    className={
                      !mobileView
                        ? styles.talkToUsContainer
                        : styles.talkToUsContainerForMobile
                    }
                  >
                    <GetCustomizedList data={talkToUs} image={TalkToUsIcon} />
                  </div>
                </Grid>
                <Grid item sm={6} md={9} className={styles.storeContainer}>
                  <div
                    className={
                      !mobileView
                        ? styles.linksHeader
                        : styles.linksHeaderForMobilePlatformButton
                    }
                  >
                    Experience U2 App on Mobile
                  </div>
                  <div style={{ display: "grid" }}>
                    <a href="#">
                      <img
                        src={GooglePlayImg}
                        alt="google play"
                        style={{ width: "85%", marginTop: 5 }}
                      />
                    </a>
                    <a href="#">
                      <img
                        src={AppleStoreImg}
                        alt="app store"
                        style={{ width: "85%", marginTop: 10 }}
                      />
                    </a>
                  </div>
                </Grid>
              </div>
            </>
          )}

          {mobileView
            ? null
            : tabView && (
                <Grid item sm={6} md={9} className={styles.storeContainer}>
                  <div className={styles.linksHeader}>
                    Experience U2 App on Mobile
                  </div>
                  <div style={{ display: "grid" }}>
                    <a href="#">
                      <img
                        src={GooglePlayImg}
                        alt="google play"
                        style={{ width: "70%" }}
                      />
                    </a>
                    <a href="#">
                      <img
                        src={AppleStoreImg}
                        alt="app store"
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
                <IconButton aria-label="instagram">
                  <img src={InstagramIcon} alt="instagram" />
                </IconButton>
                <IconButton aria-label="facebook">
                  <img src={FacebookIcon} alt="facebook" />
                </IconButton>
                <IconButton aria-label="linkedIn">
                  <img src={LinkedInIcon} alt="facebook" />
                </IconButton>
              </div>
            </Grid>
          )}

          {mobileView ? (
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
                style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
              >
                <Grid item sm={3} md={3}>
                  <span
                  // className={styles.linksHeader}
                  >
                    Connect with us
                  </span>
                  <div style={{ marginTop: -8 }}>
                    <IconButton
                      aria-label="instagram"
                      style={{ margin: -5, marginLeft: 6 }}
                    >
                      <img
                        src={InstagramIcon}
                        alt="instagram"
                        style={{ width: 20, height: 20 }}
                      />
                    </IconButton>
                    <IconButton aria-label="facebook">
                      <img
                        src={FacebookIcon}
                        alt="facebook"
                        style={{ width: 20, height: 20, margin: -10 }}
                      />
                    </IconButton>
                    <IconButton aria-label="linkedIn">
                      <img
                        src={LinkedInIcon}
                        alt="facebook"
                        style={{ width: 20, height: 20, margin: -5 }}
                      />
                    </IconButton>
                  </div>
                </Grid>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <img
                    src={OriginalIcon}
                    alt="100% original"
                    style={{ height: 35, width: 35 }}
                  />
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <span
                      style={{
                        fontSize: "9px",
                        fontWeight: 700,
                      }}
                    >
                      100% ORIGINAL
                    </span>
                    <span
                      style={{
                        fontSize: "8px",
                        fontWeight: 400,
                        color: "#3B3B3B",
                        marginTop: -4,
                      }}
                    >
                      guarantee for all products at U2.com
                    </span>
                  </div>
                </div>
              </div>
            </Grid>
          ) : (
            tabView && (
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
                  <img src={OriginalIcon} alt="100% original" />
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
            )
          )}
          {!tabView && (
            <Grid item sm={4} md={9} className={styles.storeContainer}>
              <div className={styles.linksHeader}>
                Experience U2 App on Mobile
              </div>
              <div className={styles.storeImageContainer}>
                <a href="#">
                  <img
                    className={styles.googlePlay}
                    src={GooglePlayImg}
                    alt="google play"
                  />
                </a>
                <a href="#">
                  <img
                    className={styles.appStore}
                    src={AppleStoreImg}
                    alt="app store"
                  />
                </a>
                <div className={styles.originalIconContainer}>
                  <img src={OriginalIcon} alt="100% original" />
                  <div>
                    <span>100% ORIGINAL</span>
                    <span>guarantee for all products at U2.com</span>
                  </div>
                </div>
              </div>
            </Grid>
          )}
        </Grid>

        {/* Populer searches section*/}
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

          <Grid
            item
            md={12}
            className={
              !mobileView
                ? styles.searchTagContainer
                : styles.searchTagContainerForMobile
            }
          >
            {popularSearches?.map((item, index) => (
              <Link to={item.redirect}>
                {item.title}
                {popularSearches.length - 1 !== index ? (
                  <>&nbsp;|&nbsp;</>
                ) : null}
              </Link>
            ))}
          </Grid>
          <Grid
            item
            md={12}
            mt={1}
            className={
              !mobileView
                ? styles.searchTagContainer
                : styles.searchTagContainerForMobile
            }
          >
            {popularSearches?.map((item, index) => (
              <Link to={item.redirect}>
                {item.title}
                {popularSearches.length - 1 !== index ? (
                  <>&nbsp;|&nbsp;</>
                ) : null}
              </Link>
            ))}
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <CustomDivider />
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            className={
              !mobileView ? styles.endTagline : styles.endTaglineForMobile
            }
          >
            &copy;{new Date().getFullYear()} U2.com All rights reserved.
          </Grid>
        </Grid>
      </CustomSection>
    </>
  );
}
