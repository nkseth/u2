import { useMediaQuery, Button, createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import React from "react";
import Background from "../../../Images/background.svg"

export default function TalkToExpertStylist() {
    const mobileView = useMediaQuery("(max-width:550px)");
    const mobileViewSmall=useMediaQuery("(max-width:320px)")

    const button = createMuiTheme({
        overrides: {
            MuiButton: {
                root: {
                    fontSize: "16px !important",
                    fontFamily: "DM Sans !important",
                    fontWeight:"bold !important",
                    backgroundColor: !mobileView ?'white !important':"#6A5B40 !important",
                    color: !mobileView ?'#6A5B40 !important':'white !important',
                    textTransform: 'unset !important',
                    borderRadius: 5,
                    // border: '1px solid white !important',
                    height: 48,
                    width:!mobileView ?285:343 ,
                },
            },
        }
    });

    return (
        
        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <div style={{position:"absolute",width:"100%"}}>
                { !mobileView && <img src={Background }/>}
               
            </div>
            <div>
                <p style={{ fontFamily: "DM Serif Display", color: !mobileView ?"#FFFFFF":"#6A5B40", fontSize: mobileView ? "20px" : "54px", 
                display: "flex", justifyContent: "center", lineHeight: "36px",position:"relative" }}>
                    Talk to the expert stylist now!</p>
                <div style={{display:"flex",justifyContent:"center",marginTop:mobileView?"17px":"52px"}}>
                    <MuiThemeProvider theme={button}>
                        <Button >Take my survey</Button>
                    </MuiThemeProvider>
                </div>
                <div style={{ marginTop: mobileView ? "20px" : "39px",position:"relative",display:"flex",justifyContent:"center"}}>
                    <p style={{
                        background: "rgba(230, 227, 220, 0.68)", border: "1px solid #6A5B40", boxSizing: "border-box",textAlign:"center",
                        borderRadius: "5px", padding: mobileView ? "7px 0px" : "18px 28px 7px ", fontFamily: "DMSans", fontSize: "20px",
                        width:mobileViewSmall?"300px":mobileView?"343px":"588px"
                    }}>
                        *After this survey you’ll be soon contacted by one of our <br />
                        expert stylist.
                        <p style={{ fontFamily: "DM Sans", fontWeight: "500", fontSize: "20px", lineHeight: "40px" }}>
                            Happy Shopping!!</p>
                    </p>
                </div>
            </div>

        </div>
    );
}