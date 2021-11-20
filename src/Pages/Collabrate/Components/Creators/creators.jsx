import React from 'react';
import { Box, useMediaQuery } from '@material-ui/core';
import creator from '../../../../Images/collabrate/creator.svg';
import creator1 from '../../../../Images/collabrate/creator-1.svg';
import iphone3 from '../../../../Images/collabrate/iPhone3.png';
import styles from './creators.module.scss';

export default function Creators({ toggle, open }) {
  const tabViewPro = useMediaQuery('(max-width:1024px)');
  const mobileView = useMediaQuery('(max-width:550px)');

  return (
    <div>
      {!tabViewPro ? (
        <>
          {open === 'creators' ? (
            <Box display='flex' marginLeft='84px' marginRight='51px'>
              <Box marginTop='66px'>
                <img src={creator} alt='galleryicon' />
                <p className={styles.heading}>Creators</p>
                <p className={styles.text}>
                  Grab your audience's attention by your post with eye-catching
                  photos and videos.
                </p>
              </Box>
              <Box className={styles.image3}>
                <img src={iphone3} alt='iphone3' />
              </Box>
            </Box>
          ) : (
            <Box
              className={styles.background}
              onClick={() => toggle('creators')}
            >
              <Box style={{ marginLeft: '17px' }}>
                <img src={creator1} style={{ marginTop: '60px' }} />
                <p className={styles.title}>Creators</p>
              </Box>
            </Box>
          )}
        </>
      ) : (
        <>
          {open === 'creators' ? (
            <Box marginTop='20px'>
              <Box className={styles.image3Tab}>
                <img src={iphone3} alt='iphone3' />
              </Box>

              <Box style={{padding:mobileView?'25px 24px 15px':'25px 55px 0px 55px' }}>
                <img src={creator} alt='galleryicon' style={{width:mobileView && '37px'}} />
                <p className={styles.heading}>Creators</p>
                <p className={styles.textTab}>
                  Grab your audience's attention by your post with eye-catching
                  photos and videos.
                </p>
              </Box>
            </Box>
          ) : (
            <Box
              className={styles.backgroundTab}
              onClick={() => toggle('creators')}
            >
              <Box style={{ marginLeft: '36px' }}>
                <img src={creator1} style={{ marginTop: '18px' }} />
                <p className={styles.title}>Creators</p>
              </Box>
            </Box>
          )} 
        </>
      )}
    </div>
  );
}
