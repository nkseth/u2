import React from "react";
import { useMediaQuery } from "@material-ui/core";
import { Link } from "react-router-dom";
import MUICarousel from "react-material-ui-carousel";
import CustomSection from "../../utils/Custom Section/section";
import Container from "../../utils/Container/container";
import Breadcrumb from "../../utils/Breadcrumb/breadcrumb";
import styles from "./customisedProductDetails.module.scss";
import Button from "@material-ui/core/Button";
// icons
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import CustomDivider from "../../utils/Custom Divider/divider";

export default function CustomisedProductDetails() {
  const mobileView = useMediaQuery("(max-width:550px)");
  const productImg =
    "https://s3-alpha-sig.figma.com/img/89fa/f19b/c3cd31cb5eb8a5a08d5ade5fb9858d69?Expires=1626652800&Signature=e8GRqKfMXi4SZdZWESTweT84cBe94nwdaPThmv4ORax7OjW7YCRzQTGWtANeNehKi7QC8vcsQBxWVzvFvyQGbwxOctiiPRthjDeprkWNX5tTBzNHLdmkfF7YtnMnolabANoM7q97tTA4elsV5A2oyW9Oid22xRphsU7pNZRMTtSY8IEqKMnSypQ5caJ732B5Rw5hJpFj4z-g1jeNevxs26FflFKUxx~uxo7~Wtudel1sifHcU6YHF8CFIEsYbupdy4kHEINRsiNkIslucvOvBoDYTkkUdIDkUt0pzicId0ZV5efGdj4OZXHGS7jMpMED2cYxnVxxVzAvB8kDoZqE6Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA";
  return (
    <Container bottomDivider footerOnTabMob>
      <CustomSection>
        <Breadcrumb
          path='Home / Men / Suit / Allen Solly'
          activePath='/ Customise '
        />
        <div className={styles.container}>
          <div className={styles.firstContainer}>
            <div>
              <MUICarousel
                fullHeightHover={false}
                animation='slide'
                indicators={false}
                navButtonsAlwaysVisible={true}
                autoPlay={false}
                navButtonsProps={{
                  style: {
                    backgroundColor: "#6C6C6C",
                    height: "40px",
                    width: "40px",
                  },
                }}
              >
                <div className={styles.productImgDiv}>
                  <img src={productImg} alt='product' />
                </div>
              </MUICarousel>
            </div>
            <div>
              <div>
                <span>The Groomsman Suit </span>
                <br />
                <span>$610</span>
              </div>
              <Link to='/simulate'>
                <Button
                  variant='contained'
                  color='default'
                  className={styles.simulationBtn}
                  endIcon={<ArrowForwardIcon />}
                >
                  Simulation
                </Button>
              </Link>
            </div>
          </div>
          <div className={styles.lastContainer}>
            <div>Customised Product Details</div>
            <div>
              <div>
                <div className={styles.productDetailsHeader}>
                  <span>Jacket</span>
                  <CustomDivider style={{ backgroundColor: "#000" }} />
                </div>
                <div className={styles.productDetailsContents}>
                  <div>
                    <label>Fabric:</label>
                    <span>Mid Brown Strip Wool Silk</span>
                  </div>
                  <div>
                    <label>Buton:</label>
                    <span>Black Code</span>
                  </div>
                  <div>
                    <label>Lapel:</label>
                    <span>Notch</span>
                  </div>
                  <div>
                    <label>Lapel Width:</label>
                    <span>Standard</span>
                  </div>
                  <div>
                    <label>Vent:</label>
                    <span>Single vent</span>
                  </div>
                  <div>
                    <label>Pockets:</label>
                    <span>Jetted</span>
                  </div>
                  <div>
                    <label>Sleeves:</label>
                    <span>3 Kissing buttons</span>
                  </div>
                </div>
              </div>
              <div>
                <div className={styles.productDetailsHeader}>
                  <span>Trouser</span>
                  <CustomDivider style={{ backgroundColor: "#000" }} />
                </div>
                <div className={styles.productDetailsContents}>
                  <div>
                    <label>Closure:</label>
                    <span>Double hook</span>
                  </div>
                  <div>
                    <label>Pocket:</label>
                    <span>Straight</span>
                  </div>
                  <div>
                    <label>Back pocket:</label>
                    <span>Right placement</span>
                  </div>
                  <div>
                    <label>Trosure Hem:</label>
                    <span>Plain</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              {mobileView && (
                <>
                  <Button
                    variant='text'
                    color='default'
                    className={styles.addMeasurementBtn}
                    endIcon={<ArrowForwardIcon />}
                  >
                    Add measurement
                  </Button>
                  <Button
                    variant='text'
                    color='default'
                    className={styles.backBtn}
                    startIcon={<ArrowBackIcon />}
                  >
                    Back
                  </Button>
                </>
              )}
              {!mobileView && (
                <>
                  <Button
                    variant='text'
                    color='default'
                    className={styles.backBtn}
                    startIcon={<ArrowBackIcon />}
                  >
                    Back
                  </Button>
                  <Button
                    variant='text'
                    color='default'
                    className={styles.addMeasurementBtn}
                    endIcon={<ArrowForwardIcon />}
                  >
                    Add measurement
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </CustomSection>
    </Container>
  );
}
