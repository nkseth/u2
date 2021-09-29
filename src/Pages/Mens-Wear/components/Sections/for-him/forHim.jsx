import React, { useEffect } from "react";
import { Grid, Button, useMediaQuery } from "@material-ui/core";
import ProductCard from "./Components/product-cards/card";
import CustomSection from "../../../../../utils/Custom Section/section";
import styles from "./forHim.module.scss";
import { useDispatch, useSelector } from "react-redux";
//Images
import Main from "./Components/Images/Main.jpg";

import {
  get_mens_active_product,
  setSelectedSubGrp,
} from "../../../../../Redux/actions/mensWear";
import { useHistory } from "react-router-dom";

export default function ForHimSection({ type }) {
  const customView = useMediaQuery("(max-width:1235px)");
  const tabView = useMediaQuery("(max-width:768px)");
  const tabViewPro = useMediaQuery("(max-width:835px)");
  const mobileView = useMediaQuery("(max-width:550px)");
  const dispatch = useDispatch();
  const history = useHistory();

  const {
    selected_sub_grp: activeNav,
    mens_active_product,
    banner,
  } = useSelector((state) => state.root.main);

  const grp = type;

  useEffect(() => {
    dispatch(get_mens_active_product(type, "all"));
  }, [type, dispatch]);

  const setActiveNav = (type, active) => {
    dispatch(setSelectedSubGrp(type));
    dispatch(get_mens_active_product(type, active));
  };

  return (
    <CustomSection
      style={{
        backgroundColor: "rgba(230, 227, 220, 0.21)",
        paddingBottom: mobileView ? "40px" : "84px",
        paddingTop: mobileView ? "30px" : "45px",
      }}
    >
      <div className={styles.mainContainer}>
        <div className={styles.forHimFirstSection}>
          <p>
            <span style={{ color: "#000" }}>
              <i>#For</i>
            </span>
            &nbsp;{type === "mens" ? "Him" : type === "womens" ? "Her" : "Kids"}
          </p>
          {customView && (
            <nav
              className={styles.navBar}
              style={{
                width: mobileView ? "100%" : "85%",
                justifyContent: "center",
                marginTop: mobileView ? ".5rem" : "2rem",
              }}
            >
              <div className={styles.navItems}>
                <span
                  href="#"
                  className={activeNav === "all" && styles.activeNav}
                  onClick={() => setActiveNav(grp, "all")}
                >
                  All
                </span>
                {banner.categories?.map((item, index) => {
                  if (index > 3) {
                    return null;
                  }
                  return (
                    <span
                      href="#"
                      className={
                        activeNav.toLowerCase() === item.slug.toLowerCase() &&
                        styles.activeNav
                      }
                      onClick={() => {
                        setActiveNav(grp, item.slug);
                      }}
                    >
                      {item.name}
                    </span>
                  );
                })}
              </div>
            </nav>
          )}
          <img src={Main} alt="for him" />
        </div>
        <Grid
          container
          style={{ margin: "0" }}
          spacing={mobileView ? 1 : tabView ? 2 : 4}
          justify="space-between"
          className={styles.secondSection}
        >
          {!customView && (
            <Grid item xs={12} sm={12} md={12}>
              <nav className={styles.navBar}>
                <div className={styles.navItems}>
                  <span
                    href="#"
                    className={activeNav === "all" && styles.activeNav}
                    onClick={() => setActiveNav(grp, "all")}
                  >
                    All
                  </span>
                  {banner.categories?.map((item, index) => {
                    if (index > 4) {
                      return null;
                    }
                    return (
                      <span
                        href="#"
                        className={activeNav === item.slug && styles.activeNav}
                        onClick={() => setActiveNav(grp, item.slug)}
                      >
                        {item.name}
                      </span>
                    );
                  })}
                </div>
                <Button
                  onClick={() =>
                    history.push(`/designers-product-page/${activeNav}`)
                  }
                  className={styles.viewAllBtn}
                >
                  View all
                </Button>
              </nav>
            </Grid>
          )}
          {mens_active_product?.slice(0, 6).map((item) => {
            return (
              <Grid item xs={6} sm={4} md={4} justifyContent={"space-between"}>
                <ProductCard data={item} image={item.feature_image} />
              </Grid>
            );
          })}
        </Grid>
        {customView && (
          <Grid
            item
            md={12}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Button
              onClick={() =>
                history.push(`/designers-product-page/${activeNav}`)
              }
              className={styles.viewAllBtn}
            >
              View all
            </Button>
          </Grid>
        )}
      </div>
    </CustomSection>
  );
}
