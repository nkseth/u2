import { Button } from "@material-ui/core";
import React from "react";
import styles from "../Style/Collabrate_With_US.module.scss";
const Collabrate_With_US = () => {
  return (
    <div className={styles.Collabrate_With_US}>
      {/* <Button>Collabrate with uS</Button> */}
      <div className="collabrate_bg">
        <h2>Collabrate with us
        </h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
        </p>
        <Button>Learn More</Button>
      </div>
    </div>
  );
};

export default Collabrate_With_US;
