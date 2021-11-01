import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import CustomSection from "../../../../../utils/Custom Section/section";
import fiftyOff from "./images/fiftyOff.svg";
import styles from "./section.module.scss";
import Button from "@material-ui/core/Button";
import { useDispatch, useSelector } from "react-redux";
import { get_section_1_sliders } from "../../../../../Redux/actions/homepage";

export default function SectionTwo() {

  const dispatch = useDispatch();
  const { offers_sliders } = useSelector(state => state.root.main)

  useEffect(()=>{
    dispatch(get_section_1_sliders());
  },[])

  console.log(offers_sliders)

  if(offers_sliders.length == 0){
    return null
  }

  return (
    <CustomSection className={styles.offer_section_two} style={{ paddingTop: "4rem", paddingBottom: "7rem" }}>
      <div className={styles.container}>
        <span className={styles.header}>Top Offers of the Season</span>
        <div className={styles.imgContainer}>
          <div className={styles.AbsoluteBgContainer1} ></div>
          <div className={styles.AbsoluteBgBox} >
            <div className={styles.AbsoluteBgContainer2} ></div>
            <div className={styles.AbsoluteBgContainer3} ></div>
          </div>
          <div className={styles.imgBox}>

            <img src={offers_sliders[0].cover_image} alt='Extra 50% off' />
            <Link>
              <Button className={styles.btn}>Shop Now</Button>
            </Link>
          </div>
        </div>
      </div>
    </CustomSection>
  );
}
