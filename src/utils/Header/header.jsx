import React, { useState, useRef, useCallback } from 'react';
import {
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
import cx from 'classnames';
import { Link, useLocation, useHistory } from 'react-router-dom';
import CustomSection from '../Custom Section/section';
import SideNavbar from '../Side-Navbar/sideNavbar';
import styles from './header.module.scss';
//Icons
import PersonIcon from '../../Images/icons/person.svg';
import FavoriteIcon from '../../Images/icons/favorite.svg';
import BagIcon from '../../Images/icons/bag.svg';
import SearchIcon from '../../Images/icons/search.svg';
import HamMenuIcon from '../../Images/icons/hamMenu.svg';
import SearchDarkIcon from '../../Images/icons/searchDark.svg';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { LOGIN_MODEL } from '../../Redux/reducers/loginreducer';
import { useDispatch, useSelector } from 'react-redux';
import useLogin from '../../LoginSceens/useLogin';
import { useCookies } from 'react-cookie';
import MegaMenu from './Components/MegaMenu';
import Logo from '../../Images/logo/logo.png';
export default function Header() {
  const history = useHistory();
  const location = useLocation();
  const [currency, setCurrency] = useState('INR');
  const [cookies, setCookie] = useCookies(['user']);
  const [mouseEnter, setMouseEnter] = useState({
    newArrivals: false,
    men: false,
    women: false,
    kids: false,
    designers: false,
    contempory: false,
    offers: false,
    more: false,
  });
  const [mouseLeave, setMouseLeave] = useState({
    newArrivals: true,
    men: true,
    women: true,
    kids: true,
    designers: true,
    contempory: true,
    offers: true,
    more: true,
  });
  //Here I use Redux For Show Login Model

  const handleMouseEnter = (value) => {
    setMegaMenuType(value);

    setMouseEnter({
      ...mouseEnter,
      [value]: true,
    });
    setMouseLeave({
      ...mouseLeave,
      [value]: false,
    });
  };

  const handleMouseLeave = value => {
    setMouseEnter({
      ...mouseEnter,
      [value]: false,
    });
    setTimeout(() => {
      setMouseLeave({
        ...mouseLeave,
        [value]: true,
      });
    }, 200);
  };

  const tabView = useMediaQuery('(max-width:768px)');
  const mobileView = useMediaQuery('(max-width:550px)');
  const [megaMenuType, setMegaMenuType] = useState('');
  const { user_data } = useSelector(state => state.root.main);
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [isMegaMenuOpen, setMegaMenuOpen] = useState(false);
  const toggleDrawer = (anchor, open) => event => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setDrawerOpen(open);
  };

  const profileFnc = () => {
    if (Object.keys(user_data)?.length != 0) {
      history.push('/profile');
    } else {
      login_Model_Show();
    }
  };
  const LogedIn = Object.keys(user_data)?.length !== 0;
  const image = LogedIn ? user_data.avatar : PersonIcon;
  const { login_Model_Show } = useLogin();

  return (
    <div
      style={{
        padding: mobileView ? '0 1em' : '0 3em',
        width: mobileView ? '100%' : '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
      className={styles.headerShadow}
    >
      <div className={styles.firstContainer}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: mobileView ? '8px' : '21px',
          }}
        >
          {tabView && (
            <IconButton
              aria-label='menu'
              style={{ marginLeft: '-12px' }}
              onClick={() => setDrawerOpen(true)}
            >
              <img
                src={HamMenuIcon}
                alt='menu'
                className={styles.hamMenuIcon}
              />
            </IconButton>
          )}
          <span className={styles.logo}>
            <Link to='/'>
              LOGO
              {/* <img src={Logo} alt='' /> */}
            </Link>
          </span>
        </div>
        {tabView && !mobileView && (
          <div className={styles.searchBarContainer}>
            <img src={SearchIcon} alt='search' />
            <input
              type='text'
              placeholder='Search for designers, brands and more'
            />
          </div>
        )}

        {mobileView && (
          <div>
            <IconButton aria-label='search'>
              <img
                src={SearchDarkIcon}
                className={styles.mobileViewSideIcons}
                alt='search'
              />
            </IconButton>
            <IconButton
              onClick={() => history.push('/my-bag')}
              aria-label='my bag'
              style={{ marginRight: '-12px' }}
            >
              <img
                src={BagIcon}
                alt='my bag'
                className={styles.mobileViewSideIcons}
              />
            </IconButton>
          </div>
        )}

        {!tabView && (
          <div>
            <IconButton aria-label='my account'>
              <div
                onClick={profileFnc}
                style={{ display: 'grid', placeContent: 'center' }}
              >
                <img
                  src={image}
                  alt="profilepic"
                  style={
                    LogedIn ? { width: '1.3em', borderRadius: '100%' } : {}
                  }
                />
              </div>
            </IconButton>
            <IconButton aria-label="favorites">
              <img
                src={FavoriteIcon}
                alt="favorites"
                onClick={() => history.push("/wishlist")}
              />

            </IconButton>
            <IconButton
              onClick={() => history.push('/my-bag')}
              aria-label='my bag'
            >
              <img src={BagIcon} alt='my bag' />
            </IconButton>
          </div>
        )}
      </div>

      {!tabView && (
        <div className={styles.secondContainer}>
          <MegaMenu
            visible={isMegaMenuOpen}
            type={megaMenuType}
            Close={setMegaMenuOpen}
          />
          <div className={styles.mainMenuContainer}>
            <span
              onMouseEnter={() => handleMouseEnter('newArrivals')}
              onMouseLeave={() => handleMouseLeave('newArrivals')}
              className={cx(styles.menuItem, styles.menuItem_newArrivals)}
            >
              <Link style={{ color: '#9D8E73' }} to='/designers-product-page'>
                New arrivals
              </Link>
            </span>
            <span
              onMouseEnter={() => {
                handleMouseEnter('men');
                setMegaMenuOpen(true);
              }}
              onMouseLeave={() => handleMouseLeave('men')}
              className={cx(styles.menuItem, styles.menuItem_men)}
            >
              <Link style={{ color: "#9D8E73" }} to="/wear/mens">

                Men
              </Link>
            </span>
            <span
              onMouseEnter={() => {
                handleMouseEnter('women');
                setMegaMenuOpen(true);
              }}
              onMouseLeave={() => handleMouseLeave('women')}
              className={cx(styles.menuItem, styles.menuItem_women)}
            >
              {" "}
              <Link style={{ color: "#9D8E73" }} to='/wear/womens'> Women</Link>

            </span>
            <span
              onMouseEnter={() => {
                handleMouseEnter('kids');
                setMegaMenuOpen(true);
              }}
              onMouseLeave={() => handleMouseLeave('kids')}
              className={cx(styles.menuItem, styles.menuItem_kids)}
            >
              <Link style={{ color: "#9D8E73" }} to='/wear/kids'> Kids</Link>

            </span>
            <span
              onMouseEnter={() => handleMouseEnter('designers')}
              onMouseLeave={() => handleMouseLeave('designers')}
              className={cx(styles.menuItem, styles.menuItem_designers)}
            >
              <Link style={{ color: '#9D8E73' }} to='designers'>
                Designers
              </Link>
            </span>
            <span
              onMouseEnter={() => handleMouseEnter('contemporary')}
              onMouseLeave={() => handleMouseLeave('contemporary')}
              className={cx(styles.menuItem, styles.menuItem_contempory)}
            >
              Contemporary
            </span>
            <span
              onMouseEnter={() => handleMouseEnter('offers')}
              onMouseLeave={() => handleMouseLeave('offers')}
              className={cx(styles.menuItem, styles.menuItem_offers)}
            >
              <Link style={{ color: '#9D8E73' }} to='offers'>
                Offers
              </Link>
            </span>
            <span
              onMouseEnter={() => handleMouseEnter('more')}
              onMouseLeave={() => handleMouseLeave('more')}
              className={cx(styles.menuItem, styles.menuItem_more)}
            >
              More
            </span>
          </div>
          <div className={styles.verticalDivider} />
          <div className={styles.searchBarContainer}>
            <img src={SearchIcon} alt='search' />
            <input
              type='text'
              placeholder='Search for designers, brands and more'
            />
          </div>
        </div>
      )}

      <div
        style={{
          display: mouseEnter.newArrivals
            ? 'block'
            : mouseLeave.newArrivals
            ? 'none'
            : '',
        }}
      ></div>
      <SwipeableDrawer
        anchor={'left'}
        open={isDrawerOpen}
        onClose={toggleDrawer('left', false)}
        onOpen={toggleDrawer('left', true)}
        transitionDuration={600}
      >
        {location.pathname === '/orders' ||
        location.pathname === '/offers' ||
        location.pathname === '/all-orders' ? (
          <div className={styles.sideNavbarDiv}>
            <SideNavbar />
          </div>
        ) : (
          <List style={{ width: mobileView ? '80vw' : '40vw' }}>
            <ListItem style={{ display: 'flex', alignItems: 'center' }}>
              <FormControl
                style={{
                  width: 'auto',
                  boxShadow: 'none',
                }}
              >
                <Select
                  disableUnderline
                  value={currency}
                  onChange={e => setCurrency(e.target.value)}
                >
                  <MenuItem selected value='INR'>
                    <b>India(₹)</b>
                  </MenuItem>
                  <MenuItem value='USD'>
                    <b>US($)</b>
                  </MenuItem>
                  <MenuItem value='JPY'>
                    <b>Japan(¥)</b>
                  </MenuItem>
                </Select>
              </FormControl>
              <IconButton onClick={profileFnc} aria-label='my account'>
                <img src={PersonIcon} alt='my account' />
              </IconButton>
              <IconButton aria-label='favorites'>
                <img src={FavoriteIcon} alt='favorites' />
              </IconButton>
              <IconButton
                onClick={() => history.push('/my-bag')}
                aria-label='my bag'
              >
                <img src={BagIcon} alt='my bag' />
              </IconButton>
            </ListItem>
            <ListItem style={{ height: '64px' }}>
              <Link className={cx(styles.links, styles.menuItem)}>
                New arrivals
              </Link>
            </ListItem>
            <ListItem>
              <Accordion className={styles.accordion}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon size='small' />}
                  className={styles.accordionSummary}
                >
                  <span className={styles.menuItem}>
                    <Link to='wear/mens'>Men</Link>
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
                  expandIcon={<ExpandMoreIcon size='small' />}
                  className={styles.accordionSummary}
                >
                  <span className={styles.menuItem}>
                    <Link to='wear/womens'>Women</Link>
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
                  expandIcon={<ExpandMoreIcon size='small' />}
                  className={styles.accordionSummary}
                >
                  <span className={styles.menuItem}>
                    <Link to='wear/kids'>Kids</Link>
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
                  expandIcon={<ExpandMoreIcon size='small' />}
                  className={styles.accordionSummary}
                >
                  <span className={styles.menuItem}>
                    {' '}
                    <Link to='designers'>Designers</Link>
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
            <ListItem style={{ height: '64px' }}>
              <Link to='/' className={cx(styles.links, styles.menuItem)}>
                Contempory
              </Link>
            </ListItem>
            <ListItem style={{ height: '64px' }}>
              <Link to='/offers' className={cx(styles.links, styles.menuItem)}>
                Offers
              </Link>
            </ListItem>
            <ListItem style={{ height: '64px' }}>
              <Link to='/' className={cx(styles.links, styles.menuItem)}>
                More
              </Link>
            </ListItem>
          </List>
        )}
      </SwipeableDrawer>
    </div>
  );
}
