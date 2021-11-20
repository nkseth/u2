import React from 'react';
import { Button} from '@material-ui/core';
import banner from '../../../../../Images/collabrate/banner-img.png';
import styles from './banner.module.scss';
import { Link } from 'react-router-dom';

export default function VendorBanner() {
  
  return (
    <div
      style={{
        backgroundImage: `url(${banner})`,
        width: '100%',
      }}
      className={styles.bannerContainer}
    >
      <div className={styles.overLay}>
        <p className={styles.heading}>Collabrate with us</p>

        <p className={styles.subHeading}>
          New to U2? See how to setup a business account and use U2 to grow your
          business by collaborating.
        </p>

        <Link to='/Collabrate-registration'>
          <Button className={styles.button}>Register as a Vendor</Button>
        </Link>
      </div>
    </div>
  );
}