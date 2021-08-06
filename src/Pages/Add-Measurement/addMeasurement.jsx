import React from "react";
import { Link, useHistory } from "react-router-dom";
import { IconButton, Button, useMediaQuery } from "@material-ui/core";
import Container from "../../utils/Container/container";
import CustomDivider from "../../utils/Custom Divider/divider";
import Breadcrumb from "../../utils/Breadcrumb/breadcrumb";
import styles from "./addMeasurement.module.scss";
//Icons
import RotateIcon from "../../Images/icons/rotate.svg";
import DownloadIcon from "../../Images/icons/download.svg";
import DeleteIcon from "../../Images/icons/delete.svg";
//mui Icons
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import ZoomInIcon from "@material-ui/icons/ZoomIn";

export default function AddMeasurement() {
  const history = useHistory();
  const tabViewPro = useMediaQuery("(max-width:1024px)");
  const tabView = useMediaQuery("(max-width:768px)");
  const mobileView = useMediaQuery("(max-width:550px)");
  const img =
    "https://s3-alpha-sig.figma.com/img/a86d/7e94/db43f37e2d10b9c407c724b0631387bb?Expires=1627257600&Signature=FtcP6W48HqPgfbhmYPPALKmRyQ9XG987WU~FXilypjyltP~UU59d5QJXB5E1-HTREdUM0dZ14we2et9ZRcYoD5t6AT5exMmEUhH1nCG8LtAKyFRU9j5pB0~UM93~L9FKgc1UV9QDTDb~UCu6~EVV2jO95MBSOIvlwZD4CxGmU~LwAIgbwn3~R-xW3Swg85BoZxOlqlEj-VvnJo34pNhM442IpKBD2HYz58uioY3oddte5pve51ihyw7bUtqSbw0cxQg~EpBtkRWsPLVyo~P45IEWI8pQOe~EgQmEQ7Tf71GKRV8U3PmxmAyBe6rfP69epZYY6141nEPPHlqcmr74NQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA";
  return (
    <Container bottomDivider footerOnTabMob>
      <section className={styles.modelImgSection}>
        <div>
          {!tabViewPro && (
            <Breadcrumb
              path='Home / Men / Measurements/'
              activePath=' Simulation'
            />
          )}
          {tabViewPro && (
            <div className={styles.zoomDiv}>
              <div className={styles.innerZoomDiv}>
                <div>
                  <IconButton size='small'>
                    <RemoveIcon style={{ color: "#fff", height: "24px" }} />
                  </IconButton>
                  <IconButton size='small'>
                    <ZoomInIcon style={{ color: "#fff", height: "24px" }} />
                  </IconButton>
                  <IconButton size='small'>
                    <AddIcon style={{ color: "#fff", height: "24px" }} />
                  </IconButton>
                </div>
              </div>
            </div>
          )}
          <div>
            <img src={img} alt='' />
          </div>
        </div>
      </section>
      <div className={styles.lastSection}>
        <div className={styles.rdd}>
          <div>
            <IconButton aria-label='RotateIcon'>
              <img
                src={RotateIcon}
                className={styles.rddIcons}
                alt='RotateIcon'
              />
            </IconButton>
            <span>Rotate</span>
          </div>
          <div>
            <IconButton aria-label='DownloadIcon'>
              <img
                src={DownloadIcon}
                className={styles.rddIcons}
                alt='DownloadIcon'
              />
            </IconButton>
            <span>Download</span>
          </div>
          <div>
            <IconButton aria-label='DeleteIcon'>
              <img
                className={styles.rddIcons}
                src={DeleteIcon}
                alt='DeleteIcon'
              />
            </IconButton>
            <span>Delete</span>
          </div>
        </div>
        <div className={styles.btnsDiv}>
          <Button
            className={styles.button}
            variant='contained'
            endIcon={<ArrowForwardIcon />}
            onClick={() => history.push("/my-measurements")}
          >
            Add Measurement
          </Button>
          <Button
            className={styles.button}
            variant='contained'
            endIcon={<ArrowForwardIcon />}
          >
            Add to bag
          </Button>
        </div>
        {!tabViewPro && (
          <div className={styles.zoomDiv}>
            <div className={styles.innerZoomDiv}>
              <div>
                <IconButton size='small'>
                  <RemoveIcon style={{ color: "#fff", height: "24px" }} />
                </IconButton>
                <IconButton size='small'>
                  <ZoomInIcon style={{ color: "#fff", height: "24px" }} />
                </IconButton>
                <IconButton size='small'>
                  <AddIcon style={{ color: "#fff", height: "24px" }} />
                </IconButton>
              </div>
              <span>Zoom</span>
            </div>
          </div>
        )}
      </div>
    </Container>
  );
}
