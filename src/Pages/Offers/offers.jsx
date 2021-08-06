import React from "react";
import { Link } from "react-router-dom";
import { Grid, useMediaQuery } from "@material-ui/core";
import Container from "../../utils/Container/container";
import CustomDivider from "../../utils/Custom Divider/divider";
import OffersCard from "./Components/Offers-Card/card";
import styles from "./offers.module.scss";
import SideNavbar from "../../utils/Side-Navbar/sideNavbar";
import Breadcrumb from "../../utils/Breadcrumb/breadcrumb";
export default function Offers() {
  const tabView = useMediaQuery("(max-width:768px)");
  const mobileView = useMediaQuery("(max-width:550px)");
  return (
    <Container
      bottomDivider
      dividerConStyle={{ paddingBottom: 0 }}
      footerOnTabMob
    >
      <section className={styles.section}>
        {!tabView && <SideNavbar />}
        <div className={styles.cardsDivOuterContainer}>
          {tabView && <Breadcrumb path="Home /" activePath="Profile" />}
          <div className={styles.headerDiv}>
            <span className={styles.header}>Offers</span>
            <CustomDivider />
          </div>
          <div className={styles.cardsDiv}>
            <OffersCard />
            <OffersCard />
            <OffersCard />
            <OffersCard />
          </div>
        </div>
      </section>
      <Link to="/all-orders">Next Page</Link>
    </Container>
  );
}
