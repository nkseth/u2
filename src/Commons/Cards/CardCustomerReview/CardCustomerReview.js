import React from "react";
import ReactStars from "react-rating-stars-component";
import styles from "./CardCustomerReview.module.scss";

import defaultFunctions from "../../../Configurations/defaultFunctions";
const {getFormatedDate} = defaultFunctions;

export default function CardCustomerReview({
  images,
  created_at,
  customers_name,
  point,
  description,
}) {
  return (
    <div className={styles.Customer_Review}>
      <div className={styles.Customer_Review_Items}>
        <span>{getFormatedDate('dateMonth', created_at)}</span>
        <img src={images} alt="items" />
        <h4>{customers_name}</h4>
        <div className={styles.StarsDiv}>
        <ReactStars
          size={15}
          activeColor="#ffd700"
          value={point}
          edit={false}
        />
        </div>
        <p>
          {description ||
            "It was very nice App and the products are very genuine"}
        </p>
      </div>
    </div>
  );
}
