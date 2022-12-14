import React, { useEffect } from 'react';
import { useMediaQuery } from '@material-ui/core';
import CustomSection from '../../../../../utils/Custom Section/section';
import StylishCard from './Components/stylish-cards/card';
import styles from './stylishRecommendation.module.scss';
//images
import stylish1 from '../../../Images/stylish-1.png';
import stylish2 from '../../../Images/stylish-2.png';
import stylish3 from '../../../Images/stylish-3.png';
import stylish4 from '../../../Images/stylish-4.png';
import stylish5 from '../../../Images/stylish-5.png';
import { useDispatch, useSelector } from 'react-redux';
import {
  get_most_loved,
  get_stylish_recommend,
} from '../../../../../Redux/actions/mensWear';
import Loader from '../../../../../utils/Loader/Loader';
import CustomDivider from '../../../../../utils/Custom Divider/divider';
export default function StylishRecommendationSection({ type }) {
  const tabView = useMediaQuery('(max-width:768px)');
  const tabViewPro = useMediaQuery('(max-width:835px)');
  const mobileView = useMediaQuery('(max-width:550px)');
  const mobile = useMediaQuery('(max-width:420px)');

  const dispatch = useDispatch();

  useEffect(() => {
    //const group = type == 'mens' ? 'men_group_2' : type == 'womens' ? 'women_group_2' : 'kid_group_2'
    dispatch(get_stylish_recommend(type, 2));
  }, [type, dispatch]);

  const { stylish_recommend } = useSelector(state => state.root.main);
  console.log(stylish_recommend);
  return (
    <CustomSection
      style={{
        backgroundColor: '#E6E3DC36',
        paddingTop: '43px',
        paddingBottom: '93px',
      }}
    >
      {mobile ? (
        <div className={`${styles.stylish_header}  `}>
          Stylish Recommendation
          <CustomDivider style={{ height: '1px', background: '#857250' }} />
        </div>
      ) : (
        <div className={styles.header}>
          <span>Stylish</span>
          <span>Recommendation</span>
        </div>
      )}

      {!stylish_recommend ? (
        <Loader />
      ) : (
        <>
          <div className={styles.cardContainer}>
            {mobileView && (
              <div>
                {stylish_recommend.map((item, i) =>
                  i < 4 ? <StylishCard type={type} item={item} /> : null
                )}
                {/* {stylish_recommend[0] ? (
                  <StylishCard
                    type={type}
                    item={stylish_recommend[0]}
                    image={stylish_recommend[0].image}
                  />
                ) : null}
                {stylish_recommend.length > 1 ? (
                  <StylishCard
                    type={type}
                    item={stylish_recommend[1]}
                    image={stylish_recommend[1].cover_image}
                  />
                ) : null}
                {stylish_recommend.length > 2 ? (
                  <StylishCard
                    type={type}
                    item={stylish_recommend[2]}
                    image={stylish_recommend[2].cover_image}
                  />
                ) : null}
                {stylish_recommend.length > 3 ? (
                  <StylishCard
                    type={type}
                    item={stylish_recommend[3]}
                    image={stylish_recommend[3].cover_image}
                  />
                ) : null}
                {stylish_recommend.length > 4 ? (
                  <StylishCard
                    type={type}
                    item={stylish_recommend[4]}
                    image={stylish_recommend[4].cover_image}
                  />
                ) : null} */}
              </div>
            )}
            {!mobileView && (
              <>
                <div className={styles.firstCon}>
                  {stylish_recommend.length > 0 ? (
                    <div>
                      <StylishCard type={type} item={stylish_recommend[0]} />
                    </div>
                  ) : null}
                  {stylish_recommend.length > 1 ? (
                    <div>
                      <StylishCard type={type} item={stylish_recommend[1]} />
                    </div>
                  ) : null}
                </div>
                <div className={styles.secondCon}>
                  {stylish_recommend.length > 2 ? (
                    <div>
                      <StylishCard type={type} item={stylish_recommend[2]} />
                    </div>
                  ) : null}
                  {stylish_recommend.length > 3 ? (
                    <div>
                      <StylishCard type={type} item={stylish_recommend[3]} />
                    </div>
                  ) : null}
                </div>
              </>
            )}
          </div>
        </>
      )}
    </CustomSection>
  );
}
