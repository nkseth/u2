import { Checkbox, Grid, Box, FormControlLabel, FormControl, createMuiTheme, ThemeProvider, withStyles, Button, MuiThemeProvider, useMediaQuery, MobileStepper, makeStyles, InputLabel, Select, } from "@material-ui/core";
import React, { useState } from "react"
import CustomSection from "../../../../../utils/Custom Section/section";
import InputField from "../../../../Payment/Components/Input-Field/inputField";
import styles from './preferredColor.module.scss'


export default function Fashion({ change }) {

    const tabViewPro = useMediaQuery("(max-width:1023px)");
    const tabView = useMediaQuery("(max-width:835px)");
    const mobileView = useMediaQuery("(max-width:550px)");
    const mobileViewSmall = useMediaQuery("(max-width:320px)");

    const [checked, setChecked] = useState('')



    const Theme = createMuiTheme({
        typography: {
            body1: {
                fontFamily: 'DM Sans',
                fontSize: mobileView ? 16 : 20,
                color: '#191919',
                marginRight: "12px",
                marginLeft: "10px"
            }
        },
        overrides: {
            MuiButton: {
                root: {
                    fontSize: !mobileView ? '20px !important' : '16px !important',
                    fontFamily: "DM Sans !important",
                    color: 'white !important',
                    textTransform: 'unset !important',
                    borderRadius: '5px !important',
                    background: "#6A5B40",
                    fontWeight: "bold !ImportantDevices",
                    height: 48,
                    width: 343
                },
                contained: {
                    backgroundColor: "#6A5B40 !important"
                }
            },
            MuiMobileStepper: {
                root: {
                    width: mobileViewSmall ? 300 : mobileView ? 344 : 450,
                    background: mobileView ? "#6A5B40" : "unset"
                },
                progress: {
                    width: '100%',
                    backgroundColor: !mobileView ? 'rgba(106, 91, 64, 0.47)' : "rgba(255, 255, 255, 0.47)",
                }
            },
            MuiLinearProgress: {
                barColorPrimary: {
                    backgroundColor: !mobileView ? "#6A5B40" : "white",
                }
            },
            MuiFormControlLabel: {
                labelPlacementStart: {
                    marginLeft: "0px"
                }
            }
        },

    });

    const GreenCheckbox = withStyles({
        root: {
            color: "transparent",
            '&$checked': {
                color: "#6A5B40",
            },
        },
        checked: {},
    })((props) => <Checkbox color="default" {...props} />);




    return (
        <div>
            {
                !mobileView ?
                    <div className={styles.stepper}>

                        <ThemeProvider theme={Theme}>
                            <MobileStepper
                                variant="progress"
                                steps={9}
                                position="static"
                                activeStep={8}
                            />
                        </ThemeProvider>

                        <div className={styles.heading}>
                            <p>Your 3 preferred colors</p>
                        </div>
                    </div>
                    :
                    <div className={styles.stepper}>
                        <ThemeProvider theme={Theme}>
                            <MobileStepper
                                variant="progress"
                                steps={9}
                                position="static"
                                activeStep={8}
                            />
                        </ThemeProvider>

                        <CustomSection class={styles.heading}>
                            <p>Your 3 preferred colors</p>
                        </CustomSection>
                    </div>
            }

            <CustomSection class={styles.inputFields}>
                <input
                    type='text'
                    name='name'
                    placeholder='Enter 3 preferred colors'
                    className={styles.inputField}
                />
            </CustomSection>

            <div className={styles.buttonNext}>
                <MuiThemeProvider theme={Theme}>
                    <Button
                        onClick={() => {
                        }}>Submit</Button>
                </MuiThemeProvider>
            </div>
        </div >

    );
}








