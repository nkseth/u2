import React, { useEffect } from 'react';
import { Grid, Button, useMediaQuery } from '@material-ui/core';
// import ProductCard from "./Components/product-cards/card";
import ProductCard from '../../../../Designers-Product-Page/Components/product-card/card';
// import ProductCard from "../../../Designers-Product-Page/Components/product-card/card";
import CustomSection from '../../../../../utils/Custom Section/section';
import styles from './forHim.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import Loader, { ProductLoader } from '../../../../../utils/Loader/Loader';
//Images
import Main from './Components/Images/Main.jpg';
import { ReactComponent as Icon } from '../../../../../Images/icons/icon.svg';

import {
  get_mens_active_product,
  setSelectedSubGrp,
} from '../../../../../Redux/actions/mensWear';
import { useHistory } from 'react-router-dom';
import { LazyLoadingImg } from '../../../../../utils/LazyLoading';
import { getWishList } from '../../../../../Redux/actions/wishlist';
import CustomDivider from '../../../../../utils/Custom Divider/divider';

export default function ForHimSection({ type, coverImage }) {
  // const loading = false;
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
  const { user, isAuthenticated } = useSelector(state => state.root.auth);
  const grp = type;

  useEffect(() => {
    dispatch(get_mens_active_product(type, 'all'));
    if (!isAuthenticated) return;
    dispatch(getWishList(user.api_token));
  }, [type, dispatch, isAuthenticated, user]);

  const setActiveNav = (type, active) => {
    dispatch(setSelectedSubGrp(type));
    dispatch(get_mens_active_product(type, active));
  };

  return (
    <CustomSection
      style={{
        backgroundColor: 'rgba(230, 227, 220, 0.21)',
        paddingBottom: mobileView ? '40px' : '134px',
        paddingTop: !mobileView ? '30px' : '',
      }}
    >

      {!mobileView ? (
        <h2 className={`${styles.heading} mens-common-headings--1`}>For him</h2>
      ) : (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <h2 className={styles.heading}>For him</h2>
          <CustomDivider
            style={{ height: '1px', background: '#857250', marginLeft: '8px' }}
          />
        </div>
      )}

      <div className={styles.forHim_items}>
        {banner?.categories?.slice(0, 8).map(item => {
          return (
            <div className={styles.forHim_item}>
              <img src={item.cover_image} />
              <h3>{item.name}</h3>
            </div>
          );
        })}
      </div>
      {/* <div style={{ textAlign: 'center', marginTop: '1rem' }}>
        <Button className={styles.moreButton}>View more</Button>
        <Icon style={{ marginLeft: '12px' }} />
      </div> */}
    </CustomSection>
  );
}
