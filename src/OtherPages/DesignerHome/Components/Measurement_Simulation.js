import { Button } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from '../Style/Measurement_Simulation.module.scss';
import { LazyLoadingComp } from '../../../utils/LazyLoading';
import { useMediaQuery } from '@material-ui/core';
const Measurement_Simulation = () => {
  const { push } = useHistory();
  const mobile = useMediaQuery('(max-width:479px)');
  return (
    <div className={styles.Measurement_Simulation}>
      <div>
        <h1>Measurement {'&'} Simulation</h1>
        {mobile && (
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has
          </p>
        )}
        <Button
          onClick={() => push('measurement-and-simulation')}
          className={styles.buttons}
        >
          Learn More
        </Button>
      </div>
    </div>
  );
};

export default Measurement_Simulation;
