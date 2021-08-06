import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { IconButton, Button, useMediaQuery } from "@material-ui/core";
import cx from "classnames";
import { Carousel } from "react-responsive-carousel";
import Container from "../../utils/Container/container";
import Breadcrumb from "../../utils/Breadcrumb/breadcrumb";
import SizesCard from "./Components/Sizes-Card/card";
import styles from "./chooseSize.module.scss";
//images
import SlimFit from "../../Images/fits/slim.svg";
import RegularFit from "../../Images/fits/regular.svg";
import LooseFit from "../../Images/fits/loose.svg";

export default function ChooseStandardSize() {
  const history = useHistory();
  const tabView = useMediaQuery("(max-width:768px)");
  const tabViewPro = useMediaQuery("(max-width:835px)");
  const mobileView = useMediaQuery("(max-width:550px)");
  const [size, setSize] = useState("xs");
  return (
    <Container bottomDivider footerOnTabMob>
      {tabViewPro && !mobileView && (
        <div style={{ padding: tabView ? "0 30px" : "0 56px" }}>
          <Breadcrumb
            path='Home / Men / Blazers / '
            activePath='Add measurement'
          />
        </div>
      )}
      <section className={styles.section}>
        {!tabViewPro && (
          <Breadcrumb
            path='Home / Men / Blazers / '
            activePath='Add measurement'
          />
        )}

        <div className={styles.header}>Choose Standard Size</div>
        <div className={styles.sizesDiv}>
          <IconButton
            onClick={() => setSize("xs")}
            size={mobileView && "small"}
          >
            <div
              className={cx(
                styles.sizeButton,
                size === "xs" && styles.sizeButtonActive
              )}
            >
              XS
            </div>
          </IconButton>
          <IconButton onClick={() => setSize("s")} size={mobileView && "small"}>
            <div
              className={cx(
                styles.sizeButton,
                size === "s" && styles.sizeButtonActive
              )}
            >
              S
            </div>
          </IconButton>
          <IconButton onClick={() => setSize("m")} size={mobileView && "small"}>
            <div
              className={cx(
                styles.sizeButton,
                size === "m" && styles.sizeButtonActive
              )}
            >
              M
            </div>
          </IconButton>
          <IconButton onClick={() => setSize("l")} size={mobileView && "small"}>
            <div
              className={cx(
                styles.sizeButton,
                size === "l" && styles.sizeButtonActive
              )}
            >
              L
            </div>
          </IconButton>
          <IconButton
            onClick={() => setSize("xl")}
            size={mobileView && "small"}
          >
            <div
              className={cx(
                styles.sizeButton,
                size === "xl" && styles.sizeButtonActive
              )}
            >
              XL
            </div>
          </IconButton>
          <IconButton
            onClick={() => setSize("xxl")}
            size={mobileView && "small"}
          >
            <div
              className={cx(
                styles.sizeButton,
                size === "xxl" && styles.sizeButtonActive
              )}
            >
              XXL
            </div>
          </IconButton>
        </div>
        <div>
          {mobileView && (
            <div>
              <Carousel
                autoPlay={false}
                centerMode
                centerSlidePercentage={100}
                showArrows={false}
                showStatus={false}
                showIndicators={true}
                stopOnHover
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    height: "350px",
                    alignItems: "center",
                  }}
                >
                  <SizesCard
                    fitImg={LooseFit}
                    fitType='Loose'
                    fitDescription='A Loose Modern cut'
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    height: "350px",
                    alignItems: "center",
                  }}
                >
                  <SizesCard
                    fitImg={SlimFit}
                    fitType='Slim'
                    fitDescription='A Slim Modern cut'
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    height: "350px",
                    alignItems: "center",
                  }}
                >
                  <SizesCard
                    fitImg={RegularFit}
                    fitType='Regular'
                    fitDescription='A Regular Modern cut'
                  />
                </div>
              </Carousel>
            </div>
          )}

          {!mobileView && (
            <div className={styles.sizeIllustrationDiv}>
              <SizesCard
                fitImg={LooseFit}
                fitType='Loose'
                fitDescription='A Loose Modern cut'
              />
              <SizesCard
                fitImg={SlimFit}
                fitType='Slim'
                fitDescription='A Slim Modern cut'
              />
              <SizesCard
                fitImg={RegularFit}
                fitType='Regular'
                fitDescription='A Regular Modern cut'
              />
            </div>
          )}
        </div>
        <div className={styles.buttonDiv}>
          <Button
            className={styles.button}
            variant='contained'
            color='default'
            onClick={() => history.push("/add-measurement-gender")}
          >
            Continue
          </Button>
        </div>
      </section>
    </Container>
  );
}
