import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CustomSection from "../../../../../utils/Custom Section/section";
import fiftyOff from "./images/fiftyOff.svg";
import styles from "./section.module.scss";
import Button from "@material-ui/core/Button";
import { useDispatch, useSelector } from "react-redux";
import { get_section_1_sliders } from "../../../../../Redux/actions/homepage";
import common_axios from "../../../../../utils/axios.config";
import { Item } from "semantic-ui-react";

export default function SectionTwo() {

  const [data, setData] = useState([])

  useEffect(()=>{
    fetch_data()
  },[])

  const fetch_data = async () => {
    try{
      const { data:res } = await common_axios.get('https://dhaatri.info/api/banners/offers/1');
      if(res.data){
        setData(res.data)
      }
    } catch(e){
      console.log(e)
    }
  }


  if(data.length == 0){
    return null
  }


  return (
    <CustomSection className={styles.offer_section_two} style={{ paddingTop: "4rem", paddingBottom: "7rem" }}>
      <div className={styles.container}>
        <span className={styles.header}>Top Offers of the Season</span>
        <div className={styles.imgContainer} style={{backgroundImage:`url(${data[0].image})`}}>
          <div className={styles.AbsoluteBgContainer1} ></div>
          <div className={styles.AbsoluteBgBox} >
            <div className={styles.AbsoluteBgContainer2} ></div>
            <div className={styles.AbsoluteBgContainer3} ></div>
          </div>
          <div className={styles.imgBox}>

            {/* <img src={data[0].image} alt='Extra 50% off' /> */}
            <span style={{fontSize:25, color:"white"}}>{data[0]?.description}</span>
            <Link>
              <Button className={styles.btn}>Shop Now</Button>
            </Link>
          </div>
        </div>
      </div>
    </CustomSection>
  );
}
