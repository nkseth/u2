import React, { useState } from "react"
import { Grid, Container, useMediaQuery } from "@material-ui/core";
import styles from "./collabrateAsVendor.module.scss"
import WhyU2 from "../Components/WhyU2/whyU2";
import DiscoverSucess from "../Components/DiscoverSuccess/discoverSuccess";
import WhatIsThere from "../Components/WhatIsThere/whatIsThere";
import JoinUs from "../Components/JoinUs/joinUs";
import Breadcrumb from "../../../utils/Breadcrumb/breadcrumb";
import Post from "../Components/Post/post";
import Products from "../Components/Products/products";
import Creators from "../Components/Creators/creators";
import Header from "../../../utils/Header/header";
import Footer from "../../../utils/Footer/footer";
import VendorBanner from "../Components/Banner/VendorBanner/banner";




export default function CollabrateAsVendor() {
    const tabView = useMediaQuery("(max-width:835px)");
    const mobileView = useMediaQuery("(max-width:550px)");
    const tabViewPro = useMediaQuery("(max-width:1024px)");
    const [open, setOpen] = useState('post')
    const toggle = (value) => {
        setOpen(value)
        console.log(value)
    }

    return (
        <Grid>
            {
                !tabViewPro ?
                    <Grid>
                        <Grid>
                            <Header />
                        </Grid>

                        <Grid>
                            <VendorBanner />
                        </Grid>

                        <Grid style={{ marginTop: "53px" }}>
                            <p className={styles.heading}>About U2</p>
                            <p className={styles.subHeading}>U2 is going to be a digital ecosystem which connects among vendors and to customers in <br />
                                the fashion and lifestyle segment.</p>
                        </Grid>

                        <Grid style={{ paddingLeft: "5%", paddingRight: "5%" }}>
                            <WhyU2 />
                        </Grid>

                        <Grid className={styles.cardGroup}>
                            <Post toggle={toggle} open={open} />
                            <Products toggle={toggle} open={open} />
                            <Creators toggle={toggle} open={open} />
                        </Grid>


                        <Grid style={{ paddingLeft: "5%", paddingRight: "5%", marginTop: "110px" }}>
                            <DiscoverSucess />
                        </Grid>

                        <Grid className={styles.compo}>
                            <WhatIsThere />
                        </Grid>

                        <Grid style={{ paddingLeft: "5%", paddingRight: "5%", marginTop: "110px" }}>
                            <JoinUs />
                        </Grid>

                        <Grid style={{marginTop:"108px"}}>
                            <Footer/>
                        </Grid>

                    </Grid>

                    :

                    <Grid>

                        <Grid>
                            <VendorBanner />
                        </Grid>

                        <Container>
                            <Grid>
                                <Breadcrumb path="Home /" activePath="Collabrate" />
                            </Grid>

                            <Grid style={{ marginTop: mobileView ? "23px" : "56px" }}>
                                <p className={mobileView ? styles.headingMobile : styles.heading}>About U2</p>
                                <p className={mobileView ? styles.subHeadingMobile : styles.subHeading}>U2 is going to be a digital ecosystem which connects among vendors and to customers in
                                    the fashion and lifestyle segment.</p>
                            </Grid>

                            <Grid style={{ marginTop: mobileView ? "50px" : "70px" }}>
                                <WhyU2 />
                            </Grid>

                            <Grid className={styles.cardGroupTab}>
                                <Post toggle={toggle} open={open} />
                                <Products toggle={toggle} open={open} />
                                <Creators toggle={toggle} open={open} />
                            </Grid>

                            <Grid style={{ marginTop: mobileView ? "60px" : "93px" }}>
                                <DiscoverSucess />
                            </Grid>

                            <Grid style={{ marginTop: mobileView ? "60px" : "100px" }}>
                                <WhatIsThere />
                            </Grid>

                            <Grid style={{ marginTop: mobileView ? "62px" : "96px" }}>
                                <JoinUs />
                            </Grid>
                        </Container>
                    </Grid>
            }
        </Grid>

    );
}