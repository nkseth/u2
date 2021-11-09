import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
const FilterSkelton = () => {
  return (
    <div style={{ margin: '5rem 1rem' }}>
      <div
        style={{
          justifyContent: 'space-between',

          display: 'flex',
        }}
      >
        <Skeleton variant='rect' width={150} height={10} animation='wave' />
        <Skeleton variant='rect' width={50} height={10} animation='wave' />
      </div>
      <div
        style={{
          margin: '1rem 0rem',

          display: 'flex',
        }}
      >
        <Skeleton variant='rect' width={100} height={10} animation='wave' />
      </div>
    </div>
  );
};

export default FilterSkelton;
