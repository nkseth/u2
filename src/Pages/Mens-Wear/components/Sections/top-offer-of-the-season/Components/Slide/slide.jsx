import React from 'react';
import { useMediaQuery } from '@material-ui/core';
import DesignersCard from '../designers-card/card';

export default function DesignerSlide({
  image1,
  image2,
  image3,
  image4,
  title,
  description,
  slug,
  type
}) {
  const mobileView = useMediaQuery('(max-width:400px)');
  const mobileViewPro = useMediaQuery('(max-width:550px)');
  const tabView = useMediaQuery('(max-width:768px)');
  const tabViewPro = useMediaQuery('(max-width:835px)');
  const CustomView = useMediaQuery('(max-width:1050px)');
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: mobileView ? 'center' : 'center',
        gap: mobileView ? '0.5rem' : '0rem',
        marginBottom: '3rem',
      }}
    >
      {mobileView ? (
        <>
          <DesignersCard
            image={image1}
            title={title}
            slug={slug}
            type={type}
            description={description}
          />
        </>
      ) : mobileViewPro ? (
        <>
          <DesignersCard
            image={image1}
            title={title}
            description={description}
            slug={slug}
            type={type}
          />
        </>
      ) : tabView ? (
        <>
          <DesignersCard
            image={image1}
            title={title}
            description={description}
            slug={slug}
            type={type}
          />
        </>
      ) : tabViewPro ? (
        <>
          <DesignersCard
            image={image1}
            title={title}
            description={description}
            slug={slug}
            type={type}
          />
        </>
      ) : CustomView ? (
        <>
          <DesignersCard
            image={image1}
            title={title}
            description={description}
            slug={slug}
            type={type}
          />
        </>
      ) : (
        <>
          <DesignersCard
            image={image1}
            title={title}
            description={description}
            slug={slug}
            type={type}
          />
        </>
      )}
    </div>
  );
}
