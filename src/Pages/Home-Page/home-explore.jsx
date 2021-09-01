import React from 'react';
import { Typography, useMediaQuery, Grid } from "@material-ui/core";
import Breadcrumb from "../../utils/Breadcrumb/breadcrumb";
import CustomSection from "../../utils/Custom Section/section";
import Container from '../../utils/Container/container';
import Image from './../../Images/image/Filter-bar.png';
import {makeStyles} from '@material-ui/core';
import Up from './../../Images/image/Up.png';
import Down from './../../Images/image/Down.png';
import Line from './../../Images/image/Line.png';
import Card from './Components/Card/home-explore/stylecard';
import Man from './../../Images/image/ManStyle.png'
import Woman from './../../Images/image/women.png'
import Girl from './../../Images/image/Girl.png';
import MoreDesigner from './Components/Card/home-explore/trending-designers/designers';
import Videos from '../Daily-Fashion-Tips/Components/celebrity-style/celebrityStyle';
import Selection from './Components/Card/home-explore/designer-selection/design-selection';
import AuthenticIndian from './Components/Card/home-explore/authentic-brands/authentic';
import ForeignBrands from './Components/Card/home-explore/forign-brands/foreign'
import DesignerOnBoard from './Components/Card/home-explore/desidners-onboard/designersOnboard';
import EventSlide from './Components/Card/home-explore/events/slide';
const useStyles = makeStyles({
  quote:{
    fontFamily:['DM Sans','Sans Serif'],
    fontSize: "28px",
    textAlign:"center",
    fontWeight:"bold"
  }
})

function HomeExplore(props) {
    const tabViewPro = useMediaQuery("(max-width:835px)");
    const tabView = useMediaQuery("(max-width:768px)");
    const mobileView = useMediaQuery("(max-width:550px)");
    const classes = useStyles();
    
    return (
      <Container bottomDivider footerOnAllView>
      {!tabViewPro && (
  <CustomSection>
    <Breadcrumb
      path='Home/'
      activePath='Explore/'
    />
  </CustomSection>
)}
       {
          !tabViewPro ? 
          <div style={{ marginLeft:"8%", fontSize:"30px", marginTop:30, fontFamily:"DM Serif Display"}}>
                <h1 style={{fontSize:"54px",fontWeight:"400px"}}>Explore Your fashion</h1>
                <div style={{margin:"40px auto"}}>
                <img src={Image} width="90%"></img></div>
            </div>
            :
            <div style={{ marginLeft:"10%", marginTop:30, fontFamily:"DM Serif Display"}}>
            <h1>Explore Your fashion</h1>
            <div style={{margin:"20px auto"}}>
                <img src={Image} width="95%"></img></div>
        </div>
      }
      <div style={{textAlign:"center"}}>
        <img src={Down}></img>
        <div>
        <img src={Line}></img></div>
        <div style={{ marginLeft:"10%", marginTop:30, fontFamily:"DM Serif Display"}}>
            <h1 style={{fontSize:"28px",fontWeight:"400px"}}>Quote of the day</h1>
            <h4 style={{fontFamily:"DM Sans", fontWeight:400}}>You can have anythingif you dress like it</h4>
            </div>
            <div style={{margin:20}}>
        <img src={Line}></img></div>
      <img src={Up}></img>
      </div>
      <Grid
          container
          style={{ margin: "auto" , alignItems:"center", width:"90%"}}
          spacing={mobileView ? 1 : tabView ? 3 : 2}
          justify="space-between"         
          >
      <Grid item xs={12} sm={6} md={4}>
            <Card image={Man} title="Men" />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card image={Woman} title="Women" />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card image={Girl} title="Kids" />
          </Grid>
          
          </Grid>

          {
          !tabViewPro ? 
          <div style={{ marginLeft:"10%", fontSize:"13px", fontWeight:400, marginTop:30, fontFamily:"DM Serif Display"}}>
                <h1 style={{fontSize:"34px",fontWeight:"400px"}}>Daily Fashion tips</h1>
            
            </div>
            :
            <div style={{ marginLeft:"10%", marginTop:30, fontFamily:"DM Serif Display"}}>
            <h1>Daily Fashion tips</h1>
           
        </div>
      }
       <Videos></Videos>
     
      <MoreDesigner />
      {
          !tabViewPro ? 
          <div style={{ marginLeft:"7%", fontSize:"20px", marginTop:30, fontFamily:"DM Serif Display"}}>
                <h2 style={{fontSize:"34px",fontWeight:"400px"}}>Insiders</h2>
                <h6 style={{color: "#3B3B3B",fontSize:"16px", fontFamily: "DM Sans"}}>Know more about design process</h6>
                <div style={{margin:"40px auto"}}>
                <img src={Image} width="90%"></img></div>
            </div>
            :
            <div style={{ marginLeft:"10%", marginTop:30, fontFamily:"DM Serif Display"}}>
            <h2>Designers Choice</h2>
            <h6 style={{color: "#6C6C6C", fontFamily: "DM Sans"}}>Know more about design process</h6>
            <div style={{margin:"20px auto"}}>
                <img src={Image} width="95%"></img></div>
        </div>
      }
       
       {
          !tabViewPro ? 
          <div style={{ marginLeft:"10%", fontSize:"13px", fontWeight:400, marginTop:30, fontFamily:"DM Serif Display"}}>
                <h1 style={{fontSize:"34px",fontWeight:"400px"}}>Designer's Selection</h1>
            
            
            </div>
            :
            <div style={{ marginLeft:"10%", marginTop:30, fontFamily:"DM Serif Display"}}>
            <h1>Designer's Selection</h1>
        
            <h5 style={{fontFamily:"DM Sans",fontSize:"16px", color:"#6c6c6c"}}>Know More about design process</h5>
        </div>
      }
       <Selection />
          <AuthenticIndian />
          <ForeignBrands />
          <DesignerOnBoard />
       {
          !tabViewPro ? 
          <div style={{ marginLeft:"10%", fontSize:"13px", fontWeight:400, marginTop:30, fontFamily:"DM Serif Display"}}>
                <h2 style={{fontSize:"34px",fontWeight:"400px"}}>Events/Shows</h2>
                <EventSlide />
            
            
            </div>
            :
            <div style={{ marginLeft:"10%", marginTop:30, fontFamily:"DM Serif Display"}}>
            <h2>Events/Shows</h2>
            <EventSlide />
            <h5 style={{fontFamily:"DM Sans",fontSize:"16px", color:"#6c6c6c"}}>Know More about design process</h5>
        </div>
      }
    
         
      
       </Container>
    );
}

export default HomeExplore;