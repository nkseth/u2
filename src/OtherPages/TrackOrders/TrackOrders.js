import React from "react";
import styles from "./TrackOrders.module.scss";
import { Button } from "@material-ui/core";
const TrackOrders = () => {
  return (
    <div className={styles.TrackOrders}>
      <TimeLine
        date={"Oct, 23 2020"}
        time={"2:00 PM "}
        OrderInfo={"Order confirmed"}
        InfoDescription={"The seller has confirmed your order"}
        className={styles.TrackOrders_Timeline_Dot_First}
      />
      <TimeLine
        OrderInfo={"Fabric Cutting"}
        InfoDescription={
          "Lorem, ipsu consectetur adipisicing elit. Esse, itaque!"
        }
      />

      <TimeLine
        OrderInfo={"Pattern Markout & Stitching"}
        InfoDescription={
          "  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse, itaque!"
        }
      />
      <TimeLine
        OrderInfo={"Embroidery sampling"}
        InfoDescription={
          "  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse, itaque!"
        }
      />
      <TimeLine
        OrderInfo={"Finishing & Draping"}
        InfoDescription={
          "Lorem, ipsum dolor sit amet consectetur adipisicing  consectetur adipisicing elit. Esse, itaque!"
        }
        button={
          <div>
            <Button>Review/Examine your product</Button>
          </div>
        }
      />
      <TimeLine
        OrderInfo={"Delivery"}
        InfoDescription={
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse, itaque!ctetur adipisicing elit. Esse, itaque!"
        }
      />
    </div>
  );
};

export default TrackOrders;

const TimeLine = ({
  date,
  time,
  OrderInfo,
  InfoDescription,
  className,
  button,
}) => {
  return (
    <>
      <div className={`${styles.TrackOrders_Timeline}`}>
        <div className={styles.TrackOrders_Timeline_Time}>
          <p>{date}</p> <p>{time}</p>
        </div>
        <div className={`${styles.TrackOrders_Timeline_Dot} ${className} `}>
          <span></span>
        </div>
        <div className={styles.TrackOrders_Timeline_info}>
          <h4>{OrderInfo}</h4>
          <p>{InfoDescription}</p>
          {button}
        </div>
      </div>
    </>
  );
};
