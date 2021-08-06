import { Button } from "@material-ui/core";
import React from "react";
import CustomDivider from "../../../utils/Custom Divider/divider";
import styles from "../Style/TopCategory.module.scss";
const TopCategory = () => {
  const baseStyle = { padding: "3rem", background: " #e9e9e9" };
  return (
    <div style={baseStyle}>
      <div className={styles.TopCategory}>
        <div className={styles.TopCategory_Items}>
          <h1>Top Category 2021</h1>
        </div>
        <CategoryItems />
        <CategoryItems />
        <CategoryItems />
      </div>
    </div>
  );
};

export default TopCategory;
const imageSrc =
  "https://images.unsplash.com/photo-1585846416120-3a7354ed7d39?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHN1aXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";

const CategoryItems = () => {
  return (
    <>
      <div className={styles.TopCategory_Items}>
        <img src={imageSrc} alt="items" />
        <div className={styles.TopCategory_Items_Layer}>
          <div className={styles.TopCategory_Items_Layer_text}>
            <h2>
              Hello
              <CustomDivider style={{ height: "1px", background: "#fff" }} />
            </h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio
              vel, id nemo eaque, inventore aut ab error nihil aspernatur vel,
              id nemo eaque, inventore aut ab error nihil aspernatur
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
