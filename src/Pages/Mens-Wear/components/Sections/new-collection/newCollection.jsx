import React, { useEffect } from 'react';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { IconButton } from '@material-ui/core';
import CustomSection from '../../../../../utils/Custom Section/section';
import CarouselSlide from './Components/Slide/slide';
import styles from './newCollection.module.scss';
//icons
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
//BackGroud Image
import bg from '../../../Images/bg.png';
import { useDispatch, useSelector } from 'react-redux';
import { get_new_collection } from '../../../../../Redux/actions/mensWear';
import Loader from '../../../../../utils/Loader/Loader';

export default function NewCollectionSection({ type }) {
  const dispatch = useDispatch();
  const { new_collection } = useSelector(state => state.root.main);

  // console.log(new_collection);
  useEffect(() => {
    // const group = type === "mens" ? "1" : type === "womens" ? "1" : "1";
    dispatch(get_new_collection(`${type}`, 1));
  }, [type, dispatch]);

  return (
    <CustomSection
      style={{
        backgroundColor: '#9d8e73',
        backgroundImage: bg,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        paddingTop: '4rem',
      }}
    >
      {!new_collection ? (
        <Loader />
      ) : (
        <CarouselProvider
          naturalSlideWidth={100}
          totalSlides={new_collection.length}
          isIntrinsicHeight
        >
          <Slider>
            {new_collection.map((collection, i) => {
              return (
                <Slide index={i}>
                  <CarouselSlide
                    type={type}
                    item={collection}
                    image={
                      new_collection[i + 1]?.image || new_collection[0].image
                    }
                  >
                    <div className={styles.sliderBtnDiv}>
                      <ButtonBack className={styles.sliderBtn}>
                        <IconButton className={styles.iconBtn}>
                          <NavigateBeforeIcon />
                        </IconButton>
                      </ButtonBack>
                      <ButtonNext className={styles.sliderBtn}>
                        <IconButton className={styles.iconBtn}>
                          <NavigateNextIcon />
                        </IconButton>
                      </ButtonNext>
                    </div>
                  </CarouselSlide>
                </Slide>
              );
            })}
          </Slider>
        </CarouselProvider>
      )}
    </CustomSection>
  );
}
