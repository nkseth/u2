import React from 'react';
import { useMediaQuery } from "@material-ui/core";
import Breadcrumb from "../../utils/Breadcrumb/breadcrumb";
import CustomSection from "../../utils/Custom Section/section";
import Container from '../../utils/Container/container';
import Image from '../../Images/image/Designer.png';
import Nav from './Components/nav';
import Card from './Components/Card'

function Designer() {
 
    const tabViewPro = useMediaQuery("(max-width:835px)");
    const tabView = useMediaQuery("(max-width:768px)");
    const mobileView = useMediaQuery("(max-width:550px)");
    const img1 =
    "https://www.figma.com/file/3feKLdzH2SEin23kTS0pjx/image/7a7d5a32e573cc2df649246fe05faa140574b308?fuid=763802552325253092";
    return (
        <div style={{width:"100%", margin:"0 auto"}}>
        <Container bottomDivider footerOnAllView>
           
             {!tabViewPro && (
        <CustomSection>
          <Breadcrumb
            path='Home/Explore/'
            activePath='Designers Profile'
          />
        </CustomSection>
      )}
       <Card backgroundImg={img1} header={"Designer Name"}></Card>
       {/* {
          !tabViewPro ? 
          <div style={{ marginLeft:"3%", fontSize:"30px", marginTop:30, fontFamily:"DM Serif Display"}}>
               
         
                <img src={Image} width="100%"></img>
            </div>
            :
            <div style={{ marginLeft:"10%", marginTop:30, fontFamily:"DM Serif Display"}}>
           
            <div style={{margin:"20px auto"}}>
                <img src={Image} width="95%"></img></div>
        </div>
      } */}
      <div style={{marginTop:"40px"}}>
      <Nav></Nav></div>
     
       </Container></div>
    );
    
}

export default Designer;