import React from "react";
import { Grid, useMediaQuery } from "@material-ui/core";
import { Link } from "react-router-dom";
import Container from "../../utils/Container/container";
import Breadcrumb from "../../utils/Breadcrumb/breadcrumb";
import CustomSection from "../../utils/Custom Section/section";
import Filter from "./Components/Sections/Filter/filter";
import HeroSection from "./Components/Sections/HeroSection/heroSection";
import styles from "./designer-product-page.module.scss";
import ProductsSection from "./Components/Sections/Products/products";

export default function DesignerProductPage() {
  const tabViewPro = useMediaQuery("(max-width:835px)");
  const tabView = useMediaQuery("(max-width:768px)");
  const mobileView = useMediaQuery("(max-width:550px)");
  return (
    <Container bottomDivider footerOnAllView>
      {!tabViewPro && (
        <CustomSection>
          <Breadcrumb
            path='Designers Home / Men /'
            activePath='Designer Profile'
          />
        </CustomSection>
      )}

      <div className={styles.container}>
        {!tabViewPro && (
          <div className={styles.firstSection}>
            <Filter />
          </div>
        )}

        <div className={styles.secondSection}>
          <HeroSection />
          <div style={{ padding: "1rem 1rem 5rem" }}>
            <ProductsSection />
          </div>
        </div>
      </div>
    </Container>
  );
}
