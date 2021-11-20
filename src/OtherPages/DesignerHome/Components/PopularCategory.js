import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from '@material-ui/core';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import { popularCategories } from '../../../Redux/actions/designerHomePage';
import CustomDivider from '../../../utils/Custom Divider/divider';
import Skeleton from '@material-ui/lab/Skeleton';
import styles from '../Style/PopularCategory.module.scss';
import '../Style/common.scss';

import overlay from '../Images/p1.png';

const PopularCategory = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const mobile = useMediaQuery('(max-width:450px)');

  const baseStyle = {
    padding: '5rem 3rem 141px 3rem',
  };

  const { categories, loading } = useSelector(
    state => state.root.popularCategory
  );

  useEffect(() => {
    dispatch(popularCategories());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.popularcategory_content} style={baseStyle}>
      <div className={`${styles.PopularCategory_header} common-headings--1`}>
        Popular Categories
        <CustomDivider style={{ height: '1px', background: '#857250' }} />
      </div>
      {!mobile ? (
        <div className={`${styles.Category} Category`}>
          {categories?.slice(0, 6).map((category, i) => {
            return (
              <>
                {loading ? (
                  <div className={`col Category_item-${i}`}>
                    <Skeleton
                      variant='rect'
                      width='100%'
                      height='100%'
                      animation='wave'
                    />
                  </div>
                ) : (
                  <div
                    onClick={() =>
                      history.push(`/designers-product-page/${category.link}`)
                    }
                    className={`${styles.Category_item}   Category_item-${i}`}
                    style={{
                      backgroundImage: 'url(' + category?.image + ')',
                      backgroundPosition: 'top center',
                    }}
                  >
                    <img
                      src={overlay}
                      className={styles.divOverlayImg}
                      alt={category?.id}
                    />

                    <Link
                      className='popular-category--items'
                      style={{ zIndex: 10 }}
                      to={category.link ? category.link : ''}
                    >
                      {category?.title}
                    </Link>
                  </div>
                )}
              </>
            );
          })}
        </div>
      ) : (
        <div class='container'>
          <div className={styles.Category}>
            {categories?.slice(0, 6).map((category, i) => {
              return (
                <div
                  onClick={() =>
                    history.push(`/designers-product-page/${category.link}`)
                  }
                  className={`${styles.Category_item}   Category_item-${i}`}
                  style={{
                    backgroundImage: 'url(' + category?.image + ')',
                  }}
                >
                  <img
                    src={overlay}
                    className={styles.divOverlayImg}
                    alt={category?.id}
                  />

                  <Link
                    style={{ zIndex: 10 }}
                    to={category.link ? category.link : ''}
                  >
                    {category?.title}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default PopularCategory;
