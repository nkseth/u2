import { Button } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import CustomDivider from '../../../utils/Custom Divider/divider';
import { topSeasonOffers } from '../../../Redux/actions/designerHomePage';

import styles from '../Style/Season_Offers.module.scss';

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
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
        {offers?.slice(0, 3).map((offer, i) => {
          return (
            <div
              className={`${styles.Season_Offers_Item} Season_offers-${i}`}
              style={{
                backgroundImage: `url("${offer?.image}")`,
                backgroundSize: 'cover',
              }}
            >
              <div className={styles.overLayDiv}></div>
              <div className={styles.h2_div}>
                <h2>{offer?.title}</h2>
                <Button onClick={Handler} className={styles.buttons}>
                  Shop Now
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Season_Offers;
