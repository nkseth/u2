import { useMediaQuery, Button, createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import React from "react"
import Background from '../../../Images/background.svg'
import styles from './browse.module.scss'

export default function Browse() {
    const mobileView = useMediaQuery("(max-width:550px)");
    const mobileViewSmall = useMediaQuery("(max-width:320px)");

    const button = createMuiTheme({
        overrides: {
            MuiButton: {
                root: {
                    fontSize: "14 !important",
                    fontFamily: "DM Sans !important",
                    fontWeight: "bold !important",
                    backgroundColor: !mobileView ?'white !important':'#6A5B40 !important',
                    color: !mobileView ?'#6A5B40 !important': 'white !important',
                    textTransform: 'unset !important',
                    borderRadius: 5,
                    // border: '1px solid white !important',
                    height: 48,
                    width: mobileViewSmall ? 300 : mobileView ? 343 : 285
                },
            },
        }
    });



    return (

        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <div style={{width:"100%", position:"absolute" }}>
                {
                    !mobileView && <img src={Background} alt="image" width="100%"  />
                }
                
            </div>
            <div>
                <div>
                    <p style={{
                        fontFamily: "DM Serif Display", color: !mobileView ?"white":"#6A5B40", fontSize: mobileView ? "21px" : "54px",
                        display: "flex", justifyContent: "center", lineHeight:mobileView?"27px":"47px", textAlign: "center",position:"relative"
                    }}>
                        You can start browsing our products </p>
                </div>
                <div style={{display:"flex",justifyContent:"center",marginTop:mobileView?"20px":"40px"}}>
                    <MuiThemeProvider theme={button}>
                        <Button >Browse now</Button>
                    </MuiThemeProvider>
                </div>
            </div>
        </div>

    );
}