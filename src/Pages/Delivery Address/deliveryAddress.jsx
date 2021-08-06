import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  Button,
  Dialog,
  Slide,
  IconButton,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Radio,
  useMediaQuery,
} from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import FabricSampleCard from "./Components/fabric-sample-card/card";
import CustomSection from "../../utils/Custom Section/section";
import Container from "../../utils/Container/container";
import Breadcrumb from "../../utils/Breadcrumb/breadcrumb";
import CustomDivider from "../../utils/Custom Divider/divider";
import styles from "./deliveryAddress.module.scss";
//icons
import AddIcon from "@material-ui/icons/Add";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { ReactComponent as LocationIcon } from "../../Images/icons/location.svg";
import { ReactComponent as CloseIcon } from "../../Images/icons/close.svg";
import { ReactComponent as FilterIcon } from "../../Images/icons/filter.svg";

const CustomRadio = withStyles({
  root: {
    color: "#9D9D9D",
    "&$checked": {
      color: "#857250",
    },
  },
  checked: {},
})((props) => <Radio color='default' {...props} />);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});
export default function DeliveryAddress() {
  const tabView = useMediaQuery("(max-width:768px)");
  const mobileView = useMediaQuery("(max-width:550px)");
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const [selectedFabric, setSelectedFabric] = useState("");
  const [selectedPlan, setSelectedPlan] = useState("vip");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container bottomDivider footerOnTabMob>
      <CustomSection>
        <Breadcrumb
          path='Home / Men / Blazers / My Bag / Executive Measurement'
          activePath='/ Address'
        />
        <div className={styles.container}>
          <div className={styles.firstContainer}>
            <div>Delivery Address</div>
            <div>
              <div>
                <div>
                  <span>John Hamilton</span>
                  <div>Home</div>
                </div>
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </p>
                <p>
                  <span>Mobile:</span>&nbsp;
                  <span>+91 9595 005067</span>
                </p>
              </div>

              <div>
                <Button
                  variant='contained'
                  color='default'
                  className={styles.editBtn}
                >
                  Edit
                </Button>
                <Button
                  variant='contained'
                  color='default'
                  className={styles.changeBtn}
                >
                  change
                </Button>
              </div>
            </div>
            <div className={styles.btnDiv}>
              <Button
                className={styles.addNewAddressBtn}
                variant='contained'
                color='default'
                endIcon={<AddIcon />}
              >
                Add New Address
              </Button>
            </div>
            <div className={styles.btnDiv} style={{ marginBottom: "2rem" }}>
              <Button
                className={styles.useCurrentLocationBtn}
                variant='contained'
                color='default'
                startIcon={<LocationIcon />}
              >
                Use current location
              </Button>
            </div>
          </div>
          <div className={styles.secondContainer}>
            <div>
              <span>Recommended For You!</span>
              <p>
                Would you like to try some Fabric Samples to touch &amp; feel
                the actual fabric?
              </p>
              <div className={styles.recommendedBtnDiv}>
                <Button
                  variant='contained'
                  color='default'
                  className={styles.yesBtn}
                  onClick={() => {
                    setOpen(true);
                  }}
                >
                  Yes
                </Button>
                <Button
                  variant='contained'
                  color='default'
                  className={styles.noBtn}
                >
                  No
                </Button>
              </div>
            </div>
          </div>
          <div className={styles.lastContainer}>
            <Button
              variant='contained'
              color='default'
              className={styles.proceedBtn}
              onClick={() => {
                history.push("/payment");
              }}
            >
              Proceed
            </Button>
          </div>
        </div>
      </CustomSection>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        className={styles.dialog}
        maxWidth='md'
        fullWidth
        scroll='body'
        transitionDuration={300}
      >
        <div className={styles.dialogFirstContainer}>
          <div>
            {!mobileView && <span>Select Fabric For Sample</span>}
            {!mobileView && (
              <IconButton
                size={mobileView && "small"}
                onClick={() => setOpen(false)}
              >
                <CloseIcon
                  style={{
                    height: mobileView && "20px",
                    width: mobileView && "20px",
                  }}
                />
              </IconButton>
            )}
            {mobileView && (
              <div>
                <IconButton
                  size={mobileView && "small"}
                  onClick={() => setOpen(false)}
                >
                  <CloseIcon
                    style={{
                      height: mobileView && "20px",
                      width: mobileView && "20px",
                    }}
                  />
                </IconButton>
              </div>
            )}

            {mobileView && (
              <div>
                <span>Select Fabric For Sample</span>
                <Button
                  className={styles.filterBtn}
                  startIcon={
                    <FilterIcon
                      style={{
                        height: mobileView && "15px",
                        width: mobileView && "15px",
                      }}
                    />
                  }
                >
                  Filter
                </Button>
              </div>
            )}
          </div>
          <CustomDivider />
          <div>
            <div>
              <input />
              <Button
                variant='contained'
                color='default'
                className={styles.searchBtn}
              >
                Search
              </Button>
            </div>
            {!mobileView && (
              <Button className={styles.filterBtn} startIcon={<FilterIcon />}>
                Filter
              </Button>
            )}
          </div>
          <div>
            <FabricSampleCard />
            <FabricSampleCard />
            <FabricSampleCard />
          </div>
          <div>
            <Button className={styles.loadBtn}>Load More</Button>
          </div>
        </div>
        <div
          style={{ width: "100%", height: "1px", backgroundColor: "#6A5B40" }}
        />
        <div className={styles.dialogLastContainer}>
          <span>Subscribe to get more on U2</span>
          <span>Have a Subscription and get more benifits like:</span>
          <div>
            <Accordion
              style={{
                margin: 0,
                padding: 0,
              }}
              className={styles.accordion}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                IconButtonProps={{ size: "small" }}
                aria-controls='panel1a-content'
                id='panel1a-header'
                style={{
                  margin: 0,
                  padding: "0 10px",
                }}
              >
                <div className={styles.accordionSummaryDiv}>
                  <CustomRadio
                    checked={selectedPlan === "vip"}
                    onClick={() => setSelectedPlan("vip")}
                  />
                  <div>
                    <span>VIP</span>
                    <span>₹554 / Month</span>
                  </div>
                </div>
              </AccordionSummary>
              <AccordionDetails
                style={{
                  background: "#fff",
                  padding: "0 3.3rem",
                  paddingBottom: "1rem",
                }}
              >
                <div className={styles.accrodionDetailsDiv}>
                  <p>Early access to new designs</p>
                  <p>Online measurements</p>
                  <p>
                    <span style={{ display: "inline-block" }}>
                      Stylists support <Link to='/'>T &amp; C</Link> Apply
                    </span>
                  </p>
                </div>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className={styles.dialogPopularDiv}>
            <span>Popular</span>
            <Accordion
              style={{
                margin: 0,
                padding: 0,
              }}
              className={styles.accordion}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                IconButtonProps={{ size: "small" }}
                aria-controls='panel1a-content'
                id='panel1a-header'
                style={{
                  margin: 0,
                  padding: "0 10px",
                }}
              >
                <div className={styles.accordionSummaryDiv}>
                  <CustomRadio
                    checked={selectedPlan === "premium"}
                    onClick={() => setSelectedPlan("premium")}
                  />
                  <div>
                    <span>Premium</span>
                    <span>₹600 / Month</span>
                  </div>
                </div>
              </AccordionSummary>
              <AccordionDetails
                style={{
                  background: "#fff",
                  padding: "0 3.3rem",
                  paddingBottom: "1rem",
                }}
              >
                <div className={styles.accrodionDetailsDiv}>
                  <p>Early access to new designs</p>
                  <p>Online measurements</p>
                  <p>
                    <span style={{ display: "inline-block" }}>
                      Stylists support <Link to='/'>T &amp; C</Link> Apply
                    </span>
                  </p>
                </div>
              </AccordionDetails>
            </Accordion>
            <Accordion
              style={{
                margin: 0,
                padding: 0,
              }}
              className={styles.accordion}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                IconButtonProps={{ size: "small" }}
                aria-controls='panel1a-content'
                id='panel1a-header'
                style={{
                  margin: 0,
                  padding: "0 10px",
                }}
              >
                <div className={styles.accordionSummaryDiv}>
                  <CustomRadio
                    checked={selectedPlan === "platinum"}
                    onClick={() => setSelectedPlan("platinum")}
                  />
                  <div>
                    <span>Platinum</span>
                    <span>₹554 / Month</span>
                  </div>
                </div>
              </AccordionSummary>
              <AccordionDetails
                style={{
                  background: "#fff",
                  padding: "0 3.3rem",
                  paddingBottom: "1rem",
                }}
              >
                <div className={styles.accrodionDetailsDiv}>
                  <p>Early access to new designs</p>
                  <p>Online measurements</p>
                  <p>
                    <span style={{ display: "inline-block" }}>
                      Stylists support <Link to='/'>T &amp; C</Link> Apply
                    </span>
                  </p>
                </div>
              </AccordionDetails>
            </Accordion>
            <Accordion
              style={{
                margin: 0,
                padding: 0,
              }}
              className={styles.accordion}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                IconButtonProps={{ size: "small" }}
                aria-controls='panel1a-content'
                id='panel1a-header'
                style={{
                  margin: 0,
                  padding: "0 10px",
                }}
              >
                <div className={styles.accordionSummaryDiv}>
                  <CustomRadio
                    checked={selectedPlan === "silver"}
                    onClick={() => setSelectedPlan("silver")}
                  />
                  <div>
                    <span>Silver</span>
                    <span>₹554 / Month</span>
                  </div>
                </div>
              </AccordionSummary>
              <AccordionDetails
                style={{
                  background: "#fff",
                  padding: "0 3.3rem",
                  paddingBottom: "1rem",
                }}
              >
                <div className={styles.accrodionDetailsDiv}>
                  <p>Early access to new designs</p>
                  <p>Online measurements</p>
                  <p>
                    <span style={{ display: "inline-block" }}>
                      Stylists support <Link to='/'>T &amp; C</Link> Apply
                    </span>
                  </p>
                </div>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className={styles.dialogProceedBtnDiv}>
            <Button
              className={styles.dialogProceedBtn}
              variant='contained'
              color='default'
            >
              Proceed
            </Button>
          </div>
        </div>
      </Dialog>
    </Container>
  );
}
