import React from 'react';
import Header from "../../utils/Header/header";
import Card from './Components/card'
import CustomSection from "../../utils/Custom Section/section";
import Breadcrumb from "../../utils/Breadcrumb/breadcrumb";
import { Grid, Typography, useMediaQuery } from "@material-ui/core";
import Divider from '../../utils/Custom Divider/divider'
function Polls(props) {
  const tabViewPro = useMediaQuery("(max-width:835px)");
  const tabView = useMediaQuery("(max-width:768px)");
  const mobileView = useMediaQuery("(max-width:550px)");
    return (
        <div>
            <Header> </Header>
            {
              mobileView ?
              <Divider></Divider>
              :
<div style={{width:"85%",margin:"auto" }}>
            <Divider></Divider></div>

            }
            

        <CustomSection>
          <Breadcrumb
            path='Home/Explore /'
            activePath='Polls'
          />
        </CustomSection>
      
        {
          !tabViewPro ? 
          <div style={{ marginLeft:"9%", fontSize:"20px", marginTop:30,marginRight:"7%", fontFamily:"DM Serif Display"}}>
                <h1 style={{fontSize:"28px"}}>Polls</h1>
                <div style={{margin:"40px auto"}}>
                <Divider></Divider>
                </div>
            </div>
            :
            <div style={{ marginLeft:"5%", marginTop:30,marginRight:20, fontFamily:"DM Serif Display"}}>
            <h2 style={{fontSize:"28px"}}>Polls</h2>
            <div style={{margin:"20px auto"}}>
                <Divider></Divider>
                </div>
        </div>
      }
      <Grid
          container
          style={{ margin: "auto" , alignItems:"center", width:"85%"}}
          spacing={mobileView ? 1 : tabView ? 3 : 2}
          justify="space-between"         
          >
      <Grid item xs={12} sm={6} md={3}>
            <Card />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card />
          </Grid>
          
          <Grid item xs={12} sm={6} md={3}>
            <Card />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card />
          </Grid>
          </Grid>
       
         
            
           
        </div>
    );
}

export default Polls;