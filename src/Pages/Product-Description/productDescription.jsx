import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import {
  Button,
  IconButton,
  Radio,
  InputBase,
  Select,
  MenuItem,
  FormControlLabel,
  useMediaQuery,
  Tooltip,
} from "@material-ui/core";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/scss/image-gallery.scss";
import CustomSection from "../../utils/Custom Section/section";
import Breadcrumb from "../../utils/Breadcrumb/breadcrumb";
import Container from "../../utils/Container/container";
import DetailTabs from "./Components/Details-Tabs/tabs";
import styles from "./productDescription.module.scss";
//icons
import deliveryTruckIcon from "../../Images/icons/deliveryTruck.svg";
import clockIcon from "../../Images/icons/clock.svg";
import { ReactComponent as BagIcon } from "../../Images/icons/bag-primary.svg";
import HelpIcon from "@material-ui/icons/Help";
import SelectSize from "./Components/SelectSize/SelectSize";
import { useLocation } from "react-router-dom";
import common_axios from "../../utils/axios.config";
import { useSelector } from "react-redux";
import useLogin from "../../LoginSceens/useLogin";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Bag from "./addedbag.gif";
// import {
//   addToWishlist,
//   clearUpdateWishlist,
//   removeFromWishlist,
// } from '../../../../Redux/actions/wishlist';
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
// Product Type
import { Product_Type, Product_Type_Change } from "../../Redux/MeasuremantData";
import ReactImageMagnify from "react-image-magnify";
// import {
//   MagnifierContainer,
//   MagnifierZoom,
//   MagnifierPreview,
// } from 'react-image-magnifiers';

const CustomRadio = withStyles({
  root: {
    color: "transparent",
    "&$checked": {
      color: "#857250",
    },
  },
  checked: {},
})((props) => <></>);

const CustomRadio1 = withStyles({
  root: {
    color: "#9D9D9D",
    "&$checked": {
      color: "#857250",
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

const BootstrapInput = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    width: "343px",
    borderRadius: 0,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "3px 8px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
    "@media (max-width:835px)": {
      width: "calc(100vw - 102px)",
    },
    "@media (max-width:550px)": {
      width: "calc(100vw - 67px)",
    },
  },
}))(InputBase);

const HtmlTooltip = withStyles((theme) => ({
  tooltip: {
    // placement: "right-start",
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    width: 200,
    // height: 100,
    fontSize: theme.typography.pxToRem(10),
    border: "1px solid #dadde9",
  },
}))(Tooltip);

const HtmlTooltipButton = withStyles((theme) => ({
  tooltip: {
    // placement: "right-start",
    backgroundColor: "#857250",
    color: "white",
    width: 170,
    textAlign: "center",
    // height: 100,
    fontSize: theme.typography.pxToRem(10),
    border: "none",
  },
}))(Tooltip);

export default function ProductDescription({ match }) {
  const history = useHistory();
  const location = useLocation();
  const customView = useMediaQuery("(max-width:1044px)");
  const tabView = useMediaQuery("(max-width:768px)");
  const tabViewPro = useMediaQuery("(min-width:768px) and (max-width:1044px");
  const mobileView = useMediaQuery("(max-width:550px)");

  const [selectedColor, setSelectedColor] = useState("");
  const [ProductDrop, setProductDrop] = useState(false);
  const [click, setClick] = useState(false);
  const [cartMessage, setCartMessage] = useState("Added To bag");

  //const { data: val } = location.state;
  const {
    params: { slug },
  } = match;

  const [product, setProduct] = useState(null);
  const [images, setImages] = useState([]);
  const [ProductType, setProductType] = useState("");
  const [isAddToWishList, setAddToWishList] = useState(false);

  Product_Type_Change(ProductType);
  console.log(ProductType);

  const { login_Model_Show } = useLogin();
  const { isAuthenticated } = useSelector((state) => state.root.auth);

  useEffect(() => {
    fetch_data(slug);
  }, [slug]);

  const fetch_data = async (slug) => {
    try {
      const { data } = await common_axios.get(`/productDetail/${slug}`);
      console.log(data);

      if (data.data) {
        setProduct(data.data);
        setProductType(
          data.data.product.isCustomise === "on" ? "custom" : "ready made"
        );
        const img = [];
        data.data?.images?.forEach((item) => {
          img.push({ thumbnail: item.path, original: item.path });
        });
        setImages(img);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const buy_now_handler = async () => {
    if (isAuthenticated) {
      if (product.hasOwnProperty("title")) {
        try {
          const type = ProductType === "ready made" ? "readymade" : "customise";
          const { data } = await common_axios.post(`/addToCart/${slug}`, {
            type,
          });
          console.log(data);
          if (data) {
            history.push("/my-bag");
          }
        } catch (e) {
          console.log(e?.response?.data?.message);
          if (e?.response?.data?.message === "Item alrealy in your cart") {
            history.push("/my-bag");
          }

          if (e?.response?.data?.message === "Login first") {
            login_Model_Show();
          }
        }
      }
    } else {
      login_Model_Show();
    }
  };

  const add_bag_handler = async () => {
    if (isAuthenticated) {
      try {
        const type = ProductType === "ready made" ? "readymade" : "customise";
        const { data } = await common_axios.post(`/addToCart/${slug}`, {
          type,
        });

        if (data) {
          console.log(data);
        }
      } catch (e) {
        // alert(e.response.data.message);
        setCartMessage(e.response.data.message);
      }
    } else {
      login_Model_Show();
    }
  };

  console.log(product);
  console.log(Product_Type);
  const [imageIdx, setImageIdx] = useState(0);
  return (
    product && (
      <Container bottomDivider footerOnTabMob>
        <CustomSection style={{ marginTop: 10, marginBottom: 10 }}>
          <Breadcrumb
            path={`Home / ${product.brand} /`}
            activePath={product.title}
            style={{ padding: "1rem 0" }}
          />
        </CustomSection>

        <div className={styles.container}>
          <div className={styles.firstContainer}>
            <div style={{ width: "100%" }} className={styles.gallery_container}>
              {/* <ImageGallery
              items={images}
              showNav={false}
              additionalClass={styles.imagegall}
              thumbnailPosition={
                mobileView ? "bottom" : customView ? "right" : "left"
              }
              showFullscreenButton={false}
              useBrowserFullscreen={false}
              showPlayButton={false}
            /> */}
              <div className={styles.other_imgs}>
                {images.map((image, i) => {
                  return (
                    <img
                      src={image.thumbnail}
                      className={`${imageIdx === i ? "active" : ""}`}
                      style={{
                        border: `${imageIdx === i ? "2px solid #857250" : ""}`,
                      }}
                      alt={image.url}
                      key={i}
                      onClick={() => setImageIdx(i)}
                    />
                  );
                })}
              </div>
              <div className={styles.main_img}>
                <ReactImageMagnify
                  className={styles.magnifier}
                  {...{
                    smallImage: {
                      alt: "Wristwatch by Ted Baker London",
                      isFluidWidth: true,
                      // src: `${imageBaseUrl}wristwatch_1033.jpg`,
                      src: images[imageIdx]?.original,
                      // srcSet: this.srcSet,
                      sizes:
                        "(min-width: 800px) 33.5vw, (min-width: 415px) 50vw, 100vw ",
                    },
                    largeImage: {
                      alt: "",
                      src: images[imageIdx]?.original,
                      // src: `${imageBaseUrl}wristwatch_1200.jpg`,
                      width: 1200,
                      height: 1800,
                    },
                    // isHintEnabled: true,
                  }}
                />

                {/* <MagnifierContainer>
                <div className='example-class'>
                  <MagnifierPreview imageSrc='https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' />
                </div>
                <MagnifierZoom
                  style={{ height: '400px' }}
                  imageSrc='https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
                />
              </MagnifierContainer> */}
                {/* <img src={images[imageIdx]?.original} alt='' /> */}
                {isAddToWishList ? (
                  <IconButton
                    aria-label="product"
                    onClick={() => {
                      setAddToWishList((addToWishlist) => !addToWishlist);
                    }}
                    style={{
                      backgroundColor: "#fff",
                      position: "absolute",
                      top: "30px",
                      right: "20px",
                    }}
                  >
                    <FavoriteIcon style={{ color: "red" }} />
                  </IconButton>
                ) : (
                  <IconButton
                    aria-label="product"
                    onClick={() => {
                      setAddToWishList((addToWishlist) => !addToWishlist);
                    }}
                    // className={styles.icons}
                    style={{
                      backgroundColor: "#fff",
                      position: "absolute",
                      top: "30px",
                      right: "20px",
                    }}
                  >
                    <FavoriteBorderIcon />
                  </IconButton>
                )}
              </div>
              <div className={styles.other_imgs_tab}>
                {images.map((image, i) => {
                  return (
                    <img
                      src={image.thumbnail}
                      className={`${imageIdx === i ? "active" : ""}`}
                      style={{
                        border: `${imageIdx === i ? "4px solid #857250" : ""}`,
                      }}
                      alt={image.url}
                      key={i}
                      onClick={() => setImageIdx(i)}
                    />
                  );
                })}
              </div>
            </div>
            {!mobileView && !tabView && !customView ? (
              <div className={styles.deliveryDiv}>
                <div>
                  <span>Delivery option</span>
                  <img src={deliveryTruckIcon} alt="deliver truck" />:
                </div>
                <div>
                  <label>Enter pincode*</label>
                  <input type="text" name="pincode/zipcode" />
                </div>
                <span>Please enter the pincode to check delivery time </span>
                <Button
                  variant="contained"
                  color="default"
                  className={styles.checkBtn}

                  // onClick={() => history.push('/product-breakdown')}
                >
                  Check
                </Button>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div className={styles.lastContainer}>
            {/*tab view */}
            {customView && !mobileView && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  width: "100%",
                  maxWidth: "700px",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                  }}
                >
                  <div className={styles.productDetails}>
                    <span>{product.brand}</span>
                    <span>{product.title}</span>
                  </div>
                  {product.stock_quantity < 10 ? (
                    <div className={styles.alert}>
                      <img src={clockIcon} alt="clock" />
                      <span
                        style={{
                          fontSize: 14,
                          marginLeft: -10,
                          marginRight: 0,
                        }}
                      >
                        Hurry up! Only 5 left in stock
                      </span>
                      <div>58:00</div>
                    </div>
                  ) : null}
                </div>
                <div className={styles.selectProduct}>
                  <div
                    style={{
                      marginTop: 25,
                      fontWeight: "bolder",
                      marginBottom: -10,
                    }}
                  >
                    Product Type
                  </div>
                  <br />
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      width: "100%",
                    }}
                  >
                    <Select
                      style={{ width: "35%" }}
                      input={<BootstrapInput />}
                      value={ProductType}
                      onOpen={() => setProductDrop(true)}
                      onClose={() => setProductDrop(false)}
                      onChange={(e) => setProductType(e.target.value)}
                    >
                      {product.product?.isVariant ? (
                        <MenuItem value={"ready made"}>
                          <FormControlLabel
                            className={
                              ProductDrop
                                ? styles.FormControlLabel
                                : styles.FormControlLabelS
                            }
                            checked={ProductType === "ready made"}
                            control={<CustomRadio />}
                            label={
                              <div className={styles.ProductSelector}>
                                <p className={styles.ChoicesBtnsLabels}>
                                  Ready Made
                                </p>
                                {ProductDrop ? (
                                  <h6 className={styles.ProductSelectorh6}>
                                    Lorem ipsum is placeholder text commonly
                                    used in the graphicer text commonly used in
                                    the graphic
                                  </h6>
                                ) : (
                                  <></>
                                )}
                              </div>
                            }
                          />
                        </MenuItem>
                      ) : null}
                      {product.product?.isCustomise === "on" ? (
                        <MenuItem value={"custom"}>
                          <FormControlLabel
                            className={
                              ProductDrop
                                ? styles.FormControlLabel
                                : styles.FormControlLabelS
                            }
                            checked={ProductType === "custom"}
                            control={<CustomRadio />}
                            label={
                              <div className={styles.ProductSelector}>
                                <p className={styles.ChoicesBtnsLabels}>
                                  Customised
                                </p>
                                {ProductDrop ? (
                                  <h6 className={styles.ProductSelectorh6}>
                                    Lorem ipsum is placeholder text commonly
                                    used in the graphic er text commonly used in
                                    the graphic
                                  </h6>
                                ) : (
                                  <></>
                                )}
                              </div>
                            }
                          />
                        </MenuItem>
                      ) : null}
                      {ProductType === "custom" ? (
                        product.product.isVariant ? (
                          <MenuItem value={"ready made"}>
                            <FormControlLabel
                              className={
                                ProductDrop
                                  ? styles.FormControlLabel
                                  : styles.FormControlLabelS
                              }
                              checked={ProductType === "ready made"}
                              control={<CustomRadio />}
                              label={
                                <div className={styles.ProductSelector}>
                                  <p className={styles.ChoicesBtnsLabels}>
                                    Ready Made
                                  </p>
                                  {ProductDrop ? (
                                    <h6 className={styles.ProductSelectorh6}>
                                      Lorem ipsum is placeholder text commonly
                                      used in the graphicer text commonly used
                                      in the graphic
                                    </h6>
                                  ) : (
                                    <></>
                                  )}
                                </div>
                              }
                            />
                          </MenuItem>
                        ) : null
                      ) : (
                        <></>
                      )}
                    </Select>
                    <HtmlTooltip
                      // className={styles.ProductSelectorHelpBtn}
                      style={{ color: "#6a5b40" }}
                      title={
                        <React.Fragment>
                          <h3 style={{ padding: 10 }}>
                            Lorem ipsum is place used in the graphic er text
                            commonly used in the graphic
                          </h3>
                        </React.Fragment>
                      }
                      placement={"right"}
                      arrow
                    >
                      <IconButton>
                        <HelpIcon />
                      </IconButton>
                    </HtmlTooltip>
                    {/* <IconButton className={styles.ProductSelectorHelpBtn} aria-label="add to shopping cart" size={'medium'} ><HelpIcon color="#6a5b40" /></IconButton> */}
                    <div className={styles.priceTab}>
                      <span>
                        {product.currency_symbol}
                        {product.has_offer
                          ? product.offer_price
                          : Product_Type === "custom"
                          ? product.custom_price >= 1
                            ? product.custom_price
                            : product.price
                          : Product_Type === "ready made"
                          ? product.readymade_price >= 1
                            ? product.readymade_price
                            : product.price
                          : product.price}
                      </span>
                      <br />
                      {product.has_offer ? (
                        <p>
                          <span>
                            {product.currency_symbol}
                            {product.price}
                          </span>
                          <span>{product.discount}</span>
                        </p>
                      ) : null}
                    </div>
                  </div>
                  {ProductType === "ready made" ? (
                    <SelectSize variant={product.variant} />
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            )}
            {/* desktop view */}
            {!customView && (
              <>
                <div className={styles.productDetails}>
                  <span>{product.brand}</span>
                  <span>{product.title}</span>
                </div>
                {/* ========================================== */}
                <div className={styles.selectProduct}>
                  <div
                    style={{
                      fontWeight: "bolder",
                      marginTop: 5,
                      marginBottom: -10,
                    }}
                  >
                    Product Type
                  </div>
                  <br />
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      position: "relative",
                    }}
                  >
                    <Select
                      input={<BootstrapInput />}
                      value={ProductType}
                      onOpen={() => setProductDrop(true)}
                      onClose={() => setProductDrop(false)}
                      onChange={(e) => setProductType(e.target.value)}
                    >
                      {product.product?.isVariant ? (
                        <MenuItem value={"ready made"}>
                          <FormControlLabel
                            className={
                              ProductDrop
                                ? styles.FormControlLabel
                                : styles.FormControlLabelS
                            }
                            checked={ProductType === "ready made"}
                            control={<CustomRadio />}
                            label={
                              <div className={styles.ProductSelector}>
                                <p className={styles.ChoicesBtnsLabels}>
                                  Ready Made
                                </p>
                                {ProductDrop ? (
                                  <h6 className={styles.ProductSelectorh6}>
                                    Lorem ipsum is placeholder text commonly
                                    used in the graphicer text commonly used in
                                    the graphic
                                  </h6>
                                ) : (
                                  <></>
                                )}
                              </div>
                            }
                          />
                        </MenuItem>
                      ) : null}
                      {product.product?.isCustomise === "on" ? (
                        <MenuItem value={"custom"}>
                          <FormControlLabel
                            className={
                              ProductDrop
                                ? styles.FormControlLabel
                                : styles.FormControlLabelS
                            }
                            checked={ProductType === "custom"}
                            control={<CustomRadio />}
                            label={
                              <div className={styles.ProductSelector}>
                                <p className={styles.ChoicesBtnsLabels}>
                                  Customised
                                </p>
                                {ProductDrop ? (
                                  <h6 className={styles.ProductSelectorh6}>
                                    Lorem ipsum is placeholder text commonly
                                    used in the graphic er text commonly used in
                                    the graphic
                                  </h6>
                                ) : (
                                  <></>
                                )}
                              </div>
                            }
                          />
                        </MenuItem>
                      ) : null}
                    </Select>
                    <HtmlTooltip
                      className={styles.ProductSelectorHelpBtn}
                      title={
                        <React.Fragment>
                          <h3 style={{ padding: 10 }}>
                            Lorem ipsum is placeholder text used in the graphic
                            er text commonly used in the graphic
                          </h3>
                        </React.Fragment>
                      }
                      placement={"right"}
                      arrow
                    >
                      <IconButton>
                        <HelpIcon />
                      </IconButton>
                    </HtmlTooltip>
                    {/* <IconButton className={styles.ProductSelectorHelpBtn} aria-label="add to shopping cart" size={'medium'} ><HelpIcon color="#6a5b40" /></IconButton> */}
                  </div>
                </div>
                {/* ========================================== */}

                <div className={styles.price}>
                  <span>
                    {product.currency_symbol}
                    {product.has_offer
                      ? product.offer_price
                      : Product_Type === "custom"
                      ? product.custom_price >= 1
                        ? product.custom_price
                        : product.price
                      : Product_Type === "ready made"
                      ? product.readymade_price >= 1
                        ? product.readymade_price
                        : product.price
                      : product.price}
                  </span>
                  <br />
                  {product.has_offer ? (
                    <p>
                      <span>
                        {product.currency_symbol}
                        {product.price}
                      </span>{" "}
                      <span>{product.discount}</span>
                    </p>
                  ) : null}
                </div>
              </>
            )}
            {mobileView && (
              <>
                <div className={styles.productDetails}>
                  <span>{product.brand}</span>
                  <span>{product.title}</span>
                </div>
                <div className={styles.selectProduct}>
                  <div
                    style={{
                      marginTop: 10,
                      marginBottom: -10,
                      fontWeight: "bolder",
                    }}
                  >
                    Product Type
                  </div>
                  <br />
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <Select
                      style={{ width: "80%" }}
                      input={<BootstrapInput />}
                      value={ProductType}
                      onOpen={() => setProductDrop(true)}
                      onClose={() => setProductDrop(false)}
                      onChange={(e) => setProductType(e.target.value)}
                    >
                      {product.product?.isVariant ? (
                        <MenuItem value={"ready made"}>
                          <FormControlLabel
                            className={
                              ProductDrop
                                ? styles.FormControlLabel
                                : styles.FormControlLabelS
                            }
                            checked={ProductType === "ready made"}
                            control={<CustomRadio />}
                            label={
                              <div className={styles.ProductSelector}>
                                <p className={styles.ChoicesBtnsLabels}>
                                  Ready Made
                                </p>
                                {ProductDrop ? (
                                  <h6 className={styles.ProductSelectorh6}>
                                    Lorem ipsum is placeholder text commonly
                                    used in the graphicer text commonly used in
                                    the graphic
                                  </h6>
                                ) : (
                                  <></>
                                )}
                              </div>
                            }
                          />
                        </MenuItem>
                      ) : null}
                      {product.product?.isCustomise === "on" ? (
                        <MenuItem value={"custom"}>
                          <FormControlLabel
                            className={
                              ProductDrop
                                ? styles.FormControlLabel
                                : styles.FormControlLabelS
                            }
                            checked={ProductType === "custom"}
                            control={<CustomRadio />}
                            label={
                              <div className={styles.ProductSelector}>
                                <p className={styles.ChoicesBtnsLabels}>
                                  Customised
                                </p>
                                {ProductDrop ? (
                                  <h6 className={styles.ProductSelectorh6}>
                                    Lorem ipsum is placeholder text commonly
                                    used in the graphic er text commonly used in
                                    the graphic
                                  </h6>
                                ) : (
                                  <></>
                                )}
                              </div>
                            }
                          />
                        </MenuItem>
                      ) : null}
                    </Select>
                    <HtmlTooltip
                      className={styles.ProductSelectorHelpBtn}
                      style={{ marginLeft: 0 }}
                      title={
                        <React.Fragment>
                          <h3 style={{ padding: 10 }}>
                            Lorem ipsum is plaer text commonly used in the
                            graphic er text commonly used in the graphic
                          </h3>
                        </React.Fragment>
                      }
                      placement={"bottom"}
                      arrow
                    >
                      <IconButton>
                        <HelpIcon />
                      </IconButton>
                    </HtmlTooltip>
                  </div>
                </div>
                <div className={styles.price}>
                  <span>
                    {product.currency_symbol}
                    {product.has_offer
                      ? product.offer_price
                      : Product_Type === "custom"
                      ? product.custom_price >= 1
                        ? product.custom_price
                        : product.price
                      : Product_Type === "ready made"
                      ? product.readymade_price >= 1
                        ? product.readymade_price
                        : product.price
                      : product.price}
                  </span>
                  <br />
                  {product.has_offer ? (
                    <p>
                      <span>
                        {product.currency_symbol}
                        {product.price}
                      </span>{" "}
                      <span>{product.discount}</span>
                    </p>
                  ) : null}
                </div>
              </>
            )}
            {customView && !mobileView && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              ></div>
            )}

            {!customView && (
              <div>
                {product.stock_quantity < 10 ? (
                  <div className={styles.alert}>
                    <img src={clockIcon} alt="clock" />
                    <span>
                      Hurry up! Only {product.stock_quantity} left in stock
                    </span>
                    <div>50:00</div>
                  </div>
                ) : null}

                {ProductType === "ready made" ? <SelectSize /> : <></>}
              </div>
            )}

            {mobileView && (
              <div>
                {product.stock_quantity < 10 ? (
                  <div className={styles.alert}>
                    <img src={clockIcon} alt="clock" />
                    <span>
                      Hurry up! Only {product.stock_quantity} left in stock
                    </span>
                    <div>50:00</div>
                  </div>
                ) : null}
                {ProductType === "ready made" ? <SelectSize /> : <></>}

                {/* <div className={styles.sizeDiv}>
                <img src={measuringTapeIcon} alt='' />
                <span>Not sure which size to buy?</span>
                <Link to='/'>Try size finder</Link>
              </div> */}
              </div>
            )}
            <div className={styles.selectColor}>
              <div>Select colour</div>
              <br />
              <div className={styles.SelectColorCard}>
                <IconButton
                  className={styles.ColorBTN}
                  onClick={() => setSelectedColor("#DAD3C1")}
                  style={{
                    backgroundColor: "#DAD3C1",
                    borderColor:
                      selectedColor === "#DAD3C1" ? "#DAD3C1" : "white",
                  }}
                >
                  <IconButton
                    className={styles.ColorInnerBTN}
                    style={{
                      borderColor:
                        selectedColor === "#DAD3C1" ? "#fff" : "transparent",
                    }}
                  ></IconButton>
                </IconButton>
                <IconButton
                  className={styles.ColorBTN}
                  onClick={() => setSelectedColor("#FF543E")}
                  style={{
                    backgroundColor: "#FF543E",
                    borderColor:
                      selectedColor === "#FF543E" ? "#FF543E" : "white",
                  }}
                >
                  <IconButton
                    className={styles.ColorInnerBTN}
                    style={{
                      borderColor:
                        selectedColor === "#FF543E" ? "#fff" : "transparent",
                    }}
                  ></IconButton>
                </IconButton>
                <IconButton
                  className={styles.ColorBTN}
                  onClick={() => setSelectedColor("#D1AA67")}
                  style={{
                    backgroundColor: "#D1AA67",
                    borderColor:
                      selectedColor === "#D1AA67" ? "#D1AA67" : "white",
                  }}
                >
                  <IconButton
                    className={styles.ColorInnerBTN}
                    style={{
                      borderColor:
                        selectedColor === "#D1AA67" ? "#fff" : "transparent",
                    }}
                  ></IconButton>
                </IconButton>
                <IconButton
                  className={styles.ColorBTN}
                  onClick={() => setSelectedColor("#000000")}
                  style={{
                    backgroundColor: "#000000",
                    borderColor:
                      selectedColor === "#000000" ? "#000000" : "white",
                  }}
                >
                  <IconButton
                    className={styles.ColorInnerBTN}
                    style={{
                      borderColor:
                        selectedColor === "#000000" ? "#fff" : "transparent",
                    }}
                  ></IconButton>
                </IconButton>
              </div>
            </div>
            <div className={styles.btnDiv}>
              <div style={{ marginBottom: "2em", marginTop: "0em" }}>
                <Button
                  variant="contained"
                  onClick={buy_now_handler}
                  color="default"
                  // startIcon={<ScissorsIcon />}
                  fullWidth
                  className={styles.customiseBtn}
                >
                  Buy Now
                </Button>

                <HtmlTooltipButton
                  open={isAuthenticated && click}
                  onOpen={() => setClick(true)}
                  onClose={() => setClick(false)}
                  disableFocusListener
                  disableHoverListener
                  // className={styles.ProductSelectorHelpBtn}
                  // style={{ color: '#6a5b40', backgroundColor: 'red' }}
                  title={
                    <React.Fragment>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          fontSize: "0.7rem",
                        }}
                      >
                        <img
                          src={Bag}
                          alt=""
                          style={{ height: "40px", width: "40px" }}
                        />
                        <h3 style={{ padding: 10 }}> {cartMessage}</h3>
                      </div>
                    </React.Fragment>
                  }
                  placement={"top"}
                  arrow
                >
                  <Button
                    onClick={() => {
                      add_bag_handler();
                      setClick((click) => isAuthenticated && !click);
                    }}
                    variant="outlined"
                    color="default"
                    startIcon={<BagIcon />}
                    fullWidth
                    className={styles.addToBagBtn}
                  >
                    Add to bag
                  </Button>
                </HtmlTooltipButton>
              </div>
            </div>
            <div></div>
            {tabView || mobileView ? (
              <div
                className={styles.container}
                style={mobileView ? { marginLeft: -10 } : { marginLeft: -30 }}
              >
                <div className={styles.firstContainer}>
                  <div className={styles.deliveryDiv}>
                    <div>
                      <span>Delivery option</span>
                      <img src={deliveryTruckIcon} alt="deliver truck" />:
                    </div>
                    <div>
                      <label>Enter pincode*</label>
                      <input type="text" name="pincode/zipcode" />
                    </div>
                    <span>
                      Please enter the pincode to check delivery time{" "}
                    </span>
                    <Button
                      variant="contained"
                      color="default"
                      className={styles.checkBtn}

                      // onClick={() => history.push('/product-breakdown')}
                    >
                      Check
                    </Button>
                  </div>
                </div>
              </div>
            ) : tabViewPro ? (
              <div
                className={styles.container}
                style={{ marginLeft: -50, marginTop: "-2em" }}
              >
                <div className={styles.firstContainer}>
                  <div className={styles.deliveryDiv}>
                    <div>
                      <span>Delivery option</span>
                      <img src={deliveryTruckIcon} alt="deliver truck" />:
                    </div>
                    <div>
                      <label>Enter pincode*</label>
                      <input type="text" name="pincode/zipcode" />
                    </div>
                    <span>
                      Please enter the pincode to check delivery time{" "}
                    </span>
                    <Button
                      variant="contained"
                      color="default"
                      className={styles.checkBtn}

                      // onClick={() => history.push('/product-breakdown')}
                    >
                      Check
                    </Button>
                  </div>
                </div>
              </div>
            ) : (
              <></>
            )}
            <div>
              <DetailTabs product={product} type={ProductType} />
            </div>
          </div>
        </div>
      </Container>
    )
  );
}
