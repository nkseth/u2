import React from 'react';
import { Container, TextField, useMediaQuery } from '@material-ui/core';

import styles from './writeToUs.module.scss';

export default function WriteToUs() {
  const tabView = useMediaQuery('(max-width:768px)');
  const mobileView = useMediaQuery('(max-width:550px)');

  return (
    <div style={{ marginBottom: '40px' }}>
      <Container>
        <div className={tabView ? styles.groupTab : styles.group}>
          <div
            className={
              mobileView ? styles.textfieldgroupmobile : styles.textfieldgroup
            }
          >
            <div
              className={
                mobileView ? styles.flextextfieldMobile : styles.flextextfield
              }
            >
              <p className={styles.labels}>Full Name</p>
              <TextField
                className={styles.textfield}
                placeholder='John Hamson'
                variant='outlined'
              />
            </div>
            <div
              className={
                mobileView ? styles.flextextfieldMobile : styles.flextextfield
              }
              style={{
                marginLeft: mobileView ? '0' : '25px',
                marginTop: mobileView ? '30px' : '0',
              }}
            >
              <p className={styles.labels}>Email</p>
              <TextField
                className={styles.textfield}
                placeholder='Info@gmail.com'
                variant='outlined'
              />
            </div>
          </div>

          <p className={(styles.labels, styles.top)}>
            Enter your 10-digit mobile number
          </p>
          <TextField
            className={styles.textfield}
            placeholder='Info@gmail.com'
            variant='outlined'
          />

          <p className={(styles.labels, styles.top)}>Tell us what you think</p>
          <TextField
            className={styles.textfield}
            placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
            multiline
            rows={4}
            variant='outlined'
          />
        </div>
      </Container>
    </div>
  );
}
