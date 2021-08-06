import React from "react";
import TextField from "@material-ui/core/TextField";
import styles from "./text.module.scss";

export default function CustomTextField({ label, helperText }) {
  return (
    <div className={styles.container}>
      <TextField
        label={label}
        InputLabelProps={{
          style: {
            color: "grey",
            fontFamily: "DM Sans",
            fontSize: "12px",
            fontWeight: 400,
            lineHeight: "16px",
            letterSpacing: "0.3199999928474426px",
          },
        }}
        variant='standard'
        fullWidth
        helperText={helperText}
      />
    </div>
  );
}
