import React from 'react';
import styles from './Loader.module.scss';
import loader from './animation.gif';
import Lottie from 'react-lottie';
import animationData from './data.json';
const Loader = ({ height }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <div class={styles.lds_default} style={{ height: `${height || '100%'}` }}>
      {/* <div class={styles.dot_pulse}></div> */}
      {/* <img src={loader} alt='loading' /> */}
      <Lottie
        options={defaultOptions}
        height={30}
        width={150}
        style={{ background: 'none' }}
      />
    </div>
  );
};

export default Loader;
