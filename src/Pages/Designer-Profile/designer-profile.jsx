import React from 'react';
import { Button, useMediaQuery } from "@material-ui/core";
import Breadcrumb from "../../utils/Breadcrumb/breadcrumb";
import CustomSection from "../../utils/Custom Section/section";
import Designers from '../../OtherPages/Designers/Designers';
import Container from '../../utils/Container/container';

function DesignerProfile(props) {
    const tabViewPro = useMediaQuery("(max-width:835px)");
    const tabView = useMediaQuery("(max-width:768px)");
    const mobileView = useMediaQuery("(max-width:550px)");
    return (
        <div >
        <Container bottomDivider footerOnAllView>
        <CustomSection>
          <Breadcrumb
            path='Home/Explore/'
            activePath='Designers Profile'
          />
        </CustomSection>
        {
          mobileView ?
          <div style={{fontSize: "30px", textAlign:"center",margin:"auto", fontFamily:"DM Serif Display", width:"85%"}}>
                <h1 style={{fontSize:"35px",fontWeight:"400px"}}>Designer Profile</h1>
                <div style={{float:"right"}}>
                  <Button style={{color:"white", background:"#857250" ,marginLeft:300}}>Filter</Button>
                </div>
                
                <Designers></Designers>
            </div>
            :
            
            <div style={{fontSize: "30px", textAlign:"center",margin:"auto", fontFamily:"DM Serif Display", width:"85%"}}>
              <div style={{display:"inline-block"}} > 
                <h1 style={{fontSize:"54px",fontWeight:"400px",textAlign:"center",marginRight:100}}>Designer Profile</h1>
                <Button style={{color:"white", background:"#857250",float:"right",marginLeft:"40%" }}>Filter</Button></div>
 <Designers ></Designers>
               
            </div>

        }
     
       
      </Container></div>
    );
    
}

export default DesignerProfile;