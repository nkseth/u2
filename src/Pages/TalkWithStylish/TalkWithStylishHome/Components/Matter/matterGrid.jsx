import { Grid, Box, useMediaQuery, Container } from "@material-ui/core";
import React from "react";
// import query from "../../../../Images/image/query.png"
import Accordions from "../Accordion/accordion";
import question from "../../../Images/questionmark.png"

export default function MatterGrid() {
    const mobileView = useMediaQuery("(max-width:550px)");
    const tabViewPro = useMediaQuery("(max-width:850px)");

    return (
        <Grid>
            {
                tabViewPro ?

                    <Container>
                        <Grid>
                            <p style={{
                                fontFamily: "DM Serif Display", fontSize: mobileView ? "20px" : "54px",
                                color: "#6A5B40", marginBottom: "17px", marginTop: mobileView ? "20px" : "65px"
                            }}>
                                Why does it matter?</p>
                            {
                                !mobileView && <img src={question} width="100%" alt="question image" />
                            }

                        </Grid>
                        <Grid>
                            <div style={{ marginTop: "30px", display: "flex", alignItems: "center" }}>
                                <div style={{ width: "12px", height: "12px", backgroundColor: "#6A5B40", borderRadius: "100%" }}></div>
                                <p style={{ marginLeft: "4%", fontFamily: "DM Sans", fontSize: mobileView ? "16px" : "20px", lineHeight: "1px" }}>
                                    Be a concious buyers</p>
                            </div>
                            <div style={{ marginTop: "20px", display: "flex", alignItems: "center" }}>
                                <div style={{ width: "12px", height: "12px", backgroundColor: "#6A5B40", borderRadius: "100%" }}></div>
                                <p style={{ marginLeft: "4%", fontFamily: "DM Sans", fontSize: mobileView ? "16px" : "20px", lineHeight: "1px" }}>
                                    Follow sustainability</p>
                            </div>
                            <div style={{ marginTop: "20px", display: "flex", alignItems: "center" }}>
                                <div style={{ width: "12px", height: "12px", backgroundColor: "#6A5B40", borderRadius: "100%" }}></div>
                                <p style={{ marginLeft: "4%", fontFamily: "DM Sans", fontSize: mobileView ? "16px" : "20px", lineHeight: "1px" }}>
                                    Help grow fashion community etc</p>
                            </div>
                        </Grid>
                    </Container>
                    :
                    <Box display="flex"  >
                        <Box >
                            <img src={question} width="550px" height="409px" alt="question image" />
                        </Box>

                        <Box display="flex" justifyContent="center" flexDirection="column" style={{ marginLeft: "76px" }} >
                            <p style={{
                                fontFamily: "DM Serif Display", fontSize: "54px", color: "#6A5B40",
                            }}>
                                Why does it matter?
                            </p>
                            <Box>
                                <div style={{ marginTop: "30px", display: "flex", alignItems: "center" }}>
                                    <div style={{ width: "12px", height: "12px", backgroundColor: "#6A5B40", borderRadius: "100%" }}></div>
                                    <p style={{ marginLeft: "4%", fontFamily: "DM Sans", fontSize: mobileView ? "16px" : "20px", lineHeight: "1px" }}>
                                        Be a concious buyers</p>
                                </div>
                                <div style={{ marginTop: "20px", display: "flex", alignItems: "center" }}>
                                    <div style={{ width: "12px", height: "12px", backgroundColor: "#6A5B40", borderRadius: "100%" }}></div>
                                    <p style={{ marginLeft: "4%", fontFamily: "DM Sans", fontSize: mobileView ? "16px" : "20px", lineHeight: "1px" }}>
                                        Follow sustainability</p>
                                </div>
                                <div style={{ marginTop: "20px", display: "flex", alignItems: "center" }}>
                                    <div style={{ width: "12px", height: "12px", backgroundColor: "#6A5B40", borderRadius: "100%" }}></div>
                                    <p style={{ marginLeft: "4%", fontFamily: "DM Sans", fontSize: mobileView ? "16px" : "20px", lineHeight: "1px" }}>
                                        grow fashion community etc</p>
                                </div>
                            </Box>

                        </Box>
                    </Box>
            }
        </Grid>

    );
}