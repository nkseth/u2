import React, { useState } from "react";
import { Grid, Button, useMediaQuery } from "@material-ui/core";
import ProductCard from "./Components/product-cards/card";
import CustomSection from "../../../../../utils/Custom Section/section";
import styles from "./forHim.module.scss";

export default function ForHimSection() {
  const customView = useMediaQuery("(max-width:1235px)");
  const tabView = useMediaQuery("(max-width:768px)");
  const tabViewPro = useMediaQuery("(max-width:835px)");
  const mobileView = useMediaQuery("(max-width:550px)");
  const [activeNav, setActiveNav] = useState("all");
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
            <span>
              <i>#For</i>
            </span>
            &nbsp;Him
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
                  onClick={() => setActiveNav("all")}
                >
                  All
                </span>
                <span
                  href="#"
                  className={activeNav === "shirts" && styles.activeNav}
                  onClick={() => setActiveNav("shirts")}
                >
                  Shirts
                </span>
                <span
                  href="#"
                  className={activeNav === "jeans" && styles.activeNav}
                  onClick={() => setActiveNav("jeans")}
                >
                  Jeans
                </span>
                <span
                  href="#"
                  className={activeNav === "jackets" && styles.activeNav}
                  onClick={() => setActiveNav("jackets")}
                >
                  Jackets
                </span>
                <span
                  href="#"
                  className={activeNav === "blazzers" && styles.activeNav}
                  onClick={() => setActiveNav("blazzers")}
                >
                  Blazzers
                </span>
                <span
                  href="#"
                  className={activeNav === "trousers" && styles.activeNav}
                  onClick={() => setActiveNav("trousers")}
                >
                  Trousers
                </span>
              </div>
            </nav>
          )}
          <img
            src="https://cdn.pixabay.com/photo/2015/03/26/09/41/tie-690084__340.jpg"
            alt="for him"
          />
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
                    onClick={() => setActiveNav("all")}
                  >
                    All
                  </span>
                  <span
                    href="#"
                    className={activeNav === "shirts" && styles.activeNav}
                    onClick={() => setActiveNav("shirts")}
                  >
                    Shirts
                  </span>
                  <span
                    href="#"
                    className={activeNav === "jeans" && styles.activeNav}
                    onClick={() => setActiveNav("jeans")}
                  >
                    Jeans
                  </span>
                  <span
                    href="#"
                    className={activeNav === "jackets" && styles.activeNav}
                    onClick={() => setActiveNav("jackets")}
                  >
                    Jackets
                  </span>
                  <span
                    href="#"
                    className={activeNav === "blazzers" && styles.activeNav}
                    onClick={() => setActiveNav("blazzers")}
                  >
                    Blazzers
                  </span>
                  <span
                    href="#"
                    className={activeNav === "trousers" && styles.activeNav}
                    onClick={() => setActiveNav("trousers")}
                  >
                    Trousers
                  </span>
                </div>
                <Button className={styles.viewAllBtn}>View all</Button>
              </nav>
            </Grid>
          )}

          <Grid item xs={6} sm={4} md={4}>
            <ProductCard />
          </Grid>
          <Grid item xs={6} sm={4} md={4}>
            <ProductCard />
          </Grid>
          <Grid item xs={6} sm={4} md={4}>
            <ProductCard />
          </Grid>
          <Grid item xs={6} sm={4} md={4}>
            <ProductCard />
          </Grid>
          <Grid item xs={6} sm={4} md={4}>
            <ProductCard />
          </Grid>
          <Grid item xs={6} sm={4} md={4}>
            <ProductCard />
          </Grid>
        </Grid>
        {customView && (
          <Grid
            item
            md={12}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Button className={styles.viewAllBtn}>View all</Button>
          </Grid>
        )}
      </div>
    </CustomSection>
  );
}
