import { Button } from "@material-ui/core";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import React from "react";
import Carousel from "react-material-ui-carousel";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import styles from "../Style/DesignerWear.module.scss";
const DesignerWear = () => {
  const backgroundURL =
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=763&q=80";


  const { mens_wear_slider, mens_wear_cat } = useSelector(state => state.root.main)

  const history = useHistory()

  return (
    <>



      <section className={styles.heroSection}>
        <Carousel
          autoPlay
          emulateTouch
          infiniteLoop
          showStatus={false}
          showArrows={false}
        >
          {mens_wear_slider.map((item) => {
            return (
              <div onClick={() => history.push(item.link)} style={{ backgroundImage: `url(${item.image})` }} className={styles.carouselItem}>
                <div>
                  <span style={{ color: item.title_color }}>{item.title}</span>
                  <p style={{ color: item.sub_title_color }}>
                    {item.sub_title}
                  </p>
                </div>
              </div>
            )
          })}
        </Carousel>
      </section>




    </>
  );
};

export default DesignerWear;
