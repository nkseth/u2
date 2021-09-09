import React, { useState } from "react";
import styles from "./CustomTextField.module.scss";
import { Button, Accordion, AccordionSummary, AccordionDetails, TextField, useMediaQuery } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import InputAdornment from '@material-ui/core/InputAdornment';

export default function CustomTextField({ label, helperText, focus, Form, name, values }) {

    const [Open, SetOpen] = useState(false)
    const Tab = useMediaQuery("(max-width:786px")

    const BringValue = input => {
        console.log('value', input.target.value)
        Form(input.target.value, name);
    }

    return (
        <div style={{ position: "relative" }}>
            <div className={styles.container}>
                {/* <TextField
                    label={label}
                    InputLabelProps={{
                        style: {
                            color: "grey",
                            fontFamily: "DM Sans",
                            fontSize: "20px",
                            fontWeight: 400,
                            lineHeight: " 16px",
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
                    type={'text'}
                /> */}
                <Accordion
                    // onChange={() => { handleAccordionChange("neck"); FocusIt('neck') }}
                    style={{
                        boxShadow: "none",
                        marginTop: Tab ? 0 : -20,
                        borderRadius: "5px 0",
                        width: "100%",
                        backgroundColor: "#fff",
                        padding: 0

                    }}
                    expanded={Open}
                // onChange={() => SetOpen(!Open)}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon onClick={() => SetOpen(!Open)} />}
                        IconButtonProps={{ size: "small" }}
                        aria-controls='panel1a-content'
                        id='panel1a-header'
                        className={styles.accordionSummary}
                    >
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
                                    background: "transparent",
                                    padding: "0 0 0 .2em"
                                },
                            }}

                            InputProps={{
                                endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
                            }}
                            variant='standard'
                            fullWidth
                            // helperText={helperText}
                            style={{ width: "100%", background: "transparent", paddingLeft: "0.2em" }}
                            autoFocus={focus}
                            value={values}
                            onChange={BringValue}
                            type={'text'}
                        />
                    </AccordionSummary>
                    <AccordionDetails
                        style={{
                            background: "#fff",
                            display: "flex",
                            flexDirection: "column",
                            marginTop: Tab ? "-0.8em" : "0",
                            padding: 0
                        }}
                    >
                        <p className={styles.accInfo} >Click the link below and watch the intruction video
                            for Measurement<span >Video Link </span> </p>
                    </AccordionDetails>
                </Accordion>

            </div>
        </div>
    );
}
