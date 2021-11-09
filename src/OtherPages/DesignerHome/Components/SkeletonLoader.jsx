import { useMediaQuery } from '@material-ui/core';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import React from 'react';

import Skeleton from '@material-ui/lab/Skeleton';
import ImageWhiteBgCard from '../../../Commons/Cards/ImageWhiteBgCard/ImageWhiteBgCard';
const SkeletonLoader = ({ mobile }) => {
  const dummyArray = [1, 3, 4, 5];
  const match = useMediaQuery('(max-width:630px)');
  const iPade = useMediaQuery('(max-width:900px)');
  const large = useMediaQuery('(max-width:1330px)');
  const CustomView = useMediaQuery('(max-width:400px)');
  // const mobile = useMediaQuery('(max-width:450px)');

  return (
    <>
      {mobile ? (
        <div class='container' style={{ marginTop: '1.5rem' }}>
          <div class='row row-cols-2'>
            {dummyArray?.map((item, i) => (
              <div className='col' style={{ marginBottom: '1rem' }}>
                <Skeleton
                  variant='rect'
                  width={150}
                  height={180}
                  animation='wave'
                />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <CarouselProvider
          visibleSlides={match ? 1.4 : iPade ? 2.5 : large ? 3 : 4}
          totalSlides={match ? dummyArray?.length + 0.3 : dummyArray?.length}
          isIntrinsicHeight
        >
          <Slider>
            {dummyArray.map(item => {
              return (
                <Slide>
                  <Skeleton
                    variant='rect'
                    width={
                      large
                        ? 250
                        : iPade
                        ? 230
                        : match
                        ? 210
                        : mobile
                        ? 220
                        : 290
                    }
                    height={
                      large
                        ? 325
                        : iPade
                        ? 300
                        : match
                        ? 280
                        : mobile
                        ? 265
                        : 350
                    }
                    animation='wave'
                  />
                </Slide>
              );
            })}
          </Slider>
        </CarouselProvider>
      )}
    </>
  );
};

export default SkeletonLoader;
