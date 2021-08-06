import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Radio,
  InputBase,
  Select,
  MenuItem,
  FormControlLabel,
  useMediaQuery,
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

export default function ProductDescription() {
  const history = useHistory();
  const customView = useMediaQuery("(max-width:1044px)");
  const tabView = useMediaQuery("(max-width:768px)");
  const mobileView = useMediaQuery("(max-width:550px)");
  const [selectedColor, setSelectedColor] = useState("Brown");
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
        <div className={styles.lastContainer}>
          {customView && !mobileView && (
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
              }}
            >
              <div className={styles.productDetails}>
                <span>Allen Solly</span>
                <span>Men Cream coloured Suit</span>
              </div>
              <div className={styles.price}>
                <span>₹10,000</span>
                <p>
                  <span>₹11,500</span> <span>15% OFF</span>
                </p>
              </div>
            </div>
          )}
          {!customView && (
            <>
              <div className={styles.productDetails}>
                <span>Allen Solly</span>
                <span>Men Cream coloured Suit</span>
              </div>
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
              <div className={styles.sizeDiv}>
                <img src={measuringTapeIcon} alt='' />
                <span>Not sure which size to buy?</span>
                <Link to='/'>Try size finder</Link>
              </div>
              <div className={styles.alert}>
                <img src={clockIcon} alt='clock' />
                <span>Hurry up! Only 5 left in stock</span>
                <div>50:00</div>
              </div>
            </div>
          )}

          {!customView && (
            <div>
              <div className={styles.alert}>
                <img src={clockIcon} alt='clock' />
                <span>Hurry up! Only 5 left in stock</span>
                <div>50:00</div>
              </div>
              <div className={styles.sizeDiv}>
                <img src={measuringTapeIcon} alt='' />
                <span>Not sure which size to buy?</span>
                <Link to='/'>Try size finder</Link>
              </div>
            </div>
          )}

          {mobileView && (
            <div>
              <div className={styles.alert}>
                <img src={clockIcon} alt='clock' />
                <span>Hurry up! Only 5 left in stock</span>
                <div>50:00</div>
              </div>
              <div className={styles.sizeDiv}>
                <img src={measuringTapeIcon} alt='' />
                <span>Not sure which size to buy?</span>
                <Link to='/'>Try size finder</Link>
              </div>
            </div>
          )}
          <div className={styles.selectColor}>
            <div>Select colour</div>
            <br />
            <Select
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
            <Button
              variant='contained'
              color='default'
              startIcon={<SimulationIcon />}
              fullWidth
              className={styles.simulationBtn}
            >
              Simulation
            </Button>
            <div>
              <Button
                variant='contained'
                color='default'
                startIcon={<ScissorsIcon />}
                fullWidth
                className={styles.customiseBtn}
              >
                Customise
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
            <DetailTabs />
          </div>
        </div>
      </div>
    </Container>
  );
}
