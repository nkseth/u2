import React from "react"
import { Button, MuiThemeProvider, useMediaQuery, createMuiTheme } from "@material-ui/core";
import banner from "../../../../../Images/collabrate/banner-img.png"
import styles from "./banner.module.scss"

export default function InfluencerBanner() {
    const mobileView = useMediaQuery("(max-width:550px)");
    const mobileViewSmall = useMediaQuery("(max-width:320px)");
    const tabViewPro = useMediaQuery("(max-width:1024px)");


    return (
        <div>
            {
                !tabViewPro ?
                    <div style={{ position: "relative" }}>

                        <img src={banner} width="100%" alt="banner" />

                        <div className={styles.textGroup}></div>

                        <div className={styles.subtext}>
                            <p className={styles.heading}>Collabrate with us</p>
                            <p className={styles.subHeading}>New to U2? See how to setup a business account and use U2 <br /> to grow your business by collaborating.</p>

                            <Button className={styles.button}>Register as a Influencer</Button>

                        </div>

                    </div>
                    :
                    <div style={{ position: "relative" }}>

                        <img src={banner} width="100%" height="458px" alt="banner" />

                        <div className={mobileView ? styles.textGroupMobile : styles.textGroupTab}></div>

                        <div className={mobileView ? styles.subtextMobile : styles.subtextTab}>
                            <p className={mobileView? styles.headingMobile : styles.heading}>Collabrate with us</p>
                            <p className={styles.subHeading}>New to U2? See how to setup a business account and use U2 to grow your business by collaborating.</p>
                            <Button className={mobileView? styles.buttonMobile : styles.buttonTab}>Register as a Fashion Designer</Button>
                        </div>

                    </div>
            }
        </div>
    );
}