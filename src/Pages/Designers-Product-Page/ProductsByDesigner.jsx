import React, { useEffect, useState } from "react";
import { Button, Grid, useMediaQuery } from "@material-ui/core";
import Container from "../../utils/Container/container";
import Breadcrumb from "../../utils/Breadcrumb/breadcrumb";
import Filter from "./Components/Sections/Filter/filter";
import styles from "./designer-product-page.module.scss";
import ProductsSection from "./Components/Sections/Products/products";
import { useLocation } from "react-router-dom";
import Loader from "../../utils/Loader/Loader";

import common_axios from "../../utils/axios.config";
import {
  getFilteredProduct,
  getFilterList,
} from "../../Redux/actions/filter-category";
import { useDispatch, useSelector } from "react-redux";
import { clearUpdateWishlist, getWishList } from "../../Redux/actions/wishlist";
import {
  clearProductsErrors,
  getDesignerProducts,
  getProducts,
} from "../../Redux/actions/products";

const ProductsByDesigner = ({ match }) => {
  const dispatch = useDispatch();
  const tabViewPro = useMediaQuery("(max-width:835px)");
  const tabView = useMediaQuery("(max-width:768px)");
  const mobileView = useMediaQuery("(max-width:550px)");
  const location = useLocation();
  const { filters } = useSelector((state) => state.root.filterCategory);
  const {
    params: { designerId },
  } = match;
  console.log(designerId);
  const [product, setProduct] = useState([]);
  // const [loading, setLoading] = useState(true);
  const { user, isAuthenticated } = useSelector((state) => state.root.auth);
  const [clearAll, setClearAll] = useState(true);
  const { productList, loading, error } = useSelector(
    (state) => state.root.products
  );
  const {
    added,
    removed,
    loading: updating,
  } = useSelector((state) => state.root.updateWishlist);

  useEffect(() => {
    if (!updating) {
      if (added) {
        console.log(added);
        dispatch(clearUpdateWishlist());
        alert(added);
      }
      if (removed) {
        console.log(removed);
        alert(removed);
        dispatch(clearUpdateWishlist());
      }
    }
    if (error) {
      dispatch(clearProductsErrors());
      return console.log(error);
    }
    if (productList) setProduct(productList);
    dispatch(getFilterList());
  }, [dispatch, error, productList]);

  useEffect(() => {
    dispatch(getDesignerProducts(designerId));
    if (!isAuthenticated) return;
    dispatch(getWishList(user.api_token));
  }, [dispatch, isAuthenticated, user, designerId]);

  const filterProduct = (filterData) => {
    console.log(filterData);
    dispatch(getDesignerProducts(designerId, { ...filterData }));
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
          style={{ paddingTop: tabView && "2rem 0" }}
          crum={[{label:'Home',path:'/'},
          {label:'Designer' ,path:'Designer'}]}
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
                    setClearAll={setClearAll}
                    clearAll={clearAll}
                  />
                )}
              </div>
            </div>
          )}
          <div>
            <div className={styles.banner}>
              <div className={styles.banner__body}>
                <div className={styles.banner__body__frame}>
                  <img
                    src=""
                    alt=""
                    className={styles.banner__body__frame__image}
                  />
                </div>
                <div className={styles.banner__body__info}>
                  <span className={styles.banner__body__info__name}>
                    Designer's Name
                  </span>
                  <span className={styles.banner__body__info__description}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled
                  </span>
                </div>
              </div>
            </div>
            <div style={{ width: "100%" }} className={styles.secondSection}>
              <div style={{ padding: "1rem 1rem 5rem" }}>
                {tabViewPro && (
                  <div className={styles.upperbread}>
                     <Breadcrumb
          style={{ paddingTop: tabView && "2rem 0" }}
          crum={[{label:'Home',path:'/'},
          {label:'Designer' ,path:'Designer'}]}
        />
                  </div>
                )}
                <ProductsSection
                  products={product}
                  loading={loading}
                  designerId={designerId}
                  clearAll={clearAll}
                  setClearAll={setClearAll}
                />
              </div>

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
};

export default ProductsByDesigner;
