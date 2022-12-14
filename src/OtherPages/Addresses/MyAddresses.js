import React, { useEffect, useState } from "react";
import styles from "./MyAddresses.module.scss";
import { Button, Radio, useMediaQuery, useTheme } from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { get_my_address } from "../../Redux/actions/profile";


const MyAddresses = () => {

  const dispatch = useDispatch()
  const { address } = useSelector(state => state.root.profile)

  useEffect(() => {
    dispatch(get_my_address())
  }, []);

  if (address.length == 0) {
    return <MyAddresses_Home />
  }

  return <MyAddresses_Cards data={address} />;
};

export default MyAddresses;

//When No Address Added
const MyAddresses_Home = () => {
  const { push } = useHistory();
  return (
    <>
      <div className={styles.MyAddresses}>
        <div>
          {/* Here Image Src a Location Icon */}
          <img
            src="https://cdn.pixabay.com/photo/2017/02/04/12/25/man-2037255__340.jpg"
            alt="location"
          />
        </div>
        <div>
          <h2>Where should we deliver?</h2>
          <p>
            Add multiple addresses fro Home, work or other pieses you would like
            us to deliver.
          </p>
        </div>
        <div>
          <button onClick={() => push("/addNewaddress")}>
            Add My Addresses
          </button>
        </div>
      </div>
    </>
  );
};

//When Address Added
const MyAddresses_Cards = ({ data }) => {
  let customText =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat excepturi voluptas officia porro dolorum, dignissimos voluptates iste.";
  return (
    <div className={styles.MyAddresses_Cards}>
      <div className={styles.MyAddresses_Cards_Box}>
        <Add_New_Address_Card />
        {data.map((item) => {
          return (
            <Old_Address_Card
              CardName={item.name}
              Mobile={item.phone}
              Address={item.address_line_1}
            />
          )
        })}
      </div>
    </div>
  );
};

const Add_New_Address_Card = () => {
  const { push } = useHistory();

  return (
    <Button
      onClick={() => push("/addNewaddress")}
      className={styles.MyAddresses_Cards_Box_Button}
    >
      <div>
        <span>
          <LocationOnIcon />
        </span>
        <span>Add new Address</span>
      </div>
    </Button>
  );
};

const Old_Address_Card = ({ CardName, Mobile, Address }) => {
  const Theme = useTheme();
  const match = useMediaQuery(Theme.breakpoints.down("sm"));
  return (
    <div className={styles.Old_Address_Card}>
      <div className={styles.Old_Address_Card_Top}>
        <div className={styles.Old_Address_Card_Top_checkbox}>
          <Radio
            value="a"
            name="radio-button-demo"
            inputProps={{ "aria-label": "A" }}
          />
        </div>
        <h2>{CardName}</h2>
        <button>Home</button>
        <button>Default</button>
      </div>
      <div className={styles.Old_Address_Card_Middle}>
        <p>{Address}</p>
        <p>
          <b>Mobile:</b>
          {Mobile}
        </p>
      </div>
      {match ? (
        <div className={styles.Old_Address_Card_Bottom}>
          <Button>Edit</Button>
          <Button>Delete</Button>
        </div>
      ) : (
        <div className={styles.Old_Address_Card_Bottom}>
          <Button>Edit</Button>
          <Button>Delete</Button>
        </div>
      )}
    </div>
  );
};
