import React from 'react';
import {
  LazyLoadComponent,
  LazyLoadImage,
} from 'react-lazy-load-image-component';

export const LazyLoadingImg = ({ image, height, width }) => {
  return (
    <>
      <LazyLoadImage
        effect='blur'
        height={height || '100%'}
        useIntersectionObserver={true}
        src={image}
        width={'100%'}
      />
    </>
  );
};

export const LazyLoadingComp = ({ children }) => {
  return (
    <>
      <LazyLoadComponent>{children}</LazyLoadComponent>
    </>
  );
};
