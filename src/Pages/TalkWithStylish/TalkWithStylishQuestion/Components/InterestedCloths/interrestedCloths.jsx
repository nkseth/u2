import React, { useState } from "react"
import { Checkbox, Grid, FormControlLabel, createMuiTheme, Box, ThemeProvider, withStyles, Button, MuiThemeProvider, useMediaQuery, MobileStepper, } from "@material-ui/core";
import CustomSection from "../../../../../utils/Custom Section/section";
import styles from "./interestedCloths.module.scss"


export default function TypeOfQuestionDiscuss({ change }) {


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
                                activeStep={4}
                            />
                        </ThemeProvider>

                        <div className={styles.heading}>
                            <p>The clothes you wear are, or interested to wear are:</p>
                        </div>
                    </div>
                    :
                    <div className={styles.stepper}>

                        <ThemeProvider theme={Theme}>
                            <MobileStepper
                                variant="progress"
                                steps={9}
                                position="static"
                                activeStep={4}
                            />
                        </ThemeProvider>

                        <CustomSection class={styles.heading}>
                            <p>The clothes you wear are, or interested to wear are:</p>
                        </CustomSection>
                    </div>

            }

            <CustomSection class={styles.inputFields}>
                <div>
                    <ThemeProvider theme={Theme}>
                        <FormControlLabel className={styles.inputField}
                            control={<GreenCheckbox checked={checked === "Indian"} onChange={() => setChecked("Indian")} />}
                            label="Mostly Indian" labelPlacement="start"
                        />
                    </ThemeProvider>
                </div>

                <div>
                    <ThemeProvider theme={Theme}>
                        <FormControlLabel className={styles.inputField}
                            control={<GreenCheckbox checked={checked === 'Mix'} onChange={() => setChecked('Mix')} />}
                            label="A mix of Western and Indian clothes" labelPlacement="start"
                        />
                    </ThemeProvider>
                </div>
                <div>
                    <ThemeProvider theme={Theme}>
                        <FormControlLabel className={styles.inputField}
                            control={<GreenCheckbox checked={checked === 'Western'} onChange={() => setChecked('Western')} />}
                            label="Mostly Western" labelPlacement="start"
                        />
                    </ThemeProvider>
                </div>

            </CustomSection>

            <div className={styles.buttonNext}>
                <MuiThemeProvider theme={Theme}>
                    <Button
                        onClick={() => {
                            change(4)
                            console.log(checked)
                        }}>Next</Button>
                </MuiThemeProvider>
            </div>
        </div>

    );
}