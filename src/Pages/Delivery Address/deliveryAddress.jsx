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
import NewAddress from "./Components/fabric-sample-card/NewAddress";
import { useDispatch } from "react-redux";
import { getMyAddresses } from "../../Redux/actions/address";
import { useSelector } from "react-redux";
const CustomRadio = withStyles({
  root: {
    color: "#9D9D9D",
    "&$checked": {
      color: "#857250",
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export default function DeliveryAddress({
  match: {
    params: { cartId },
  },
}) {
  const dispatch = useDispatch();
  const tabView = useMediaQuery("(max-width:768px)");
  const mobileView = useMediaQuery("(max-width:550px)");
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const [NewAddressSection, setNewAddressSection] = useState(false);
  const [selectedFabric, setSelectedFabric] = useState("");
  const [selectedPlan, setSelectedPlan] = useState("vip");
  const [address, setAddress] = useState([]);
  const [selectAddress, setSelectAddress] = useState(null);
  const { addressList } = useSelector((state) => state.root.myAddresses);
  console.log(addressList);
  useEffect(() => {
    dispatch(getMyAddresses());
  }, [dispatch]);

  const confirmAddress = async () => {
    try {
      if (!selectAddress) return alert("Select an address before proceeding.");
      const { data } = await common_axios.get(
        `/assign_address/${cartId}/${selectAddress}`
      );
      console.log(data);
      if (data === "Added...") history.push(`/order-summary`);
    } catch (error) {
      console.log(error);
      alert(error.response.data);
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getLocation = () => {
    const location = window.navigator && window.navigator.geolocation

    if (location) {
      location.getCurrentPosition((position) => {
        console.log(position)
      }, (error) => {
        console.log(error)
        //this.setState({ latitude: 'err-latitude', longitude: 'err-longitude' })
      })
    }
  }

  return (
    <Container bottomDivider footerOnTabMob>
      <CustomSection style={{ marginTop: "1em" }}>
        <Breadcrumb path="Home / My Bag" activePath="/ Delivery Address" />
        <CustomStepper activeStep={0} />
        {NewAddressSection ? (
          <NewAddress setAddAddress={setNewAddressSection} />
        ) : (
          <div className={styles.container}>
            <div className={styles.firstContainer}>
              <div>Delivery Address</div>
              {addressList &&
                addressList.map((item) => {
                  return (
                    <div className={styles.mainDiv}>
                      <div className={styles.radioDiv}>
                        <CustomRadio
                          checked={selectAddress === item.id}
                          onClick={() => setSelectAddress(item.id)}
                        />
                      </div>
                      <div className={styles.firstAftermain}>
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
                          variant="contained"
                          color="default"
                          className={styles.editBtn}
                        >
                          Edit
                        </Button>
                        <Button
                          variant="contained"
                          color="default"
                          className={styles.changeBtn}
                        >
                          Delete
                        </Button>
                      </div>
                    </div>
                  );
                })}
              <div className={styles.btnDiv}>
                <Button
                  className={styles.addNewAddressBtn}
                  variant="contained"
                  color="default"
                  endIcon={<AddIcon />}
                  onClick={() => setNewAddressSection(!NewAddressSection)}
                >
                  Add New Address
                </Button>
              </div>

              <div className={styles.btnDiv} style={{ marginBottom: "2rem" }}>
                <Button
                  className={styles.useCurrentLocationBtn}
                  variant="contained"
                  color="default"
                  onClick={getLocation}
                  startIcon={<LocationIcon />}
                >
                  Use current location
                </Button>
              </div>
            </div>
            <div className={styles.lastContainer}>
              <Button
                variant="contained"
                color="default"
                className={styles.proceedBtn}
                onClick={confirmAddress}
              >
                Proceed
              </Button>
            </div>
          </div>
        )}
      </CustomSection>
    </Container>
  );
}
