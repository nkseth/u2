import React, { useEffect, useState } from "react";
import { Button, Grid, useMediaQuery } from "@material-ui/core";
import Container from "../../utils/Container/container";
import Breadcrumb from "../../utils/Breadcrumb/breadcrumb";
import Filter from "./Components/Sections/Filter/filter";
import styles from "./designer-product-page.module.scss";
import ProductsSection from "./Components/Sections/Products/products";
import { useLocation } from "react-router-dom";
import Loader from "../../utils/Loader/Loader";

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
import { getWishList } from "../../Redux/actions/wishlist";
import { clearProductsErrors, getProducts } from "../../Redux/actions/products";

function DesignerProductPage({ match }) {
  const dispatch = useDispatch();
  const tabViewPro = useMediaQuery("(max-width:835px)");
  const tabView = useMediaQuery("(max-width:768px)");
  const mobileView = useMediaQuery("(max-width:550px)");
  const location = useLocation();
  const { filters } = useSelector((state) => state.root.filterCategory);
  const {
    params: { slug, type },
  } = match;

  const [product, setProduct] = useState([]);
  // const [loading, setLoading] = useState(true);
  const { user, isAuthenticated } = useSelector((state) => state.root.auth);
  const { productList, loading, error } = useSelector(
    (state) => state.root.products
  );
  useEffect(() => {
    if (error) {
      dispatch(clearProductsErrors());
      return console.log(error);
    }
    // fetch_products(slug);
    if (productList) setProduct(productList);
    if (isAuthenticated) {
      dispatch(getWishList(user.api_token));
    }
    dispatch(getFilterList());
  }, [slug, dispatch, isAuthenticated, user, error, productList, type]);
  useEffect(() => {
    if (type) dispatch(getProducts(type, { slug }));
    else dispatch(getProducts(null, { slug }));
  }, []);
  const filterProduct = (filterData) => {
    console.log(filterData);
    dispatch(getProducts(type, { ...filterData, slug }));
  };
  return (
    <Container bottomDivider footerOnAllView>
      <>
        <div className={styles.container}>
          {!tabViewPro && (
            <div className={styles.FilterBreadDiv}>
              {!tabViewPro && (
                <div style={{ width: "200%", marginLeft: 15 }}>
                  <Breadcrumb
                    path={`Products /`}
                    activePath={
                      type
                        ? slug
                          ? `${type} / ${slug}`
                          : `${type}`
                        : slug
                        ? `${slug}`
                        : "product"
                    }
                  />
                </div>
              )}
              <div className={styles.firstSection}>
                {!filters ? (
                  <Loader />
                ) : (
                  <Filter
                    filters={filters}
                    filterProduct={filterProduct}
                    type={type}
                  />
                )}
              </div>
            </div>
          )}
          <div className={styles.secondSection}>
            <div style={{ padding: "1rem 1rem 5rem" }}>
              {tabViewPro && (
                <div className={styles.upperbread}>
                  <Breadcrumb
                    path={`Products /`}
                    activePath={`${type} / ${slug}` || "product"}
                  />
                </div>
              )}
              {/* {loading ? (
                <Loader />
              ) : product.length > 1 ? (
                <ProductsSection products={product} />
              ) : (
                <p>No Products to Show</p>
              )} */}

              <ProductsSection products={product} loading={loading} />
            </div>
          </div>
        </div>
        <div className={styles.LoadMoreBtnContainer}>
          <div className={styles.LoadMoreBtnDiv}>
            <Button className={styles.LoadMoreBtn}>Load More</Button>
          </div>
        </div>
      </>
    </Container>
  );
}

export default DesignerProductPage;
