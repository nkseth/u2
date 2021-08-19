import React from 'react';
import Container from '../../utils/Container/container';
import { Grid, Typography, useMediaQuery } from "@material-ui/core";
import Breadcrumb from "../../utils/Breadcrumb/breadcrumb";
import CustomSection from "../../utils/Custom Section/section";
import Image from './../../Images/image/Filter-bar.png';
import Video from '../../Images/image/Video.png'
import MoreVideos from './Components/celebrity-style/celebrityStyle'

export default function FashionTips(props) {
    const tabViewPro = useMediaQuery("(max-width:835px)");
    const tabView = useMediaQuery("(max-width:768px)");
    const mobileView = useMediaQuery("(max-width:550px)");
    return (
        <Container bottomDivider footerOnAllView>
        <CustomSection>
          <Breadcrumb
            path='Home/Explore/'
            activePath='Daily Fashion Tips'
          />
        </CustomSection>
    
       {
          !tabViewPro ? 
          <div style={{ marginLeft:"9%", fontSize:"30px", marginTop:30, fontFamily:"DM Serif Display"}}>
                <h1 style={{fontSize:"54px"}}>Daily Fashion Tips</h1>
                <div style={{margin:"40px auto"}}>
                <img src={Image} width="90%"></img></div>
            </div>
            :
            <div style={{ marginLeft:"10%", marginTop:30, fontFamily:"DM Serif Display"}}>
            <h1 style={{fontSize:"35px"}}>Daily Fashion Tips</h1>
            <div style={{margin:"20px auto"}}>
                <img src={Image} width="95%"></img></div>
        </div>
      }
       {
          !tabViewPro ? 
          <div style={{ marginLeft:"10%", fontSize:"20px", marginTop:30, fontFamily:"DM Serif Display"}}>
                <h1 style={{fontSize:"34px",fontWeight:"400px"}}>10 Fashion Tips by top Designers</h1>
              
                <p style={{fontFamily:"DM Sans", marginTop:20,fontSize:"16px",color: "#6C6C6C"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit at adipisci tempore rem doloribus nulla sequi nesciunt,
                   dolorum, nemo beatae exercitationem eligendi maiores animi officia quo amet aspernatur suscipit architecto!</p>
            </div>
            :
            <div style={{ marginLeft:"10%", marginTop:30, fontFamily:"DM Serif Display"}}>
            <h1 style={{fontSize:"25px"}}>10 Fashion Tips by top Designers</h1>
            <p style={{fontFamily:"DM Sans", marginTop:20,color: "#6C6C6C",fontSize:"16px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit at adipisci tempore rem doloribus nulla sequi nesciunt,
                   dolorum, nemo beatae exercitationem eligendi maiores animi officia quo amet aspernatur suscipit architecto!</p>
        </div>
      }
       <div style={{ marginLeft:"10%",  marginTop:30, fontFamily:"DM Sans"}}>
                <h4 style={{fontSize:"14px"}}>Subtitle</h4>
                <p style={{fontSize:"16px",color: "#6C6C6C"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit at adipisci tempore rem doloribus nulla sequi nesciunt</p>
                <img src={Image} width="90%"></img>
                <h4 style={{marginTop:40, marginBottom:30,fontSize:"14px"}}>Subtitle</h4>
                <p style={{ marginBottom:70 ,fontSize:"16px",color: "#6C6C6C"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum repellat temporibus fugit deleniti tempora necessitatibus 
                  ex consectetur exercitationem soluta ducimus, iure vero? Nostrum rem vel voluptas iure ipsum earum totam.</p>
                <img src={Video} width="90%"></img>      
            </div>
           
       {
          !tabViewPro ? 
          <div style={{ marginLeft:"10%", fontSize:"15px", marginTop:30, fontFamily:"DM Serif Display"}}>
                <h1 style={{fontSize:"34px"}}>Other Popular Videos</h1>
              
                <p style={{fontFamily:"DM Sans", marginTop:20,color: "#6C6C6C",fontSize:"16px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit at adipisci tempore rem doloribus nulla sequi nesciunt,</p>
            </div>
            :
            <div style={{ marginLeft:"10%", marginTop:30, fontFamily:"DM Serif Display"}}>
            <h1 style={{fontSize:"25px"}}>Other Popular Videos</h1>
            <p style={{fontFamily:"DM Sans", marginTop:20,fontSize:"16px",color: "#6C6C6C"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit at adipisci tempore rem doloribus nulla sequi nesciunt,</p>
        </div>
      }
      <MoreVideos></MoreVideos>
            
        </Container>
    );
}

