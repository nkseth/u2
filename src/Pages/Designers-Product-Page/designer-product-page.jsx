import React, { useEffect, useState } from "react";
import { Button, Grid, useMediaQuery } from "@material-ui/core";
import Container from "../../utils/Container/container";
import Breadcrumb from "../../utils/Breadcrumb/breadcrumb";
import Filter from "./Components/Sections/Filter/filter";
import styles from "./designer-product-page.module.scss";
import ProductsSection from "./Components/Sections/Products/products";
import { useLocation } from "react-router-dom";

//images

// import AllenSolly from "./Components/Sections/Products/Images/AllenSolly.png";
// import PeterEngland from "./Components/Sections/Products/Images/PeterEngland.png";
// import BeneKleed from "./Components/Sections/Products/Images/BeneKleed.png";
import common_axios from "../../utils/axios.config";
import {
  getFilteredProduct,
  getFilterList,
} from "../../Redux/actions/filter-category";
import { useDispatch, useSelector } from "react-redux";

function DesignerProductPage({ match }) {
  const dispatch = useDispatch();
  const tabViewPro = useMediaQuery("(max-width:835px)");
  const tabView = useMediaQuery("(max-width:768px)");
  const mobileView = useMediaQuery("(max-width:550px)");
  const location = useLocation();
  const { filters } = useSelector((state) => state.root.filterCategory);
  const {
    params: { slug },
  } = match;

  const [product, setProduct] = useState([]);
  const [category, setCategory] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(getFilterList());
    fetch_products();
  }, [slug]);

  const fetch_products = async () => {
    try {
      const { data } = await common_axios.post(`/product_by_category`, {
        slug,
      });
      console.log(data);
      if (data.product) {
        setProduct(data.product);
        setCategory(data.category);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  // const fetch_filters = async () => {
  //   const { data } = await common_axios.post(`/product_by_category`, {
  //     slug,
  //   });

  //   if (data.product) {
  //     setProduct(data.product);
  //     setCategory(data.category);
  //   }
  // };

  // console.log(product);
  if (loading) {
    return null;
  }
  const filterProduct = (filterData) => {
    // console.log(`FilterData`, filterData);
    dispatch(getFilteredProduct(slug, filterData));
  };
  return (
    <Container bottomDivider footerOnAllView>
      <div className={styles.container}>
        {!tabViewPro && (
          <div className={styles.FilterBreadDiv}>
            {!tabViewPro && (
              <div style={{ width: "200%", marginLeft: 15 }}>
                <Breadcrumb
                  path={`Designers Home / ${"Category"} /`}
                  activePath={category.name || "product"}
                />
              </div>
            )}
            <div className={styles.firstSection}>
              <Filter filters={filters} filterProduct={filterProduct} />
            </div>
          </div>
        )}
        <div className={styles.secondSection}>
          <div style={{ padding: "1rem 1rem 5rem" }}>
            {tabViewPro && (
              <div className={styles.upperbread}>
                <Breadcrumb
                  path={`Designers Home / ${"Category"} /`}
                  activePath={category.name || "product"}
                />
              </div>
            )}
            <ProductsSection products={product} />
          </div>
        </div>
      </div>
      <div className={styles.LoadMoreBtnContainer}>
        <div className={styles.LoadMoreBtnDiv}>
          <Button className={styles.LoadMoreBtn}>Load More</Button>
        </div>
      </div>
    </Container>
  );
}

export default DesignerProductPage;
