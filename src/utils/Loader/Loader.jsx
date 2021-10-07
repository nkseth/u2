import React from 'react';
import styles from './Loader.module.scss';
import loader from './animation.gif';
import Lottie from 'react-lottie';
import animationData from './data.json';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
const Loader = ({ height, products }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <>
      {products ? (
        <div
          style={{
            width: '400',
            height: '350px',
            margin: '1rem  auto',
          }}
        >
          <SkeletonTheme
            color='#E5E5E5
'
            highlightColor='#d6d6d6'
          >
            <Skeleton height={280} />
            <div>
              <Skeleton
                height={20}
                width='55%'
                style={{
                  margin: '0.2rem  auto',
                }}
              />
              <Skeleton
                height={20}
                width='85%'
                style={{
                  margin: '0.2rem  auto',
                }}
              />
              <Skeleton
                height={20}
                width='75%'
                style={{
                  margin: '0.2rem  auto',
                }}
              />
            </div>
          </SkeletonTheme>
        </div>
      ) : (
        <div
          class={styles.lds_default}
          style={{ height: `${height || '100%'}` }}
        >
          {/* <div class={styles.dot_pulse}></div> */}
          {/* <img src={loader} alt='loading' /> */}
          <Lottie
            options={defaultOptions}
            height={30}
            width={150}
            style={{ background: 'none' }}
          />
        </div>
      )}
    </>
  );
};

export default Loader;
