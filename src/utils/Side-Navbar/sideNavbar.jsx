import React from "react";
import IconButton from "@material-ui/core/IconButton";
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
];

export default function SideNavbar() {
  const profileImg =
    "https://images.pexels.com/photos/5257599/pexels-photo-5257599.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
  return (
    <div className={styles.container}>
      <div className={styles.breadcrumbDiv}>
        <Breadcrumb path="Home /" activePath="Profile" />
      </div>

      <div className={styles.profileDiv}>
        <img src={profileImg} alt="profile" />
        <div>
          <span>Robert Maxwell</span>
          <span>example@example.com</span>
        </div>
        <IconButton aria-label="settings">
          <img src={settingsIcon} alt="settings" />
        </IconButton>
      </div>
      <div className={styles.navItemsDiv}>
        {navItems.map((item) => (
          <div className={styles.navItem}>
            <img src={item.icon} alt={item.name} />
            <Link to={item.path}>{item.name}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
