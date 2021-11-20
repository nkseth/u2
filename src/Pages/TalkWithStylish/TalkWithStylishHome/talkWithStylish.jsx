import { Grid, useMediaQuery } from "@material-ui/core";
import React from "react";
// import image from "../../../Images/image/stylish.png"
import Breadcrumb from "../../../utils/Breadcrumb/breadcrumb";
import Browse from "./Components/Browse/browse";
import KnowBetter from "./Components/KnowBetter/knowBetter";
import MatterGrid from "./Components/Matter/matterGrid";
import QuestionGrid from "./Components/QuestionGrid/questionGrid";
import TalkToExpertStylist from "./Components/TalkToExpertStylist/talkToExpertStylist";
import Container from "../../../utils/Container/container"
import CustomSection from "../../../utils/Custom Section/section"
import banner from "../Images/talkwithstylish.png"
import styles from "./talkWithStylish.module.scss"


export default function TalkWithStylish() {
    const tabView = useMediaQuery("(max-width:835px)");
    const mobileView = useMediaQuery("(max-width:550px)");
    const tabViewPro = useMediaQuery("(max-width:1023px)");
    return (
        <Container bottomDivider footerOnAllView>
            <div style={{paddingBottom:"8rem"}}>
                <div className={styles.background}></div>
                <div style={{ display: "flex", justifyContent: "center", paddingBottom: !mobileView ? "12rem" : "2rem" }}>
                    <img src={banner} className={styles.banner} />
                </div>
                <CustomSection>
                    <Breadcrumb
                        path="Home /"
                        activePath="Measurement and Simulation"
                    />
                    <div className={styles.heading}>
                        {
                            !mobileView && <h1 >Talk with stylish</h1>
                        }
                        <span> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum hasLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum hasLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum hasLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has</span>
                    </div>

                    <div style={{ marginTop: !tabViewPro ? "80px" : "50px", background: mobileView && "rgba(230, 227, 220, 0.21)", paddingBottom: "10px", paddingTop: "10px" }}>
                        <MatterGrid />
                    </div>
                </CustomSection>
                {
                    !mobileView ? <div style={{ background: "rgba(230, 227, 220, 0.21)" }}>
                        <KnowBetter />
                    </div>
                        :
                        <CustomSection>
                            <KnowBetter />
                        </CustomSection>
                }


                <div style={{ marginTop: "25%" }}>
                    <TalkToExpertStylist />
                </div>
                <CustomSection>
                    <div style={{ marginTop: !mobileView ? "210px" : "80px" }} >
                        <QuestionGrid />
                    </div>
                    <div style={{ marginTop: mobileView ? "130px" : "30%" }}>
                        <Browse />
                    </div>
                </CustomSection>
            </div>
        </Container>
        // <Container bottomDivider footerOnAllView>
        //     {
        //         mobileView ?
        //             <div>
        //                 <div style={{ height: "183px", background: "#6A5B40", width: "100%", position: "absolute" }}></div>
        //                 <div>
        //                     <img src={banner} width="100%" height="181px" style={{ position: "relative", top: "31px" }} />
        //                 </div>
        //             </div>
        //             :
        //             <div>
        //                 <div style={{ height: "544px", background: "#6A5B40", width: "100%", position: "absolute" }}></div>
        //                 <div style={{ display: "flex", justifyContent: "center" }}>
        //                     <img src={banner} width={tabView ? "94%" : "90%"} height="610px" style={{ position: "relative", top: "66px" }} />
        //                 </div>
        //             </div>

        //     }

        //     {
        //         tabViewPro ?
        //             <div>
        //                 <div style={{ position: "relative", top: mobileView ? "15px" : "55px" }}>

        //                     <Breadcrumb
        //                         path='Home / '
        //                         activePath='Measurment and Simulation'
        //                     />

        //                     <div>
        //                         <TextTalk />
        //                     </div>

        //                 </div>


        //                 <div style={{ marginTop: !tabViewPro ? "80px" : "50px" }}>
        //                     <MatterGrid />
        //                 </div>


        //                 <div>

        //                     <div>
        //                         <KnowBetter />
        //                     </div>
        //                 </div>


        //                 <div style={{ marginTop: "25%" }}>
        //                     <TalkToExpertStylist />
        //                 </div>

        //                 <div style={{ position: "relative", top: mobileView ? "36px" : "80px" }} >
        //                     <QuestionGrid />
        //                 </div>

        //                 <div style={{ marginTop: mobileView ? "130px" : "30%" }}>
        //                     <Browse />
        //                 </div>

        //                 <div style={{ marginTop: "75px" }}>
        //                     <Footer />
        //                 </div>
        //             </div>

        //             :
        //             <div>
        //                 <div style={{ paddingLeft: "5%", paddingRight: "5%", position: "relative", top: mobileView ? "45px" : "75px" }}>

        //                     <Breadcrumb
        //                         path='Home / '
        //                         activePath='Measurment and Simulation'
        //                     />

        //                     <div>
        //                         <TextTalk />
        //                     </div>

        //                     <div style={{ marginTop: "80px" }}>
        //                         <MatterGrid />
        //                     </div>

        //                     <div>
        //                         <KnowBetter />
        //                     </div>
        //                 </div>

        //                 <div style={{ marginTop: "15%" }}>
        //                     <TalkToExpertStylist />
        //                 </div>

        //                 <div style={{ paddingLeft: "5%", paddingRight: "5%", position: "relative", top: "200px" }}>
        //                     <QuestionGrid />
        //                 </div>

        //                 <div style={{ marginTop: "30%" }}>
        //                     <Browse/>
        //                 </div>

        //                 <div style={{ marginTop: "80px" }}>
        //                     <Footer />
        //                 </div>
        //             </div>
        //     }
        // </Container>

    );
}