import React from "react";
import styles from "./Profile.module.scss";
const ProfileEdit = () => {
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
            defaultValue="Steve Jobs"
            type="text"
            placeholder="Enter your username..."
            required
          />
        </div>
        <div>
          <label>Email ID</label>
          <input
            defaultValue="stevejobs@gmail.com"
            type="email"
            placeholder="Enter your email..."
            required
          />
        </div>
        <div>
          <label>Phone number</label>
          <input
            defaultValue="+919876543210"
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
