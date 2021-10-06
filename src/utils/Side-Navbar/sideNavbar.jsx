import React, { useEffect, useState } from "react";

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
// import { navItems } from './NavData';

// MAIN
import {
  Button,
  FormControl,
  Select,
  MenuItem,
  IconButton,
  useMediaQuery,
  List,
  ListItem,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";

import { Link, useLocation, useHistory } from "react-router-dom";
import cx from "classnames";
import PersonIcon from "../../Images/icons/person.svg";
import FavoriteIcon from "../../Images/icons/favorite.svg";
import BagIcon from "../../Images/icons/bag.svg";
import SearchIcon from "../../Images/icons/search.svg";
import HamMenuIcon from "../../Images/icons/hamMenu.svg";
import SearchDarkIcon from "../../Images/icons/searchDark.svg";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { getCategorySubGroup } from "../../Redux/actions/designerHomePage";

const navItems = [
  { name: "Designers", icon: designersIcon, path: "/designers/" },
  { name: "Measurement", icon: mesurementIcon, path: "/measurement/" },
  // { name: "Simulated (Mirror)", icon: simulatedIcon, path: "/simulated/" },
  // { name: "Customized ", icon: customizedIcon, path: "/customized/" },
  { name: "Offers", icon: offersIcon, path: "/offers/" },
  // { name: 'Subscription', icon: subscriptionIcon, path: '/subscription/' },
  { name: "Reward", icon: rewardIcon, path: "/reward/" },
  { name: "Orders", icon: ordersIcon, path: "/all-orders" },
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

export default function SideNavbar({ main }) {
  const dispatch = useDispatch();
  // Main
  const [activeNav, setActiveNav] = useState(0);
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [isDrawerOpen2, setDrawerOpen2] = useState(false);
  const history = useHistory();
  const mobileView = useMediaQuery("(max-width:550px)");
  const location = useLocation();
  const [currency, setCurrency] = useState("INR");

  // Profile
  const [logoutModal, setLogoutModal] = useState(false);
  const { category_subgrp } = useSelector((state) => state.root.main);
  const { user } = useSelector((state) => state.root.auth);

  useEffect(() => {
    dispatch(getCategorySubGroup("mens"));
    dispatch(getCategorySubGroup("womens"));
    dispatch(getCategorySubGroup("kids"));
  }, [dispatch]);

  const logoutHandler = () => {
    dispatch(logout());
    setLogoutModal(false);
    alert("Logout Successuful");
    history.push("/");
  };
  console.log(category_subgrp);
  return (
    <>
      {main ? (
        <List style={{ width: mobileView ? "70vw" : "40vw" }}>
          <ListItem style={{ display: "flex", alignItems: "center" }}>
            <FormControl
              style={{
                width: "auto",
                boxShadow: "none",
              }}
            >
              <Select
                disableUnderline
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
              >
                <MenuItem selected value="INR">
                  <b>India(₹)</b>
                </MenuItem>
                <MenuItem value="USD">
                  <b>US($)</b>
                </MenuItem>
                <MenuItem value="JPY">
                  <b>Japan(¥)</b>
                </MenuItem>
              </Select>
            </FormControl>
            {/* <IconButton onClick={profileFnc} aria-label='my account'>
                  <img src={PersonIcon} alt='my account' />
                </IconButton> */}
            <IconButton aria-label="favorites">
              <img src={FavoriteIcon} alt="favorites" />
            </IconButton>
            <IconButton
              onClick={() => history.push("/my-bag")}
              aria-label="my bag"
            >
              <img src={BagIcon} alt="my bag" />
            </IconButton>
          </ListItem>
          <ListItem style={{ height: "64px" }}>
            <Link className={cx(styles.links, styles.menuItem)}>
              New arrivals
            </Link>
          </ListItem>
          {category_subgrp.mens && (
            <SideMobileMenuAccordian
              title="Men"
              slug="mens"
              category={category_subgrp.mens}
            />
          )}
          {category_subgrp.womens && (
            <SideMobileMenuAccordian
              title="Women"
              slug="womens"
              category={category_subgrp.womens}
            />
          )}
          {category_subgrp.kids && (
            <SideMobileMenuAccordian
              title="Kids"
              slug="kids"
              category={category_subgrp.kids}
            />
          )}
          {/* {category_subgrp.mens && (
            <ListItem>
              <Accordion className={styles.accordion}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon size="small" />}
                  className={styles.accordionSummary}
                >
                  <span className={styles.menuItem}>
                    <Link to="wear/mens">Men</Link>
                  </span>
                </AccordionSummary>
                <AccordionDetails className={styles.accordionDetials}>
                  <div className={styles.subMenuItems}>
                    {category_subgrp.mens.sub_grp.map(({ categories }, i) =>
                      categories.map(({ name, id }) => (
                        <Link key={id} to={`/`}>
                          {name}
                        </Link>
                      ))
                    )}
                  </div>
                </AccordionDetails>
              </Accordion>
            </ListItem>
          )} */}

          <ListItem>
            <Accordion className={styles.accordion}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon size="small" />}
                className={styles.accordionSummary}
              >
                <span className={styles.menuItem}>
                  <Link to="/wear/mens">Men</Link>
                </span>
              </AccordionSummary>
              <AccordionDetails className={styles.accordionDetials}>
                <div className={styles.subMenuItems}>
                  <Link>Indian fusion wear</Link>
                  <Link>western wear</Link>
                  <Link>Bottom wear</Link>
                  <Link>Bottom wear</Link>
                </div>
              </AccordionDetails>
            </Accordion>
          </ListItem>
          <ListItem>
            <Accordion className={styles.accordion}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon size="small" />}
                className={styles.accordionSummary}
              >
                <span className={styles.menuItem}>
                  <Link to="/wear/womens">Women</Link>
                </span>
              </AccordionSummary>
              <AccordionDetails className={styles.accordionDetials}>
                <div className={styles.subMenuItems}>
                  <Link>Indian fusion wear</Link>
                  <Link>western wear</Link>
                  <Link>Bottom wear</Link>
                  <Link>Bottom wear</Link>
                </div>
              </AccordionDetails>
            </Accordion>
          </ListItem>
          <ListItem>
            <Accordion className={styles.accordion}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon size="small" />}
                className={styles.accordionSummary}
              >
                <span className={styles.menuItem}>
                  <Link to="/wear/kids">Kids</Link>
                </span>
              </AccordionSummary>
              <AccordionDetails className={styles.accordionDetials}>
                <div className={styles.subMenuItems}>
                  <Link>Indian fusion wear</Link>
                  <Link>western wear</Link>
                  <Link>Bottom wear</Link>
                  <Link>Bottom wear</Link>
                </div>
              </AccordionDetails>
            </Accordion>
          </ListItem>
          <ListItem>
            <Accordion className={styles.accordion}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon size="small" />}
                className={styles.accordionSummary}
              >
                <span className={styles.menuItem}>
                  {" "}
                  <Link to="/designers">Designers</Link>
                </span>
              </AccordionSummary>
              <AccordionDetails className={styles.accordionDetials}>
                <div className={styles.subMenuItems}>
                  <Link>Indian fusion wear</Link>
                  <Link>western wear</Link>
                  <Link>Bottom wear</Link>
                  <Link>Bottom wear</Link>
                </div>
              </AccordionDetails>
            </Accordion>
          </ListItem>
          <ListItem style={{ height: "64px" }}>
            <Link to="/" className={cx(styles.links, styles.menuItem)}>
              Contempory
            </Link>
          </ListItem>
          <ListItem style={{ height: "64px" }}>
            <Link to="/offers" className={cx(styles.links, styles.menuItem)}>
              Offers
            </Link>
          </ListItem>
          <ListItem style={{ height: "64px" }}>
            <Link to="/" className={cx(styles.links, styles.menuItem)}>
              More
            </Link>
          </ListItem>
        </List>
      ) : (
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
              <img
                src={
                  user.avatar ||
                  "https://www.gravatar.com/avatar/ce4e1fb0cdab055e0cee3499613e0e6c?s=100&d=mm"
                }
                alt="profile"
              />
              <div>
                <span>{user.nice_name}</span>
                <span>{user.email}</span>
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
      )}
    </>
  );
}

const SideMobileMenuAccordian = ({ title, slug, category }) => {
  console.log(category);
  return (
    <ListItem>
      <Accordion className={styles.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon size="small" />}
          className={styles.accordionSummary}
        >
          <span className={styles.menuItem}>
            <Link to={`/wear/${slug}`}>{title}</Link>
          </span>
        </AccordionSummary>
        <AccordionDetails className={styles.accordionDetials}>
          <div className={styles.subMenuItems}>
            {category.sub_grp.map(({ categories }, i) =>
              categories.map(({ name, id }) => (
                <Link
                  key={id}
                  to={`/designers-product-page/${slug}/${name.toLowerCase()}`}
                >
                  {name.toUpperCase()}
                </Link>
              ))
            )}
          </div>
        </AccordionDetails>
      </Accordion>
    </ListItem>
  );
};
