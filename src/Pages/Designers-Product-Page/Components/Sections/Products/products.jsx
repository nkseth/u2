import React, { useState, useEffect } from "react";
import {
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  useMediaQuery,
  ButtonGroup,
  Button,
  Drawer,
} from "@material-ui/core";
import Loader from "../../../../../utils/Loader/Loader";
import cx from "classnames";
import ProductCard from "../../product-card/card";
import Filter from "../Filter/filter";
import styles from "./product.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getWishList } from "../../../../../Redux/actions/wishlist";
export default function ProductsSection({ products, loading }) {
  const dispatch = useDispatch();
  const tabViewPro = useMediaQuery("(max-width:835px)");
  const tabView = useMediaQuery("(max-width:550px)");
  const mobileView = useMediaQuery("(max-width:550px)");
  const [sortBy, setSortBy] = useState("");
  const [isFilterOpen, setFilterOpen] = useState(false);

  const { user, isAuthenticated } = useSelector((state) => state.root.auth);
  const [temp, setTemp] = useState();

  const handleSort = (e) => {
    setSortBy(e.target.value);
    if (e.target.value === "lowToHigh") {
      setTemp(products.sort((a, b) => a.price - b.price));
    }

    if (e.target.value === "highToLow") {
      setTemp(
        products.sort((a, b) => {
          if (b.custom_price >= 1) {
            return b.custom_price - a.custom_price;
          }
          if (b.readymade_price >= 1) {
            return b.readymade_price - a.readymade_price;
          }
          return b.price - a.price;
        })
      );
    } else {
      return setTemp(
        products.sort((a, b) => {
          return b.title.localeCompare(a.name);
        })
      );
    }
  };

  // useEffect(() => {
  //   // setProducts(temp);
  // }, [sortBy]);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setFilterOpen(open);
  };

  useEffect(() => {
    if (isAuthenticated) dispatch(getWishList(user.api_token));
  }, [dispatch, isAuthenticated, user]);

  return (
    <>
      {tabViewPro && (
        <Drawer
          anchor={"left"}
          open={isFilterOpen}
          onClose={toggleDrawer("left", false)}
          onOpen={toggleDrawer("left", true)}
          transitionDuration={600}
        >
          <Filter />
        </Drawer>
      )}

      <Grid
        container
        style={{ width: "100%", margin: 0 }}
        justifyContent="flex-start"
        spacing={mobileView ? 1 : 3}
      >
        <Grid
          item
          xs={12}
          md={12}
          style={{
            display: "flex",
            justifyContent: tabViewPro ? "space-between" : "flex-end",
            alignItems: "center",
            marginBottom: "1rem",
          }}
        >
          {tabViewPro && (
            <div className={styles.filterDiv}>
              <ButtonGroup variant="contained" color="default" aria-label="">
                <Button
                  onClick={() => setFilterOpen(true)}
                  className={cx(styles.btn, styles.filterBtn)}
                >
                  Filter
                </Button>
                <Button className={cx(styles.btn, styles.clearBtn)}>
                  Clear all
                </Button>
              </ButtonGroup>
            </div>
          )}

          <FormControl
            size="small"
            variant="outlined"
            style={{ minWidth: "130px" }}
          >
            <InputLabel
              color={"secondary"}
              style={{ fontWeight: "700", color: "#6A5B40", fontSize: "16px" }}
            >
              Sort by
            </InputLabel>
            <Select
              value={sortBy}
              onChange={(e) => handleSort(e)}
              label="Sort by"
            >
              <MenuItem
                value={"relavence"}
                style={{ fontSize: mobileView && "15px" }}
              >
                Relavence
              </MenuItem>
              <MenuItem
                value={"lowToHigh"}
                style={{ fontSize: mobileView && "15px" }}
              >
                Low to High
              </MenuItem>
              <MenuItem
                value={"highToLow"}
                style={{ fontSize: mobileView && "15px" }}
              >
                High to Low
              </MenuItem>
            </Select>
          </FormControl>
        </Grid>
        {loading ? (
          <div style={{ margin: "auto" }}>
            <Loader height={"200px"} />
          </div>
        ) : (
          <div className={styles.productsGrid}>
            {products?.map((value, index) => {
              return (
                <>
                  <ProductCard key={index.id?.toString()} product={value} />
                </>
              );
            })}
          </div>
        )}

        {/* {tabView && (
          <>
            {!isLoading
              ? products?.map((value, index) => (
                  <Grid
                    item
                    
                    xs={6}
                    sm={4}
                    md={3}
                    lg={3}
                    style={{ display: 'flex' }}
                  >
                    <ProductCard key={index.id?.toString()} product={value} />
                  </Grid>
                ))
              : ''}
          </>
        )}
        {!tabView && (
          <>
            {!isLoading
              ? products?.map((value, key) => (
                  <Grid
                    item
                    xs={6}
                    sm={4}
                    md={3}
                    lg={3}
                    style={{ display: 'flex' }}
                  >
                    <ProductCard product={value} />
                  </Grid>
                ))
              : ''}
          </>
        )} */}
        {/* {!mobileView && (
          <>
            {!isLoading ? products.map((value, key) => (
              <Grid item xs={12} sm={4} md={3} lg={3}>
                <ProductCard
                  product={value}
                />
              </Grid>
            )) : ''}
          </>
        )} */}
      </Grid>
    </>
  );
}
