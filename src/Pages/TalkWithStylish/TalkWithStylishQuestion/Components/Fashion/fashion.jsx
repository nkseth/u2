import { Checkbox, Grid, Box, FormControlLabel, FormControl, createMuiTheme, ThemeProvider, withStyles, Button, MuiThemeProvider, useMediaQuery, MobileStepper, makeStyles, InputLabel, Select, NativeSelect, } from "@material-ui/core";
import { ImportantDevices } from "@material-ui/icons";
import React, { useState } from "react"
import CustomSection from "../../../../../utils/Custom Section/section";
import InputField from "../../../../Payment/Components/Input-Field/inputField";
import styles from './fashion.module.scss'



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
                fontSize: mobileView ? 18 : 20,
                color: '#191919',
                marginRight: "12px",
                marginLeft: "10px"
            }
        },
        overrides: {
            MuiButton: {
                root: {
                    fontSize: '20px !important',
                    fontFamily: "DM Sans !important",
                    color: 'white !important',
                    textTransform: 'unset !important',
                    borderRadius: '5px !important',
                    background: "#6A5B40",
                    fontWeight: "bold !ImportantDevices",
                    height: 48,
                    width: mobileView ? 300 : 343
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
        <Grid>
            {
                !mobileView ?
                    <div className={styles.stepper}>

                        <ThemeProvider theme={Theme}>
                            <MobileStepper
                                variant="progress"
                                steps={9}
                                position="static"
                                activeStep={1}
                            />
                        </ThemeProvider>

                        <div className={styles.heading}>
                            <p>Fill the below form</p>
                        </div>
                    </div>
                    :
                    <div className={styles.stepper} >

                        <ThemeProvider theme={Theme}>
                            <MobileStepper
                                variant="progress"
                                steps={9}
                                position="static"
                                activeStep={1}
                            />
                        </ThemeProvider>

                        <CustomSection class={styles.heading}>
                            <p>Fill the below form</p>
                        </CustomSection>
                    </div>
            }
            <CustomSection style={{ display: 'flex', flexDirection: "column", alignItems: "center" }}>
                <input
                    type='text'
                    name='name'
                    placeholder='What did your parents name you?*'
                    className={styles.inputField}
                />
                <input
                    type='text'
                    name='name'
                    placeholder='Your birthdate? (We’ll wish you and gift you 😍)*'
                    className={styles.inputField}
                />
                <FormControl>
                    <NativeSelect style={{ fontSize: "14px", fontFamily: "DM Sans", color: 'black' }}
                        disableUnderline
                        className={styles.inputField}>
                        <option
                            disabled
                            selected
                            aria-label='None'
                            value=''
                            style={{ color: 'black' }}
                        >
                            Your prescribed gender?*
                        </option>
                        <option >Male</option>
                        <option >Female</option>


                    </NativeSelect>
                </FormControl>
                <input
                    type='text'
                    name='name'
                    placeholder='Mobile Number 📱*'
                    className={styles.inputField}
                />
                <input
                    type='text'
                    name='name'
                    placeholder='Email ID*'
                    className={styles.inputField}
                />

            </CustomSection>

            <div className={styles.buttonNext} >
                <MuiThemeProvider theme={Theme}>
                    <Button
                        onClick={() => {
                            change(1)

                        }}>Next</Button>
                </MuiThemeProvider>
            </div>
        </Grid >

    );
}








