import React from "react";
import styles from "./Payments.module.scss";
import ArrowBackRoundedIcon from "@material-ui/icons/ArrowBackRounded";
import { IconButton, Button } from "@material-ui/core";
const EditPayments = () => {
  return (
    <div className={styles.EditPayments}>
      <div className={styles.EditPayments_Top}>
        <span>
          <IconButton>
            <ArrowBackRoundedIcon />
          </IconButton>
        </span>
        <h1>Add Card</h1>
      </div>
      <form
        className={styles.EditPayments_Box}
        onSubmit={() => console.log("Submit Click")}
      >
        <div className={styles.EditPayments_Inputs}>
          <Inputs label={<div style={{display:'flex'}}><label>Card Number</label><span style={{marginLeft:'-10px',color:'red'}}>*</span></div>} placeholder="xxxx xxxx xxxx xxxx" />
          <Inputs label={<div style={{display:'flex'}}><label>Name on card</label><span style={{marginLeft:'-10px',color:'red'}}>*</span></div>}  placeholder="eg. Robert Fork" />
          <Inputs label={<div style={{display:'flex'}}><label>Validity</label><span style={{marginLeft:'-10px',color:'red'}}>*</span></div>}  placeholder="MM/YY" />
          <Inputs label= {<div style={{display:'flex'}}><label>CVV</label><span style={{marginLeft:'-10px',color:'red'}}>*</span></div>}  placeholder="369" />
        </div>
        <div className={styles.EditPayments_Submit}>
          <Button type="submit">Save</Button>
        </div>
      </form>
    </div>
  );
};

export default EditPayments;

//Here Custom Components
const Inputs = ({ label, placeholder, onChange }) => {
  return (
    <div>
      <label>{label}</label>
      <input type="text" placeholder={placeholder} onChange={onChange} />
    </div>
  );
};
