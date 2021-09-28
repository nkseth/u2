import { Button } from '@material-ui/core';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import React, { useEffect } from 'react';
import Carousel from 'react-material-ui-carousel';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { get_mens_wear_slider } from '../../../Redux/actions/mensWear';
import styles from '../Style/DesignerWear.module.scss';
const DesignerWear = () => {
  const dispatch = useDispatch();
  const backgroundURL =
    'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=763&q=80';

  const { mens_wear_slider, mens_wear_cat } = useSelector(
    state => state.root.main
  );
  useEffect(() => {
    dispatch(get_mens_wear_slider());
  }, []);

  const history = useHistory();

  return (
    <>
      <section className={styles.DesignerWear}>
        <Carousel
          emulateTouch
          infiniteLoop
          showStatus={false}
          showArrows={false}
        >
          {mens_wear_slider.map(item => {
            return (
              <div
                onClick={() => history.push(item.link)}
                style={{
                  backgroundImage: `url(${item.image})`,
                }}
                className={styles.carouselItem}
              >
                <div className={styles.itemDetails}>
                  <h1>{item.title || 'Categories'}</h1>
                  <p>{item.sub_title}</p>
                </div>
              </div>
            );
          })}
        </Carousel>
      </section>
    </>
  );
};

export default DesignerWear;
