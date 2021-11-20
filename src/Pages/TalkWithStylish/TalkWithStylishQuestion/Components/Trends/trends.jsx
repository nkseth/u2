import React, { useState } from "react"
import { Checkbox, Grid, FormControlLabel, createMuiTheme, Box, ThemeProvider, withStyles, Button, MuiThemeProvider, useMediaQuery, MobileStepper, } from "@material-ui/core";
import CustomSection from "../../../../../utils/Custom Section/section";
import styles from "./trends.module.scss"


export default function Trends({ change }) {


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
                                activeStep={3}
                            />
                        </ThemeProvider>

                        <div className={styles.heading}>
                            <p>Do you keep up with the trends *</p>
                        </div>
                    </div>
                    :
                    <div className={styles.stepper}>

                        <ThemeProvider theme={Theme}>
                            <MobileStepper
                                variant="progress"
                                steps={9}
                                position="static"
                                activeStep={3}
                            />
                        </ThemeProvider>

                        <CustomSection   class={styles.heading}>
                            <p>Do you keep up with the trends *</p>
                        </CustomSection>
                    </div>

            }

            <CustomSection class={styles.inputFields}>
                <div style={{ marginBottom: "24px" }}>
                    <ThemeProvider theme={Theme}>
                        <FormControlLabel className={styles.inputField}
                            control={<GreenCheckbox checked={checked === "Yes"} onChange={() => setChecked("Yes")} />}
                            label="Yes" labelPlacement="start"
                        />
                    </ThemeProvider>
                </div>

                <div style={{ marginBottom: "24px" }}>
                    <ThemeProvider theme={Theme}>
                        <FormControlLabel className={styles.inputField}
                            control={<GreenCheckbox checked={checked === 'Nope'} onChange={() => setChecked('Nope')} />}
                            label="Nope" labelPlacement="start"
                        />
                    </ThemeProvider>
                </div>
                <div style={{ marginBottom: "24px" }}>
                    <ThemeProvider theme={Theme}>
                        <FormControlLabel className={styles.inputField}
                            control={<GreenCheckbox checked={checked === 'May be'} onChange={() => setChecked('May be')} />}
                            label="May be" labelPlacement="start"
                        />
                    </ThemeProvider>
                </div>

            </CustomSection>
            {/* <Grid style={{ display: "flex", alignItems: mobileView ? "unset" : "center", flexDirection: "column" }}>

                <Box style={{ display: mobileView ? "unset" : "flex", marginRight: mobileView ? "11px" : "unset", marginTop: mobileView ? "30px" : "50px" }}>
                    <Box>
                        <ThemeProvider theme={Theme}>
                            <FormControlLabel style={{
                                border: "1px solid #6A5B40", boxSizing: "border-box", boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.24)",
                                borderRadius: "12px", width: !tabViewPro ? "398px" : mobileView ? "unset" : "344px",
                                display: "flex", justifyContent: "space-between", backgroundColor: "#F4D4BB"
                            }}
                                control={<GreenCheckbox checked={checked === "Procelain"} onChange={() => setChecked("Procelain")} />}
                                label="Procelain" labelPlacement="start"
                            />
                        </ThemeProvider>
                    </Box>

                    <Box style={{ marginLeft: mobileView ? "0px" : tabView ? "18px" : "22px", marginTop: mobileView ? "20px" : "0" }}>
                        <ThemeProvider theme={Theme}>
                            <FormControlLabel style={{
                                border: "1px solid #6A5B40", boxSizing: "border-box", boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.24)",
                                borderRadius: "12px", width: !tabViewPro ? "398px" : mobileView ? "unset" : "344px",
                                display: "flex", justifyContent: "space-between", backgroundColor: "#F2C490"
                            }}
                                control={<GreenCheckbox checked={checked === 'Warm ivory'} onChange={() => setChecked('Warm ivory')} />}
                                label="Warm ivory" labelPlacement="start"
                            />
                        </ThemeProvider>
                    </Box>
                </Box>
            </Grid>


            <Grid style={{ display: mobileView ? "unset" : "flex", justifyContent: mobileView ? 0 : "center" }}>
                <Box style={{ marginTop: "20px", display: mobileView ? "block" : "flex", marginRight: mobileView ? "11px" : "unset" }}>
                    <Box>
                        <ThemeProvider theme={Theme}>
                            <FormControlLabel style={{
                                border: "1px solid #6A5B40", boxSizing: "border-box", boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.24)",
                                borderRadius: "12px", width: !tabViewPro ? "398px" : mobileView ? "unset" : "344px",
                                display: "flex", justifyContent: "space-between", backgroundColor: "#DBBA91"
                            }}
                                control={<GreenCheckbox checked={checked === 'Honey'} onChange={() => setChecked('Honey')} />}
                                label="Honey" labelPlacement="start"
                            />
                        </ThemeProvider>
                    </Box>

                    <Box style={{ marginTop: mobileView ? "20px" : "0", marginLeft: mobileView ? "0px" : tabView ? "18px" : "22px" }}>
                        <ThemeProvider theme={Theme}>
                            <FormControlLabel style={{
                                border: "1px solid #6A5B40", boxSizing: "border-box", boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.24)",
                                borderRadius: "12px", width: !tabViewPro ? "398px" : mobileView ? "unset" : "344px",
                                display: "flex", justifyContent: "space-between", backgroundColor: "#D19556"
                            }}
                                control={<GreenCheckbox checked={checked === 'Sand'} onChange={() => setChecked('Sand')} />}
                                label="Sand" labelPlacement="start"
                            />
                        </ThemeProvider>
                    </Box>
                </Box>
            </Grid> */}

            <Grid style={{ display: "flex", justifyContent: "center", marginTop: mobileView ? "50px" : "79px", marginBottom: "256px" }}>
                <MuiThemeProvider theme={Theme}>
                    <Button
                        onClick={() => {
                            change(3)
                            console.log(checked)
                        }}>Next</Button>
                </MuiThemeProvider>
            </Grid>
        </Grid>

    );
}