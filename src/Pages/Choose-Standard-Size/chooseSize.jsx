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
import { SuccessPopUp } from "../Payment/payment";
import {
  Customer_Name,
  Customer_Name_Change,
  Customer_Gender,
  Customer_Gender_Change,
  Customer_Size,
  Customer_Size_Change,
  Customer_Fitting,
  Customer_Fitting_Change
} from "../../Redux/MeasuremantData"

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
  // Measuremant parameters
  const [Gender, SetGender] = useState(Customer_Gender)
  const [Size, SetSize] = useState(Customer_Size)
  const [Fitting, SetFitting] = useState(Customer_Fitting)
  const [Names, setName] = useState(Customer_Name)

  const { gender, basic_details } = useSelector(state => state.root.measurement);
  const { user_data } = useSelector(state => state.root.main);

  const { name, fitting, standard_size } = basic_details;


  const onSubmit = async () => {
    if (Names.length == 0) {
      alert('Enter a valid name');
      return;
    }

    if (Fitting.length == 0) {
      alert('Enter a valid age');
      return;
    }


    if (Size.length == 0) {
      alert('Choose your size');
      return;
    }

    try {
      const { data } = await common_axios.post('/save_measurment', {
        gender: Gender,
        name: Names,
        standard_size: Size,
        fitting: Fitting,
        user_id: user_data.id
      });
      dispatch(set_basic_id(data))
      set_basic_id(data)
      history.push(`/add-measurement-body-measurement-${gender}`);

    } catch (e) {
      console.log(e.response?.data)
    }
  }

  
  const handleName = (e) => {
    setName(e.target.value)
    Customer_Name_Change(e.target.value)
  }
  const handleGender = (e) => {
    SetGender(e.target.value)
    Customer_Gender_Change(e.target.value)
  }
  const handleSize = (e) => {
    SetSize(e.target.value)
    Customer_Size_Change(e.target.value)
  }
  const handleFitting = (e) => {
    SetFitting(e.target.value)
    Customer_Fitting_Change(e.target.value)
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
                value={Names}
                style={mobileView ? { width: "285px" } : tabView ? { width: "375px" } : { width: "100%", minWidth: "350px", maxWidth: "450px" }}
                notimp
                placeholder='Name'
                onChange={(e) => handleName(e)}
              />
            </div>

            <div className={styles.GenderSelectDiv}>
              <p className={styles.SelectHead} >Select Gender</p>
              <Select
                style={mobileView ? { width: "90%", maxWidth: "285px" } : tabView ? { background: "grey" } : { width: "100%", minWidth: "300px", maxWidth: "350px" }}

                input={<BootstrapInput />}
                value={Gender}
                onChange={(e) => handleGender(e)}
              >
                <MenuItem value={"male"}>
                  <FormControlLabel
                    checked={Gender === "male"}
                    control={<CustomRadio1 />}
                    label={<p className={styles.radioBtnsLabels} >Male</p>}
                  />
                </MenuItem>
                <MenuItem value={"female"}>
                  <FormControlLabel
                    checked={Gender === "female"}
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
                value={Size}
                onChange={(e) => handleSize(e)}
              >
                <MenuItem value={"S"}>
                  <FormControlLabel
                    checked={Size === "S"}
                    control={<CustomRadio1 />}
                    label={<p className={styles.radioBtnsLabels} >S</p>}
                  />
                </MenuItem>
                <MenuItem value={"M"}>
                  <FormControlLabel
                    checked={Size === "M"}
                    control={<CustomRadio1 />}
                    label={<p className={styles.radioBtnsLabels} >M</p>}
                  />
                </MenuItem>
                <MenuItem value={"L"}>
                  <FormControlLabel
                    checked={Size === "L"}
                    control={<CustomRadio1 />}
                    label={<p className={styles.radioBtnsLabels} >L</p>}
                  />
                </MenuItem>
                <MenuItem value={"XL"}>
                  <FormControlLabel
                    checked={Size === "XL"}
                    control={<CustomRadio1 />}
                    label={<p className={styles.radioBtnsLabels} >XL</p>}
                  />
                </MenuItem>
                <MenuItem value={"XXl"}>
                  <FormControlLabel
                    checked={Size === "XXl"}
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
                value={Fitting}
                onChange={(e) => handleFitting(e)}
              >
                <MenuItem value={"Regular"} >
                  <FormControlLabel
                    style={{ height: "5em" }}
                    checked={Fitting === "Regular"}
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
                    checked={Fitting === "Slim"}
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
                    checked={Fitting === "Loose"}
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
            <Button className={styles.SaveBTN} onClick={() => onSubmit()} > Save and Add measurement</Button>

          </div>
        </div>
      </div>
    </Container>
  );
}