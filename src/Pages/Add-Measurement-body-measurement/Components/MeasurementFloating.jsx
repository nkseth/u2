import React from 'react';
import CustomTextField from './CustomTextField';
import styles from './MeasurementFloating.module.scss';

function MeasurementFloating({ name, value, focused, Form }) {
  return (
    <div className={styles.container}>
      {name === 'upper' || name === 'lower' ? (
        <></>
      ) : (
        <CustomTextField
          label={name}
          focused={focused}
          size={'small'}
          Form={Form}
          name={name}
          values={value}
          focus={true}
        />
      )}
    </div>
  );
}

export default MeasurementFloating;
