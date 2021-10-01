import React, { useEffect } from 'react';
import { Grid, Button, useMediaQuery } from '@material-ui/core';
import ProductCard from './Components/product-cards/card';
import CustomSection from '../../../../../utils/Custom Section/section';
import styles from './forHim.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import ContentLoader from 'react-content-loader';
//Images
import Main from './Components/Images/Main.jpg';

import {
  get_mens_active_product,
  setSelectedSubGrp,
} from '../../../../../Redux/actions/mensWear';
import { useHistory } from 'react-router-dom';
import { LazyLoadingImg } from '../../../../../utils/LazyLoading';

export default function ForHimSection({ type, loading }) {
  const customView = useMediaQuery('(max-width:1235px)');
  const tabView = useMediaQuery('(max-width:768px)');
  const tabViewPro = useMediaQuery('(max-width:835px)');
  const mobileView = useMediaQuery('(max-width:550px)');
  const dispatch = useDispatch();
  const history = useHistory();

  const {
    selected_sub_grp: activeNav,
    mens_active_product,
    banner,
  } = useSelector(state => state.root.main);

  const grp = type;

  useEffect(() => {
    dispatch(get_mens_active_product(type, 'all'));
  }, [type, dispatch]);

  const setActiveNav = (type, active) => {
    dispatch(setSelectedSubGrp(type));
    dispatch(get_mens_active_product(type, active));
  };

  return (
    <CustomSection
      style={{
        backgroundColor: 'rgba(230, 227, 220, 0.21)',
        paddingBottom: mobileView ? '40px' : '84px',
        paddingTop: mobileView ? '30px' : '45px',
      }}
    >
      <div className={styles.mainContainer}>
        <div className={styles.forHimFirstSection}>
          <p>
            <span style={{ color: '#000' }}>
              <i>#For</i>
            </span>
            &nbsp;{type === 'mens' ? 'Him' : type === 'womens' ? 'Her' : 'Kids'}
          </p>
          {customView && (
            <nav
              className={styles.navBar}
              style={{
                width: mobileView ? '100%' : '85%',
                justifyContent: 'center',
                marginTop: mobileView ? '.5rem' : '2rem',
              }}
            >
              <div className={styles.navItems}>
                <span
                  href='#'
                  className={activeNav === 'all' && styles.activeNav}
                  onClick={() => setActiveNav(grp, 'all')}
                >
                  All
                </span>
                {banner.categories?.map((item, index) => {
                  if (index > 3) {
                    return null;
                  }
                  return (
                    <span
                      href='#'
                      className={
                        activeNav.toLowerCase() === item.slug.toLowerCase() &&
                        styles.activeNav
                      }
                      onClick={() => {
                        setActiveNav(grp, item.slug);
                      }}
                    >
                      {item.name}
                    </span>
                  );
                })}
              </div>
            </nav>
          )}
          <LazyLoadingImg image={Main} />
          {/* <img src={Main} alt='for him' /> */}
        </div>
        <Grid
          container
          style={{ margin: '0' }}
          spacing={mobileView ? 1 : tabView ? 2 : 4}
          justify='space-between'
          className={styles.secondSection}
        >
          {!customView && (
            <Grid item xs={12} sm={12} md={12}>
              <nav className={styles.navBar}>
                <div className={styles.navItems}>
                  <span
                    href='#'
                    className={activeNav === 'all' && styles.activeNav}
                    onClick={() => setActiveNav(grp, 'all')}
                  >
                    All
                  </span>
                  {banner.categories?.map((item, index) => {
                    if (index > 4) {
                      return null;
                    }
                    return (
                      <span
                        href='#'
                        className={activeNav === item.slug && styles.activeNav}
                        onClick={() => setActiveNav(grp, item.slug)}
                      >
                        {item.name}
                      </span>
                    );
                  })}
                </div>
                <Button
                  onClick={() =>
                    history.push(`/designers-product-page/${activeNav}`)
                  }
                  className={styles.viewAllBtn}
                >
                  View all
                </Button>
              </nav>
            </Grid>
          )}
          {/* {mens_active_product?.slice(0, 6).map(item => {
            return (
              <Grid item xs={6} sm={4} md={4} justifyContent={'space-between'}>
                <ProductCard data={item} image={item.feature_image} />
              </Grid>
            );
          })} */}

          {loading
            ? [...Array(6)].map(item => (
                <Grid
                  item
                  xs={6}
                  sm={4}
                  md={4}
                  justifyContent={'space-between'}
                >
                  <ContentLoader
                    speed={2}
                    width={400}
                    height={'100%'}
                    viewBox='0 0 400 160'
                    backgroundColor='#f3f3f3'
                    foregroundColor='#ecebeb'
                    // {...props}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <rect x='0' y='0' rx='0' ry='0' width='300' height='2000' />
                    <rect x='' y='50' rx='3' ry='3' width='88' height='6' />
                    {/* <rect x='48' y='26' rx='3' ry='3' width='52' height='6' />
                    <rect x='0' y='56' rx='3' ry='3' width='410' height='6' />
                    <rect x='0' y='72' rx='3' ry='3' width='380' height='6' />
                    <rect x='0' y='88' rx='3' ry='3' width='178' height='6' /> */}
                  </ContentLoader>
                </Grid>
              ))
            : mens_active_product?.slice(0, 6).map(item => {
                return (
                  <Grid
                    item
                    xs={6}
                    sm={4}
                    md={4}
                    justifyContent={'space-between'}
                  >
                    <ProductCard data={item} image={item.feature_image} />
                  </Grid>
                );
              })}
        </Grid>
        {customView && (
          <Grid
            item
            md={12}
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <Button
              onClick={() =>
                history.push(`/designers-product-page/${activeNav}`)
              }
              className={styles.viewAllBtn}
            >
              View all
            </Button>
          </Grid>
        )}
      </div>
    </CustomSection>
  );
}
