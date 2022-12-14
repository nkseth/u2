import styles from './BottomNavigation.module.scss';

import { Button, useMediaQuery, SwipeableDrawer } from '@material-ui/core';

import { Link, useLocation, useHistory } from 'react-router-dom';

import { useEffect, useState } from 'react';
import SideNavbar from '../Side-Navbar/sideNavbar';

// ICONS
import { ReactComponent as Home } from '../../Images/bottomNav/home.svg';
import { ReactComponent as Categories } from '../../Images/bottomNav/categories.svg';
import { ReactComponent as Measurement } from '../../Images/bottomNav/measurement.svg';
import { ReactComponent as Explore } from '../../Images/bottomNav/explore.svg';
import { ReactComponent as Profile } from '../../Images/bottomNav/profile.svg';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import useLogin from '../../LoginSceens/useLogin';

const BottomNavigation = () => {
  const dispatch = useDispatch();

  const details = [
    {
      title: 'Home',
      icon: <Home />,
      to: '/',
    },
    {
      title: 'category',
      icon: <Categories />,
      to: `/mobile-category`,
    },
    {
      title: 'measurement',
      icon: <Measurement style={{}} />,
    },
    { title: 'date', icon: <Explore />, to: '/' },
    { title: 'time', icon: <Profile /> },
  ];

  const [activeNav, setActiveNav] = useState(0);
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [isUserDrawerOpen, setUserDrawerOpen] = useState(false);
  const history = useHistory();
  const mobileView = useMediaQuery('(max-width:550px)');
  const location = useLocation();

  const bottomNavVisible =
    location.pathname === '/' ||
    location.pathname === '/wear/mens' ||
    location.pathname === '/wear/women' ||
    location.pathname === '/wear/kids';

  const [currency, setCurrency] = useState('INR');
  const [showUserOption, setShowUserOption] = useState(false);

  const toggleDrawer = (anchor, open) => event => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setDrawerOpen(open);
    setUserDrawerOpen(open);
  };

  const [scroll, setScroll] = useState(0);

  const handleScroll = e => {
    // console.log(window.scrollY);
    setScroll(window.scrollY);
  };

  const { isAuthenticated, loading } = useSelector(state => state.root.auth);
  const { login_Model_Show } = useLogin();
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, [scroll]);

  const profileFnc = () => {
    if (isAuthenticated) {
      setShowUserOption(true);
      setUserDrawerOpen(true);
      // history.push("/profile");
    } else {
      login_Model_Show();
    }
  };

  const handleNavigation = (name, to) => {
    console.log(
      '???? ~ file: BottomNavigation.jsx ~ line 95 ~ handleNavigation ~ name',
      name
    );
    if (name === 'measurement') {
      console.log(
        '???? ~ file: BottomNavigation.jsx ~ line 95 ~ handleNavigation ~ to',
        to
      );
      if (isAuthenticated) {
        history.push('/measurement');
      } else {
        login_Model_Show();
      }
    }

    history.push(to);
  };
  return (
    <>
      {bottomNavVisible && (
        <div
          className={styles.NavContainer}
          style={{ transform: `translateY(${scroll > 50 ? '0' : '100%'})` }}
        >
          {details.map((item, i) => {
            return (
              <Button
                onClick={() => {
                  setActiveNav(i);
                  // if (i === 1) {
                  //   setDrawerOpen(true);
                  // }
                  if (i === 4) {
                    profileFnc(true);
                  }
                }}
                className={`${styles.btnContainer}`}
                style={{
                  width: '100%',
                  height: '100%',
                }}
              >
                <Link
                  // to={item.to}
                  onClick={() => handleNavigation(item.title, item.to)}
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

          {/* <>
        {isAuthenticated ? (
          <SwipeableDrawer
            anchor={'right'}
            open={isUserDrawerOpen}
            onClose={toggleDrawer('right', false)}
            onOpen={toggleDrawer('right', true)}
            transitionDuration={600}
          >
            <div>
              <SideNavbar />
            </div>
          </SwipeableDrawer>
        ) : (
          <p></p>
        )}

        <SwipeableDrawer
          anchor={'left'}
          open={isDrawerOpen}
          onClose={toggleDrawer('left', false)}
          onOpen={toggleDrawer('left', true)}
          transitionDuration={600}
        >
          <SideNavbar main />
        </SwipeableDrawer>
      </> */}
          <>
            <SwipeableDrawer
              anchor={'right'}
              open={isUserDrawerOpen}
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
      )}
    </>
  );
};

export default BottomNavigation;

export const ButtonContainer = ({ children, i }) => {
  return <Button style={{ width: '100%', height: '100%' }}>{children}</Button>;
};
