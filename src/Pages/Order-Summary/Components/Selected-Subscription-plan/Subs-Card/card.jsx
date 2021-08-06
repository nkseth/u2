import React from "react";
import IconButton from "@material-ui/core/IconButton";
import styles from "./card.module.scss";
// icons
import { ReactComponent as DeleteIcon } from "../../../../../Images/icons/delete-red.svg";

export default function SubsCard() {
  return (
    <div className={styles.container}>
      <div>
        <p>
          <span>VIP</span>
          <span>₹554 / Month</span>
        </p>
        <div>
          <p>Early access to new designs</p>
          <p>Online measurements</p>
          <p>Stylists support T &amp; C Apply</p>
        </div>
      </div>
      <IconButton aria-label='delete' style={{ marginTop: "-12px" }}>
        <DeleteIcon />
      </IconButton>
    </div>
  );
}
