import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import styles from "./CustomTextField.module.scss";


export default function CustomTextField({ label, helperText, focus, Form, name, values }) {

    const BringValue = input => {
        console.log('value', input.target.value)
        Form(input.target.value, name);
    }

    return (
        <div style={{ position: "relative" }}>
            <div className={styles.container}>
                <TextField
                    label={label}
                    InputLabelProps={{
                        style: {
                            color: "grey",
                            fontFamily: "DM Sans",
                            fontSize: "20px",
                            fontWeight: 400,
                            lineHeight: "16px",
                            letterSpacing: "0.3199999928474426px",
                        },
                    }}
                    variant='standard'
                    fullWidth
                    helperText={helperText}
                    style={{ width: "100%", background: "white" }}
                    autoFocus={focus}
                    value={values}
                    onChange={BringValue}
                    type={'number'}
                />

            </div>
        </div>
    );
}
