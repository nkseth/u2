import React, { useState } from "react"
import { Checkbox, Grid, FormControlLabel, createMuiTheme, Box, ThemeProvider, withStyles, Button, MuiThemeProvider, useMediaQuery, MobileStepper, } from "@material-ui/core";
import styles from './typeOfCloths.module.scss'
import CustomSection from "../../../../../utils/Custom Section/section";


export default function TypeOfClothes({ change }) {

    const [showInputField, setShowInputField] = useState({
        party: false,

    });
    const tabViewPro = useMediaQuery("(max-width:1023px)");
    const tabView = useMediaQuery("(max-width:835px)");
    const mobileView = useMediaQuery("(max-width:550px)");
    const mobileViewSmall = useMediaQuery("(max-width:320px)");


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
                    fontSize: !mobileView ? '20px !important' : "16px !important",
                    fontFamily: "DM Sans !important",
                    color: 'white !important',
                    textTransform: 'unset !important',
                    borderRadius: '5px !important',
                    background: "#6A5B40",
                    fontWeight: "bold !ImportantDevices",
                    lineHeight: "20px !important",
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

    const [checked, setChecked] = useState({
        party: false,
        others: false,
        casual: false,
        evening:false,
        professional:false,

    })
    console.log(checked)


    const handleCheck = (e, name) => {
        console.log(e.target.value, name)

        setChecked(checked => ({
            [name]: !checked[name],
            // ...checked, [name]: !checked.others,

        })
        )

    }






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
                                activeStep={5}
                            />
                        </ThemeProvider>

                        <div className={styles.heading}>
                            <p>What clothes do you need help with currently? </p>
                        </div>
                    </div>
                    :
                    <div className={styles.stepper}>
                        <ThemeProvider theme={Theme}>
                            <MobileStepper
                                variant="progress"
                                steps={9}
                                position="static"
                                activeStep={5}
                            />
                        </ThemeProvider>

                        <CustomSection class={styles.heading}>
                            <p>What clothes do you need help with currently? </p>
                        </CustomSection>
                    </div>
            }

            <CustomSection class={styles.inputFields} >
                <div >
                    <ThemeProvider theme={Theme}>
                        <FormControlLabel className={styles.inputField}
                            control={<GreenCheckbox checked={checked.casual} onChange={(e) => { handleCheck(e, 'casual') }} />}
                            label="Casual/Everyday" labelPlacement="start"
                        />
                    </ThemeProvider>
                </div>
                <div>
                    <ThemeProvider theme={Theme}>
                        <FormControlLabel className={styles.inputField}
                            control={<GreenCheckbox checked={checked.party} onChange={(e) => { handleCheck(e, "party") }} />}
                            label="Party/Occasion" labelPlacement="start"
                        />
                    </ThemeProvider>
                    {
                        checked.party &&
                        <input
                            type='text'
                            name='name'
                            placeholder='Type of occasion'
                            className={styles.inputField}
                            style={{ height: "48px", marginTop: "24px", fontSize: "14px", padding: "8px", fontFamily: "DM Sans" }}
                        />
                    }
                </div>
                <div>
                    <ThemeProvider theme={Theme}>
                        <FormControlLabel className={styles.inputField}
                            control={<GreenCheckbox checked={checked.evening} onChange={(e) => setChecked('Evening')} />}
                            label="Evening/Day Outfits" labelPlacement="start"
                        />
                    </ThemeProvider>
                </div>
                <div>
                    <ThemeProvider theme={Theme}>
                        <FormControlLabel className={styles.inputField}
                            control={<GreenCheckbox checked={checked.professional} onChange={() => setChecked('Professional')} />}
                            label="Professional Attire" labelPlacement="start"
                        />
                    </ThemeProvider>
                </div>
                <div>
                    <ThemeProvider theme={Theme}>
                        <FormControlLabel className={styles.inputField}
                            control={<GreenCheckbox checked={checked.others} onChange={(e) => { handleCheck(e, "others") }} />}
                            label="Other" labelPlacement="start"
                        />
                    </ThemeProvider>
                    {
                        checked.others &&
                        <input
                            type='text'
                            name='name'
                            placeholder='Please mention'
                            className={styles.inputField}
                            style={{ height: "48px", marginTop: "24px", fontSize: "14px", padding: "8px", fontFamily: "DM Sans" }}
                        />
                    }
                </div>
            </CustomSection>

            <div className={styles.buttonNext}>
                <MuiThemeProvider theme={Theme}>
                    <Button
                        onClick={() => {
                            change(5)
                            console.log(checked)
                        }}>Next</Button>
                </MuiThemeProvider>
            </div>
        </div>

    );
}