import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { IconButton, Button, Grid, useMediaQuery } from "@material-ui/core";
import cx from "classnames";
import Container from "../../utils/Container/container";
import Breadcrumb from "../../utils/Breadcrumb/breadcrumb";
import styles from "./gender.module.scss";
//images
import Male from "../../Images/gender/male.svg";
import { useSelector, useDispatch } from "react-redux";
import { set_gender } from "../../Redux/actions/measurement";

export default function AddMeasurementGender() {
  const history = useHistory();
  const dispatch = useDispatch()
  const tabView = useMediaQuery("(max-width:768px)");
  const tabViewPro = useMediaQuery("(max-width:835px)");
  const mobileView = useMediaQuery("(max-width:550px)");
  const [selectedBtn, setSelectedBtn] = useState("men");
  const { gender } = useSelector(state => state.root.measurement);

  return (
    <Container bottomDivider footerOnTabMob>
      <div
        style={{
          padding: mobileView
            ? "0 1rem"
            : tabView
            ? "0 30px"
            : tabViewPro
            ? "0 56px"
            : "0 131px",
        }}
      >
        <Breadcrumb
          path='Home / Men / Blazers / '
          activePath='Add measurement'
        />
      </div>
      <section className={styles.section}>
        <div className={styles.header}>Add measurement</div>
        <div className={styles.genderContainer}>
          <div style={{ height: mobileView ? "340px" : "514px" }}>
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
          <div className={styles.genderSelectorDiv}>
            <span>Hii Prasanna select gender here!</span>
            <img src={Male} alt='male' />
            <div className={styles.buttonDiv}>
              <Button
                onClick={() => dispatch(set_gender('male'))}
                className={cx(
                  styles.button,
                  gender === "male" && styles.buttonActive
                )}
                variant='contained'
              >
                Men
              </Button>
              <Button
                onClick={() => dispatch(set_gender('female'))}
                className={cx(
                  styles.button,
                  gender === "female" && styles.buttonActive
                )}
                variant='contained'
              >
                Women
              </Button>
            </div>
            <div className={styles.btnDiv}>
              <Button
                className={styles.nextButton}
                variant='contained'
                onClick={() => history.push("/add-measurement-basic-details")}
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
