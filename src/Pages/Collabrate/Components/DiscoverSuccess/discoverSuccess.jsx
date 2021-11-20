import React from 'react';
import { Box, useMediaQuery, Grid } from '@material-ui/core';
import check from '../../../../Images/collabrate/check.png';
import ellipse from '../../../../Images/collabrate/Ellipse 6.png';
import iphone2 from '../../../../Images/collabrate/iPhone2.png';
import group2 from '../../../../Images/collabrate/groupimg2.png';
import styles from './discoverSuccess.module.scss';

export default function DiscoverSucess() {
  const mobileView = useMediaQuery('(max-width:550px)');
  const tabViewPro = useMediaQuery('(max-width:1024px)');

  return (
    <div>
      {!tabViewPro ? (
        <Box style={{margin: '107px 0'}} display='flex' justifyContent='center'>
          <Box style={{ marginTop: '83px' }}>
            <p className={styles.heading}>Discover business success using U2</p>
            <p className={styles.subHeading}>
              See how big brands and small businesses drive results with U2
            </p>

            <div
              style={{
                marginTop: '31px',
              }}
            >
              <img src={check}  alt='check' />
              <span className={styles.text}>Launch new products</span>
            </div>

            <div
              style={{
                marginTop: '31px',
              }}
            >
              <img src={check}  alt='check' />
              <span className={styles.text}>Reaching More Customers</span>
            </div>

            <div
              style={{
                marginTop: '31px',
              }}
            >
              <img src={check}  alt='check' />
              <span className={styles.text}>Promoting Artisans/Designers</span>
            </div>
          </Box>

          <Box
            display='flex'
            justifyContent='center'
            alignItems='center'
            marginLeft='31px'
          >
            <Box style={{ position: 'relative' }}>
              <img src={ellipse} alt='eclipse' />
            </Box>
            <Box style={{ position: 'absolute' }}>
              <img src={iphone2} alt='phone' />
            </Box>
          </Box>
        </Box>
      ) : (
        <Grid style={{margin:mobileView?'50px 0' : '94px 0'}}>
          <Grid>
            <p className={styles.heading}>
              Discover business success using U2
            </p>
            <p className={styles.subHeading}>
              See how big brands and small businesses drive results with U2
            </p>
          </Grid>

          <Box
            display='flex'
            justifyContent='center'
            marginTop={mobileView ? '46px' : '61px'}
          >
            <Grid>
              <img src={group2} width='100%' alt='group2' />
            </Grid>
          </Box>

          <Box>
            <div
              style={{
                marginTop: mobileView ? '15px' : '31px',
              }}
            >
              <img src={check} className={styles.check} alt='check' />
              <span className={styles.text}>
                Launch new products
              </span>
            </div>

            <div
              style={{
                marginTop: mobileView ? '15px' : '31px',
              }}
            >
              <img src={check} className={styles.check} alt='check' />
              <span className={styles.text}>
                Reaching More Customers
              </span>
            </div>

            <div
              style={{
                marginTop: mobileView ? '15px' : '31px',
              }}
            >
              <img src={check} className={styles.check} alt='check' />
              <span className={styles.text}>
                Promoting Artisans/Designers
              </span>
            </div>
          </Box>
        </Grid>
      )}
    </div>
  );
}
