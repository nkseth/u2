import React from 'react';
import { useMediaQuery } from "@material-ui/core";
import Breadcrumb from "../../utils/Breadcrumb/breadcrumb";
import CustomSection from "../../utils/Custom Section/section";
import Container from '../../utils/Container/container';
import PostCard from './Components/post';
import { Grid } from '@material-ui/core';

import Card from './Components/Card'
function DesignerPosts(props) {
    const tabViewPro = useMediaQuery("(max-width:835px)");
    const tabView = useMediaQuery("(max-width:768px)");
    const mobileView = useMediaQuery("(max-width:550px)");
    const img1 =
    "https://www.figma.com/file/3feKLdzH2SEin23kTS0pjx/image/7a7d5a32e573cc2df649246fe05faa140574b308?fuid=763802552325253092";
    return (
        <div style={{width:"100%", margin:"0 auto"}}>
        <Container bottomDivider footerOnAllView>
          ]
        <CustomSection>
          <Breadcrumb
            path='Home/Explore/Designers Profile/'
            activePath='Posts'
          />
        </CustomSection>
     
       <div style={{backgroundColor:"#ffffff", margin:"auto", width:"85%", alignItems:"center"}}><Grid
          container
          style={{ margin: "auto" , alignItems:"center", width:"90%"}}
          spacing={mobileView ? 1 : tabView ? 2 : 4}
          justify="space-between"

        >
      <Grid item xs={12} sm={12} md={12}>
            <PostCard />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <PostCard />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <PostCard />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <PostCard />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <PostCard />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <PostCard />
          </Grid>
          </Grid>
          <Grid></Grid></div>
       
       </Container></div>
    );
    
}


export default DesignerPosts;