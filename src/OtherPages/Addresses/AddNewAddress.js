import React, { useState } from "react";
import { Button, Radio } from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import styles from "./MyAddresses.module.scss";
import { useHistory } from "react-router-dom";
const AddNewAddress = () => {
  const { push } = useHistory();
  return (
    <div className={styles.AddNewAddress}>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className={styles.AddNewAddress_Top}>
          <label>Add new address</label>
          <Button>
            <LocationOnIcon />
            <span>Use current loacation</span>
          </Button>
        </div>
        <div className={styles.AddNewAddress_Inputs}>
          <Inputs label="Name" placeholder="Input" />
          <Inputs label="Mobile" placeholder="Input" />
          <Inputs label="Pincode" placeholder="Input" />
          <Inputs label="Locality" placeholder="Input" />
        </div>
        <div className={styles.AddNewAddress_textarea}>
          <label>Address area and street</label>
          <textarea placeholder={"input"}></textarea>
        </div>
        <div className={styles.AddNewAddress_Inputs}>
          <Inputs label="City / Disrict / Town" placeholder="Input" />
          <Select label="State" />
          <Inputs label="Landmark (optional)" placeholder="Input" />
          <Inputs label="Alternate Phone (optional)" placeholder="Input" />
        </div>

        <div className={styles.AddNewAddress_Type}>
          <label>Address type</label>
          <div className={styles.AddNewAddress_Type_checkbox}>
            <div>
              <Radio
                value="a"
                name="radio-button-demo"
                inputProps={{ "aria-label": "A" }}
              />
              <p>Home (All day delivery)</p>
            </div>
            <div>
              <Radio
                value="a"
                name="radio-button-demo"
                inputProps={{ "aria-label": "A" }}
              />
              <p>Office delivey (Delivery between 10am to 5pm)</p>
            </div>
          </div>
        </div>
        <div className={styles.AddNewAddress_Submit}>
          <Button onClick={() => push("myaddresses")} type="submit">
            Save and deliver here
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddNewAddress;

//Here Custom Components
const Inputs = ({ label, placeholder, onChange }) => {
  return (
    <div>
      <label>{label}</label>
      <input type="text" placeholder={placeholder} onChange={onChange} />
    </div>
  );
};
const Select = ({ label, placeholder, onChange }) => {
  return (
    <div>
      <label>{label}</label>
      <select>
        <option value="State 1">State 1</option>
        <option value="State 2">State 2</option>
        <option value="State 3">State 3</option>
        <option value="State 4">State 4</option>
        <option value="State 5">State 5</option>
        <option value="State 6">State 6</option>
        <option value="State 7">State 7</option>
      </select>
    </div>
  );
};

export const Custom_Checkbox = () => {
  const [isChecked, setisChecked] = useState(false);
  const checkBox_Handler = () => {
    setisChecked(!isChecked);
  };
  return (
    <span onClick={checkBox_Handler} id={styles.AddNewAddress_Type_checkbox_2}>
      {isChecked ? <span></span> : null}
    </span>
  );
};
