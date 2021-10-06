import { Button } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { LazyLoadingComp } from '../../../utils/LazyLoading';
import styles from '../Style/Talk_With_Stylish.module.scss';
const Talk_With_Stylish = () => {
  const { push } = useHistory();
  return (
    <LazyLoadingComp>
      <div className={styles.Talk_With_Stylish}>
        <div>
          <h1>Talk With Stylist</h1>
          <p style={{ fontSize: '16px' }}>
            Lorem ipspushum dolor sit amet consectetur adipisicing elit. Maxime
            obcaecati nihil repellendus, ab ducimus dolorum eaque accusantium
            similique perferendis architecto pariatur quo, libero illo eos
            consectetur debitis ea sunt inventore.
          </p>
          <Button
            onClick={() => push('/talk-with-stylish')}
            style={{ background: '#fff', fontSize: '11px', color: '#857250' }}
          >
            chat
          </Button>
        </div>
      </div>
    </LazyLoadingComp>
  );
};

export default Talk_With_Stylish;
