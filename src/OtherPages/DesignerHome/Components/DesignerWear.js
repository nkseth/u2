import { Button } from "@material-ui/core";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import React from "react";
import styles from "../Style/DesignerWear.module.scss";
const DesignerWear = () => {
  const backgroundURL =
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=763&q=80";
  return (
    <>

      <div className={`${styles.DesignerWear} DesignerWear`}>
        <Button
          onClick={() => alert("This page Not Exists")}
          className={styles.DesignerWear_Button}
        >
          Swith To Branded <ArrowRightAltIcon />
        </Button>
        <h1>Designer Wear</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam nisi
          minus dolore sit reprehenderit, dolor vero vitae iste rem minima?
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam nisi
          minus dolore sit reprehenderit, dolor vero vitae iste rem minima?
        </p>
        <style>
          {`
          .DesignerWear {
            background: linear-gradient(#392d16e5, #392d16e5),
              url(${backgroundURL});
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
          }
        `}
        </style>
      </div>
    </>
  );
};

export default DesignerWear;
