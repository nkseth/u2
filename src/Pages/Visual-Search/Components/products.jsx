import React, { useState } from "react";
import CustomSection from '../../../utils/Custom Section/section';
import ProductCard from '../../Mens-Wear/components/Sections/for-him/Components/product-cards/card';
import styles from '../../Mens-Wear/components/Sections/for-him/forHim.module.scss';
import { Grid, Button, useMediaQuery } from "@material-ui/core";

function Products(props) {
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
        <div className={styles.mainContainer} style={{backgroundColor:"#ffffff"}}>
          
          <Grid
            container
            style={{ margin: "0" }}
            spacing={mobileView ? 1 : tabView ? 2 : 4}
            justify="space-between"
            className={styles.secondSection}
          >
  
            <Grid item xs={6} sm={4} md={3}>
              <ProductCard />
            </Grid>
            <Grid item xs={6} sm={4} md={3}>
              <ProductCard />
            </Grid>
            <Grid item xs={6} sm={4} md={3}>
              <ProductCard />
            </Grid>
            <Grid item xs={6} sm={4} md={3}>
              <ProductCard />
            </Grid>
            <Grid item xs={6} sm={4} md={3}>
              <ProductCard />
            </Grid>
            
          </Grid>
          
        </div>
      </CustomSection>
    );
  }
export default Products;