import React from "react"
import { Box, Grid, Button,Container, MuiThemeProvider, createMuiTheme, useMediaQuery } from "@material-ui/core";
import phone from "../../../Images/collabrate/phone.svg"
import ellipse from "../../../Images/collabrate/Ellipse 6.png"
import styles from "./collabrateLogin.module.scss"
import Header from "../../../utils/Header/header";
import Footer from "../../../utils/Footer/footer";
import Breadcrumb from "../../../utils/Breadcrumb/breadcrumb";


export default function CollabrateLogin() {
    const tabViewPro = useMediaQuery("(max-width:1023px)");
    const tabView = useMediaQuery("(max-width:835px)");
    const mobileView = useMediaQuery("(max-width:550px)");
    const mobileViewSmall = useMediaQuery("(max-width:320px)");


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

            <Grid>
                <Header />
            </Grid>

            <Grid>
                {
                    !tabViewPro ?

                        <Box display="flex" justifyContent="center" style={{ marginTop: "133px",marginBottom:"100px" }}>
                            <Box display="flex" justifyContent="center" alignItems="center" >
                                <Box style={{ position: "relative" }}>
                                    <img src={ellipse} width="100%" alt="eclipse" />
                                </Box>
                                <Box style={{ position: "absolute" }}>
                                    <img src={phone} width="100%" alt="phone" />
                                </Box>
                            </Box>
                            <Box className={styles.text}>
                                <p className={styles.heading}>Collabrate with U2</p>
                                <MuiThemeProvider theme={Theme}>
                                    <Box style={{ marginTop: "27px" }}>
                                        <Button variant="contained">Continue as a Brand</Button>
                                    </Box>
                                    <Box style={{ marginTop: "25px" }}>
                                        <Button variant="contained">Continue as a Fashion Designer</Button>
                                    </Box>
                                    <Box style={{ marginTop: "25px" }}>
                                        <Button variant="contained">Continue as an Influencer</Button>
                                    </Box>
                                </MuiThemeProvider>
                            </Box>
                        </Box>

                        : mobileView ?
                            <Container>

                                <Grid>
                                    <Breadcrumb
                                        path='Home / '
                                        activePath='Collabrate'
                                    />
                                </Grid>

                                <Box className={styles.textGroupMobile}>
                                    <p className={styles.headingMobile}>Collabrate with U2</p>
                                    <MuiThemeProvider theme={Theme}>
                                        <Box style={{ marginTop: "24px" }}>
                                            <Button variant="contained">Signup as a Fashion Designer</Button>
                                        </Box>
                                        <Box style={{ marginTop: "19px" }}>
                                            <Button variant="contained">Signup as a Vendor</Button>
                                        </Box>
                                        <Box style={{ marginTop: "19px" }}>
                                            <Button variant="contained">Signup as an Influencer</Button>
                                        </Box>
                                    </MuiThemeProvider>
                                </Box>

                                <Grid style={{ marginTop: "64px" }}>
                                    <Footer />
                                </Grid>

                            </Container>
                            :
                            <Container>

                                <Grid>
                                    <Breadcrumb
                                        path='Home / '
                                        activePath='Collabrate'
                                    />
                                </Grid>

                                <Box className={styles.textGroupTab}>
                                    <Box style={{ marginBottom: "34px" }}>
                                        <img src={phone} alt="phone" />
                                    </Box>
                                    <Box className={styles.textTab}>
                                        <p className={styles.headingTab}>Collabrate with U2</p>
                                        <MuiThemeProvider theme={Theme}>
                                            <Box style={{ marginTop: "27px" }}>
                                                <Button variant="contained">Signup as a Fashion Designer</Button>
                                            </Box>
                                            <Box style={{ marginTop: "25px" }}>
                                                <Button variant="contained">Signup as a Vendor</Button>
                                            </Box>
                                            <Box style={{ marginTop: "25px" }}>
                                                <Button variant="contained">Signup as an Influencer</Button>
                                            </Box>
                                        </MuiThemeProvider>
                                        <Box style={{ marginTop: "37px" }}>
                                            <a href="#" className={styles.link}>Already have an account? Login</a>
                                        </Box>
                                    </Box>
                                </Box>

                                <Grid style={{ marginTop: "116px" }}>
                                    <Footer />
                                </Grid>

                            </Container>
                }
            </Grid>
        </Grid>
    );
}