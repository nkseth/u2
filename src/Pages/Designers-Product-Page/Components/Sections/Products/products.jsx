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

import cx from "classnames";
import ProductCard from "../../product-card/card";
import Filter from "../Filter/filter";
import styles from "./product.module.scss";
import Breadcrumb from "../../../../../utils/Breadcrumb/breadcrumb";

export default function ProductsSection(props) {


  const [isLoading, setIsLoading] = useState(true)
  const [products, setProducts] = useState(true)

  const tabViewPro = useMediaQuery("(max-width:835px)");
  const tabView = useMediaQuery("(max-width:550px)");
  const mobileView = useMediaQuery("(max-width:550px)");
  const [sortBy, setSortBy] = useState("");
  const [isFilterOpen, setFilterOpen] = useState(false);

  const setValue = async (props) => {
    setIsLoading(true)
    setProducts(props.products)
    setIsLoading(false)
  }


  const handleSort = (e) => {
    setSortBy(e.target.value);
  };

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
   setValue(props)
  }, [props])

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
        justify='center'
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

              <ButtonGroup variant='contained' color='default' aria-label=''>
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
            size='small'
            variant='outlined'
            style={{ minWidth: "130px" }}
          >
            <InputLabel color={"secondary"} style={{ fontWeight: "700", color: "#6A5B40" }}>Sort by</InputLabel>
            <Select
              value={sortBy}
              onChange={(e) => handleSort(e)}
              label='Sort by'
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

        {tabView &&
          <>
            {!isLoading ? products?.map((value, index) => (
              <Grid item xs={6} sm={4} md={3} lg={3}>
                <ProductCard
                  key={index.id?.toString()}
                  product={value}
                />
              </Grid>
            )) : ''}
          </>

        }
        {!tabView &&
          <>
            {!isLoading ? products?.map((value, key) => (
              <Grid item xs={6} sm={4} md={3} lg={3}>
                <ProductCard
                  product={value}
                />
              </Grid>
            )) : ''}
          </>

        }
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