import styles from './BottomNavigation.module.scss';

import {
  Button,
  FormControl,
  Select,
  MenuItem,
  IconButton,
  useMediaQuery,
  Drawer,
  List,
  SwipeableDrawer,
  ListItem,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@material-ui/core';
import { BiHomeAlt } from 'react-icons/bi';
import { CgAddR } from 'react-icons/cg';
import { AiFillMediumCircle } from 'react-icons/ai';
import { IoNavigateCircleOutline, IoPersonOutline } from 'react-icons/io5';
import { Link, useLocation, useHistory } from 'react-router-dom';

import { useState } from 'react';
import SideNavbar from '../Side-Navbar/sideNavbar';
import cx from 'classnames';
import PersonIcon from '../../Images/icons/person.svg';
import FavoriteIcon from '../../Images/icons/favorite.svg';
import BagIcon from '../../Images/icons/bag.svg';
import SearchIcon from '../../Images/icons/search.svg';
import HamMenuIcon from '../../Images/icons/hamMenu.svg';
import SearchDarkIcon from '../../Images/icons/searchDark.svg';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// ICONS
import { ReactComponent as Home } from '../../Images/bottomNav/home.svg';
import { ReactComponent as Categories } from '../../Images/bottomNav/categories.svg';
import { ReactComponent as Measurement } from '../../Images/bottomNav/measurement.svg';
import { ReactComponent as Explore } from '../../Images/bottomNav/explore.svg';
import { ReactComponent as Profile } from '../../Images/bottomNav/profile.svg';

const BottomNavigation = () => {
  const details = [
    {
      title: 'Home',
      icon: <Home />,
      to: '/',
    },
    {
      title: 'category',
      icon: <Categories />,
      to: '/',
    },
    {
      title: 'measurement',
      icon: <Measurement style={{}} />,
      to: '/',
    },
    { title: 'date', icon: <Explore />, to: '/' },
    { title: 'time', icon: <Profile />, to: '/' },
  ];

  const [activeNav, setActiveNav] = useState(0);
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [isDrawerOpen2, setDrawerOpen2] = useState(false);
  const history = useHistory();
  const mobileView = useMediaQuery('(max-width:550px)');
  const location = useLocation();
  const [currency, setCurrency] = useState('INR');
  const toggleDrawer = (anchor, open) => event => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setDrawerOpen(open);
    setDrawerOpen2(open);
  };

  // const profileFnc = () => {
  //   if (Object.keys(user_data)?.length != 0) {
  //     history.push('/profile');
  //   } else {
  //     login_Model_Show();
  //   }
  // };
  return (
    <div className={styles.NavContainer}>
      {details.map((item, i) => {
        return (
          <Button
            onClick={() => {
              setActiveNav(i);
              if (i === 1) {
                setDrawerOpen(true);
              }
              if (i === 4) {
                setDrawerOpen2(true);
              }
            }}
            className={`${styles.btnContainer}`}
            style={{
              width: '100%',
              height: '100%',
            }}
          >
            <Link
              className={`${
                activeNav === i && activeNav !== 1 && activeNav !== 4
                  ? styles.active
                  : ''
              }`}
            >
              {item.title === 'measurement' ? (
                <div class={styles.background}>
                  <div className={styles.svgStyle}>{item.icon}</div>
                </div>
              ) : (
                <div div className={styles.svg}>
                  {item.icon}
                </div>
              )}
            </Link>
          </Button>
        );
      })}

      <>
        <SwipeableDrawer
          anchor={'right'}
          open={isDrawerOpen2}
          onClose={toggleDrawer('right', false)}
          onOpen={toggleDrawer('right', true)}
          transitionDuration={600}
        >
          <div>
            <SideNavbar />
          </div>
        </SwipeableDrawer>
        <SwipeableDrawer
          anchor={'left'}
          open={isDrawerOpen}
          onClose={toggleDrawer('left', false)}
          onOpen={toggleDrawer('left', true)}
          transitionDuration={600}
        >
          <SideNavbar main />
        </SwipeableDrawer>
      </>
    </div>
  );
};

export default BottomNavigation;

export const ButtonContainer = ({ children, i }) => {
  return <Button style={{ width: '100%', height: '100%' }}>{children}</Button>;
};
