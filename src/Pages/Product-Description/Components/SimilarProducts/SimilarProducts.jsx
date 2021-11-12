import React, { useEffect, useState } from 'react';
import SkeletonArticle from '../../../../utils/skeletons/SkeletonArticle';
import ProductCard from '../../../Designers-Product-Page/Components/product-card/card';
import styles from './SimilarProducts.module.scss';
import Loader from '../../../../utils/Loader/Loader';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import ContentLoader from 'react-content-loader';
import { useDispatch, useSelector } from 'react-redux';
import { getSimilarProducts } from '../../../../Redux/actions/products';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  DotGroup,
} from 'pure-react-carousel';
import { useMediaQuery, useTheme } from '@material-ui/core';
import { getWishList } from '../../../../Redux/actions/wishlist';

const SimilarProducts = ({ tags }) => {
  const dispatch = useDispatch();

  const { products, loading, error } = useSelector(
    state => state.root.similarProducts
  );
  const { user, isAuthenticated } = useSelector(state => state.root.auth);
  console.log(isAuthenticated);
  console.log(products);
  useEffect(() => {
    dispatch(getSimilarProducts(tags));
    if (!isAuthenticated) return;
    dispatch(getWishList(user.api_token));
  }, [tags, dispatch, isAuthenticated, user]);

  const visible = 4;
  const theme = useTheme();

  const match = useMediaQuery('(max-width:630px)');
  const iPade = useMediaQuery(theme.breakpoints.down('sm'));
  const large = useMediaQuery(theme.breakpoints.down('1330px'));
  const CustomView = useMediaQuery('(max-width:400px)');

  return (
    <>
      <h1 className={styles.heading_1}>Similar Products</h1>
      {!loading && products && products.length > 0 && (
        <div className={styles.similarProduct}>
          <CarouselProvider
            visibleSlides={match ? 1.4 : iPade ? 2 : large ? 3 : visible}
            totalSlides={products?.length + 0.3}
            isIntrinsicHeight
          >
            <Slider>
              {products.map((product, i) => (
                <Slide
                  index={i}
                  key={product.id.toString()}
                  style={
                    CustomView
                      ? { marginRight: '10px', marginLeft: '10px' }
                      : { marginRight: '20px', marginLeft: '20px' }
                  }
                  className={styles.items}
                >
                  <ProductCard product={product} />
                </Slide>
              ))}
            </Slider>
          </CarouselProvider>
        </div>
      )}
    </>
  );
};

export default SimilarProducts;
