import React from "react";
import { useMediaQuery } from "@material-ui/core";
import CustomSection from "../../../../../utils/Custom Section/section";
import styles from "./section.module.scss";
import Button from "@material-ui/core/Button";

export default function SectionSix() {
  const tabView = useMediaQuery("(max-width:768px)");
  return (
    <CustomSection
      style={{
        paddingTop: "3rem",
        paddingBottom: "5rem",
        backgroundColor: "#9d8e73",
        display: tabView && "none",
      }}
    >
      <div className={styles.container}>
        <span className={styles.header}>Subscribe For New Shelter</span>
        <div>
          <input type='text' name='email' placeholder='info@gmail.com' />
          <Button className={styles.btn} variant='contained' color='default'>
            Subscribe
          </Button>
        </div>
      </div>
    </CustomSection>
  );
}
