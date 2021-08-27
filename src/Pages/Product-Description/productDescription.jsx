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

const CustomRadio = withStyles({
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
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];
const HtmlTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
  },
}))(Tooltip);
export default function ProductDescription() {
  const history = useHistory();
  const customView = useMediaQuery("(max-width:1044px)");
  const tabView = useMediaQuery("(max-width:768px)");
  const mobileView = useMediaQuery("(max-width:550px)");
  const [selectedColor, setSelectedColor] = useState("Brown");
  const [ProductType, setProductType] = useState("custom");
  const [ProductDrop, setProductDrop] = useState(false);
  return (
    <Container bottomDivider footerOnTabMob>
      <CustomSection>
        <Breadcrumb
          path='Home / Men / Suit /'
          activePath='Allen Solly'
          style={{ paddingBottom: "1rem" }}
        />
      </CustomSection>
      <div className={styles.container}>
        <div className={styles.firstContainer}>
          <ImageGallery
            items={images}
            showNav={false}
            thumbnailPosition={
              mobileView ? "bottom" : customView ? "right" : "left"
            }
            showFullscreenButton={false}
            useBrowserFullscreen={false}
            showPlayButton={false}
          />
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
                  <span style={{ fontSize: 12, marginLeft: -10, marginRight: 0 }} >Hurry up! Only 5 left in stock</span>
                  <div >50:00</div>
                </div>
              </div>
              <div className={styles.selectProduct}>
                <div style={{ marginTop: 20, fontWeight: "bolder", marginBottom: -20 }} >Product Type</div>
                <br />
                <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
                  <Select
                    style={{ width: "40%" }}
                    input={<BootstrapInput />}
                    value={ProductType}
                    onOpen={() => setProductDrop(true)}
                    onClose={() => setProductDrop(false)}
                    onChange={(e) => setProductType(e.target.value)}
                  >
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
                    <MenuItem value={"custom"}>
                      <FormControlLabel
                        className={ProductDrop ? styles.FormControlLabel : styles.FormControlLabelS}
                        checked={ProductType === "custom"}
                        control={<CustomRadio />}

                        label={<div className={styles.ProductSelector}>
                          <p className={styles.ChoicesBtnsLabels}>Custom</p>
                          {ProductDrop ? <h6 className={styles.ProductSelectorh6} >Lorem ipsum is placeholder text commonly used in the graphic er text commonly used in the graphic</h6> : <></>}
                        </div>}
                      />
                    </MenuItem>
                  </Select>
                  <HtmlTooltip
                    // className={styles.ProductSelectorHelpBtn}
                    style={{ color: "#6a5b40" }}
                    title={
                      <React.Fragment>
                        <h3 style={{ padding: 10 }}>Lorem ipsum is placeholder text commonly used in the graphic er text commonly used in the graphic</h3>
                      </React.Fragment>
                    }
                    placement={'bottom'}
                    arrow
                  >
                    <IconButton><HelpIcon /></IconButton>
                  </HtmlTooltip>
                  {/* <IconButton className={styles.ProductSelectorHelpBtn} aria-label="add to shopping cart" size={'medium'} ><HelpIcon color="#6a5b40" /></IconButton> */}
                  <div className={styles.priceTab}>
                    <span>₹10,000</span>
                    <br />
                    <p>
                      <span>₹11,500</span> <span>15% OFF</span>
                    </p>
                  </div>
                </div>


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
                <div>Product Type</div>
                <br />
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Select
                    input={<BootstrapInput />}
                    value={ProductType}
                    onOpen={() => setProductDrop(true)}
                    onClose={() => setProductDrop(false)}
                    onChange={(e) => setProductType(e.target.value)}
                  >
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
                    <MenuItem value={"custom"}>
                      <FormControlLabel
                        className={ProductDrop ? styles.FormControlLabel : styles.FormControlLabelS}
                        checked={ProductType === "custom"}
                        control={<CustomRadio />}

                        label={<div className={styles.ProductSelector}>
                          <p className={styles.ChoicesBtnsLabels}>Custom</p>
                          {ProductDrop ? <h6 className={styles.ProductSelectorh6} >Lorem ipsum is placeholder text commonly used in the graphic er text commonly used in the graphic</h6> : <></>}
                        </div>}
                      />
                    </MenuItem>
                  </Select>
                  <HtmlTooltip
                    className={styles.ProductSelectorHelpBtn}
                    title={
                      <React.Fragment>
                        <h3 style={{ padding: 10 }}>Lorem ipsum is placeholder text commonly used in the graphic er text commonly used in the graphic</h3>
                      </React.Fragment>
                    }
                    placement={'bottom'}
                    arrow
                  >
                    <IconButton><HelpIcon /></IconButton>
                  </HtmlTooltip>
                  {/* <IconButton className={styles.ProductSelectorHelpBtn} aria-label="add to shopping cart" size={'medium'} ><HelpIcon color="#6a5b40" /></IconButton> */}
                </div>
              </div>
              {/* ========================================== */}

              <div className={styles.price}>
                <span>₹10,000</span>
                <p>
                  <span>₹11,500</span> <span>15% OFF</span>
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
                <div style={{ marginTop: 10, marginBottom: -10 }} >Product Type</div>
                <br />
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Select
                    style={{ width: "70%" }}
                    input={<BootstrapInput />}
                    value={ProductType}
                    onOpen={() => setProductDrop(true)}
                    onClose={() => setProductDrop(false)}
                    onChange={(e) => setProductType(e.target.value)}
                  >
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
                    <MenuItem value={"custom"}>
                      <FormControlLabel
                        className={ProductDrop ? styles.FormControlLabel : styles.FormControlLabelS}
                        checked={ProductType === "custom"}
                        control={<CustomRadio />}

                        label={<div className={styles.ProductSelector}>
                          <p className={styles.ChoicesBtnsLabels}>Custom</p>
                          {ProductDrop ? <h6 className={styles.ProductSelectorh6} >Lorem ipsum is placeholder text commonly used in the graphic er text commonly used in the graphic</h6> : <></>}
                        </div>}
                      />
                    </MenuItem>
                  </Select>
                  <HtmlTooltip
                    className={styles.ProductSelectorHelpBtn}
                    title={
                      <React.Fragment>
                        <h3 style={{ padding: 10 }}>Lorem ipsum is placeholder text commonly used in the graphic er text commonly used in the graphic</h3>
                      </React.Fragment>
                    }
                    placement={'bottom'}
                    arrow
                  >
                    <IconButton><HelpIcon /></IconButton>
                  </HtmlTooltip>
                  {/* <IconButton className={styles.ProductSelectorHelpBtn} aria-label="add to shopping cart" size={'medium'} ><HelpIcon color="#6a5b40" /></IconButton> */}
                </div>
              </div>
              <div className={styles.price}>
                <span>₹10,000</span>
                <p>
                  <span>₹11,500</span> <span>15% OFF</span>
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
              {/* <div className={styles.sizeDiv}>
                <img src={measuringTapeIcon} alt='' />
                <span>Not sure which size to buy?</span>
                <Link to='/'>Try size finder</Link>
              </div> */}
              {/* <div className={styles.alert}>
                <img src={clockIcon} alt='clock' />
                <span>Hurry up! Only 5 left in stock</span>
                <div>50:00</div>
              </div> */}
            </div>
          )}

          {!customView && (
            <div>
              <div className={styles.alert}>
                <img src={clockIcon} alt='clock' />
                <span>Hurry up! Only 5 left in stock</span>
                <div>50:00</div>
              </div>
              {/* <div className={styles.sizeDiv}>
                <img src={measuringTapeIcon} alt='' />
                <span>Not sure which size to buy?</span>
                <Link to='/'>Try size finder</Link>
              </div> */}
            </div>
          )}

          {mobileView && (
            <div>
              <div className={styles.alert}>
                <img src={clockIcon} alt='clock' />
                <span>Hurry up! Only 5 left in stock</span>
                <div>50:00</div>
              </div>
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
              style={{ maxWidth: "300px" }}
              input={<BootstrapInput />}
              value={selectedColor}
              onChange={(e) => setSelectedColor(e.target.value)}
            >
              <MenuItem value={"Brown"}>
                <FormControlLabel
                  checked={selectedColor === "Brown"}
                  control={<CustomRadio />}
                  label={<p className={styles.radioBtnsLabels}>Brown</p>}
                />
              </MenuItem>
              <MenuItem value={"Red"}>
                <FormControlLabel
                  checked={selectedColor === "Red"}
                  control={<CustomRadio />}
                  label={<p className={styles.radioBtnsLabels}>Red</p>}
                />
              </MenuItem>
              <MenuItem value={"Green"}>
                <FormControlLabel
                  checked={selectedColor === "Green"}
                  control={<CustomRadio />}
                  label={<p className={styles.radioBtnsLabels}>Green</p>}
                />
              </MenuItem>
            </Select>
          </div>
          <div className={styles.btnDiv}>
            {/* <Button
              variant='contained'
              color='default'
              startIcon={<SimulationIcon />}
              fullWidth
              className={styles.simulationBtn}
            >
              Simulation
            </Button> */}
            <div>
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

                variant='contained'
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
            <Terms />
          </div>
          {
            mobileView && tabView && customView ?
              <div className={styles.container}>
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
            <DetailTabs />
          </div>
        </div>
      </div>
    </Container>
  );
}
