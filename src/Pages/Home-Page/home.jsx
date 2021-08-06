import React from "react";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import Container from "../../utils/Container/container";
import HeroCard from "./Components/Card/card";
import styles from "./home.module.scss";

export default function Home() {
  const img2 =
    "https://s3-alpha-sig.figma.com/img/05c9/d932/feef7283e32d813897725f4e2ba0203b?Expires=1626652800&Signature=EA4flsut0HT-pWL468MAiBdCkPwHBGZFklqwbg66jRq8~fR83RJ8iZbi3ezbR78QlbDmMW4ecHV4UDeBxye8CKWlENhHyUzgIVNCQKvRmSf4Y7eB2bQlfeG7-KjRONPZUDrS~ch2UF0GD3n9CURsM5a6V6aUtYhgwQ1~zPsHXisCN4Q2HqYdU6RBfOxhhh2pi7URmEcSAvlkCLCUUkQzrAtV0Favu6ONpZltMMyHSXqK5Houa2qeex3crj9mpM30vJ8YxMoPWTUetCTJeKIbQRQACK7wXM8J6aTEez9w9KRM3S8kLPJMgFxRlUn47GadvhDyQluTwy7uPrz55c9h3A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA";
  const img1 =
    "https://www.figma.com/file/3feKLdzH2SEin23kTS0pjx/image/7a7d5a32e573cc2df649246fe05faa140574b308?fuid=763802552325253092";
  return (
    <Container footerOnAllView>
      <Grid container className={styles.gridContainer}>
        <Grid item xs={12} sm={6} md={6}>
          <HeroCard backgroundImg={img1} header={"Designer Wear"} />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <HeroCard backgroundImg={img2} header={"Branded Wear"} />
        </Grid>
      </Grid>
    </Container>
  );
}
