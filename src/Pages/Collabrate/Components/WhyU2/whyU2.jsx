import React from 'react'
import { Button, Grid, MuiThemeProvider, Box, createMuiTheme, useMediaQuery } from "@material-ui/core";
import ellipse from "../../../../Images/collabrate/Ellipse 6.png";
import iphone from "../../../../Images/collabrate/iPhone.png"
import styles from "./whyU2.module.scss"
import group1 from "../../../../Images/collabrate/groupimg1.png";


export default function WhyU2() {
    const mobileView = useMediaQuery("(max-width:550px)");
    const mobileViewSmall = useMediaQuery("(max-width:320px)");
    const tabView = useMediaQuery("(max-width:850px)");
    const tabViewPro = useMediaQuery("(max-width:1024px)");

    const Theme = createMuiTheme({
        overrides: {
            MuiButton: {
                root: {
                    fontSize: '16px',
                    fontFamily: "DM Sans !important",
                    fontStyle: "normal",
                    color: 'white !important',
                    textTransform: 'unset ',
                    borderRadius: tabView ? '0px' : '10px ',
                    border: '1px solid #857250',
                    height: 48,
                    width: mobileViewSmall ? 290 : mobileView ? 342 : 376
                },
                contained: {
                    backgroundColor: "#857250 !important"
                }
            },
        }
    })




    return (
        <Grid>
            {
                !tabViewPro ?
                    <Box display="flex" justifyContent="center" style={{ marginTop: "133px" }}>

                        <Box display="flex" justifyContent="center" alignItems="center" >
                            <Box style={{ position: "relative" }}>
                                <img src={ellipse} alt="eclipse" />
                            </Box>

                            <Box style={{ position: "absolute" }}>
                                <img src={iphone} width="100%" alt="phone" />
                            </Box>
                        </Box>

                        <Box marginLeft="78px" marginTop="25px">
                            <p className={styles.heading}>Why U2?</p>
                            <p className={styles.subHeading}>People have always come to U2 to shop and discover new Branded and Designer products.</p>

                            <Box display="flex" marginTop="33px">
                                <Box>
                                    <p className={styles.percent}>90%</p>
                                    <p className={styles.subtext}>of shopping enthusiasts turn to U2 for products discovery</p>
                                </Box>

                                <Box marginLeft='52px'>
                                    <p className={styles.percent}>87%</p>
                                    <p className={styles.subtext}>of people say that influencers have inspired them to make a purchase. </p>
                                </Box>
                            </Box>

                        </Box>
                    </Box>

                    :
                    <Grid>

                        <Box display="flex" justifyContent="center">
                            <Grid><img src={group1} width="100%" alt="grp" /></Grid>
                        </Box>

                        <Grid style={{ marginTop: mobileView ? "65px" : "113px" }}>
                            <p className={mobileView ? styles.headingMobile : styles.heading}>Why U2?</p>
                            <p className={mobileView ? styles.subHeadingMobile : styles.subHeading}>People have always come to U2 to shop and discover new Branded and Designer products.</p>
                        </Grid>

                        <Box className={mobileView? styles.percentBoxMobile : styles.percentBox}>
                            <Box marginTop={mobileView?"50px":"0"}>
                                <p className={styles.percentMobile}>90%</p>
                                <p className={styles.subtext}>of shopping enthusiasts turn to U2 for products discovery</p>
                            </Box>

                            <Box marginLeft={mobileView?'0':'52px'} marginTop={mobileView?"22px":"0"}>
                                <p className={styles.percentMobile}>87%</p>
                                <p className={styles.subtext}>of people say that influencers have inspired them to make a purchase. </p>
                            </Box>
                        </Box>

                    </Grid>

            }
        </Grid>
    );
}