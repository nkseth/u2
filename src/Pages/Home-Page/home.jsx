import React from "react";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import Container from "../../utils/Container/container";
import HeroCard from "./Components/Card/card";
import styles from "./home.module.scss";
import img1 from "./high.png"
import img2 from "./man.jpg"


export default function Home() {
  return (
    <Container footerOnAllView>
      <div className={styles.gridContainer}>
        <div className={styles.HeroBanner}>
          <HeroCard backgroundImg={img2} header={"Designer Wear"} />
        </div>
        <div className={styles.HeroBanner}>

          <HeroCard backgroundImg={img1} header={"Branded Wear"} />
        </div>
      </div>
    </Container>
  );
}
