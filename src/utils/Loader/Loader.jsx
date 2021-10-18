import React from 'react';
import styles from './Loader.module.scss';
import loader from './animation.gif';
import Lottie from 'react-lottie';
import animationData from './data.json';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import ContentLoader from 'react-content-loader';
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

export const ProductLoader = ({ width, height }) => {
  return (
    <ContentLoader
      speed={2}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      backgroundColor='#f3f3f3'
      foregroundColor='#ecebeb'
    >
      <rect x='15%' y='0' rx='0' ry='0' width='100%' height='275' />
      <rect x='15%' y='285' rx='0' ry='0' width='200' height='20' />
      <rect x='15%' y='315' rx='0' ry='0' width='150' height='15' />
      <rect x='15%' y='340' rx='0' ry='0' width='250' height='18' />
    </ContentLoader>
  );
};
