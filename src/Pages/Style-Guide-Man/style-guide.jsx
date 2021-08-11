import React from 'react';
import Container from '../../utils/Container/container';
import { Grid, Typography, useMediaQuery } from "@material-ui/core";
import Breadcrumb from "../../utils/Breadcrumb/breadcrumb";
import Divider from './../../utils/Custom Divider/divider'
import CustomSection from "../../utils/Custom Section/section";
import Image from '../../Images/image/Man.png'
function StyleGuide(props) {
    const tabViewPro = useMediaQuery("(max-width:835px)");
    const tabView = useMediaQuery("(max-width:768px)");
    const mobileView = useMediaQuery("(max-width:550px)");
    return (
        <Container bottomDivider footerOnAllView>
             {!tabViewPro && (
        <CustomSection>
          <Breadcrumb
            path='Home/Explore/'
            activePath='Style Guide Man'
          />
        </CustomSection>
      )}
       {/* <div style={{margin:"auto", width:"85%", }}>
        <Divider></Divider>
      </div> */}
      <div style={{textAlign:"center", marginTop:40}}>
 <img src={Image} width="85%"></img></div>
       {
          !tabViewPro ? 
          <div style={{ marginLeft:"10%", fontSize:"24px", marginTop:30, fontFamily:"DM Serif Display"}}>
                <h1>Title of style guide</h1>
                <h5 style={{fontFamily:"DM Sans",marginTop:10}}>Description</h5>
            </div>
            :
            <div style={{ marginLeft:"10%", marginTop:30, fontFamily:"DM Serif Display"}}>
            <h1>Title of style guide</h1>
            <h5 style={{fontFamily:"DM Sans", marginTop:10}}>Description</h5>
        </div>
      }
       {
          !tabViewPro ? 
          <div style={{ marginLeft:"10%", fontSize:"20px", marginTop:30, marginBottom:100, fontFamily:"DM Sans", color: "#6C6C6C"}}>
              
                <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit at adipisci tempore rem doloribus nulla sequi nesciunt,
                   dolorum, nemo beatae exercitationem eligendi maiores animi officia quo amet aspernatur suscipit architecto! Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit at adipisci tempore rem doloribus nulla sequi nesciunt,
                   dolorum, nemo beatae exercitationem eligendi maiores animi officia quo amet aspernatur suscipit architecto!</p>
            </div>
            :
            <div style={{ marginLeft:"10%", marginTop:30, marginBottom:100, fontFamily:"DM Sans", color: "#6C6C6C"}}>
            
            <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit at adipisci tempore rem doloribus nulla sequi nesciunt,
                   dolorum, nemo beatae exercitationem eligendi maiores animi officia quo amet aspernatur suscipit architecto! Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit at adipisci tempore rem doloribus nulla sequi nesciunt,
                   dolorum, nemo beatae exercitationem eligendi maiores animi officia quo amet aspernatur suscipit architecto!</p>
        </div>
      }
      
        </Container>
    );
}

export default StyleGuide;