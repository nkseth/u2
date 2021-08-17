import { Button } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import CustomDivider from "../../../utils/Custom Divider/divider";
import styles from "../Style/Season_Offers.module.scss";
const Season_Offers = () => {
  const baseStyle = { width: "90%", margin: "3rem auto" };
  // offer
  const { push } = useHistory();
  const Handler = () => {
    push("offers");
  };
  return (
    <div style={baseStyle}>
      <div className={` ${styles.Season_Offers_header}`}>
        Season Offers
        <CustomDivider style={{ height: "2px", background: "#857250" }} />
      </div>
      <div className={styles.Season_Offers}>
        <div className={styles.Season_Offers_Item1}>
          <div>
            <h2>Buy 1 Get 1 One</h2>
            <Button onClick={Handler}>Button</Button>
          </div>
        </div>
        <div className={styles.Season_Offers_Item2}>
          <div>
            <h2>50% Flat cashback on this product</h2>
            <Button onClick={Handler}>Button</Button>
          </div>
        </div>
        <div className={styles.Season_Offers_Item3}>
          <div>
            <h2>100% free via purchase </h2>
            <Button onClick={Handler}>Button</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Season_Offers;
