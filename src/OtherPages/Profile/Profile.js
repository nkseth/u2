import React from "react";
import { Link } from "react-router-dom";
import styles from "./Profile.module.scss";
const Profile = () => {
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
          <h2>Hello</h2>
        </div>
        <div>
          <p>Email ID</p>
          <h2>example@gmail.com</h2>
        </div>
        <div>
          <p>Phone Number</p>
          <h2>+91987654321</h2>
        </div>
      </div>
    </div>
  );
};

export default Profile;
