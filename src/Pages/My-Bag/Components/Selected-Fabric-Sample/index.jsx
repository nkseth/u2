import React from "react";
import styles from "./index.module.scss";
import IconButton from "@material-ui/core/IconButton";
// icons
import { ReactComponent as DeleteIcon } from "../../../../Images/icons/delete-red.svg";

export default function SelectedFabricSample({ fabricName, detail, price }) {
  const img =
    "https://images.pexels.com/photos/5851808/pexels-photo-5851808.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
  return (
    <div className={styles.container}>
      <div>
        <span>Selected Fabric For Sample</span>
        <div>
          <div>
            <img src={img} alt={fabricName} />
            <div>
              <p>Selected Fabric </p>
              <p>
                <span>{detail ?? "Mid Brown Strip Wool Silk"}</span>
                <span>{price ?? "$899"}</span>
              </p>
            </div>
          </div>
          <IconButton aria-label='delete' style={{ marginTop: "-12px" }}>
            <DeleteIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}
