import React, { useState, useEffect } from "react";
import { Button, Radio } from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import styles from "./MyAddresses.module.scss";
import { useHistory } from "react-router-dom";
import common_axios from "../../utils/axios.config";
import Geocode from "react-geocode";


const AddNewAddress = () => {

  Geocode.setApiKey("AIzaSyA_nmZVriBFLHl4ZdmN7d_WVr9PEH2sZa4");
  Geocode.setLanguage("en");
  Geocode.setRegion("es");
  Geocode.setLocationType("ROOFTOP");

  const { push } = useHistory();

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [pin, setPin] = useState('')
  const [locality, setLocality] = useState('')
  const [street, setStreet] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [Landmark, setLandmark] = useState('')
  const [alternate_phone, setAlternate_phone] = useState('')
  const [addressType, setAddressType] = useState('Home')

  useEffect(() => {
    fetch_data()
  }, []);

  const fetch_data = async () => {

    const { data } = await common_axios.get('/address/create');

    console.log(data)
  }


  const on_submit = async () => {

    if (name.length < 2) {
      alert("Enter a valid name")
      return;
    }

    if (phone.length != 10) {
      alert("Enter a valid 10 digit mobile number")
      return;
    }

    if (pin.length != 6) {
      alert("Enter a valid pincode")
      return;
    }

    if (locality.length < 2) {
      alert("Enter a valid Locality")
      return;
    }

    if (street.length < 2) {
      alert("Enter a valid street")
      return;
    }

    if (city.length < 2) {
      alert("Enter a valid city")
      return;
    }

    if (state.length < 2 || state == 'Select State') {
      alert("Enter a valid state")
      return;
    }

    try {
      const { data } = await common_axios.post('address/store', {
        address_type: 'Primary',
        address_line_1: street,
        city,
        zip_code: pin,
        phone,
        name,
        locality,
        state,
        landmark: Landmark,
        alternate_phone
      });

      if (data) {
        push('/myaddresses')
      }
    } catch (e) {
      console.log(e?.response?.data)
    }

  }

  const getLocation = () => {
    const location = window.navigator && window.navigator.geolocation

    if (location) {
      location.getCurrentPosition((position) => {
        Geocode.fromLatLng(position.coords.latitude, position.coords.longitude).then(
          (response) => {
            console.log(response.status)
            if (response.status == 'OK') {
              setStreet(response.results[0].formatted_address)
              const letVar = response.results[0].address_components
              letVar.forEach((item) => {
                item.types.forEach((qr) => {
                  if (qr === 'locality') {
                    setLocality(item.long_name)
                  }
                  if (qr === 'administrative_area_level_2') {
                    setCity(item.long_name)
                  }
                  if (qr === 'administrative_area_level_1') {
                    setState(item.long_name)
                  }
                  if (qr === 'postal_code') {
                    setPin(item.long_name)
                  }
                })
              })
            }
          },
          (error) => {
            console.error(error);
          }
        );
      }, (error) => {
        console.log(error)
        //this.setState({ latitude: 'err-latitude', longitude: 'err-longitude' })
      })
    }
  }


  return (
    <div className={styles.AddNewAddress}>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className={styles.AddNewAddress_Top}>
          <label>Add new address</label>
          <Button onClick={getLocation}>
            <LocationOnIcon />
            <span>Use current location</span>
          </Button>
        </div>
        <div className={styles.AddNewAddress_Inputs}>
          <Inputs onChange={(e) => setName(e.target.value)} label="Name" placeholder="Input" />
          <Inputs onChange={(e) => setPhone(e.target.value)} label="Mobile" placeholder="Input" />
          <Inputs value={pin} onChange={(e) => setPin(e.target.value)} label="Pincode" placeholder="Input" />
          <Inputs value={locality} onChange={(e) => setLocality(e.target.value)} label="Locality" placeholder="Input" />
        </div>
        <div className={styles.AddNewAddress_textarea}>
          <label>Address area and street</label>
          <textarea value={street} onChange={(e) => setStreet(e.target.value)} placeholder={"input"}></textarea>
        </div>
        <div className={styles.AddNewAddress_Inputs}>
          <Inputs value={city} onChange={(e) => setCity(e.target.value)} label="City / Disrict / Town" placeholder="Input" />
          <Select value={state} onChange={(e) => setState(e.target.value)} label="State" />
          <Inputs value={Landmark} onChange={(e) => setLandmark(e.target.value)} label="Landmark (optional)" placeholder="Input" />
          <Inputs value={alternate_phone} onChange={(e) => setAlternate_phone(e.target.value)} label="Alternate Phone (optional)" placeholder="Input" />
        </div>

        <div className={styles.AddNewAddress_Type}>
          <label>Address type</label>
          <div className={styles.AddNewAddress_Type_checkbox}>
            <div>
              <Radio
                checked={addressType == 'Home' ? true : false}
                value="Home"
                onChange={(e) => setAddressType(e.target.value)}
                name="radio-button-demo"
                inputProps={{ "aria-label": "A" }}
              />
              <p>Home (All day delivery)</p>
            </div>
            <div>
              <Radio
                onChange={(e) => setAddressType(e.target.value)}
                checked={addressType == 'Office' ? true : false}
                value="Office"
                name="radio-button-demo"
                inputProps={{ "aria-label": "A" }}
              />
              <p>Office delivey (Delivery between 10am to 5pm)</p>
            </div>
          </div>
        </div>
        <div className={styles.AddNewAddress_Submit}>
          <Button onClick={() => on_submit()} type="submit">
            Save and deliver here
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddNewAddress;

//Here Custom Components
const Inputs = ({ label, placeholder, onChange, value }) => {
  return (
    <div>
      <label>{label}</label>
      <input value={value} type="text" placeholder={placeholder} onChange={onChange} />
    </div>
  );
};


const Select = ({ label, placeholder, onChange, value }) => {
  return (
    <div>
      <label>{label}</label>
      <select value={value} onChange={onChange}>
        {states.map((item) => {
          return (
            <option value={item}>{item}</option>
          )
        })}
      </select>
    </div>
  );
};

export const Custom_Checkbox = () => {
  const [isChecked, setisChecked] = useState(false);
  const checkBox_Handler = () => {
    setisChecked(!isChecked);
  };
  return (
    <span onClick={checkBox_Handler} id={styles.AddNewAddress_Type_checkbox_2}>
      {isChecked ? <span></span> : null}
    </span>
  );
};

const states = [
  "Select State",
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jammu and Kashmir",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttarakhand",
  "Uttar Pradesh",
  "West Bengal",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli",
  "Daman and Diu",
  "Delhi",
  "Lakshadweep",
  "Puducherry"]
