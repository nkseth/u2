import React from 'react';
import { Container } from '@material-ui/core';
import styles from './contactToUs.module.scss';
import { ReactComponent as Email } from './images/email.svg';
import { ReactComponent as Instagram } from './images/instagram.svg';
import { ReactComponent as Facebook } from './images/facebook.svg';
import { ReactComponent as Call } from './images/phone.svg';
import { Link } from 'react-router-dom';

export default function ContactUs() {
  return (
    <div>
      <Container>
        <div style={{ marginTop: '44px' }}>
          <div className={styles.textGroup}>
            <Link to='/write-to-us'>
              <div>
                {/* <img src={mail} alt='mail' /> */}
                <Email />
              </div>
            </Link>
            <div style={{ marginLeft: '20px' }}>
              <Link to='/write-to-us'>
                <p className={styles.sectionHead}>Write to us</p>
              </Link>
              <p className={styles.sectionText}>
                Drop us a line and we’ll get back to you as fast <br /> as we
                can. Email us at
              </p>
            </div>
          </div>

          <div className={styles.textGroup}>
            <a href='https://www.instagram.com/' target='_blank'>
              <div>
                {/* <img src={mail} alt='mail' /> */}
                <Instagram />
              </div>
            </a>

            <div style={{ marginLeft: '20px' }}>
              <a href='https://www.instagram.com/' target='_blank'>
                <p className={styles.sectionHead}>Instagram</p>
              </a>
              <p className={styles.sectionText}>
                Connect with us your favourite <br /> social network
              </p>
            </div>
          </div>

          <div className={styles.textGroup}>
            <a href='https://www.facebook.com/' target='_blank'>
              <div>
                {/* <img src={mail} alt='mail' /> */}
                <Facebook />
              </div>
            </a>
            <div style={{ marginLeft: '20px' }}>
              <a href='https://www.facebook.com/' target='_blank'>
                <p className={styles.sectionHead}>Facebook</p>
              </a>

              <p className={styles.sectionText}>
                Connect with us your favourite <br /> social network
              </p>
            </div>
          </div>

          <div className={styles.textGroup}>
            <div>
              {/* <img src={mail} alt='mail' /> */}
              <Call />
            </div>
            <div style={{ marginLeft: '20px' }}>
              <p className={styles.sectionHead}>Talk to us</p>
              <p className={styles.sectionText}>
                Mon to Sunday, 10:00AM to 10:00PM <br /> Call us on
                1844-154-1888
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
