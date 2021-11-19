import { Button } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../Style/Collabrate_With_US.module.scss';
const Collabrate_With_US = () => {
  return (
    <div className={styles.Collabrate_With_US}>
      {/* <Button>Collabrate with uS</Button> */}
      <div className={styles.collabrate_bgg}>
        <h2>Collabrate with us</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has
        </p>
        <Link to='/Collabrate-as-vendor'>
          <Button>Learn More</Button>
        </Link>
      </div>
    </div>
  );
};

export default Collabrate_With_US;
