import React from 'react';
import Container from '../../utils/Container/container';
import Breadcrumb from "../../utils/Breadcrumb/breadcrumb";
import CustomSection from "../../utils/Custom Section/section";
import { useMediaQuery, Grid, Button } from "@material-ui/core";
import Image from './../../Images/image/Visual.png';
import Products from './Components/products';
import styles from '../Mens-Wear/components/Sections/for-him/forHim.module.scss'
function VisualSearch(props) {
  const tabViewPro = useMediaQuery("(max-width:835px)");
  const mobileView = useMediaQuery("(max-width:550px)");
  return (
    <div style={{ backgroundColor: "#ffffff" }}>
      <Container bottomDivider footerOnAllView>

        <CustomSection>
          <Breadcrumb
            path='Home/Explore/Daily Fashion Tips'
            activePath='Visual search'
          />
        </CustomSection>
        {
          tabViewPro ?
            <div style={{ marginLeft: "9%", width: "85%", display: "flex", marginTop: 70 }}><img src={Image} width="50%"></img>

              <div style={{ marginLeft: "10%", fontSize: "20px", marginTop: 30, fontFamily: "DM Serif Display" }}>
                <h1 style={{ fontSize: "30px" }}>Visual Similar Products</h1>
                <p style={{ fontFamily: "DM Sans", marginTop: 20, fontSize: "16px" }}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy
                  text ever since the 1500s, when an unknown printer took a galley
                  of type and scrambled it to make a type specimen book.
                </p>
              </div>
            </div>
            :
            <div style={{ marginLeft: "9%", width: "85%", display: "flex", marginTop: 70 }}><img src={Image} width="50%"></img>

              <div style={{ marginLeft: "10%", fontSize: "20px", marginTop: 30, fontFamily: "DM Serif Display" }}>
                <h1 style={{ fontSize: "34px" }}>Visual Similar Products</h1>
                <p style={{ fontFamily: "DM Sans", marginTop: 20, fontSize: "16px" }}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy
                  text ever since the 1500s, when an unknown printer took a galley
                  of type and scrambled it to make a type specimen book.
                </p>
              </div>
            </div>

        }

        {
          tabViewPro ?
            <div style={{ textAlign: "center", fontFamily: "DM Serif Display", fontSize: "20px", margin: "30px 0" }}>
              <h2 style={{ fontSize: "25px" }}>Similar Products</h2>
            </div>
            :
            <div style={{ textAlign: "center", fontFamily: "DM Serif Display", fontSize: "20px", margin: "30px 0" }}>
              <h2 style={{ fontSize: "34px" }}>Similar Products</h2>
            </div>

        }
         
        <Products></Products>
        <div style={{ textAlign: "center" }}>
          <Button className={styles.viewAllBtn} style={{ marginTop: "30px", marginBottom: "30px" }}>View All</Button></div>
      </Container></div>
  );
}

export default VisualSearch;