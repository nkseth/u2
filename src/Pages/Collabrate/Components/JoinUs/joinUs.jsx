import React from "react"
import { Box, ThemeProvider, Button, Grid, createMuiTheme, useMediaQuery } from "@material-ui/core";
import check from "../../../../Images/collabrate/check.png"
import ellipse from "../../../../Images/collabrate/Ellipse 6.png"
import laptop from "../../../../Images/collabrate/laptop.png"
import styles from "./joinUs.module.scss"
import group3 from "../../../../Images/collabrate/groupimg3.png"


export default function JoinUs() {
    const mobileView = useMediaQuery("(max-width:550px)");
    const tabViewPro = useMediaQuery("(max-width:1024px)");


    return (
        < div >
            {
                !tabViewPro ?
                    <Box style={{margin:'107px 0'}} display="flex" justifyContent="center" >

                        <Box display="flex" justifyContent="center" alignItems="center">
                            <Box style={{ position: "relative" }}>
                                <img src={ellipse} alt="eclipse" />
                            </Box>
                            <Box style={{ position: "absolute" }}>
                                <img src={laptop} alt="phone" />
                            </Box>
                        </Box>

                        <Box marginLeft="78px">

                            <p className={styles.heading}>Start your account easily and join us quickly</p>
                            <p className={styles.subHeading}>Signup to your account to provide more information  to people about your products,
                                services and business.</p>

                            <div style={{ marginTop: "28px" }}>
                                <p className={styles.text}>Step 1: Create your account on U2</p>

                                <p className={styles.text}>Step 2: Let us know who you are</p>

                                <p className={styles.text}>Step 3: Submit your  Business details </p>

                                <p className={styles.text}>Step 4: Post your content and products</p>

                                <p className={styles.text}>Step 5: Promote your Business and shine</p>
                            </div>

                            <div style={{ marginTop: "38px" }}>
                                    <Button className={styles.button}>Register as a Fashion designer</Button>
                            </div>
                        </Box>

                    </Box>

                    :
                    <Grid style={{margin:mobileView?'50px 0' : '94px 0'}}>
                        <Grid>
                            <p className={mobileView? styles.headingMobile : styles.heading}>Start your account easily and join us quickly</p>
                        </Grid>

                        <Box display="flex" justifyContent="center" marginTop={mobileView ? "39px" : "90px"}>
                            <Grid><img src={group3} width="100%" alt="grp" /></Grid>
                        </Box>

                        <Grid>
                            <p className={styles.subHeading}>Signup to your account to provide more information  to people about your products,
                                services and business.</p>
                        </Grid>

                        <Grid>
                            <p className={mobileView?styles.textMobile : styles.text}>Step 1: Create your account on U2</p>

                            <p className={mobileView?styles.textMobile : styles.text}>Step 2: Let us know who you are</p>

                            <p className={mobileView?styles.textMobile : styles.text}>Step 3: Submit your  Business details </p>

                            <p className={mobileView?styles.textMobile : styles.text}>Step 4: Post your content and products</p>

                            <p className={mobileView?styles.textMobile : styles.text}>Step 5: Promote your Business and shine</p>
                        </Grid>

                        <Grid style={{ marginTop:mobileView?"30px" : "38px" }}>
                                <Button className={styles.buttonTab}>Create Account</Button>
                        </Grid>
                    </Grid>
            }
        </div >
    );
}