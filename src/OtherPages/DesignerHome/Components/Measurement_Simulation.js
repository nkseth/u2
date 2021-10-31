import { Button } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from '../Style/Measurement_Simulation.module.scss';
import { LazyLoadingComp } from '../../../utils/LazyLoading';
const Measurement_Simulation = () => {
  const { push } = useHistory();
  return (
    <LazyLoadingComp>
      <div className={styles.Measurement_Simulation}>
        <div>
          <h1>Measurement {'&'} Simulation</h1>

          <Button
            onClick={() => push('measurement-and-simulation')}
            className={styles.buttons}
          >
            Learn More
          </Button>
        </div>
      </div>
    </LazyLoadingComp>
  );
};

export default Measurement_Simulation;
