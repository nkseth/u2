import { Grid, useMediaQuery } from "@material-ui/core";
import React from "react";


export default function KnowBetter() {
    const mobileView = useMediaQuery("(max-width:550px)");


    return (
        <Grid>
            {
                !mobileView ?
                    <Grid style={{ marginTop: "130px" ,paddingBottom:"1rem" ,paddingTop:"1rem"}}>
                        <p style={{ fontSize: "54px", fontFamily: "DM Serif Display", display: "flex", color: "#857250", justifyContent: "center" }}>
                            Know yourself better!</p>
                        <p style={{ fontSize: "20px", lineHeight: "33px", textAlign: "center", fontFamily: "DMSans", marginTop: "33px" }}>
                            “ Can talk about how a customer can <br /> get the sense of fashion and could curate
                            the right <br /> outfit everytime”</p>
                    </Grid>
                    :
                    <Grid style={{ marginTop: "24px" }}>
                        <p style={{ fontSize: "20px",lineHeight:"36px", fontFamily: "DM Serif Display", color: "#857250" }}>
                            Know yourself better!</p>
                        <p style={{ fontSize: "16px", lineHeight: "25px", fontFamily: "DMSans", marginTop: "12px" }}>
                            “ Can talk about how a customer can <br /> get the sense of fashion and could curate <br />
                            the right outfit everytime”</p>
                    </Grid>
            }
        </Grid>
    );
}