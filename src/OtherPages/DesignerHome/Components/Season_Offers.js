import { Button } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import CustomDivider from '../../../utils/Custom Divider/divider';
import styles from '../Style/Season_Offers.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { topSeasonOffers } from '../../../Redux/actions/designerHomePage';
const Season_Offers = () => {
  const dispatch = useDispatch();
  const baseStyle = { padding: '5rem 3rem 9rem 3rem' };
  // offer
  const { push } = useHistory();
  const Handler = () => {
    push('offers');
  };
  const { offers } = useSelector(state => state.root.topSeasonOffers);

  useEffect(() => {
    dispatch(topSeasonOffers());
  }, []);

  if (!offers) {
    return null;
  }

  return (
    <div className={styles.seasonsoffer} style={baseStyle}>
      <div className={` ${styles.Season_Offers_header}`}>
        Top Offers of the Season
        <CustomDivider style={{ height: '1px', background: '#857250' }} />
      </div>
      <div className={styles.Season_Offers}>
        {offers.length > 0 ? (
          <div
            className={styles.Season_Offers_Item1}
            style={{
              backgroundImage: `url("${offers[0]?.image}")`,

              backgroundSize: 'cover',
            }}
          >
            <div className={styles.overLayDiv}></div>
            <div className={styles.h2_div}>
              <h2>{offers[0]?.title}</h2>
              <Button onClick={Handler} className={styles.buttons}>
                Shop Now
              </Button>
            </div>
          </div>
        ) : null}
        {offers.length > 1 ? (
          <div
            className={styles.Season_Offers_Item2}
            style={{
              backgroundImage: `url("${offers[1]?.image}")`,

              backgroundSize: 'cover',
            }}
          >
            <div className={styles.overLayDiv}></div>
            <div className={styles.h2_div}>
              <h2>{offers[1]?.title}</h2>
              <Button className={styles.buttons} onClick={Handler}>
                Shop Now
              </Button>
            </div>
          </div>
        ) : null}
        {offers.length > 2 ? (
          <div
            className={styles.Season_Offers_Item3}
            style={{
              backgroundImage: `url("${offers[2]?.image}")`,

              backgroundSize: 'cover',
            }}
          >
            <div className={styles.overLayDiv}></div>
            {/* Chech here */}
            <div className={styles.h2_div}>

              <h2 style={{ whiteSpace: 'nowrap' }}>{offers[2]?.title}</h2>
              <Button className={styles.buttons} onClick={Handler}>
                Shop Now
              </Button>
            </div>
          </div>
        ) : null}
        {/* <div className={styles.Season_Offers_Item1}>
          <div>
            <h2>Buy 1 Get 1 One</h2> 
            <Button onClick={Handler}>Button</Button>
          </div>
        </div> */}
        {/* <div className={styles.Season_Offers_Item2}>
          <div>
            <h2>50% Flat cashback on this product</h2>
            <Button onClick={Handler} className={styles.buttons} >Button</Button>
          </div>
        </div>
        <div className={styles.Season_Offers_Item3}>
          <div>
            <h2>100% free via purchase </h2>
            <Button onClick={Handler} className={styles.buttons} >Button</Button>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Season_Offers;
