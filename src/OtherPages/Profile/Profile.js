import React from "react";
import { Link } from "react-router-dom";
import styles from "./Profile.module.scss";
import { useDispatch, useSelector } from "react-redux";


const Profile = () => {

  const { user_data } = useSelector(state => state.root.main)

  const profileImg =
    "https://cdn.pixabay.com/photo/2017/08/06/15/13/woman-2593366__340.jpg";


  return (
    <div className={styles.Profile}>
      <div className={styles.Profile_Image}>
        <img src={profileImg} alt="userAvatar" />
        <Link to="ProfileEdit">Edit</Link>
      </div>
      <div className={styles.Profile_Details}>
        <div>
          <p>Username</p>
          <h2>{user_data.name}</h2>
        </div>
        <div>
          <p>Email ID</p>
          <h2>{user_data.email}</h2>
        </div>
        <div>
          <p>Phone Number</p>
          <h2>{user_data.phone_no}</h2>
        </div>
      </div>
    </div>
  );
};

export default Profile;
