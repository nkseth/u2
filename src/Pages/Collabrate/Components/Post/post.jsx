import React, { useState } from 'react';
import { Box, useMediaQuery } from '@material-ui/core';
import posts from '../../../../Images/collabrate/posts.svg';
import posts1 from '../../../../Images/collabrate/posts-1.svg';
import iphone3 from '../../../../Images/collabrate/iPhone3.png';
import styles from './post.module.scss';
import { motion } from 'framer-motion';

export default function Post({ toggle, open }) {
  const mobileView = useMediaQuery('(max-width:550px)');
  const tabViewPro = useMediaQuery('(max-width:1024px)');
  const [isClicked, setClicked] = useState(false);

  return (
    <div>
      {!tabViewPro ? (
        <>
          {open === 'post' ? (
            <Box className={styles.card}>
              <Box marginTop='66px'>
                <img
                  src={posts}
                  alt='galleryicon'
                  style={{ paddingLeft: '15%' }}
                />
                <p className={styles.heading}>Posts</p>
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
            <motion.div>
              <Box
                className={styles.background}
                onClick={() => toggle('post') || setClicked(!isClicked)}
              >
                <Box style={{ marginLeft: '17px' }}>
                  <img src={posts1} style={{ marginTop: '60px' }} />
                  <p className={styles.title}>Posts</p>
                </Box>
              </Box>
            </motion.div>
          )}
        </>
      ) : (
        <>
          {open === 'post' ? (
            <Box marginBottom='40px'>
              <Box className={styles.image3Tab}>
                <img src={iphone3} alt='iphone3' />
              </Box>

              <Box style={{ marginLeft: '35px' }}>
                <img src={posts} alt='galleryicon' />
                <p style={{ paddingLeft: '0' }} className={styles.heading}>
                  Posts
                </p>
                <p className={styles.textTab}>
                  Grab your audience's attention by your post with eye-catching
                  photos and videos.
                </p>
              </Box>
            </Box>
          ) : (
            <Box
              className={styles.backgroundTab}
              onClick={() => toggle('post')}
            >
              <Box style={{ marginLeft: '30px' }}>
                <img src={posts1} style={{ marginTop: '18px' }} />
                <p className={styles.title}>Posts</p>
              </Box>
            </Box>
          )}
        </>
      )}
    </div>
  );
}
