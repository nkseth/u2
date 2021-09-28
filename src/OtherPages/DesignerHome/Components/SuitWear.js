import { Link } from 'react-router-dom';
import { IconButton, useMediaQuery, useTheme } from '@material-ui/core';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  DotGroup,
} from 'pure-react-carousel';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import CustomSection from '../../../utils/Custom Section/section';
import CustomDivider from '../../../utils/Custom Divider/divider';
import styles from '../Style/SuitWear.module.scss';
import p1 from '../Images/111.png';
import p2 from '../Images/p2.png';
import p3 from '../Images/p3.png';
import p4 from '../Images/p4.png';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { suitWears } from '../../../Redux/actions/designerHomePage';
import c1 from '../Images/111.png';
import c2 from '../Images/c2.jpg';

const SuitWear = () => {
  const dispatch = useDispatch();
  const customStyle = {
    padding: '5rem 3rem 4rem  3rem',
    background: '#938368',
  };

  const { suitWearItems } = useSelector(state => state.root.suitWears);

  const [visible, setvisible] = useState(4);
  const theme = useTheme();

  const match = useMediaQuery(theme.breakpoints.down('xs'));
  const iPade = useMediaQuery(theme.breakpoints.down('sm'));
  const large = useMediaQuery(theme.breakpoints.down('md'));
  const CustomView = useMediaQuery('(max-width:400px)');

  useEffect(() => {
    dispatch(suitWears());
  }, []);

  if (!suitWearItems) {
    return null;
  }

  return (
    <div>
      <CustomSection class={styles.suitwear_content} style={customStyle}>
        <div className={`${styles.SuitWear_header}`}>
          Suit Wear{' '}
          <CustomDivider style={{ height: '2px', background: '#fff' }} />
        </div>
        <CarouselProvider
          visibleSlides={match ? 1 : iPade ? 2 : large ? 3 : visible}
          totalSlides={suitWearItems?.length}
          isIntrinsicHeight
        >
          <Slider>
            {suitWearItems?.map((item, i) => (
              <Slide
                index={i}
                key={item.id.toString()}
                style={
                  CustomView
                    ? { marginRight: 0, marginLeft: 0 }
                    : { marginRight: 35, marginLeft: 35 }
                }
              >

                <Link
                  to={{
                    pathname: `/designers-product-page/${item.slug}`,
                  }}
                >
                  <div>
                    <div className={styles.SuitWear}>
                      <div className={styles.SuitWear_Items}>
                        <img src={item.cover_image} alt={item.id} />
                        <Link>{item.name}</Link>
                      </div>
                    </div>
                  </div>
                </Link>
              </Slide>
            ))}


          </Slider>
          <DotGroup style={{ display: 'flex', marginTop: '2rem' }} />
          <div className={styles.NavigationContainer}>
            <Link
              style={{ color: "#fff" }}
              to="/designers-product-page/suit_wear"
            >

              SEE All
            </Link>
            <div className={styles.Carousel_SliderButtonBox}>
              <ButtonBack className={styles.Carousel_SliderButtons}>
                <IconButton size='small' className={styles.Carousel_iconBtn}>
                  <NavigateBeforeIcon />
                </IconButton>
              </ButtonBack>
              <ButtonNext className={styles.Carousel_SliderButtons}>
                <IconButton size='small' className={styles.Carousel_iconBtn}>
                  <NavigateNextIcon />
                </IconButton>
              </ButtonNext>
            </div>
          </div>
        </CarouselProvider>
      </CustomSection>
    </div>
  );
};

export default SuitWear;

