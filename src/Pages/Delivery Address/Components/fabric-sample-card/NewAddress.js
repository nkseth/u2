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
  const BreakPoint = useMediaQuery("(max-width:900px)");
  const BreakPointSmall = useMediaQuery("(max-width:830px)");
  const BreakPointExtraSmall = useMediaQuery("(max-width:750px)");
  const BreakPointMobile = useMediaQuery("(max-width:610px)");
  const [AddressType, SetAddressType] = useState(0);
  const [State, SetState] = useState();
  const classes = useStyles();

  const handleChange = (event) => {
    SetState(event.target.value);
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
              placeholder="Enter your Name here "
              onChange={(e) => console.log(e.target.value)}
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
              placeholder="Enter your Mobile number here "
              onChange={(e) => console.log(e.target.value)}
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
              placeholder="Enter your area pincode here "
              onChange={(e) => console.log(e.target.value)}
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
              onChange={(e) => console.log(e.target.value)}
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
            onChange={(e) => console.log(e.target.value)}
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
              placeholder="Enter your Name here "
              onChange={(e) => console.log(e.target.value)}
            />
            <InputField
              IsState
              StatesName={IndianStates}
              notimp
              label="State"
              placeholder="Enter your Mobile number here "
              onChange={(e) => console.log(e.target.value)}
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
              placeholder="Enter your area pincode here "
              onChange={(e) => console.log(e.target.value)}
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
              placeholder="Enter your locality here "
              onChange={(e) => console.log(e.target.value)}
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
          <Button className={styles.DeliverBTN}>Save and deliver here</Button>
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
