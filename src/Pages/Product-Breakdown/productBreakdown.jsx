import React, { useState } from "react";
import { motion } from "framer-motion";
import cx from "classnames";
import { Button, useMediaQuery } from "@material-ui/core";
import { Link } from "react-router-dom";
import MUICarousel from "react-material-ui-carousel";
import CustomSection from "../../utils/Custom Section/section";
import Container from "../../utils/Container/container";
import Breadcrumb from "../../utils/Breadcrumb/breadcrumb";
import styles from "./productBreakdown.module.scss";
// icons
import { ReactComponent as ResetIcon } from "../../Images/icons/rotate.svg";
import { ReactComponent as ProductsIcon } from "../../Images/product-breakdown/products.svg";
import { ReactComponent as FabricIcon } from "../../Images/product-breakdown/fabric.svg";
import { ReactComponent as ButtonIcon } from "../../Images/product-breakdown/button.svg";
import { ReactComponent as ModelIcon } from "../../Images/product-breakdown/model.svg";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ProductSection from "./Components/Sections/products/section";

export default function ProductBreakdown() {
  const tabView = useMediaQuery("(max-width:768px)");
  const mobileView = useMediaQuery("(max-width:550px)");
  const customView = useMediaQuery("(max-width:1150px)");
  const [selectedeMenu, setSelectedMenu] = useState("Products");
  const productImg =
    "https://s3-alpha-sig.figma.com/img/89e8/8789/476ec43da9b91055ee18a4af557fa95d?Expires=1627862400&Signature=eav9Es6jsEd1InVML5VNfF0WXgAMbskGlg4~p-0TEhRaNrY2yW5vOfqU4Bv~Ksxyg27rN0hcMkByDhdpUacOAS7P92uugeRu3A1r6Esb~5hmf0G7IXPOz2PLHw643piNyqI~gSBtZs-o-F0dPXkTFCCZgrh7qXlgj~Pm87bdWm210YjdqwYv2EzFHvpTBbaXHX-Bb4EUhlAA-wG-80wwiv9xJHtGPGfHJwZeXnAFduk8rtpnpOKHPf-ZgP58eQBRy~ulBRfqcIpEaj1RyUVHkihKVHtu9l2pwn1D-yB89wl-ceMqPDOhlgDS7~IFhT9SJT90hWLNz-9xhHF0ckTyGw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA";
  return (
    <Container bottomDivider footerOnTabMob>
      {mobileView && (
        <CustomSection style={{ padding: mobileView && "0 1rem 1rem" }}>
          <Breadcrumb
            path='Home / Men / Suit / Allen Solly'
            activePath='/ Customise '
          />
        </CustomSection>
      )}
      <CustomSection style={{ padding: mobileView && 0 }}>
        {!mobileView && (
          <Breadcrumb
            path='Home / Men / Suit / Allen Solly'
            activePath='/ Customise '
          />
        )}
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
              <Button
                variant='contained'
                color='default'
                className={styles.resetBtn}
              >
                Reset <ResetIcon style={{ height: "20px" }} />
              </Button>
            </div>
          </div>
          <div className={styles.lastContainer}>
            <div className={styles.menuBar}>
              <motion.div
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.3, type: "ease-in-out" },
                }}
                onClick={() => setSelectedMenu("Products")}
                className={cx(
                  selectedeMenu === "Products" && styles.activeMenu
                )}
              >
                <ProductsIcon />
                <span>Products</span>
              </motion.div>
              <motion.div
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.3, type: "ease-in-out" },
                }}
                onClick={() => setSelectedMenu("Fabric")}
                className={selectedeMenu === "Fabric" && styles.activeMenu}
              >
                <FabricIcon />
                <span>Fabric</span>
              </motion.div>
              <motion.div
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.3, type: "ease-in-out" },
                }}
                onClick={() => setSelectedMenu("Button")}
                className={selectedeMenu === "Button" && styles.activeMenu}
              >
                <ButtonIcon />
                <span>Button</span>
              </motion.div>
              <motion.div
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.3, type: "ease-in-out" },
                }}
                onClick={() => setSelectedMenu("Model")}
                className={selectedeMenu === "Model" && styles.activeMenu}
              >
                <ModelIcon />
                <span>Model</span>
              </motion.div>
            </div>
            <div>
              <div>Products</div>
              <div>
                <ProductSection />
              </div>
              <div>
                <Button
                  variant='text'
                  color='default'
                  className={styles.backBtn}
                  startIcon={<ArrowBackIcon />}
                >
                  Back
                </Button>
                <Link to='/customised-product-details'>
                  <Button
                    variant='text'
                    color='default'
                    className={styles.nextBtn}
                    endIcon={<ArrowForwardIcon />}
                  >
                    Next
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </CustomSection>
      {customView && (
        <div className={styles.menuBar_CustomView}>
          <motion.div
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.3, type: "ease-in-out" },
            }}
            onClick={() => setSelectedMenu("Products")}
            className={cx(selectedeMenu === "Products" && styles.activeMenu)}
          >
            <ProductsIcon />
            <span>Products</span>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.3, type: "ease-in-out" },
            }}
            onClick={() => setSelectedMenu("Fabric")}
            className={selectedeMenu === "Fabric" && styles.activeMenu}
          >
            <FabricIcon />
            <span>Fabric</span>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.3, type: "ease-in-out" },
            }}
            onClick={() => setSelectedMenu("Button")}
            className={selectedeMenu === "Button" && styles.activeMenu}
          >
            <ButtonIcon />
            <span>Button</span>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.3, type: "ease-in-out" },
            }}
            onClick={() => setSelectedMenu("Model")}
            className={selectedeMenu === "Model" && styles.activeMenu}
          >
            <ModelIcon />
            <span>Model</span>
          </motion.div>
        </div>
      )}
      {customView && (
        <CustomSection>
          <div className={styles.productSection_CustomView}>
            <div>Products</div>
            <div>
              <ProductSection />
            </div>
            <div>
              <Button
                variant='text'
                color='default'
                className={styles.backBtn}
                startIcon={<ArrowBackIcon />}
              >
                Back
              </Button>
              <Link to='/customised-product-details'>
                <Button
                  variant='text'
                  color='default'
                  className={styles.nextBtn}
                  endIcon={<ArrowForwardIcon />}
                >
                  Next
                </Button>
              </Link>
            </div>
          </div>
        </CustomSection>
      )}
    </Container>
  );
}
