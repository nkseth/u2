import React from 'react';
import styles from './Loader.module.scss';
import loader from './animation.gif';
const Loader = ({ height }) => {
  return (
    <div class={styles.lds_default} style={{ height: `${height || '100%'}` }}>
      {/* <div class={styles.dot_pulse}></div> */}
      <img src={loader} alt='loading' />
    </div>
  );
};

export default Loader;
