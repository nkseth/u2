import {
  FormControl,
  FormHelperText,
  IconButton,
  InputLabel,
  makeStyles,
  NativeSelect,
  Radio,
  TextField,
  useMediaQuery,
} from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import React, { useState } from "react";
import CustomDivider from "../../../../utils/Custom Divider/divider";
import InputField from "../../../Payment/Components/Input-Field/inputField";
import styles from "./NewAddress.module.scss";
import { Button } from "@material-ui/core";
import { ReactComponent as LocationIcon } from "../../../../Images/icons/location.svg";
import close from "../../../Payment/close.svg";
import { useDispatch } from "react-redux";
import { addAddress } from "../../../../Redux/actions/address";

const CustomRadio = withStyles({
  root: {
    color: "#9D9D9D",
    "&$checked": {
      color: "#857250",
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function NewAddress({ setAddAddress }) {
  const dispatch = useDispatch();
  const BreakPoint = useMediaQuery("(max-width:900px)");
  const BreakPointSmall = useMediaQuery("(max-width:830px)");
  const BreakPointExtraSmall = useMediaQuery("(max-width:750px)");
  const BreakPointMobile = useMediaQuery("(max-width:610px)");
  const [AddressType, SetAddressType] = useState(0);
  const [State, SetState] = useState();
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState();
  const [alternateMobile, setAlternateMobile] = useState();
  const [pincode, setPincode] = useState();
  const [locality, setLocality] = useState();
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [landmark, setLandmark] = useState("");

  const classes = useStyles();

  const createNewAddressHandler = (e) => {
    e.preventDefault();
    console.log(
      AddressType,
      "Delhi",
      name,
      mobile,
      alternateMobile,
      pincode,
      locality,
      address,
      city,
      landmark
    );
    if (
      (name === "" || address === "" || mobile === "",
      pincode === "" || locality === "" || city === "")
    )
      return alert("All fields are required except optional");
    if (mobile === alternateMobile)
      return alert("Provide different alternate contact.");
    dispatch(
      addAddress({
        address_type: AddressType === 0 ? "Primary" : "Secondary",
        address_line_1: address,
        city,
        zip_code: pincode,
        phone: mobile,
        name,
        locality,
        state: "Delhi",
        country: "India",
        landmark,
        alternate_phone: alternateMobile,
      })
    );
  };

  return (
    <div className={styles.modal}>
      <div
        className={styles.OverLay}
        onClick={() => setAddAddress(false)}
      ></div>
      <div className={styles.Popup}>
        <IconButton
          className={styles.CloseBtn}
          onClick={() => setAddAddress(false)}
        >
          <img src={close} alt="close" />
        </IconButton>
        <div className={styles.newAddressContainer}>
          <div className={styles.h1dividerdiv}>
            <h1>Add Addresses</h1>
            <CustomDivider />
          </div>
          <div className={styles.UseLocationBtnDiv}>
            <Button
              className={styles.useCurrentLocationBtn}
              variant="contained"
              color="default"
              startIcon={<LocationIcon />}
            >
              Use current location
            </Button>
          </div>
          <div className={styles.formDiv}>
            <InputField
              notimp
              style={
                BreakPoint &&
                !BreakPointSmall &&
                !BreakPointExtraSmall &&
                !BreakPointMobile
                  ? { minWidth: "345px", marginBottom: "2em" }
                  : BreakPointSmall &&
                    BreakPoint &&
                    !BreakPointExtraSmall &&
                    !BreakPointMobile
                  ? { minWidth: "320px", marginBottom: "2em" }
                  : BreakPoint &&
                    BreakPointSmall &&
                    BreakPointExtraSmall &&
                    !BreakPointMobile
                  ? { minWidth: "250px", marginBottom: "2em" }
                  : BreakPoint &&
                    BreakPointSmall &&
                    BreakPointExtraSmall &&
                    BreakPointMobile
                  ? { minWidth: "70vw", marginBottom: "2em" }
                  : {
                      width: "100%",
                      maxWidth: "380px",
                      minWidth: "380px",
                      marginBottom: "2em",
                    }
              }
              label="Name"
              value={name}
              placeholder="Enter your Name here "
              onChange={(e) => setName(e.target.value)}
            />
            <InputField
              notimp
              style={
                BreakPoint &&
                !BreakPointSmall &&
                !BreakPointExtraSmall &&
                !BreakPointMobile
                  ? { minWidth: "345px", marginBottom: "2em" }
                  : BreakPointSmall &&
                    BreakPoint &&
                    !BreakPointExtraSmall &&
                    !BreakPointMobile
                  ? { minWidth: "320px", marginBottom: "2em" }
                  : BreakPoint &&
                    BreakPointSmall &&
                    BreakPointExtraSmall &&
                    !BreakPointMobile
                  ? { minWidth: "250px", marginBottom: "2em" }
                  : BreakPoint &&
                    BreakPointSmall &&
                    BreakPointExtraSmall &&
                    BreakPointMobile
                  ? { minWidth: "70vw", marginBottom: "2em" }
                  : {
                      width: "100%",
                      maxWidth: "380px",
                      minWidth: "380px",
                      marginBottom: "2em",
                    }
              }
              label="Mobile"
              value={mobile}
              placeholder="Enter your Mobile number here "
              onChange={(e) => setMobile(e.target.value)}
            />
            <InputField
              notimp
              style={
                BreakPoint &&
                !BreakPointSmall &&
                !BreakPointExtraSmall &&
                !BreakPointMobile
                  ? { minWidth: "345px", marginBottom: "2em" }
                  : BreakPointSmall &&
                    BreakPoint &&
                    !BreakPointExtraSmall &&
                    !BreakPointMobile
                  ? { minWidth: "320px", marginBottom: "2em" }
                  : BreakPoint &&
                    BreakPointSmall &&
                    BreakPointExtraSmall &&
                    !BreakPointMobile
                  ? { minWidth: "250px", marginBottom: "2em" }
                  : BreakPoint &&
                    BreakPointSmall &&
                    BreakPointExtraSmall &&
                    BreakPointMobile
                  ? { minWidth: "70vw", marginBottom: "2em" }
                  : {
                      width: "100%",
                      maxWidth: "380px",
                      minWidth: "380px",
                      marginBottom: "2em",
                    }
              }
              label="Pincode"
              value={pincode}
              placeholder="Enter your area pincode here "
              onChange={(e) => setPincode(e.target.value)}
            />
            <InputField
              notimp
              style={
                BreakPoint &&
                !BreakPointSmall &&
                !BreakPointExtraSmall &&
                !BreakPointMobile
                  ? { minWidth: "345px", marginBottom: "2em" }
                  : BreakPointSmall &&
                    BreakPoint &&
                    !BreakPointExtraSmall &&
                    !BreakPointMobile
                  ? { minWidth: "320px", marginBottom: "2em" }
                  : BreakPoint &&
                    BreakPointSmall &&
                    BreakPointExtraSmall &&
                    !BreakPointMobile
                  ? { minWidth: "250px", marginBottom: "2em" }
                  : BreakPoint &&
                    BreakPointSmall &&
                    BreakPointExtraSmall &&
                    BreakPointMobile
                  ? { minWidth: "70vw", marginBottom: "2em" }
                  : {
                      width: "100%",
                      maxWidth: "380px",
                      minWidth: "380px",
                      marginBottom: "2em",
                    }
              }
              label="Locality"
              placeholder="Enter your locality here "
              value={locality}
              onChange={(e) => setLocality(e.target.value)}
            />
          </div>
          <InputField
            textfield
            notimp
            style={{
              width: "100%",
              height: "160px",
              display: "flex",
              alignItems: "center",
            }}
            label="Address area and street"
            placeholder="Enter your Address area and street here "
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <div className={styles.formDiv}>
            <InputField
              notimp
              style={
                BreakPoint &&
                !BreakPointSmall &&
                !BreakPointExtraSmall &&
                !BreakPointMobile
                  ? { minWidth: "345px", marginBottom: "2em" }
                  : BreakPointSmall &&
                    BreakPoint &&
                    !BreakPointExtraSmall &&
                    !BreakPointMobile
                  ? { minWidth: "320px", marginBottom: "2em" }
                  : BreakPoint &&
                    BreakPointSmall &&
                    BreakPointExtraSmall &&
                    !BreakPointMobile
                  ? { minWidth: "250px", marginBottom: "2em" }
                  : BreakPoint &&
                    BreakPointSmall &&
                    BreakPointExtraSmall &&
                    BreakPointMobile
                  ? { minWidth: "70vw", marginBottom: "2em" }
                  : {
                      width: "100%",
                      maxWidth: "380px",
                      minWidth: "380px",
                      marginBottom: "2em",
                    }
              }
              label="City / District / Town"
              placeholder="Enter your City/District/Town here "
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <InputField
              IsState
              StatesName={IndianStates}
              notimp
              label="State"
              placeholder="Select Your State"
              onChange={(e) => SetState(e.target.value)}
            />

            <InputField
              notimp
              style={
                BreakPoint &&
                !BreakPointSmall &&
                !BreakPointExtraSmall &&
                !BreakPointMobile
                  ? { minWidth: "345px", marginBottom: "2em" }
                  : BreakPointSmall &&
                    BreakPoint &&
                    !BreakPointExtraSmall &&
                    !BreakPointMobile
                  ? { minWidth: "320px", marginBottom: "2em" }
                  : BreakPoint &&
                    BreakPointSmall &&
                    BreakPointExtraSmall &&
                    !BreakPointMobile
                  ? { minWidth: "250px", marginBottom: "2em" }
                  : BreakPoint &&
                    BreakPointSmall &&
                    BreakPointExtraSmall &&
                    BreakPointMobile
                  ? { minWidth: "70vw", marginBottom: "2em" }
                  : {
                      width: "100%",
                      maxWidth: "380px",
                      minWidth: "380px",
                      marginBottom: "2em",
                    }
              }
              label="Landmark (optional)"
              placeholder="Enter your area landmark or nearby famous place here "
              onChange={(e) => setLandmark(e.target.value)}
            />
            <InputField
              notimp
              style={
                BreakPoint &&
                !BreakPointSmall &&
                !BreakPointExtraSmall &&
                !BreakPointMobile
                  ? { minWidth: "345px", marginBottom: "2em" }
                  : BreakPointSmall &&
                    BreakPoint &&
                    !BreakPointExtraSmall &&
                    !BreakPointMobile
                  ? { minWidth: "320px", marginBottom: "2em" }
                  : BreakPoint &&
                    BreakPointSmall &&
                    BreakPointExtraSmall &&
                    !BreakPointMobile
                  ? { minWidth: "250px", marginBottom: "2em" }
                  : BreakPoint &&
                    BreakPointSmall &&
                    BreakPointExtraSmall &&
                    BreakPointMobile
                  ? { minWidth: "70vw", marginBottom: "2em" }
                  : {
                      width: "100%",
                      maxWidth: "380px",
                      minWidth: "380px",
                      marginBottom: "2em",
                    }
              }
              label="Alternate phone no (optional)"
              placeholder="Enter your alternate number here"
              value={alternateMobile}
              onChange={(e) => setAlternateMobile(e.target.value)}
            />
          </div>
          <div className={styles.addTypeDiv}>
            <p>Address tye</p>
            <div className={styles.add1}>
              <CustomRadio
                checked={AddressType === 0}
                onClick={() => SetAddressType(0)}
              />
              <h3>Home (All day delivery)</h3>
            </div>
            <div className={styles.add2}>
              <CustomRadio
                checked={AddressType === 1}
                onClick={() => SetAddressType(1)}
              />
              <h3>Office (Delivery between 10am to 5pm)</h3>
            </div>
          </div>
          <Button
            onClick={createNewAddressHandler}
            className={styles.DeliverBTN}
          >
            Save and deliver here
          </Button>
        </div>
      </div>
    </div>
  );
}

export default NewAddress;

const IndianStates = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jammu and Kashmir",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttarakhand",
  "Uttar Pradesh",
  "West Bengal",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli",
  "Daman and Diu",
  "Delhi",
  "Lakshadweep",
  "Puducherry",
];
