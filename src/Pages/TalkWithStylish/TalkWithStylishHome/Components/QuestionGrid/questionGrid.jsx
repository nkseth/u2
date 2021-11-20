import { Box, Grid, Paper, Container, useMediaQuery } from "@material-ui/core";
import React from "react";
import FAQ from "../../../Images/faq.png"
import Accordions from "../Accordion/accordion";


export default function QuestionGrid() {
    const mobileView = useMediaQuery("(max-width:550px)");
    const tabViewPro = useMediaQuery("(max-width:1024px)");
    const tabView = useMediaQuery("(max-width:835px)");

    return (

        <Grid>
            {
                !tabViewPro ?
                    <Box display="flex">
                        <Box >
                            <p style={{
                                fontFamily: "DM Serif Display", fontSize: "54px", color: "#6A5B40",
                            }}>
                                Frequently asked questions
                            </p>
                            <Box style={{ marginRight: "80px" }}>
                                <Accordions />
                            </Box>

                        </Box>

                        <Box>
                            <p style={{
                                fontFamily: "DM Serif Display", fontSize: mobileView ? "20px" : "54px", color: "#6A5B40",
                                display: tabViewPro ? "unset" : "none"
                            }}> Frequently asked questions</p>
                            {
                                !mobileView && <img src={FAQ} width="505px" height="409px" alt="question image" />
                            }

                        </Box>

                    </Box>
                    :
                    <Grid style={{ marginTop: mobileView ? "36px" : "70" }}>
                        <p style={{
                            fontFamily: "DM Serif Display", fontSize: mobileView ? "25px" : "54px", color: "#6A5B40",
                            letterSpacing: mobileView ? "-1px" : 0
                        }}>
                            Frequently asked questions
                        </p>
                        {
                            !mobileView && <img style={{ marginTop: "20px" }} src={FAQ} width="100%" alt="question image" />
                        }
                        
                        <Grid style={{ marginTop: "23px" }}>
                            <Accordions />
                        </Grid>
                    </Grid>
            }
        </Grid>

    );
}