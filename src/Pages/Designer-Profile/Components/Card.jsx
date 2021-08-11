import React from "react";
import { Link } from "react-router-dom";
import styles from "./card.module.scss";
import Button from "@material-ui/core/Button";
import Image from '../../../Images/image/Man.png';

export default function HeroCard({ header, tagline, backgroundImg }) {
    //`url(${backgroundImg})`
  return (
    <div
      style={{ backgroundImage:  backgroundImg, width:"100%", height:300, marginTop:50}}
      className={styles.container}
    >
      <div >
          <img style={{borderRadius:"100%", width:"20%", float:"left", marginLeft:30}} src={Image}></img>
        <span className={styles.header}>{header}</span>     
        <Button></Button> 
      </div>
      
    </div>
  );
}