import React from 'react';
import Container from '../../../../utils/Container/container';
import CustomSection from '../../../../utils/Custom Section/section';
import styles from './index.module.scss';
import Empty from '../../../../Images/mybag/empty.png';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

export default function EmptyBag() {
  return (
    <Container>
      <CustomSection>
        <div className={styles.mainContainer}>
          <div className={styles.emptyBag}>
            <img src={Empty} />
            <div style={{ marginLeft: '16px' }}>
              <div className={styles.line1}></div>
              <div className={styles.line2}></div>
            </div>
          </div>
          <div className={styles.emptyBag} style={{ marginTop: '8px' }}>
            <img src={Empty} />
            <div style={{ marginLeft: '16px' }}>
              <div className={styles.line1}></div>
              <div className={styles.line2}></div>
            </div>
          </div>
          <div className={styles.text}>
            <h4>Looks like you dont like shopping!</h4>
            <p>
              Add items instantly to your bag and start ordering multiple
              products at once!{' '}
            </p>
          </div>
          <div style={{ marginTop: '167px', marginBottom: '42px' }}>
            <Button className={styles.mobileButton}>
              <Link to={`/wear/mens`} style={{ color: '#fff' }}>
                Browse items
              </Link>
            </Button>
          </div>
        </div>
      </CustomSection>
    </Container>
  );
}
