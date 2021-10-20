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

const SimilarProducts = ({ tags }) => {
  const dispatch = useDispatch();
  const item = {
    brand: null,
    category_id: 0,
    condition: 'New',
    condition_note: null,
    currency: 'INR',
    currency_symbol: '₹',
    custom_price: 0,
    description:
      '<ul class="a-unordered-list a-vertical a-spacing-mini" amazon="" ember",="" arial,="" sans-serif;"="" style="margin-right: 0px; margin-bottom: 0px; margin-left: 18px; color: rgb(15, 17, 17); padding: 0px;"><li style="list-style: disc; overflow-wrap: break-word; margin: 0px;"><span class="a-list-item" style="overflow-wrap: break-word; display: block;">Care Instructions: Machine Wash</span></li><li style="list-style: disc; overflow-wrap: break-word; margin: 0px;"><span class="a-list-item" style="overflow-wrap: break-word; display: block;">Fit Type: slim fit</span></li><li style="list-style: disc; overflow-wrap: break-word; margin: 0px;"><span class="a-list-item" style="overflow-wrap: break-word; display: block;">100% premium Cotton, pre washed for an extremely soft finish and rich look</span></li><li style="list-style: disc; overflow-wrap: break-word; margin: 0px;"><span class="a-list-item" style="overflow-wrap: break-word; display: block;">Stylish full sleeve checkered casual shirt</span></li><li style="list-style: disc; overflow-wrap: break-word; margin: 0px;"><span class="a-list-item" style="overflow-wrap: break-word; display: block;">Modern slim fit ( we have updated our size chart, please refer the size chart for new measurements before ordering)</span></li><li style="list-style: disc; overflow-wrap: break-word; margin: 0px;"><span class="a-list-item" style="overflow-wrap: break-word; display: block;">Best for casual &amp; smart casual wear</span></li></ul>',
    feature_image:
      'https://dhaatri.info/storage/images/61434a7369ee5.jpg?p=null',
    free_shipping: null,
    id: 130,
    key_features: false,
    mesaurment: null,
    min_order_quantity: 1,
    price: 0,
    product: {
      id: 73,
      slug: 'stripped-white-shirt-666',
      mpn: '777',
      brand: 'Trend 5',
      image:
        'https://dhaatri.info/storage/images/OfNfwuuKoxZV9UWYH4iQgjFGhzfcSzEdtyvn72Mi.jpg?p=small',
      description: `<p><span style="color: rgb(40, 44, 63); font-famil…model (height 5'8") is wearing a size S</li></ul>`,
    },
    quantity: 1,
    readymade_price: 900,
    shipping_address: null,
    shipping_weight: null,
    sku: '1890',
    slug: 'stripped-white-shirt-666',
    stock_quantity: 73,
    stuff_pick: null,
    title: 'Stripped White Shirt',
    total: 900,
    type: null,
    unit_price: 900,
  };

  const { products, loading, error } = useSelector(
    state => state.root.similarProducts
  );
  console.log(products);
  useEffect(() => {
    dispatch(getSimilarProducts(tags));
  }, [tags, dispatch]);

  const visible = 4;
  const theme = useTheme();

  const match = useMediaQuery('(max-width:630px)');
  const iPade = useMediaQuery(theme.breakpoints.down('sm'));
  const large = useMediaQuery(theme.breakpoints.down('1330px'));
  const CustomView = useMediaQuery('(max-width:400px)');

  return (
    <>
      <h1>Similar Products</h1>
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
                  key={item.id.toString()}
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
          {/* {products.map((product) => {
            if (products) return <ProductCard product={product} />;
            else
              return (
                <ContentLoader
                  speed={2}
                  width={400}
                  height={500}
                  viewBox="0 0 400 500"
                  backgroundColor="#f3f3f3"
                  foregroundColor="#ecebeb"
                >
                  <rect x="15%" y="0" rx="0" ry="0" width="300" height="320" />
                  <rect x="15%" y="330" rx="0" ry="0" width="200" height="20" />
                  <rect x="15%" y="360" rx="0" ry="0" width="150" height="15" />
                  <rect x="15%" y="385" rx="0" ry="0" width="250" height="18" />
                </ContentLoader>
              );
          })} */}
        </div>
      )}
    </>
  );
};

export default SimilarProducts;
