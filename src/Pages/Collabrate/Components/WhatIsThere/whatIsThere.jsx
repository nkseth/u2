import React from 'react';
import {
  Box,
  Grid,
  useMediaQuery,
} from '@material-ui/core';
import check from '../../../../Images/collabrate/check.png';
import ellipse from '../../../../Images/collabrate/Ellipse 6.png';
import iphone from '../../../../Images/collabrate/iPhone.png';
import styles from './whatIsThere.module.scss';
import group1 from '../../../../Images/collabrate/groupimg1.png';

export default function WhatIsThere() {
  const mobileView = useMediaQuery('(max-width:550px)');
  const tabViewPro = useMediaQuery('(max-width:1024px)');

  return (
    <div>
      {!tabViewPro ? (
        <Box display='flex' justifyContent='center'>
          <Box display='flex' justifyContent='center' alignItems='center'>
            <Box style={{ position: 'relative' }}>
              <img src={ellipse} alt='eclipse' />
            </Box>
            <Box style={{ position: 'absolute' }}>
              <img src={iphone} alt='phone' />
            </Box>
          </Box>

          <Box marginLeft='78px'>
            <p className={styles.heading}>What is there for you?</p>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                marginTop: '25px',
              }}
            >
              <img src={check} alt='check' />
              <p className={styles.text}>
                Exclusive platform for fashion & lifestyle industry.
              </p>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                marginTop: '16px',
              }}
            >
              <img src={check} alt='check' />
              <p className={styles.text}>
                Users on U2 already know what they can get. ie niche audience
                with shopping fashion mindset.
              </p>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                marginTop: '16px',
              }}
            >
              <img src={check} alt='check' />
              <p className={styles.text}>
                Only platform to sale and scale. We’ve covered Ecommerce &
                Social media for you{' '}
              </p>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                marginTop: '16px',
              }}
            >
              <img src={check} alt='check' />
              <p className={styles.text}>
                Rich features to increase your scales.
              </p>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                marginTop: '16px',
              }}
            >
              <img src={check} alt='check' />
              <p className={styles.text}>Spend less to get more.</p>
            </div>


          </Box>
        </Box>
      ) : (
        <Grid style={{ margin: '25px 0' }}>
          <Grid>
            <p className={styles.heading}>
              What is there for you?
            </p>
          </Grid>

          <Box
            display='flex'
            justifyContent='center'
            marginTop={mobileView ? '36px' : '61px'}
          >
            <Grid>
              <img src={group1} width='100%' alt='group2' />
            </Grid>
          </Box>

          <Grid style={{ marginTop: mobileView ? '38px' : '65px' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                marginTop: '25px',
              }}
            >
              <img src={check} className={styles.check} alt='check' />
              <p className={styles.text}>
                Exclusive platform for fashion & lifestyle industry.
              </p>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                marginTop: '16px',
              }}
            >
              <img src={check} className={styles.check} alt='check' />
              <p className={styles.text}>
                Users on U2 already know what they can get. ie niche audience
                with shopping fashion mindset.
              </p>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                marginTop: '16px',
              }}
            >
              <img src={check} className={styles.check} alt='check' />
              <p className={styles.text}>
                Only platform to sale and scale. We’ve covered Ecommerce &
                Social media for you{' '}
              </p>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                marginTop: '16px',
              }}
            >
              <img src={check} className={styles.check} alt='check' />
              <p className={styles.text}>
                Rich features to increase your scales.
              </p>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                marginTop: '16px',
              }}
            >
              <img src={check} className={styles.check} alt='check' />
              <p className={styles.text}>
                Spend less to get more.
              </p>
            </div>

          </Grid>
        </Grid>
      )}
    </div>
  );
}
