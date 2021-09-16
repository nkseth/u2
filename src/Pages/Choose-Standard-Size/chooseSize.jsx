import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
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
  ButtonBase,
} from "@material-ui/core";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import InputField from "../Payment/Components/Input-Field/inputField"
import cx from "classnames";
import { Carousel } from "react-responsive-carousel";
import Container from "../../utils/Container/container";
import Breadcrumb from "../../utils/Breadcrumb/breadcrumb";
import SizesCard from "./Components/Sizes-Card/card";
import styles from "./chooseSize.module.scss";
//images
import SlimFit from "../../Images/fits/slim.svg";
import RegularFit from "../../Images/fits/regular.svg";
import LooseFit from "../../Images/fits/loose.svg";
import CustomStepper from "../../utils/Stepper/stepper";
import playBtn from "./images/play.svg"
import { useSelector, useDispatch } from "react-redux";
import { set_basic_details, set_basic_id, set_gender } from "../../Redux/actions/measurement";
import common_axios from "../../utils/axios.config";

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
      marginRight: 100
    },
  },
  input: {
    width: "343px",
    borderRadius: 0,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "3px 8px 3px 8px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}))(InputBase);






export default function ChooseStandardSize() {

  const history = useHistory();
  const dispatch = useDispatch();
  const tabView = useMediaQuery("(max-width:769px)");
  const tabViewPro = useMediaQuery("(max-width:835px)");
  const mobileView = useMediaQuery("(max-width:550px)");

  const { gender, basic_details } = useSelector(state => state.root.measurement);
  const { user_data } = useSelector(state => state.root.main);

  const { name, fitting, standard_size } = basic_details;

 
  const onSubmit  = async () => {
    if(name.length == 0){
      alert('Enter a valid name');
      return;
    }

    if(fitting.length == 0){
      alert('Enter a valid age');
      return;
    }


    if(standard_size.length == 0){
      alert('Choose your size');
      return;
    }

    try{
      const { data } = await common_axios.post('/save_measurment',{
        gender,
        name,
        standard_size,
        fitting,
        user_id:user_data.id
      });
      dispatch(set_basic_id(data))
      history.push(`/add-measurement-body-measurement-${gender}`)
    } catch(e){
      console.log(e.response?.data)
    }
  }

  return (
    <Container bottomDivider footerOnTabMob>
      <div className={styles.Container}>
        <p style={{ marginLeft: "1em", marginTop: "2em" }} >
          <Breadcrumb
            path='Home / Men / Blazers / '
            activePath='Add measurement'
          />
        </p>
        <CustomStepper activeStep={2} />
        <h1 className={styles.h1} > Add Measurement</h1>
        <div className={styles.MainDiv}>
          <div className={styles.videoDiv}>
            <div className={styles.video}>
              <div className={styles.overlay}>
                <img src={playBtn} />
                <span>9:57</span>
                <h4>Introductory video on measurement</h4>
                <p>Not sure how to measure? Here is a quick video tutorial we have for you</p>
              </div>
            </div>
          </div>
          <div className={styles.optionsDiv}>
            <div className={styles.NameDiv}>
              <p className={styles.SelectHead} >Name</p>
              <InputField
                special
                value={name}
                style={mobileView ? { width: "285px" } : tabView ? { width: "375px" } : { width: "100%", minWidth: "350px", maxWidth: "450px" }}
                notimp
                placeholder='Name'
                onChange={(e) => dispatch(set_basic_details({...basic_details, name:e.target.value}))}
              />
            </div>

            <div className={styles.GenderSelectDiv}>
              <p className={styles.SelectHead} >Select Gender</p>
              <Select
                style={mobileView ? { width: "90%", maxWidth: "285px" } : tabView ? { background: "grey" } : { width: "100%", minWidth: "300px", maxWidth: "350px" }}

                input={<BootstrapInput />}
                value={gender}
                onChange={(e) => dispatch(set_gender(e.target.value))}
              >
                <MenuItem value={"male"}>
                  <FormControlLabel
                    checked={gender === "male"}
                    control={<CustomRadio1 />}
                    label={<p className={styles.radioBtnsLabels} >Male</p>}
                  />
                </MenuItem>
                <MenuItem value={"female"}>
                  <FormControlLabel
                    checked={gender === "female"}
                    control={<CustomRadio1 />}
                    label={<p className={styles.radioBtnsLabels}>Female</p>}
                  />
                </MenuItem>

              </Select>
            </div>

            {/* Select Size */}
            <div className={styles.SizeSelectDiv}>
              <p className={styles.SelectHead} >Select Size</p>
              <Select
                style={mobileView ? { width: "90%", maxWidth: "285px" } : tabView ? { background: "grey" } : { width: "100%", minWidth: "300px", maxWidth: "350px" }}
                input={<BootstrapInput />}
                value={standard_size}
                onChange={(e) => dispatch(set_basic_details({...basic_details, standard_size:e.target.value}))}
              >
                <MenuItem value={"S"}>
                  <FormControlLabel
                    checked={standard_size === "S"}
                    control={<CustomRadio1 />}
                    label={<p className={styles.radioBtnsLabels} >S</p>}
                  />
                </MenuItem>
                <MenuItem value={"M"}>
                  <FormControlLabel
                    checked={standard_size === "M"}
                    control={<CustomRadio1 />}
                    label={<p className={styles.radioBtnsLabels} >M</p>}
                  />
                </MenuItem>
                <MenuItem value={"L"}>
                  <FormControlLabel
                    checked={standard_size === "L"}
                    control={<CustomRadio1 />}
                    label={<p className={styles.radioBtnsLabels} >L</p>}
                  />
                </MenuItem>
                <MenuItem value={"XL"}>
                  <FormControlLabel
                    checked={standard_size === "XL"}
                    control={<CustomRadio1 />}
                    label={<p className={styles.radioBtnsLabels} >XL</p>}
                  />
                </MenuItem>
                <MenuItem value={"XXl"}>
                  <FormControlLabel
                    checked={standard_size === "XXl"}
                    control={<CustomRadio1 />}
                    label={<p className={styles.radioBtnsLabels} >XXL</p>}
                  />
                </MenuItem>

              </Select>
            </div>
            {/* Select Your fitting */}
            <div className={styles.FittingSelectDiv}>
              <p className={styles.SelectHead} >Select Your fitting</p>
              <Select
                style={mobileView ? { width: "90%", maxWidth: "285px" } : tabView ? { background: "grey" } : { width: "100%", minWidth: "300px", maxWidth: "350px" }}

                input={<BootstrapInput />}
                value={fitting}
                onChange={(e) => dispatch(set_basic_details({...basic_details, fitting:e.target.value}))}
              >
                <MenuItem value={"Regular"} >
                  <FormControlLabel
                    style={{ height: "5em" }}
                    checked={fitting === "Regular"}
                    control={<CustomRadio1 />}
                    label={
                      <>
                        <img className={styles.FittingImg} src={RegularFit} />
                        <div className={styles.FittingDiv} >
                          <p className={styles.radioBtnsLabels} >Regular</p>
                          <p className={styles.radioLabelInfo}>A Regular Modern cut </p>
                        </div>
                      </>}
                  />
                </MenuItem>


                <MenuItem value={"Slim"} >
                  <FormControlLabel
                    style={{ height: "5em" }}
                    checked={fitting === "Slim"}
                    control={<CustomRadio1 />}
                    label={
                      <>
                        <img className={styles.FittingImg} src={SlimFit} />
                        <div className={styles.FittingDiv} >
                          <p className={styles.radioBtnsLabels} >Slim</p>
                          <p className={styles.radioLabelInfo}>A Slim Modern cut </p>
                        </div>
                      </>}
                  />
                </MenuItem>


                <MenuItem value={"Loose"} >
                  <FormControlLabel
                    style={{ height: "5em" }}
                    checked={fitting === "Loose"}
                    control={<CustomRadio1 />}
                    label={
                      <>
                        <img className={styles.FittingImg} src={LooseFit} />
                        <div className={styles.FittingDiv} >
                          <p className={styles.radioBtnsLabels} >Loose</p>
                          <p className={styles.radioLabelInfo}>A Loose Modern cut </p>
                        </div>
                      </>}
                  />
                </MenuItem>
              </Select>
            </div>
            <Button className={styles.SaveBTN} > Save and Add measurement</Button>

          </div>
        </div>
      </div>
    </Container>
  );
}
// old code is here

{/* {tabViewPro && !mobileView && (
        <div style={{ padding: tabView ? "0 30px" : "0 56px" }}>
          <Breadcrumb
            path='Home / Men / Blazers / '
            activePath='Add measurement'
          />
        </div>
      )}
      <section className={styles.section}>
        {!tabViewPro && (
          <Breadcrumb
            path='Home / Men / Blazers / '
            activePath='Add measurement'
          />
        )}

        <div className={styles.header}>Choose Standard Size</div>
        <div className={styles.sizesDiv}>
          <IconButton
            onClick={() => setSize("xs")}
            size={mobileView && "small"}
          >
            <div
              className={cx(
                styles.sizeButton,
                size === "xs" && styles.sizeButtonActive
              )}
            >
              XS
            </div>
          </IconButton>
          <IconButton onClick={() => setSize("s")} size={mobileView && "small"}>
            <div
              className={cx(
                styles.sizeButton,
                size === "s" && styles.sizeButtonActive
              )}
            >
              S
            </div>
          </IconButton>
          <IconButton onClick={() => setSize("m")} size={mobileView && "small"}>
            <div
              className={cx(
                styles.sizeButton,
                size === "m" && styles.sizeButtonActive
              )}
            >
              M
            </div>
          </IconButton>
          <IconButton onClick={() => setSize("l")} size={mobileView && "small"}>
            <div
              className={cx(
                styles.sizeButton,
                size === "l" && styles.sizeButtonActive
              )}
            >
              L
            </div>
          </IconButton>
          <IconButton
            onClick={() => setSize("xl")}
            size={mobileView && "small"}
          >
            <div
              className={cx(
                styles.sizeButton,
                size === "xl" && styles.sizeButtonActive
              )}
            >
              XL
            </div>
          </IconButton>
          <IconButton
            onClick={() => setSize("xxl")}
            size={mobileView && "small"}
          >
            <div
              className={cx(
                styles.sizeButton,
                size === "xxl" && styles.sizeButtonActive
              )}
            >
              XXL
            </div>
          </IconButton>
        </div>
        <div>
          {mobileView && (
            <div>
              <Carousel
                autoPlay={false}
                centerMode
                centerSlidePercentage={100}
                showArrows={false}
                showStatus={false}
                showIndicators={true}
                stopOnHover
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    height: "350px",
                    alignItems: "center",
                  }}
                >
                  <SizesCard
                    fitImg={LooseFit}
                    fitType='Loose'
                    fitDescription='A Loose Modern cut'
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    height: "350px",
                    alignItems: "center",
                  }}
                >
                  <SizesCard
                    fitImg={SlimFit}
                    fitType='Slim'
                    fitDescription='A Slim Modern cut'
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    height: "350px",
                    alignItems: "center",
                  }}
                >
                  <SizesCard
                    fitImg={RegularFit}
                    fitType='Regular'
                    fitDescription='A Regular Modern cut'
                  />
                </div>
              </Carousel>
            </div>
          )}

          {!mobileView && (
            <div className={styles.sizeIllustrationDiv}>
              <SizesCard
                fitImg={LooseFit}
                fitType='Loose'
                fitDescription='A Loose Modern cut'
              />
              <SizesCard
                fitImg={SlimFit}
                fitType='Slim'
                fitDescription='A Slim Modern cut'
              />
              <SizesCard
                fitImg={RegularFit}
                fitType='Regular'
                fitDescription='A Regular Modern cut'
              />
            </div>
          )}
        </div>
        <div className={styles.buttonDiv}>
          <Button
            className={styles.button}
            variant='contained'
            color='default'
            onClick={() => history.push("/add-measurement-gender")}
          >
            Continue
          </Button>
        </div>
      </section> */}