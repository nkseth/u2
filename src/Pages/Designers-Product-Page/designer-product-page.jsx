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


//images 

import AllenSolly from "./Components/Sections/Products/Images/AllenSolly.png"
import PeterEngland from "./Components/Sections/Products/Images/PeterEngland.png"
import BeneKleed from "./Components/Sections/Products/Images/BeneKleed.png"


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
          {/* <HeroSection /> */}
          <div style={{ padding: "1rem 1rem 5rem" }}>
            <ProductsSection products={productData} />
          </div>
        </div>
      </div>
    </Container>
  );
}

//dummy data

const productData = [
  {
    Name: 'Allen solly',
    image: AllenSolly,
    description: "Cream three piece suit",
    price: "₹6,000",
    off: '63% OFF'
  },
  {
    Name: 'Peter England',
    image: PeterEngland,
    description: "Blue two piece suit",
    price: "₹9,000",
    off: '10% OFF'
  },
  {
    Name: 'Allen solly',
    image: AllenSolly,
    description: "Cream three piece suit",
    price: "₹6,000",
    off: '63% OFF'
  }, {
    Name: 'Bene kleed',
    image: BeneKleed,
    description: "Men off-white & blue Suit",
    price: "₹3,000",
    off: '63% OFF'
  }, {
    Name: 'Allen solly',
    image: AllenSolly,
    description: "Cream three piece suit",
    price: "₹6,000",
    off: '63% OFF'
  },
  {
    Name: 'Peter England',
    image: PeterEngland,
    description: "Blue two piece suit",
    price: "₹9,000",
    off: '10% OFF'
  },
  {
    Name: 'Allen solly',
    image: AllenSolly,
    description: "Cream three piece suit",
    price: "₹6,000",
    off: '63% OFF'
  }, {
    Name: 'Peter England',
    image: PeterEngland,
    description: "Blue two piece suit",
    price: "₹9,000",
    off: '10% OFF'
  }, {
    Name: 'Allen solly',
    image: AllenSolly,
    description: "Cream three piece suit",
    price: "₹6,000",
    off: '63% OFF'
  },
  {
    Name: 'Peter England',
    image: PeterEngland,
    description: "Blue two piece suit",
    price: "₹9,000",
    off: '10% OFF'
  },
  {
    Name: 'Bene kleed',
    image: BeneKleed,
    description: "Men off-white & blue Suit",
    price: "₹3,000",
    off: '63% OFF'
  },
  {
    Name: 'Allen solly',
    image: AllenSolly,
    description: "Cream three piece suit",
    price: "₹6,000",
    off: '63% OFF'
  },
  {
    Name: 'Bene kleed',
    image: BeneKleed,
    description: "Men off-white & blue Suit",
    price: "₹3,000",
    off: '63% OFF'
  },
  {
    Name: 'Peter England',
    image: PeterEngland,
    description: "Blue two piece suit",
    price: "₹9,000",
    off: '10% OFF'
  }, {
    Name: 'Allen solly',
    image: AllenSolly,
    description: "Cream three piece suit",
    price: "₹6,000",
    off: '63% OFF'
  },
  {
    Name: 'Peter England',
    image: PeterEngland,
    description: "Blue two piece suit",
    price: "₹9,000",
    off: '10% OFF'
  },

]



