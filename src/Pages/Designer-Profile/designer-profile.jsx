import React from 'react';
import { useMediaQuery } from "@material-ui/core";
import Breadcrumb from "../../utils/Breadcrumb/breadcrumb";
import CustomSection from "../../utils/Custom Section/section";
import Designers from '../../OtherPages/Designers/Designers';
import Container from '../../utils/Container/container';

function DesignerProfile(props) {
    const tabViewPro = useMediaQuery("(max-width:835px)");
    const tabView = useMediaQuery("(max-width:768px)");
    const mobileView = useMediaQuery("(max-width:550px)");
    return (
        <div style={{width:"95%", margin:"0 auto"}}>
        <Container bottomDivider footerOnAllView>
           
             {!tabViewPro && (
        <CustomSection>
          <Breadcrumb
            path='Home/Explore/'
            activePath='Designers Profile'
          />
        </CustomSection>
      )}
       <div style={{fontSize: "30px", textAlign:"center", fontFamily:"DM Serif Display"}}>
                <h1 style={{fontSize:"54px",fontWeight:"400px"}}>Designer Profile</h1>
            </div>
       <Designers></Designers></Container></div>
    );
    
}

export default DesignerProfile;