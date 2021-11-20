import { Grid, useMediaQuery } from "@material-ui/core";
import React from "react";
import GridCheckbox from "./gridCheckbox";
import Banner from "../Images/questionbanner.png"

import Breadcrumb from "../../../utils/Breadcrumb/breadcrumb";
import Container from "../../../utils/Container/container"
import CustomSection from "../../../utils/Custom Section/section";


export default function TalkWithStylishQuestion() {
    const tabView = useMediaQuery("(max-width:835px)");
    const mobileView = useMediaQuery("(max-width:550px)");
    const tabViewPro = useMediaQuery("(max-width:1023px)");
    return (
        <Container bottomDivider footerOnAllView>
            {
                !mobileView && <img src={Banner} width="100%" height="544px" alt="image" />

            }

            <CustomSection style={{ marginTop: "24px" }}>
                <Breadcrumb
                    path="Home /"
                    activePath="Measurement and Simulation"
                />
            </CustomSection>
            <GridCheckbox />
        </Container>
        // <Grid>
        //     <Header />
        //     {
        //         !tabViewPro ?
        //             <Grid style={{ marginTop: "20px" }}>
        //                 <Grid>
        //                     <img src={Banner} width="100%" height="544px" alt="image" />
        //                 </Grid>
        //             </Grid>
        //             :
        //             <Grid>
        //                 <div>
        //                     <div style={{ height: mobileView ? "183px" : "544px", background: "#6A5B40", width: "100%", position: "absolute" }}></div>
        //                     <Container>
        //                         <img src={Banner} width="100%" height={mobileView ? "181px" : "610"} style={{ position: "relative", top: "31px" }} />
        //                     </Container>
        //                 </div>
        //             </Grid>
        //     }
        //     <Container>
        //         <Grid>
        //             <Grid style={{marginTop:mobileView?"20px":tabView?"30px":0}}>
        //                 <Breadcrumb
        //                     path='Home / '
        //                     activePath='Measurment and Simulation'
        //                 />
        //             </Grid>
        //             <Grid>
        //                 <GridCheckbox />
        //             </Grid>
        //         </Grid>
        //     </Container >

        //     <Grid style={{ marginTop: "60px" }}>
        //         <Footer />
        //     </Grid>
        // </Grid >
    );
}