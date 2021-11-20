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
import { Link, useLocation, useHistory, withRouter } from 'react-router-dom';
import CustomSection from '../Custom Section/section';
import SideNavbar from '../Side-Navbar/sideNavbar';
import styles from './header.module.scss';
//Icons
import Bell from './Images/bell.svg';
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
import { ReactComponent as Logo } from '../../Images/logo/u2.svg';
import { ReactComponent as LogoSM } from '../../Images/logo/U2icon.svg';
import { getCategorySubGroup } from '../../Redux/actions/designerHomePage';
import Search from './Components/SearchResult/seachResult';
import { getAlgoliaResults } from '@algolia/autocomplete-js';
import algoliasearch from 'algoliasearch';
import { Autocomplete } from './Components/Autocomplete';
import { ProductItem } from './Components/ProductItem';

const appId = 'URPPB4YKVU';
const apiKey = 'a32df24de3734cdd34b6c12b46c96c27';
const searchClient = algoliasearch(appId, apiKey);

const Header = () => {
  const dispatch = useDispatch();
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
  });
  const [mouseLeave, setMouseLeave] = useState({
    newArrivals: true,
    men: true,
    women: true,
    kids: true,
    designers: true,
    contempory: true,
    offers: true,
  });
  //Here I use Redux For Show Login Model

  const handleMouseEnter = value => {
    setMegaMenuType(value);
    dispatch(getCategorySubGroup(value));
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

  const tabView = useMediaQuery('(max-width:1030px)');
  const mobileView = useMediaQuery('(max-width:550px)');
  const mobile = useMediaQuery('(max-width:479px)');
  const [megaMenuType, setMegaMenuType] = useState('');
  const { user } = useSelector(state => state.root.auth);

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

  const profileFnc = route => {
    // if (Object.keys(user)?.length !== 0) {
    if (user?.id) {
      history.push(route);
    } else {
      login_Model_Show();
    }
  };
  // const LogedIn = Object.keys(user)?.length !== 0;
  const LogedIn = user?.id ? true : false;
  const image = LogedIn ? user.avatar : PersonIcon;
  const { login_Model_Show } = useLogin();

  return (
    <div
      style={{
        padding: mobileView ? '0 1em' : '0 2em',
        width: mobileView ? '100%' : '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
      className={styles.headerShadow}
    >
      <div className={styles.firstContainer}>
        {!tabView ? (
          <div className={styles.logo}>
            <Link to='/'>{!mobile ? <Logo /> : <LogoSM />}</Link>
          </div>
        ) : (
          tabView && (
            <div style={{ display: 'flex' }}>
              {tabView && !mobile && (
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
              <div className={styles.logo}>
                <Link to='/'>{!mobileView ? <Logo /> : <LogoSM />}</Link>
              </div>
            </div>
          )
        )}
        <div className={styles.secondContainer}>
          <MegaMenu
            visible={isMegaMenuOpen}
            type={megaMenuType}
            Close={setMegaMenuOpen}
          />
          <div className={styles.mainMenuContainer}>
            <span
              onMouseEnter={() => {
                handleMouseEnter('mens');
                setMegaMenuOpen(true);
              }}
              onMouseLeave={() => {
                handleMouseLeave('mens');
              }}
              className={cx(styles.menuItem, styles.menuItem_men)}
            >
              <Link to='/wear/mens'>Men</Link>
            </span>
            <span
              onMouseEnter={() => {
                handleMouseEnter('womens');
                setMegaMenuOpen(true);
              }}
              onMouseLeave={() => handleMouseLeave('womens')}
              className={cx(styles.menuItem, styles.menuItem_women)}
            >
              {' '}
              <Link to='/wear/womens'> Women</Link>
            </span>
            <span
              onMouseEnter={() => {
                handleMouseEnter('kids');
                setMegaMenuOpen(true);
              }}
              onMouseLeave={() => handleMouseLeave('kids')}
              className={cx(styles.menuItem, styles.menuItem_kids)}
            >
              <Link to='/wear/kids'> Kids</Link>
            </span>
            <span
              // onMouseEnter={() => handleMouseEnter("designers")}
              // onMouseLeave={() => handleMouseLeave("designers")}
              className={cx(styles.menuItem, styles.menuItem_designers)}
            >
              <Link to='designers'>Designers</Link>
            </span>

            <span
              // onMouseEnter={() => handleMouseEnter("offers")}
              // onMouseLeave={() => handleMouseLeave("offers")}
              className={cx(styles.menuItem, styles.menuItem_offers)}
            >
              <Link to='offers'>Offers</Link>
            </span>
          </div>
        </div>
        {!mobile && (
          <div style={{ zIndex: 30 }}>
            {/* <Search /> */}
            <Autocomplete
              openOnFocus={false}
              style={{ zIndex: 10 }}
              getSources={({ query }) => [
                {
                  sourceId: 'products',
                  getItems() {
                    return getAlgoliaResults({
                      searchClient,
                      queries: [
                        {
                          indexName: 'products',
                          query,
                        },
                      ],
                    });
                  },
                  onSelect({ item }) {
                    history.push('/product-description/' + item.slug);
                  },
                  templates: {
                    item({ item, components }) {
                      return <ProductItem hit={item} components={components} />;
                    },
                  },
                },
              ]}
            />
          </div>
        )}
        <div className={styles.iconContainer}>
          <IconButton
            aria-label='my account'
            onClick={() => profileFnc('/profile')}
          >
            <img src={Bell} alt='' />
          </IconButton>
          {!mobile && (
            <IconButton
              aria-label='my account'
              onClick={() => profileFnc('/profile')}
            >
              <div style={{ display: 'grid', placeContent: 'center' }}>
                <img
                  src={image}
                  alt='user'
                  style={
                    LogedIn ? { width: '1.3em', borderRadius: '999px' } : {}
                  }
                />
              </div>
            </IconButton>
          )}
          <IconButton
            aria-label='favorites'
            onClick={() => profileFnc('/wishlist')}
          >
            <img src={FavoriteIcon} alt='favorites' />
          </IconButton>
          <IconButton
            onClick={() => history.push('/my-bag')}
            aria-label='my bag'
          >
            <img src={BagIcon} alt='my bag' />
          </IconButton>
        </div>
      </div>
      <SwipeableDrawer
        anchor={'left'}
        open={isDrawerOpen}
        onClose={toggleDrawer('left', false)}
        onOpen={toggleDrawer('left', true)}
        transitionDuration={600}
      >
        {location.pathname === '/orders' ||
        location.pathname === '/offers' ||
        location.pathname === '/all-orders' ||
        location.pathname === '/orders/cancel-order' ? (
          <div className={styles.sideNavbarDiv}>
            <SideNavbar />
          </div>
        ) : (
          <SideNavbar main />
        )}
      </SwipeableDrawer>
    </div>
  );
};

export default Header;
