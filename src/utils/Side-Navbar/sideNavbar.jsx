import React, { useState } from "react";
import { IconButton, Button } from "@material-ui/core";
import { Link, useLocation } from "react-router-dom";
import Breadcrumb from "../Breadcrumb/breadcrumb";
import styles from "./sideNavBar.module.scss";
//Icons
import settingsIcon from "../../Images/side-navbar/settings.svg";
import designersIcon from "../../Images/side-navbar/designers.svg";
import mesurementIcon from "../../Images/side-navbar/measurement.svg";
import simulatedIcon from "../../Images/side-navbar/simulated.svg";
import customizedIcon from "../../Images/side-navbar/customized.svg";
import offersIcon from "../../Images/side-navbar/offers.svg";
import subscriptionIcon from "../../Images/side-navbar/subscription.svg";
import rewardIcon from "../../Images/side-navbar/reward.svg";
import ordersIcon from "../../Images/side-navbar/orders.svg";
import myReviewsIcon from "../../Images/side-navbar/myReviews.svg";
import wishlistIcon from "../../Images/side-navbar/wishlist.svg";
import myAddressIcon from "../../Images/side-navbar/myAddress.svg";
import paymentsIcon from "../../Images/side-navbar/payements.svg";
import chatExpertIcon from "../../Images/side-navbar/chat.svg";
import aboutUsIcon from "../../Images/side-navbar/aboutUs.svg";
import contactUsIcon from "../../Images/side-navbar/contactUs.svg";
import supportIcon from "../../Images/side-navbar/support.svg";
import logoutIcon from "../../Images/side-navbar/logout.svg";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Redux/actions/auth";
import lock from "./Lock.svg";
import close from "./close.svg";
const navItems = [
  { name: "Designers", icon: designersIcon, path: "/designers/" },
  { name: "Measurement", icon: mesurementIcon, path: "/measurement/" },
  { name: "Simulated (Mirror)", icon: simulatedIcon, path: "/simulated/" },
  { name: "Customized ", icon: customizedIcon, path: "/customized/" },
  { name: "Offers", icon: offersIcon, path: "/offers/" },
  { name: "Subscription", icon: subscriptionIcon, path: "/subscription/" },
  { name: "Reward", icon: rewardIcon, path: "/reward/" },
  { name: "Orders", icon: ordersIcon, path: "/orders/" },
  { name: "My Reviews", icon: myReviewsIcon, path: "/review/" },
  { name: "Wishlist", icon: wishlistIcon, path: "/wishlist/" },
  { name: "My Addresses", icon: myAddressIcon, path: "/myaddresses/" },
  { name: "Payments", icon: paymentsIcon, path: "/payments/" },
  { name: "Chat Expert", icon: chatExpertIcon, path: "/chatexpert" },
  { name: "About us", icon: aboutUsIcon, path: "/aboutus/" },
  { name: "Contact Us", icon: contactUsIcon, path: "/contactus/" },
  { name: "Support", icon: supportIcon, path: "/support/" },
  { name: "Logout", icon: logoutIcon, fun: true },
];

export default function SideNavbar() {
  const dispatch = useDispatch();

  const [logoutModal, setLogoutModal] = useState(false);
  const { user_data } = useSelector((state) => state.root.main);

  const logoutHandler = () => {
    dispatch(logout());
    alert("Logout Successuful");
  };

  return (
    <>
      {logoutModal ? (
        <div className={styles.LogoutModal}>
          <div className={styles.modal}>
            <IconButton
              className={styles.CloseBtn}
              onClick={() => setLogoutModal(false)}
            >
              <img src={close} />
            </IconButton>
            <img src={lock} className={styles.Img} />
            <h2>Are you sure you want to logout?</h2>
            <Button className={styles.YesBtn} onClick={logoutHandler}>
              Yes
            </Button>
            <Button
              className={styles.NoBtn}
              onClick={() => setLogoutModal(false)}
            >
              No
            </Button>
          </div>
        </div>
      ) : (
        <></>
      )}
      <div className={styles.container}>
        <div className={styles.breadcrumbDiv}>
          <Breadcrumb path="Home /" activePath="Profile" />
        </div>

        <div className={styles.profileDiv}>
          <img src={user_data.avatar} alt="profile" />
          <div>
            <span>{user_data.nice_name}</span>
            <span>{user_data.email}</span>
          </div>
          <IconButton aria-label="settings">
            <img src={settingsIcon} alt="settings" />
          </IconButton>
        </div>
        <div className={styles.navItemsDiv}>
          {navItems?.map((item) => (
            <div
              className={styles.navItem}
              onClick={
                item.fun
                  ? () => {
                      setLogoutModal(!logoutModal);
                    }
                  : {}
              }
            >
              <img src={item.icon} alt={item.name} />
              <Link to={item.path}>{item.name}</Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
