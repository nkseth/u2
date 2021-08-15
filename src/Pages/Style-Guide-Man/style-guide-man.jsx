import React from 'react';
import Container1 from '../../utils/Container/container';
import { Grid, Button,Container, useMediaQuery } from "@material-ui/core";
import Breadcrumb from "../../utils/Breadcrumb/breadcrumb";
import CustomSection from "../../utils/Custom Section/section";
import Card from './Components/card'

import ProductCard from './Components/productCard'
import styles from '../Mens-Wear/components/Sections/for-him/forHim.module.scss'
function StyleGuideMan(props) {
    const tabViewPro = useMediaQuery("(max-width:835px)");
    const tabView = useMediaQuery("(max-width:768px)");
    const mobileView = useMediaQuery("(max-width:550px)");
    const img1 =
    "https://www.figma.com/file/3feKLdzH2SEin23kTS0pjx/image/7a7d5a32e573cc2df649246fe05faa140574b308?fuid=763802552325253092";
    return (
        <Container1 bottomDivider footerOnAllView>
          <Card backgroundImg={img1} header={"FASHION STYLE GUIDE FOR MEN"}></Card>


            
        <CustomSection>
          <Breadcrumb
            path='Home/Explore/'
            activePath='Style Guide Man'
          />
        </CustomSection>
        {
          mobileView ?
           
   <div>   <Grid
   container
   style={{ margin: "auto" , alignItems:"center", width:"90%"}}
   spacing={mobileView ? 1 : tabView ? 2 : 4}
   justify="space-between"

 >
<Grid item xs={12} sm={6} md={4}>
     <ProductCard />
   </Grid>
   <Grid item xs={12} sm={6} md={4}>
     <ProductCard />
   </Grid>
   <Grid item xs={12} sm={6} md={4}>
     <ProductCard />
   </Grid>
   <Grid item xs={12} sm={6} md={4}>
     <ProductCard />
   </Grid>
   <Grid item xs={12} sm={6} md={4}>
     <ProductCard />
   </Grid>
   <Grid item xs={12} sm={6} md={4}>
     <ProductCard />
   </Grid>
   </Grid>
   <Grid></Grid></div> 
   
   
     :
      
   <div>   <Grid
          container
          style={{ margin: "auto" , alignItems:"center", width:"85%"}}
          spacing={mobileView ? 1 : tabView ? 2 : 4}
          justify="space-between"

        >
      <Grid item xs={6} sm={4} md={4}>
            <ProductCard />
          </Grid>
          <Grid item xs={6} sm={4} md={4}>
            <ProductCard />
          </Grid>
          <Grid item xs={6} sm={4} md={4}>
            <ProductCard />
          </Grid>
          <Grid item xs={6} sm={4} md={4}>
            <ProductCard />
          </Grid>
          <Grid item xs={6} sm={4} md={4}>
            <ProductCard />
          </Grid>
          <Grid item xs={6} sm={4} md={4}>
            <ProductCard />
          </Grid>
          </Grid>
          <Grid></Grid></div> 
     

        }
    
   <div>   <Grid
          container
          style={{ margin: "auto" , alignItems:"center", width:"90%"}}
          spacing={mobileView ? 1 : tabView ? 2 : 4}
          justify="space-between"

        >
      <Grid item xs={6} sm={4} md={4}>
            <ProductCard />
          </Grid>
          <Grid item xs={6} sm={4} md={4}>
            <ProductCard />
          </Grid>
          <Grid item xs={6} sm={4} md={4}>
            <ProductCard />
          </Grid>
          <Grid item xs={6} sm={4} md={4}>
            <ProductCard />
          </Grid>
          <Grid item xs={6} sm={4} md={4}>
            <ProductCard />
          </Grid>
          <Grid item xs={6} sm={4} md={4}>
            <ProductCard />
          </Grid>
          </Grid>
          <Grid></Grid></div> 
          
          <div style={{textAlign:"center", marginTop:"50px", marginBottom:"50px"}}>
      <Button className={styles.viewAllBtn}>View All</Button></div>
         
        </Container1>
    );
}

export default StyleGuideMan;