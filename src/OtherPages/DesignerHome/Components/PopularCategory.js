import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import CustomDivider from '../../../utils/Custom Divider/divider';
import styles from '../Style/PopularCategory.module.scss';
import overlay from '../Images/p1.png';
import { useDispatch, useSelector } from 'react-redux';
import { popularCategories } from '../../../Redux/actions/designerHomePage';
//TRBL
//TRBL
const PopularCategory = () => {
  const dispatch = useDispatch();
  const baseStyle = { padding: '5rem 3rem' };
  const { categories } = useSelector(state => state.root.popularCategory);

  useEffect(() => {
    dispatch(popularCategories());
  }, []);

  console.log(categories, 'll');

  if (categories) {
    return (
      <>
        <div className={styles.popularcategory_content} style={baseStyle}>
          <div className={`${styles.PopularCategory_header}`}>
            Popular Categories
            <CustomDivider style={{ height: '1px', background: '#857250' }} />
          </div>
          <div className={`${styles.Category} Category`}>
            {categories.length > 0 ? (
              <div
                className={`${styles.Category_item1} Category_item`}
                style={{ backgroundImage: 'url(' + categories[0]?.image + ')' }}
              >
                <img
                  src={overlay}
                  className={styles.divOverlayImg}
                  alt={categories[0]?.id}
                />

                <Link
                  style={{ zIndex: 10, fontFamily: 'DM Serif Display' }}
                  to={categories[0].link ? categories[0].link : ''}
                >
                  {categories[0]?.title}
                </Link>
              </div>
            ) : null}
            {categories.length > 1 ? (
              <div
                className={`${styles.Category_item2} Category_item`}
                style={{ backgroundImage: 'url(' + categories[1]?.image + ')' }}
              >
                <img
                  src={overlay}
                  className={styles.divOverlayImg}
                  alt={categories[1]?.id}
                />
                <Link
                  style={{ zIndex: 10, fontFamily: 'DM Serif Display' }}
                  to={categories[1].link ? categories[1].link : ''}
                >
                  {categories[1]?.title}
                </Link>{' '}
              </div>
            ) : null}
            {categories.length > 2 ? (
              <div
                className={`${styles.Category_item3} Category_item`}
                style={{ backgroundImage: 'url(' + categories[2]?.image + ')' }}
              >
                <img
                  src={overlay}
                  className={styles.divOverlayImg}
                  alt={categories[2]?.id}
                />
                <Link
                  style={{ zIndex: 10, fontFamily: 'DM Serif Display' }}
                  to={categories[2].link ? categories[2].link : ''}
                >
                  {categories[2]?.title}
                </Link>
              </div>
            ) : null}
            {categories.length > 3 ? (
              <div
                className={`${styles.Category_item4} Category_item`}
                style={{ backgroundImage: 'url(' + categories[3]?.image + ')' }}
              >
                <img
                  src={overlay}
                  className={styles.divOverlayImg}
                  alt={categories[3]?.id}
                />
                <Link
                  style={{ zIndex: 10, fontFamily: 'DM Serif Display' }}
                  to={categories[3].link ? categories[3].link : ''}
                >
                  {categories[3]?.title}
                </Link>{' '}
              </div>
            ) : null}
            {categories.length > 4 ? (
              <div
                className={`${styles.Category_item5} Category_item`}
                style={{ backgroundImage: 'url(' + categories[4]?.image + ')' }}
              >
                <img
                  src={overlay}
                  className={styles.divOverlayImg}
                  alt={categories[4]?.id}
                />
                <Link
                  style={{ zIndex: 10, fontFamily: 'DM Serif Display' }}
                  to={categories[4].link ? categories[4].link : ''}
                >
                  {categories[4]?.title}
                </Link>{' '}
              </div>
            ) : null}
            {categories.length > 5 ? (
              <div
                className={`${styles.Category_item6} Category_item`}
                style={{ backgroundImage: 'url(' + categories[5]?.image + ')' }}
              >
                <img
                  src={overlay}
                  className={styles.divOverlayImg}
                  alt={categories[5]?.id}
                />
                <Link
                  style={{ zIndex: 10, fontFamily: 'DM Serif Display' }}
                  to={categories[5].link ? categories[5].link : ''}
                >
                  {categories[5]?.title}
                </Link>
              </div>
            ) : null}
          </div>
        </div>
      </>
    );
  } else {
    return null;
  }
};

export default PopularCategory;
