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
          <Inputs label="Card Number *" placeholder="xxxx xxxx xxxx xxxx" />
          <Inputs label="Name on card *" placeholder="eg. Robert Fork" />
          <Inputs label="Validity *" placeholder="MM/YY" />
          <Inputs label="CVV *" placeholder="369" />
        </div>
        <div className={styles.EditPayments_Submit}>
          <Button type="submit">Save and deliver here</Button>
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
