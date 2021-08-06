import React, { useState } from "react";
import styles from "./Payments.module.scss";
import AddRoundedIcon from "@material-ui/icons/AddRounded";
import { Radio, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
const Payments = () => {
  return <MyAddresses_Cards />;
};

export default Payments;

//When Address Added
const MyAddresses_Cards = () => {
  let customText =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat excepturi voluptas officia porro dolorum, dignissimos voluptates iste.";
  return (
    <div className={styles.Payments}>
      <div className={styles.Payments_Box}>
        <Add_New_Address_Card />
        <Old_Address_Card CardName={"HDFC"} CardType={"Debit"} />
        <Old_Address_Card CardName={"ICICI"} CardType={"Credit"} />
      </div>
    </div>
  );
};

const Add_New_Address_Card = () => {
  const { push } = useHistory();
  return (
    <Button
      onClick={() => push("/editpayments/")}
      className={styles.Add_New_Payment_Card}
    >
      <div>
        <span>
          <AddRoundedIcon />
        </span>
        <span>Add new Credit or Debit Card</span>
      </div>
    </Button>
  );
};

const Old_Address_Card = ({ CardName, CardType, Mobile, Address }) => {
  return (
    <div className={styles.Old_Payment_Card}>
      <div className={styles.Old_Payment_Card_Top}>
        <div className={styles.Old_Payment_Card_Top_checkbox}>
          <Radio
            value="a"
            name="radio-button-demo"
            inputProps={{ "aria-label": "A" }}
          />
        </div>
        <h2>{CardName}</h2>
        <button>{CardType}</button>
      </div>
      <div className={styles.Old_Payment_Card_Middle}>
        <div className={styles.Old_Payment_Card_Middle_Box}>
          <div>
            <p>Card Number</p>
            <h4>1234 XXXX XXXX 4321</h4>
          </div>
          <div>
            <img
              src="https://www.freepnglogos.com/uploads/visa-inc-png-18.png"
              alt="card"
            />
          </div>
        </div>
        <div className={styles.Old_Payment_Card_Middle_Box}>
          <div>
            <p>Name on Card</p>
            <h4>Robert Maxwell</h4>
          </div>
          <div>
            <p>Validity</p>
            <h4>XX/XX</h4>
          </div>
        </div>
      </div>
      <div className={styles.Old_Payment_Card_Bottom}>
        <Button>Edit</Button>
        <Button>Delete</Button>
      </div>
    </div>
  );
};
