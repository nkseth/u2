import React, { useState, useEffect } from "react";
import {
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useMediaQuery,
} from "@material-ui/core";
// import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import SelectedFabricSample from "./Components/Selected-Fabric-Sample/index";
import SelectedSubscriptionPlans from "./Components/Selected-Subscription-plan";
import Container from "../../utils/Container/container";
import { Link, useHistory } from "react-router-dom";
import CustomDivider from "../../utils/Custom Divider/divider";
import CustomSection from "../../utils/Custom Section/section";
import Breadcrumb from "../../utils/Breadcrumb/breadcrumb";
import CustomStepper from "../../utils/Stepper/stepper";
import styles from "./MyBag.module.scss";
//icons

import AddIcon from "@material-ui/icons/Add";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import RemoveIcon from "@material-ui/icons/Remove";
import { ReactComponent as CouponIcon } from "../../Images/icons/coupon.svg";
import common_axios from "../../utils/axios.config";
import { useSelector, useDispatch } from "react-redux";
import { setOrderSumm } from "../../Redux/actions/homepage";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";

// Product Type
import { Product_Type, Product_Type_Change } from "../../Redux/MeasuremantData";
import { addToWishlist } from "../../Redux/actions/wishlist";
import { getCartItems } from "../../Redux/actions/myBag";

export default function MyBag() {
  const history = useHistory();
  const dispatch = useDispatch();
  const tabView = useMediaQuery("(max-width:768px)");
  const tabViewPro = useMediaQuery("(max-width:835px)");
  const mobileView = useMediaQuery("(max-width:550px)");
  const [quantity, setQuantity] = useState(1);
  const [data, setData] = useState([]);
  const [value, setValue] = useState({});
  const [loading, setLoading] = useState(false);
  const img =
    "https://images.pexels.com/photos/1096849/pexels-photo-1096849.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=165";

  const { user } = useSelector((state) => state.root.auth);
  const { cart } = useSelector((state) => state.root.cartItems);
  // console.log(cart);

  useEffect(() => {
    // fetch_data();
    if (cart) {
      setValue(cart);
      setData(cart?.items);
      dispatch(setOrderSumm(cart ? cart : {}));
    } else dispatch(getCartItems());
  }, [dispatch, cart]);

  // const fetch_data = async () => {
  //   try {
  //     const { data: val } = await common_axios.get("/carts");

  //     console.log(val);
  //     if (val.data) {
  //       setValue(val?.data[0]);
  //       setData(val?.data[0]?.items);
  //       dispatch(setOrderSumm(val?.data[0] ? val?.data[0] : {}));
  //     }
  //   } catch (e) {
  //     console.log(e.response?.data);
  //   }
  // };

  const add_quantity = async (item, index) => {
    setLoading(true);

    console.log("running");

    try {
      const { data: res } = await common_axios.put(`/cart/${value.id}/update`, {
        item: item.id,
        quantity: parseInt(item.quantity) + 1,
      });
      console.log(res);
      data[index].quantity = parseInt(data[index].quantity) + 1;
      dispatch(getCartItems());
      setLoading(false);
    } catch (e) {
      setLoading(false);
      alert(e?.response?.data?.message);
      console.log(e?.response?.data);
    }
  };

  const substract_quantity = async (item, index) => {
    setLoading(true);
    if (parseInt(item.quantity) > 1) {
      try {
        const { data: res } = await common_axios.put(
          `/cart/${value.id}/update`,
          {
            item: item.id,
            quantity: parseInt(item.quantity) - 1,
          }
        );
        let val = data;
        val[index].quantity = parseInt(val[index].quantity) - 1;
        dispatch(getCartItems());
        setLoading(false);
      } catch (e) {
        setLoading(false);
        alert(e?.response?.data?.message);
        console.log(e?.response?.data);
      }
    } else alert("Quantity can't be less than 1");
  };

  const move_to_wishlist = async (item) => {
    dispatch(addToWishlist(item.slug, user.api_token));
    remove_item(item);
  };

  const remove_item = async (item) => {
    try {
      console.log(value.id, item.id);
      const { data } = await common_axios.post(
        "/cart/removeItem",
        {
          cart: value.id,
          item: item.id,
        },
        {
          headers: {
            Authorization: `Bearer ${user.api_token}`,
          },
        }
      );
      console.log(data);
      if (data.message === "Item has been removed") {
        setData(data.cart?.items);
        setValue(data.cart);
      }
    } catch (error) {
      console.log(error.response);
      alert(error.response?.data?.error);
    }
  };

  const on_checkout = () => {
    dispatch(setOrderSumm(value));
    history.push("/order-summary");
  };

  return (
    <Container bottomDivider footerOnTabMob>
      <CustomSection
        style={mobileView ? { marginTop: "0" } : { marginTop: "3em" }}
      >
        <Breadcrumb path="Home" activePath="/ My Bag" />

        <div></div>
        <div className={styles.container}>
          {mobileView ? (
            <>
              <MobileProductMyBag
                data={data}
                img={img}
                quantity={quantity}
                setQuantity={setQuantity}
                add_quantity={add_quantity}
                substract_quantity={substract_quantity}
                remove_item={remove_item}
                move_to_wishlist={move_to_wishlist}
                Product_Type={Product_Type}
              />
            </>
          ) : (
            //This component ⬆ is for mobile view dont itterate this component go inside it and ittetrate there
            <div className={styles.firstContainer}>
              <div>My Bag</div>
              {data?.map((item, index) => {
                var last = index + 1 === data.length;

                if (item.product.isVariant) Product_Type_Change("Readymade");
                else Product_Type_Change("Customized");

                return (
                  <>
                    <div className={styles.BorderContainer}>
                      <div className={styles.mainContainer}>
                        <img
                          src={item.product?.image}
                          alt="product"
                          className={styles.image}
                        />
                        <div>
                          <div style={{ alignItems: "flex-start" }}>
                            <p className={styles.proName}>{item.title}</p>
                            <p>{item.color}</p>

                            <div>
                              <h4>Product Type</h4>

                              {item.product.isVariant ? (
                                <p>Readymade</p>
                              ) : (
                                <p>Customized</p>
                              )}

                              <Button
                                onClick={() => move_to_wishlist(item)}
                                className={styles.MoveToWishListBtn}
                              >
                                Move to Wishlist
                              </Button>
                            </div>
                          </div>

                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                            }}
                          >
                            <p>
                              {item.hasOffer
                                ? item.offer_price
                                : item.unit_price}
                            </p>
                            <p className={styles.priceSpanP}>
                              <span className={styles.priceSpan}>
                                {item.price}
                              </span>
                              <span className={styles.priceSpan1}>
                                {item.discount}
                              </span>
                            </p>
                            <div className={styles.quan}>
                              <p>Quantity</p>
                              <div style={{ display: "flex" }}>
                                <Button
                                  className={styles.addBtn}
                                  onClick={() =>
                                    substract_quantity(item, index)
                                  }
                                >
                                  <RemoveIcon style={{ width: "15px" }} />
                                </Button>
                                <div className={styles.quantity}>
                                  {item.quantity}
                                </div>
                                <Button
                                  className={styles.removeBtn}
                                  onClick={() => add_quantity(item, index)}
                                >
                                  <AddIcon style={{ width: "15px" }} />
                                </Button>
                              </div>
                              <Button
                                onClick={() => remove_item(item)}
                                className={styles.RemoveBTN}
                              >
                                Remove item
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                      {Product_Type === "Customised" ? (
                        <div style={{ marginLeft: "1em", marginBottom: "1em" }}>
                          <CheckOutProcess />
                        </div>
                      ) : (
                        <></>
                      )}
                    </div>
                  </>
                );
              })}
              <div>
                <div></div>
              </div>
            </div>
          )}
          <div className={styles.lastContainer}>
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>Price Details</div>
                <div className={styles.BtnlIkediv}>{data?.length}</div>
              </div>
              <div>
                <CustomDivider style={{ backgroundColor: "#CECECE" }} />
                <div className={styles.selectedProductPrices}>
                  <div>
                    <label>Product Price</label>
                    <span>{value?.total}</span>
                  </div>
                  <div>
                    <label>Service charges</label>
                    <span>
                      {value?.taxes}({value?.taxrate})
                    </span>
                  </div>
                  <div>
                    <label>Delivery charges</label>
                    <span>{value?.delivery_charge || "$0"}</span>
                  </div>
                </div>
                <CustomDivider style={{ backgroundColor: "#CECECE" }} />
              </div>
              <div className={styles.totalAmtDiv}>
                <div>
                  <label>Total Amount</label>
                  <span>{value?.grand_total}</span>
                </div>
              </div>
              <CustomDivider style={{ backgroundColor: "#CECECE" }} />

              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  // aria-controls='panel1a-content'
                  // className={styles.accordionSummary}
                >
                  <span>Apply Coupon</span>
                </AccordionSummary>
                <AccordionDetails className={styles.accordionDetials}>
                  {/* <RadioGroup
                    aria-label='Categories'
                    onChange={e => handleFilterChange('price', e.target.value)}
                    value={selectedFilter.categories}
                  >
                    <FormControlLabel
                      value='All categories'
                      checked={selectedFilter.categories === 'All categories'}
                      control={<CustomRadio />}
                      label={
                        <p className={styles.radioBtnsLabels}>All categories</p>
                      }
                    />
                  </RadioGroup> */}
                  <div style={{ position: "relative", width: "100%" }}>
                    <input
                      type="text"
                      placeholder="Enter Coupon Code"
                      style={{
                        padding: "0.7rem",
                        width: "100%",
                        borderRadius: "5px",
                        border: "1px solid  #857250",
                      }}
                    />
                    <button
                      style={{
                        color: "red",
                        position: "absolute",
                        right: "13px",
                        top: "12px",
                        background: "none",
                        border: "none",
                        fontSize: "0.8rem",
                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Apply
                    </button>
                    <div>
                      <button
                        style={{
                          background: "none",
                          border: "none",
                          fontSize: "0.8rem",
                          cursor: "pointer",
                          color: "#007AB9",
                          fontSize: "0.8rem",
                          marginTop: "1rem",
                        }}
                      >
                        View Offers
                      </button>
                    </div>
                  </div>
                </AccordionDetails>
              </Accordion>
              <Button
                variant="text"
                color="default"
                className={styles.placeOrderBtn}
                onClick={() => on_checkout()}
              >
                Checkout
              </Button>
            </div>
          </div>
        </div>
      </CustomSection>
    </Container>
  );
}

const MobileProductMyBag = ({
  img,
  substract_quantity,
  add_quantity,
  data,
  remove_item,
  move_to_wishlist,
  Product_Type,
}) => {
  console.log(data);

  return (
    <div className={styles.MobileConatiner}>
      <h1 className={styles.h1}>My Bag</h1>
      {data?.map((item, index) => {
        return (
          <div className={styles.MobileborderDiv}>
            <div className={styles.mainDiv}>
              <div className={styles.ImageQuanDiv}>
                <img
                  src={item.product?.image}
                  className={styles.mainimg}
                  alt={data.id}
                />
              </div>
              <div className={styles.InfoDiv}>
                <div className={styles.mainInfo}>
                  <h1>{item.title}</h1>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        width: "80%",
                      }}
                    >
                      <p className={styles.PType1}>Product Type</p>
                      <p className={styles.PType2}>
                        {item.product?.isVariant ? "Readymade" : "Customized"}
                      </p>
                    </div>
                  </div>
                  <div className={styles.quan}>
                    <p>Quantity</p>
                    <div style={{ display: "flex" }}>
                      <Button
                        className={styles.addBtn}
                        onClick={() => substract_quantity(item, index)}
                      >
                        <RemoveIcon style={{ width: "15px" }} />
                      </Button>
                      <div className={styles.quantity}>{item.quantity}</div>
                      <Button
                        className={styles.removeBtn}
                        onClick={() => add_quantity(item, index)}
                      >
                        <AddIcon style={{ width: "15px" }} />
                      </Button>
                    </div>
                  </div>

                  <div className={styles.PriceMobile}>
                    <p className={styles.PriceMobileMain}>
                      {item.hasOffer ? item.offer_price : item.unit_price}
                    </p>
                    <p className={styles.PriceMobileOriginal}>
                      {item.unit_price}
                    </p>
                    <p className={styles.PriceMobileDiscount}>
                      {item.discount}
                    </p>
                  </div>

                  <Button
                    onClick={() => move_to_wishlist(item)}
                    className={styles.MoveToWishListBtnMobile}
                  >
                    Move to Whishlist
                  </Button>
                  <Button
                    onClick={() => remove_item(item)}
                    className={styles.RemoveBTNMobile}
                  >
                    Remove item{" "}
                  </Button>
                </div>
              </div>
            </div>
            {Product_Type === "Customised" ? <CheckOutProcess /> : <></>}
          </div>
        );
      })}
    </div>
  );
};

export function CheckOutProcess() {
  return (
    <div className={styles.CheckOutProcess}>
      <h1>Check out process</h1>
      <li>
        On ordering customized product type, we’ll stitch this product for your
        body measurement. You can add the measurement after the payment.
      </li>
      <Button
        variant="contained"
        color="secondary"
        className={styles.CheckOutProcessBtn}
        startIcon={<PlayCircleFilledIcon />}
      >
        Watch Measurement Video
      </Button>
    </div>
  );
}
