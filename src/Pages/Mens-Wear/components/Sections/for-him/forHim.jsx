import React, { useState, useEffect } from 'react';
import { Grid, Button, useMediaQuery } from '@material-ui/core';
import ProductCard from './Components/product-cards/card';
import CustomSection from '../../../../../utils/Custom Section/section';
import styles from './forHim.module.scss';
import { useDispatch, useSelector } from 'react-redux';
//Images
import Main from './Components/Images/Main.jpg';
import Card1 from './Components/Images/Card1.jpg';
import Card2 from './Components/Images/Card2.jpg';
import Card3 from './Components/Images/Card3.jpg';
import {
  get_mens_active_product,
  get_mens_wear_subgrp,
  setSelectedSubGrp,
} from '../../../../../Redux/actions/mensWear';
import { Link, useHistory } from 'react-router-dom';

export default function ForHimSection({ type }) {
  const customView = useMediaQuery('(max-width:1235px)');
  const tabView = useMediaQuery('(max-width:768px)');
  const tabViewPro = useMediaQuery('(max-width:835px)');
  const mobileView = useMediaQuery('(max-width:550px)');

  const dispatch = useDispatch();
  const history = useHistory();

  const {
    category_grp,
    selected_sub_grp: activeNav,
    mens_active_product,
  } = useSelector(state => state.root.main);

  const setActiveNav = val => {
    dispatch(setSelectedSubGrp(val));
  };

  // useEffect(() => {
  //   dispatch(get_mens_wear_subgrp(`${type}-fashion`))
  // }, [type])

  useEffect(() => {
    const val = `${type}-fashion`;
    dispatch(get_mens_active_product(val, activeNav));
  }, [activeNav, type]);

  const grp = type == 'mens' ? 'men' : type == 'womens' ? 'women' : 'kids';

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
            &nbsp;{type == 'mens' ? 'Him' : type == 'womens' ? 'Her' : 'Kids'}
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
                  onClick={() => setActiveNav('all')}
                >
                  All
                </span>
                {category_grp[grp]?.categories?.map((item, index) => {
                  if (index > 3) {
                    return null;
                  }
                  return (
                    <span
                      href='#'
                      className={activeNav === item.slug && styles.activeNav}
                      onClick={() => setActiveNav(item.slug)}
                    >
                      {item.name}
                    </span>
                  );
                })}
              </div>
            </nav>
          )}
          <img src={Main} alt='for him' />
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
                    onClick={() => setActiveNav('all')}
                  >
                    All
                  </span>
                  {category_grp[grp]?.categories?.map((item, index) => {
                    if (index > 4) {
                      return null;
                    }
                    return (
                      <span
                        href='#'
                        className={activeNav === item.slug && styles.activeNav}
                        onClick={() => setActiveNav(item.slug)}
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
          {mens_active_product?.slice(0, 6).map(item => {
            return (
              <Grid item xs={6} sm={4} md={4} justifyContent={'space-between'}>
                <ProductCard data={item} image={Card1} />
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
