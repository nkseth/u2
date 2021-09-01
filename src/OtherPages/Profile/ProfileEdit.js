import React, { useState, useEffect } from "react";
import styles from "./Profile.module.scss";
import { useDispatch, useSelector } from "react-redux";


const ProfileEdit = () => {

  const { user_data } = useSelector(state => state.root.main)

  const [ name, setName ] = useState('')
  const [email, setEmail] = useState('')
  const [phone_no, setPhoneNo] = useState('')

  useEffect(()=> {
    setName(user_data.name)
    setEmail(user_data.email)
    setPhoneNo(user_data.phone_no)
  },[])

  const profileImg =
    "https://cdn.pixabay.com/photo/2017/08/06/15/13/woman-2593366__340.jpg";
  return (
    <div className={styles.ProfileEdit}>
      <div className={styles.ProfileEdit_Image}>
        <input id="UserAvatar" style={{ display: "none" }} type="file" />
        <label htmlFor="UserAvatar">
          <img src={profileImg} alt="userAvatar" />
          <span id={styles.ProfileEdit_Label}>EDIT</span>
        </label>
      </div>
      <form className={styles.ProfileEdit_Details}>
        <div>
          <label>Username</label>
          <input
            defaultValue={name}
            type="text"
            placeholder="Enter your username..."
            required
          />
        </div>
        <div>
          <label>Email ID</label>
          <input
            defaultValue={email}
            type="email"
            placeholder="Enter your email..."
            required
          />
        </div>
        <div>
          <label>Phone number</label>
          <input
            defaultValue={phone_no}
            type="text"
            maxLength={"10"}
            required
            placeholder="Enter your phone number..."
          />
        </div>
        <div>
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  );
};

export default ProfileEdit;
