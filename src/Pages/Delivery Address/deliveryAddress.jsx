import React, { useState, useEffect } from "react";
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
import CustomStepper from "../../utils/Stepper/stepper";
import common_axios from "../../utils/axios.config";
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
  const [address, setAddress] = useState([])

  useEffect(() => {
    fetch_address()
  }, []);

  const fetch_address = async () => {
    const { data } = await common_axios.get('/addresses')
    if (data.data) {
      setAddress(data.data)
    }
    console.log(data)
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container bottomDivider footerOnTabMob>
      <CustomSection style={{ marginTop: "1em" }} >
        <Breadcrumb
          path='Home / Men / Blazers / My Bag / Executive Measurement'
          activePath='/ Address'
        />
        <CustomStepper activeStep={0} />

        <div className={styles.container}>
          <div className={styles.firstContainer}>
            <div>Delivery Address</div>
            {address.map((item) => {
              return (
                <div className={styles.mainDiv} >
                  <div>
                    <div>
                      <span>{item.name}</span>
                      <div>{item.address_type}</div>
                    </div>
                    <p>
                      {`${item.address_line_1}, ${item.city}, ${item.zip_code}`}
                    </p>
                    <p>
                      <span>Mobile:</span>&nbsp;
                      <span>{item.phone}</span>
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
              )
            })}
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

    </Container>
  );
}
