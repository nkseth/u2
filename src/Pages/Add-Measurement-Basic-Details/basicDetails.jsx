import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { IconButton, Button, Grid } from "@material-ui/core";
import cx from "classnames";
import Container from "../../utils/Container/container";
import Breadcrumb from "../../utils/Breadcrumb/breadcrumb";
import InputField from "./Components/Input-Field/inputField";
import styles from "./basicDetails.module.scss";
//images
import Male from "../../Images/gender/male.svg";

export default function AddMeasurementBasicDetails() {
  const history = useHistory();
  const [selectedBtn, setSelectedBtn] = useState("men");
  return (
    <Container bottomDivider footerOnTabMob>
      <section className={styles.section}>
        <Breadcrumb
          path='Home / Men / Product name/ customise / Simulation /'
          activePath='Measurements'
        />
        <div className={styles.header}>Add measurement</div>
        <div className={styles.genderContainer}>
          <div item sm={12} md={6} style={{ height: "514px" }}>
            <iframe
              width='100%'
              height='100%'
              src='https://www.youtube.com/embed/gwuV_JNm-xA?list=RDgwuV_JNm-xA'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen
            ></iframe>
          </div>
          <div className={styles.detailsDiv}>
            <span className={styles.detailsHeader}>Basic Details</span>
            <div className={styles.inputFieldDiv}>
              <div>
                <InputField label='Name' />
                <InputField label='Age' />
              </div>
              <div>
                <InputField label='Height' />
                <InputField label='Weight' />
              </div>
            </div>
            <div className={styles.buttonDiv}>
              <Button
                className={styles.nextButton}
                onClick={() =>
                  history.push("/add-measurement-body-measurement")
                }
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}
