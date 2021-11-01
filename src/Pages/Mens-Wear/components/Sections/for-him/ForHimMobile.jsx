import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { get_mens_active_product } from '../../../../../Redux/actions/mensWear';
import CustomDivider from '../../../../../utils/Custom Divider/divider';
import styles from './forHimMobile.module.scss';

const ForHimMobile = ({ type }) => {
  const baseStyle = {
    padding: '1rem 1rem',
    background: '  #F3F1EE',
    marginTop: '-3em',
  };
  const { banner } = useSelector(state => state.root.main);
  console.log(
    '🚀 ~ file: ForHimMobile.jsx ~ line 12 ~ ForHimMobile ~ banner',
    banner
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_mens_active_product(type, 'all'));
  }, [type, dispatch]);
  return (
    <div style={baseStyle}>
      <div className={styles.forHim_header}>
        For Him
        <CustomDivider style={{ height: '2px', background: '#857250' }} />
      </div>
      <div className={styles.forHim_items}>
        {banner?.categories?.slice(0, 6).map((cat, i) => {
          console.log(
            '🚀 ~ file: ForHimMobile.jsx ~ line 36 ~ {banner?.category?.map ~ cat',
            cat
          );

          return (
            <div key={i} className={styles.forHim_item}>
              <img src={cat.cover_image} alt='' />
              <h3>{cat.name}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ForHimMobile;
