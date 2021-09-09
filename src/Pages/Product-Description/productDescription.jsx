import React, { useState } from "react";
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
  Fab,
  Typography
} from "@material-ui/core";
import Tooltipss from "./Tooltipss"
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
import measuringTapeIcon from "../../Images/icons/mesuringTape.svg";
import { ReactComponent as SimulationIcon } from "../../Images/icons/simulate.svg";
import { ReactComponent as ScissorsIcon } from "../../Images/icons/scissors.svg";
import { ReactComponent as BagIcon } from "../../Images/icons/bag-primary.svg";
import HelpIcon from '@material-ui/icons/Help';
import Terms from "./Components/Details-Tabs/Terms";
import Img from "./suit.png"
import { w } from "keyboard-key";
import SelectSize from "./Components/SelectSize/SelectSize";



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
})((props) => <Radio color='default' {...props} />);

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

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

const images = [
  {
    original: Img,
    thumbnail: Img,

    thumbnailWidth: "70px",
    thumbnailClass: "thumbnails",
    thumbnailHeight: "70px",
    originalHeight: "400px",
    originalWidth: "200px"
  },
  {
    original: Img,
    thumbnail: Img,

    originalHeight: "400px",
    thumbnailWidth: "70px",
    thumbnailClass: "thumbnails",
    thumbnailHeight: "70px",
    originalWidth: "200px"
  },
  {
    original: Img,
    thumbnail: Img,

    originalHeight: "400px",
    thumbnailWidth: "70px",
    thumbnailClass: "thumbnails",
    thumbnailHeight: "70px",
    originalWidth: "200px"
  },
  {
    original: Img,
    thumbnail: Img,

    originalHeight: "400px",
    thumbnailWidth: "70px",
    thumbnailClass: "thumbnails",
    thumbnailHeight: "70px",
    originalWidth: "200px"
  },
];
const HtmlTooltip = withStyles((theme) => ({
  tooltip: {
    // placement: "right-start",
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    width: 200,
    // height: 100,
    fontSize: theme.typography.pxToRem(10),
    border: '1px solid #dadde9',
  },
}))(Tooltip);




export default function ProductDescription() {


  const history = useHistory();
  const customView = useMediaQuery("(max-width:1044px)");
  const tabView = useMediaQuery("(max-width:768px)");
  const tabViewPro = useMediaQuery("(min-width:768px) and (max-width:1044px");
  const mobileView = useMediaQuery("(max-width:550px)");
  const PriceView = useMediaQuery("(min-width:834px) and (max-width:1044px");

  const [selectedColor, setSelectedColor] = useState("Brown");
  const [ProductType, setProductType] = useState("custom");
  const [ProductDrop, setProductDrop] = useState(false);
  const price = ProductType === 'custom' ? '15,000' : "10,000"
  const PriceOff = ProductType === 'custom' ? '17,000' : "11,500"
  const Off = ProductType === 'custom' ? '13%' : "15%"


  return (
    <Container bottomDivider footerOnTabMob>
      <CustomSection style={{ marginTop: 10, marginBottom: 10 }} >
        <Breadcrumb
          path='Home / Men / Suit /'
          activePath='Allen Solly'
          style={{ paddingBottom: "1rem" }}
        />
      </CustomSection>
      <div className={styles.container}>
        <div className={styles.firstContainer}>
          <div style={{ width: "100%" }} >
            <ImageGallery
              items={images}
              showNav={false}
              additionalClass={styles.imagegall}
              thumbnailPosition={
                mobileView ? "bottom" : customView ? "right" : "left"
              }
              showFullscreenButton={false}
              useBrowserFullscreen={false}
              showPlayButton={false}
            />
          </div>
          {
            !mobileView && !tabView && !customView ?
              <div className={styles.deliveryDiv}>
                <div>
                  <span>Delivery option</span>
                  <img src={deliveryTruckIcon} alt='deliver truck' />:
                </div>
                <div>
                  <label>Enter pincode*</label>
                  <input type='text' name='pincode/zipcode' />
                </div>
                <span>Please enter the pincode to check delivery time </span>
                <Button
                  variant='contained'
                  color='default'
                  className={styles.checkBtn}
                  onClick={() => history.push("/product-breakdown")}
                >
                  Check
                </Button>
              </div>
              :
              <></>

          }
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
                maxWidth: "700px"
              }}
            >
              <div style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }} >
                <div className={styles.productDetails}>
                  <span>Allen Solly</span>
                  <span>Men Cream coloured Suit</span>
                </div>
                <div className={styles.alert}>
                  <img src={clockIcon} alt='clock' />
                  <span style={{ fontSize: 14, marginLeft: -10, marginRight: 0 }} >Hurry up! Only 5 left in stock</span>
                  <div >50:00</div>
                </div>
              </div>
              <div className={styles.selectProduct}>
                <div style={{ marginTop: 25, fontWeight: "bolder", marginBottom: -10 }} >Product Type</div>
                <br />
                <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
                  <Select
                    style={{ width: "35%" }}
                    input={<BootstrapInput />}
                    value={ProductType}
                    onOpen={() => setProductDrop(true)}
                    onClose={() => setProductDrop(false)}
                    onChange={(e) => setProductType(e.target.value)}
                  >

                    {ProductType === 'ready made' ?
                      <MenuItem value={"ready made"}>
                        <FormControlLabel
                          className={ProductDrop ? styles.FormControlLabel : styles.FormControlLabelS}
                          checked={ProductType === "ready made"}
                          control={<CustomRadio />}
                          label={
                            <div className={styles.ProductSelector}>
                              <p className={styles.ChoicesBtnsLabels}>Ready Made</p>
                              {ProductDrop ? <h6 className={styles.ProductSelectorh6} >Lorem ipsum is placeholder text commonly used in the graphicer  text commonly used in the graphic</h6> : <></>}
                            </div>}
                        />
                      </MenuItem>
                      :
                      <></>
                    }
                    <MenuItem value={"custom"}>
                      <FormControlLabel
                        className={ProductDrop ? styles.FormControlLabel : styles.FormControlLabelS}
                        checked={ProductType === "custom"}
                        control={<CustomRadio />}

                        label={<div className={styles.ProductSelector}>
                          <p className={styles.ChoicesBtnsLabels}>Customised</p>
                          {ProductDrop ? <h6 className={styles.ProductSelectorh6} >Lorem ipsum is placeholder text commonly used in the graphic er text commonly used in the graphic</h6> : <></>}
                        </div>}
                      />
                    </MenuItem>
                    {ProductType === 'custom' ?

                      <MenuItem value={"ready made"}>
                        <FormControlLabel
                          className={ProductDrop ? styles.FormControlLabel : styles.FormControlLabelS}
                          checked={ProductType === "ready made"}
                          control={<CustomRadio />}
                          label={
                            <div className={styles.ProductSelector}>
                              <p className={styles.ChoicesBtnsLabels}>Ready Made</p>
                              {ProductDrop ? <h6 className={styles.ProductSelectorh6} >Lorem ipsum is placeholder text commonly used in the graphicer  text commonly used in the graphic</h6> : <></>}
                            </div>}
                        />
                      </MenuItem>
                      :
                      <></>
                    }
                  </Select>
                  <HtmlTooltip
                    // className={styles.ProductSelectorHelpBtn}
                    style={{ color: "#6a5b40" }}
                    title={
                      <React.Fragment>
                        <h3 style={{ padding: 10 }}>Lorem ipsum is place used in the graphic er text commonly used in the graphic</h3>
                      </React.Fragment>
                    }
                    placement={'right'}
                    arrow
                  >
                    <IconButton><HelpIcon /></IconButton>
                  </HtmlTooltip>
                  {/* <IconButton className={styles.ProductSelectorHelpBtn} aria-label="add to shopping cart" size={'medium'} ><HelpIcon color="#6a5b40" /></IconButton> */}
                  <div className={styles.priceTab}>
                    <span>₹{price}</span>
                    <br />
                    <p>
                      <span>₹{PriceOff}</span> <span>{Off}</span>
                    </p>
                  </div>
                </div>
                {ProductType === 'ready made' ? <SelectSize /> : <></>}


              </div>
            </div>
          )}
          {/* desktop view */}
          {!customView && (
            <>
              <div className={styles.productDetails}>
                <span>Allen Solly</span>
                <span>Men Cream coloured Suit</span>
              </div>
              {/* ========================================== */}
              <div className={styles.selectProduct}>
                <div style={{ fontWeight: "bolder", marginTop: 5, marginBottom: -10 }} >Product Type</div>
                <br />
                <div style={{ width: "100%", display: "flex", alignItems: "center", position: "relative" }}>
                  <Select
                    input={<BootstrapInput />}
                    value={ProductType}
                    onOpen={() => setProductDrop(true)}
                    onClose={() => setProductDrop(false)}
                    onChange={(e) => setProductType(e.target.value)}
                  >

                    {ProductType === 'ready made' ?
                      <MenuItem value={"ready made"}>
                        <FormControlLabel
                          className={ProductDrop ? styles.FormControlLabel : styles.FormControlLabelS}
                          checked={ProductType === "ready made"}
                          control={<CustomRadio />}
                          label={
                            <div className={styles.ProductSelector}>
                              <p className={styles.ChoicesBtnsLabels}>Ready Made</p>
                              {ProductDrop ? <h6 className={styles.ProductSelectorh6} >Lorem ipsum is placeholder text commonly used in the graphicer  text commonly used in the graphic</h6> : <></>}
                            </div>}
                        />
                      </MenuItem>
                      :
                      <></>
                    }
                    <MenuItem value={"custom"}>
                      <FormControlLabel
                        className={ProductDrop ? styles.FormControlLabel : styles.FormControlLabelS}
                        checked={ProductType === "custom"}
                        control={<CustomRadio />}

                        label={<div className={styles.ProductSelector}>
                          <p className={styles.ChoicesBtnsLabels}>Customised</p>
                          {ProductDrop ? <h6 className={styles.ProductSelectorh6} >Lorem ipsum is placeholder text commonly used in the graphic er text commonly used in the graphic</h6> : <></>}
                        </div>}
                      />
                    </MenuItem>
                    {ProductType === 'custom' ?

                      <MenuItem value={"ready made"}>
                        <FormControlLabel
                          className={ProductDrop ? styles.FormControlLabel : styles.FormControlLabelS}
                          checked={ProductType === "ready made"}
                          control={<CustomRadio />}
                          label={
                            <div className={styles.ProductSelector}>
                              <p className={styles.ChoicesBtnsLabels}>Ready Made</p>
                              {ProductDrop ? <h6 className={styles.ProductSelectorh6} >Lorem ipsum is placeholder text commonly used in the graphicer  text commonly used in the graphic</h6> : <></>}
                            </div>}
                        />
                      </MenuItem>
                      :
                      <></>
                    }
                  </Select>
                  <HtmlTooltip
                    className={styles.ProductSelectorHelpBtn}
                    title={
                      <React.Fragment>
                        <h3 style={{ padding: 10 }}>Lorem ipsum is placeholder text  used in the graphic er text commonly used in the graphic</h3>
                      </React.Fragment>
                    }
                    placement={'right'}
                    arrow
                  >
                    <IconButton><HelpIcon /></IconButton>
                  </HtmlTooltip>
                  {/* <IconButton className={styles.ProductSelectorHelpBtn} aria-label="add to shopping cart" size={'medium'} ><HelpIcon color="#6a5b40" /></IconButton> */}
                </div>
              </div>
              {/* ========================================== */}

              <div className={styles.price}>
                <span>₹{price}</span>
                <p>
                  <span>₹{PriceOff}</span> <span>{Off}</span>
                </p>
              </div>
            </>
          )}
          {mobileView && (
            <>
              <div className={styles.productDetails}>
                <span>Allen Solly</span>
                <span>Men Cream coloured Suit</span>
              </div>
              <div className={styles.selectProduct}>
                <div style={{ marginTop: 10, marginBottom: -10, fontWeight: "bolder" }} >Product Type</div>
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

                    {ProductType === 'ready made' ?
                      <MenuItem value={"ready made"}>
                        <FormControlLabel
                          className={ProductDrop ? styles.FormControlLabel : styles.FormControlLabelS}
                          checked={ProductType === "ready made"}
                          control={<CustomRadio />}
                          label={
                            <div className={styles.ProductSelector}>
                              <p className={styles.ChoicesBtnsLabels}>Ready Made</p>
                              {ProductDrop ? <h6 className={styles.ProductSelectorh6} >Lorem ipsum is placeholder text commonly used in the graphicer  text commonly used in the graphic</h6> : <></>}
                            </div>}
                        />
                      </MenuItem>
                      :
                      <></>
                    }
                    <MenuItem value={"custom"}>
                      <FormControlLabel
                        className={ProductDrop ? styles.FormControlLabel : styles.FormControlLabelS}
                        checked={ProductType === "custom"}
                        control={<CustomRadio />}

                        label={<div className={styles.ProductSelector}>
                          <p className={styles.ChoicesBtnsLabels}>Customised</p>
                          {ProductDrop ? <h6 className={styles.ProductSelectorh6} >Lorem ipsum is placeholder text commonly used in the graphic er text commonly used in the graphic</h6> : <></>}
                        </div>}
                      />
                    </MenuItem>
                    {ProductType === 'custom' ?

                      <MenuItem value={"ready made"}>
                        <FormControlLabel
                          className={ProductDrop ? styles.FormControlLabel : styles.FormControlLabelS}
                          checked={ProductType === "ready made"}
                          control={<CustomRadio />}
                          label={
                            <div className={styles.ProductSelector}>
                              <p className={styles.ChoicesBtnsLabels}>Ready Made</p>
                              {ProductDrop ? <h6 className={styles.ProductSelectorh6} >Lorem ipsum is placeholder text commonly used in the graphicer  text commonly used in the graphic</h6> : <></>}
                            </div>}
                        />
                      </MenuItem>
                      :
                      <></>
                    }
                  </Select>
                  <HtmlTooltip
                    className={styles.ProductSelectorHelpBtn}
                    style={{ marginLeft: 0 }}
                    title={
                      <React.Fragment>
                        <h3 style={{ padding: 10 }}>Lorem ipsum is plaer text commonly used in the graphic er text commonly used in the graphic</h3>
                      </React.Fragment>
                    }
                    placement={'bottom'}
                    arrow
                  >
                    <IconButton  ><HelpIcon /></IconButton>
                  </HtmlTooltip>
                </div>
              </div>
              <div className={styles.price}>
                <span>₹{price}</span>
                <p>
                  <span>₹{PriceOff}</span> <span>{Off}</span>
                </p>
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
            >

            </div>
          )}

          {!customView && (
            <div>
              <div className={styles.alert}>
                <img src={clockIcon} alt='clock' />
                <span>Hurry up! Only 5 left in stock</span>
                <div>50:00</div>
              </div>

              {ProductType === 'ready made' ? <SelectSize /> : <></>}
            </div>
          )}

          {mobileView && (
            <div>
              <div className={styles.alert}>
                <img src={clockIcon} alt='clock' />
                <span>Hurry up! Only 5 left in stock</span>
                <div>50:00</div>

              </div>
              {ProductType === 'ready made' ? <SelectSize /> : <></>}


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
            <Select
              style={mobileView ? { width: "70%" } : { width: "50%" }}
              input={<BootstrapInput />}
              value={selectedColor}
              onChange={(e) => setSelectedColor(e.target.value)}
            >
              <MenuItem value={"Brown"}>
                <FormControlLabel
                  checked={selectedColor === "Brown"}
                  control={<CustomRadio1 />}
                  label={<p className={styles.radioBtnsLabels} >Brown</p>}
                />
              </MenuItem>
              <MenuItem value={"Red"}>
                <FormControlLabel
                  checked={selectedColor === "Red"}
                  control={<CustomRadio1 />}
                  label={<p className={styles.radioBtnsLabels}>Red</p>}
                />
              </MenuItem>
              <MenuItem value={"Green"}>
                <FormControlLabel
                  checked={selectedColor === "Green"}
                  control={<CustomRadio1 />}
                  label={<p className={styles.radioBtnsLabels}>Green</p>}
                />
              </MenuItem>
            </Select>
          </div>
          <div className={styles.btnDiv}>

            <div style={{ marginBottom: "2em", marginTop: "0em" }} >
              <Button
                variant='contained'
                color='default'
                // startIcon={<ScissorsIcon />}
                fullWidth
                className={styles.customiseBtn}
              >
                Buy Now
              </Button>
              <Button

                variant='outlined'
                color='default'
                startIcon={<BagIcon />}
                fullWidth
                className={styles.addToBagBtn}
              >
                Add to bag
              </Button>
            </div>
          </div>
          <div>
          </div>
          {
            tabView || mobileView ?
              <div className={styles.container} style={mobileView ? { marginLeft: -10 } : { marginLeft: -30 }} >
                <div className={styles.firstContainer}>
                  <div className={styles.deliveryDiv}>
                    <div>
                      <span>Delivery option</span>
                      <img src={deliveryTruckIcon} alt='deliver truck' />:
                    </div>
                    <div>
                      <label>Enter pincode*</label>
                      <input type='text' name='pincode/zipcode' />
                    </div>
                    <span>Please enter the pincode to check delivery time </span>
                    <Button
                      variant='contained'
                      color='default'
                      className={styles.checkBtn}
                      onClick={() => history.push("/product-breakdown")}
                    >
                      Check
                    </Button>
                  </div>
                </div>
              </div>
              :
              tabViewPro ?
                <div className={styles.container} style={{ marginLeft: -50, marginTop: "-2em" }} >
                  <div className={styles.firstContainer}>
                    <div className={styles.deliveryDiv}>
                      <div>
                        <span>Delivery option</span>
                        <img src={deliveryTruckIcon} alt='deliver truck' />:
                      </div>
                      <div>
                        <label>Enter pincode*</label>
                        <input type='text' name='pincode/zipcode' />
                      </div>
                      <span>Please enter the pincode to check delivery time </span>
                      <Button
                        variant='contained'
                        color='default'
                        className={styles.checkBtn}
                        onClick={() => history.push("/product-breakdown")}
                      >
                        Check
                      </Button>
                    </div>
                  </div>
                </div>
                :
                <></>

          }
          <div>
            <DetailTabs type={ProductType} />
          </div>
        </div>
      </div>
    </Container>
  );
}
