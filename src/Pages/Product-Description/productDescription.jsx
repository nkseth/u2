import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import {
  Button,
  IconButton,
  Radio,
  InputBase,
  Select,
  MenuItem,
  FormControlLabel,
  useMediaQuery,
  Tooltip,
} from '@material-ui/core';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/scss/image-gallery.scss';
import CustomSection from '../../utils/Custom Section/section';
import Breadcrumb from '../../utils/Breadcrumb/breadcrumb';
import Container from '../../utils/Container/container';
import DetailTabs from './Components/Details-Tabs/tabs';
import styles from './productDescription.module.scss';
//icons
import deliveryTruckIcon from '../../Images/icons/deliveryTruck.svg';
import clockIcon from '../../Images/icons/clock.svg';
import { ReactComponent as BagIcon } from '../../Images/icons/bag-primary.svg';
import HelpIcon from '@material-ui/icons/Help';
import SelectSize from './Components/SelectSize/SelectSize';
import { useLocation } from 'react-router-dom';
import common_axios from '../../utils/axios.config';
import { useSelector } from 'react-redux';
import useLogin from '../../LoginSceens/useLogin';
import FavoriteIcon from '@material-ui/icons/Favorite';
// import Bag from "./addedbag.gif";
import Bag from './images/addedtobag.svg';
import { ReactComponent as Heart } from './images/heart.svg';
import { ReactComponent as Share } from './images/share.svg';
// import {
//   addToWishlist,
//   clearUpdateWishlist,
//   removeFromWishlist,
// } from '../../../../Redux/actions/wishlist';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
// Product Type
import SimilarProducts from './Components/SimilarProducts/SimilarProducts';
import { Product_Type, Product_Type_Change } from '../../Redux/MeasuremantData';
import ReactImageMagnify from 'react-image-magnify';
import { useDispatch } from 'react-redux';
import { getProductDetails } from '../../Redux/actions/products';

// import {
//   MagnifierContainer,
//   MagnifierZoom,
//   MagnifierPreview,
// } from 'react-image-magnifiers';
import Loader from '../../utils/Loader/Loader';
import DescriptionLoader from './Components/Loader/DescriptionLoader';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper/core';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import {
  addToWishlist,
  clearUpdateWishlist,
  removeFromWishlist,
} from '../../Redux/actions/wishlist';

const CustomRadio = withStyles({
  root: {
    color: 'transparent',
    '&$checked': {
      color: '#857250',
    },
  },
  checked: {},
})(props => <></>);

const CustomRadio1 = withStyles({
  root: {
    color: '#9D9D9D',
    '&$checked': {
      color: '#857250',
    },
  },
  checked: {},
})(props => <Radio color='default' {...props} />);

const BootstrapInput = withStyles(theme => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    width: '343px',

    borderRadius: 0,
    position: 'relative',
    // backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,

    padding: '3px 8px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
    '@media (max-width:835px)': {
      width: 'calc(100vw - 102px)',
    },
    '@media (max-width:550px)': {
      width: 'calc(100vw - 67px)',
    },
  },
}))(InputBase);

const HtmlTooltip = withStyles(theme => ({
  tooltip: {
    // placement: "right-start",
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    width: 200,
    // height: 100,
    fontSize: theme.typography.pxToRem(10),
    border: '1px solid #dadde9',
  },
}))(Tooltip);

const HtmlTooltipButton = withStyles(theme => ({
  tooltip: {
    // placement: "right-start",
    backgroundColor: 'white',
    color: '#857250',
    // width: 170,
    textAlign: 'center',
    // height: 100,
    fontSize: theme.typography.pxToRem(10),
    border: 'none',
  },
}))(Tooltip);
const toIndianCurrency = num => {
  const curr = num.toLocaleString('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
  return curr;
};

export default function ProductDescription({ match }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const customView = useMediaQuery('(max-width:1044px)');
  const tabView = useMediaQuery('(max-width:768px)');
  const tabViewPro = useMediaQuery('(min-width:768px) and (max-width:1044px');
  const mobileView = useMediaQuery('(max-width:550px)');

  const [selectedColor, setSelectedColor] = useState('');
  const [ProductDrop, setProductDrop] = useState(false);
  const [click, setClick] = useState(false);
  const [animate, setAnimate] = useState(false);

  const [cartMessage, setCartMessage] = useState('Added To bag');
  // const [buttonMessage, setButtonMessage] = useState("Add to Bag");

  //const { data: val } = location.state;
  const {
    params: { slug },
  } = match;

  const [images, setImages] = useState([]);
  const [ProductType, setProductType] = useState(null);
  const [isAddToWishList, setAddToWishList] = useState(false);

  const { login_Model_Show } = useLogin();

  const { user, isAuthenticated } = useSelector(state => state.root.auth);
  const { details, error, tags, loading, attributes, variantId } = useSelector(
    state => state.root.productDetails
  );

  useEffect(() => {
    if (click) {
      setTimeout(() => {
        setClick(false);
      }, 4500);
    }
  }, [click]);

  useEffect(() => {
    if (details) {
      setProductType(
        details.product.isCustomise === 'on' ? 'custom' : 'ready made'
      );
      const img = [];
      details.images.forEach(item => {
        img.push({ thumbnail: item.path, original: item.path });
      });
      setImages(img);
    }
    if (!details && !loading) dispatch(getProductDetails(slug));
  }, [slug, dispatch, details]);

  console.log(details);

  useEffect(() => {
    dispatch(getProductDetails(slug));
  }, []);

  const buy_now_handler = async () => {
    if (isAuthenticated) {
      if (details.hasOwnProperty('title')) {
        try {
          const type = ProductType === 'ready made' ? 'readymade' : 'customise';
          const value = { type, variant_id: variantId };
          const { data } = await common_axios.post(`/addToCart/${slug}`, {
            ...value,
          });
          console.log(data);
          if (data) {
            history.push('/my-bag');
          }
        } catch (e) {
          console.log(e?.response?.data?.message);
          if (e?.response?.data?.message === 'Item alrealy in your cart') {
            history.push('/my-bag');
          }

          if (e?.response?.data?.message === 'Login first') {
            login_Model_Show();
          }
        }
      }
    } else {
      login_Model_Show();
    }
  };

  const add_bag_handler = async () => {
    if (isAuthenticated) {
      try {
        const type = ProductType === 'ready made' ? 'readymade' : 'customise';
        const value = { type, variant_id: variantId };
        const { data } = await common_axios.post(`/addToCart/${slug}`, {
          type,
          variant_id: variantId,
        });

        if (data) {
          console.log(data);
        }
      } catch (e) {
        // alert(e.response.data.message);
        setCartMessage(e.response.data.message);

        console.log(click);

        console.log(e.response.data);
      }
    } else {
      login_Model_Show();
    }
  };

  const add_to_wishlist = prod => {
    if (!isAuthenticated)
      return alert('Login first to add the item to wishlist');
    dispatch(addToWishlist(prod.slug, user.api_token));
    setAddToWishList(true);
    // dispatch(getWishList(user.api_token));
  };

  const remove_from_wishlist = prod => {
    if (!isAuthenticated)
      return alert('Login first to add the item to wishlist');
    const id = prod.id;
    dispatch(removeFromWishlist(id, user.api_token));
    // dispatch(getWishList(user.api_token));
    setAddToWishList(false);
  };

  // console.log(product);
  const [imageIdx, setImageIdx] = useState(0);

  // if (loadingDesc) return <DescriptionLoader />;

  return (
    <Container bottomDivider footerOnTabMob>
      <>
        <CustomSection style={{ marginTop: 10, marginBottom: 10 }}>
          <Breadcrumb
            path={`Home / ${details?.brand} /`}
            activePath={details?.title}
            style={{ padding: '1rem 0' }}
          />
        </CustomSection>
        {loading ? (
          <DescriptionLoader />
        ) : (
          details && (
            <div className={styles.container}>
              <div className={styles.firstContainer}>
                <div
                  style={{ width: '100%' }}
                  className={styles.gallery_container}
                >
                  <div className={styles.other_imgs}>
                    {images.map((image, i) => {
                      return (
                        <img
                          src={image.thumbnail}
                          className={`${imageIdx === i ? 'active' : ''}`}
                          style={{
                            border: `${
                              imageIdx === i ? '1px solid #857250' : ''
                            }`,
                            width: '70px',
                            height: '75px',
                            objectFit: 'cover',
                            objectPosition: 'top center',
                          }}
                          alt={image.url}
                          key={i}
                          onClick={() => setImageIdx(i)}
                        />
                      );
                    })}
                  </div>
                  {!mobileView ? (
                    <div className={styles.main_img}>
                      <ReactImageMagnify
                        className={styles.magnifier}
                        {...{
                          smallImage: {
                            alt: 'Wristwatch by Ted Baker London',
                            isFluidWidth: true,
                            // src: `${imageBaseUrl}wristwatch_1033.jpg`,
                            src: images[imageIdx]?.original,
                            // srcSet: this.srcSet,
                            sizes:
                              '(min-width: 800px) 33.5vw, (min-width: 415px) 50vw, 100vw ',
                          },
                          largeImage: {
                            alt: '',
                            src: images[imageIdx]?.original,
                            // src: `${imageBaseUrl}wristwatch_1200.jpg`,
                            width: 1200,
                            height: 1800,
                          },
                        }}
                      />

                      {isAddToWishList ? (
                        <IconButton
                          aria-label='product'
                          onClick={() => {
                            remove_from_wishlist(details.product);
                          }}
                          style={{
                            backgroundColor: '#fff',
                            position: 'absolute',
                            top: '30px',
                            right: '20px',
                            display: mobileView ? ' none' : 'unset',
                          }}
                        >
                          <FavoriteIcon style={{ color: 'red' }} />
                        </IconButton>
                      ) : (
                        <IconButton
                          aria-label='product'
                          onClick={() => {
                            add_to_wishlist(details.product);
                          }}
                          // className={styles.icons}
                          style={{
                            backgroundColor: '#fff',
                            position: 'absolute',
                            top: '30px',
                            right: '20px',
                            display: mobileView ? ' none' : 'unset',
                          }}
                        >
                          <FavoriteBorderIcon />
                        </IconButton>
                      )}
                    </div>
                  ) : (
                    <Swiper slidesPerView={1}>
                      {images.map((image, i) => {
                        return (
                          <SwiperSlide
                            style={{
                              margin: 'auto',
                            }}
                          >
                            <img
                              style={{ width: '90vw', height: '100%' }}
                              src={image?.original}
                            />
                          </SwiperSlide>
                        );
                      })}
                    </Swiper>
                  )}

                  {!mobileView && (
                    <div className={styles.other_imgs_tab}>
                      {images.map((image, i) => {
                        return (
                          <img
                            src={image.thumbnail}
                            className={`${imageIdx === i ? 'active' : ''}`}
                            style={{
                              border: `${
                                imageIdx === i ? '2px solid #857250' : ''
                              }`,
                              width: '56.59px',
                              height: '61.44px',
                              objectFit: 'cover',
                            }}
                            alt={image.url}
                            key={i}
                            onClick={() => setImageIdx(i)}
                          />
                        );
                      })}
                    </div>
                  )}
                </div>
                {!mobileView && !tabView && !customView ? (
                  <div className={styles.deliveryDiv}>
                    <div>
                      <span>Delivery option</span>
                      <img src={deliveryTruckIcon} alt='deliver truck' />:
                    </div>
                    <div>
                      <label>Enter pincode*</label>

                      <input type='text' name='pincode/zipcode' />
                    </div>
                    <span>
                      Please enter the pincode to check delivery time{' '}
                    </span>
                    <Button
                      variant='contained'
                      color='default'
                      className={styles.checkBtn}

                      // onClick={() => history.push('/product-breakdown')}
                    >
                      Check
                    </Button>
                  </div>
                ) : (
                  <></>
                )}
              </div>
              <div className={styles.lastContainer}>
                {/*tab view */}
                {customView && !mobileView && (
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      width: '100%',
                      maxWidth: '700px',
                    }}
                  >
                    <div
                      style={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                      }}
                    >
                      <div className={styles.productDetails}>
                        <span>{details.brand}</span>
                        <h3 className={styles.product__title}>
                          {details.title}
                        </h3>
                      </div>
                      <IconButton>
                        <Share style={{ width: '37px', height: '37px' }} />
                      </IconButton>
                      {details.stock_quantity < 10 ? (
                        <div className={styles.alert}>
                          <img src={clockIcon} alt='clock' />
                          <span
                            style={{
                              fontSize: 14,
                              marginLeft: -10,
                              marginRight: 0,
                            }}
                          >
                            Hurry up! Only 5 left in stock
                          </span>
                          <div>58:00</div>
                        </div>
                      ) : null}
                    </div>
                    <div className={styles.selectProduct}>
                      <div
                        style={{
                          marginTop: 25,
                          fontWeight: 'bolder',
                          marginBottom: -10,
                        }}
                      >
                        Product Type
                      </div>
                      <br />
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          width: '100%',
                        }}
                      >
                        <Select
                          style={{ width: '35%' }}
                          input={<BootstrapInput />}
                          value={ProductType}
                          onOpen={() => setProductDrop(true)}
                          onClose={() => setProductDrop(false)}
                          onChange={e => setProductType(e.target.value)}
                        >
                          {details.product?.isVariant ? (
                            <MenuItem value={'ready made'}>
                              <FormControlLabel
                                className={
                                  ProductDrop
                                    ? styles.FormControlLabel
                                    : styles.FormControlLabelS
                                }
                                checked={ProductType === 'ready made'}
                                control={<CustomRadio />}
                                label={
                                  <div className={styles.ProductSelector}>
                                    <p className={styles.ChoicesBtnsLabels}>
                                      Ready Made
                                    </p>
                                    {ProductDrop ? (
                                      <h6 className={styles.ProductSelectorh6}>
                                        Lorem ipsum is placeholder text commonly
                                        used in the graphicer text commonly used
                                        in the graphic
                                      </h6>
                                    ) : (
                                      <></>
                                    )}
                                  </div>
                                }
                              />
                            </MenuItem>
                          ) : null}
                          {details.product?.isCustomise === 'on' ? (
                            <MenuItem value={'custom'}>
                              <FormControlLabel
                                className={
                                  ProductDrop
                                    ? styles.FormControlLabel
                                    : styles.FormControlLabelS
                                }
                                checked={ProductType === 'custom'}
                                control={<CustomRadio />}
                                label={
                                  <div className={styles.ProductSelector}>
                                    <p className={styles.ChoicesBtnsLabels}>
                                      Customised
                                    </p>
                                    {ProductDrop ? (
                                      <h6 className={styles.ProductSelectorh6}>
                                        Lorem ipsum is placeholder text commonly
                                        used in the graphic er text commonly
                                        used in the graphic
                                      </h6>
                                    ) : (
                                      <></>
                                    )}
                                  </div>
                                }
                              />
                            </MenuItem>
                          ) : ProductType === 'custom' ? (
                            details.product.isVariant ? (
                              <MenuItem value={'ready made'}>
                                <FormControlLabel
                                  className={
                                    ProductDrop
                                      ? styles.FormControlLabel
                                      : styles.FormControlLabelS
                                  }
                                  checked={ProductType === 'ready made'}
                                  control={<CustomRadio />}
                                  label={
                                    <div className={styles.ProductSelector}>
                                      <p className={styles.ChoicesBtnsLabels}>
                                        Ready Made
                                      </p>
                                      {ProductDrop ? (
                                        <h6
                                          className={styles.ProductSelectorh6}
                                        >
                                          Lorem ipsum is placeholder text
                                          commonly used in the graphicer text
                                          commonly used in the graphic
                                        </h6>
                                      ) : (
                                        <></>
                                      )}
                                    </div>
                                  }
                                />
                              </MenuItem>
                            ) : null
                          ) : (
                            <></>
                          )}
                        </Select>
                        <HtmlTooltip
                          // className={styles.ProductSelectorHelpBtn}
                          style={{ color: '#6a5b40' }}
                          title={
                            <React.Fragment>
                              <h3 style={{ padding: 10 }}>
                                Lorem ipsum is place used in the graphic er text
                                commonly used in the graphic
                              </h3>
                            </React.Fragment>
                          }
                          placement={'right'}
                          arrow
                        >
                          <IconButton>
                            <HelpIcon />
                          </IconButton>
                        </HtmlTooltip>
                        {/* <IconButton className={styles.ProductSelectorHelpBtn} aria-label="add to shopping cart" size={'medium'} ><HelpIcon color="#6a5b40" /></IconButton> */}
                        {ProductType === 'ready made' ? (
                          <div className={styles.priceTab}>
                            {details.readymade_offer_price > 0 ? (
                              <>
                                <span>
                                  {details.currency_symbol}
                                  {details.readymade_offer_price}
                                </span>
                                <br />
                                <p>
                                  <span>
                                    {details.currency_symbol}
                                    {details.readymade_price}
                                  </span>
                                  <span>
                                    {'  '}
                                    {details.readymade_discount}% OFF
                                  </span>
                                </p>
                              </>
                            ) : (
                              <span>
                                {details.currency_symbol}
                                {details.readymade_price}
                              </span>
                            )}
                          </div>
                        ) : (
                          <div className={styles.priceTab}>
                            {details.custom_offer_price > 0 ? (
                              <>
                                <span>
                                  {details.currency_symbol}
                                  {details.custom_offer_price}
                                </span>
                                <br />
                                <p>
                                  <span>
                                    {details.currency_symbol}
                                    {details.custom_price}
                                  </span>
                                  <span>
                                    {'  '}
                                    {details.custom_discount}%
                                  </span>
                                </p>
                              </>
                            ) : (
                              <span>
                                {details.currency_symbol}
                                {details.custom_price}
                              </span>
                            )}
                          </div>
                        )}
                      </div>
                      {ProductType === 'ready made' ? (
                        <SelectSize variant={attributes.Size} />
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                )}
                {/* desktop view */}
                {!customView && (
                  <>
                    <div className={styles.productDetails}>
                      <span>{details.brand}</span>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}
                      >
                        <h3 className={styles.product__title}>
                          {details.title}
                        </h3>
                        <IconButton>
                          <Share style={{ width: '37px', height: '37px' }} />
                        </IconButton>
                      </div>
                    </div>
                    <div className={styles.selectProduct}>
                      <div
                        style={{
                          fontWeight: 'bolder',

                          marginBottom: -10,
                        }}
                      >
                        Product Type
                      </div>
                      <br />
                      <div
                        style={{
                          width: '100%',
                          display: 'flex',
                          alignItems: 'center',
                          position: 'relative',
                        }}
                      >
                        <Select
                          input={<BootstrapInput />}
                          value={ProductType}
                          onOpen={() => setProductDrop(true)}
                          onClose={() => setProductDrop(false)}
                          onChange={e => setProductType(e.target.value)}
                        >
                          {details.product?.isVariant ? (
                            <MenuItem value={'ready made'}>
                              <FormControlLabel
                                className={
                                  ProductDrop
                                    ? styles.FormControlLabel
                                    : styles.FormControlLabelS
                                }
                                checked={ProductType === 'ready made'}
                                control={<CustomRadio />}
                                label={
                                  <div className={styles.ProductSelector}>
                                    <p className={styles.ChoicesBtnsLabels}>
                                      Ready Made
                                    </p>
                                    {ProductDrop ? (
                                      <h6 className={styles.ProductSelectorh6}>
                                        Lorem ipsum is placeholder text commonly
                                        used in the graphicer text commonly used
                                        in the graphic
                                      </h6>
                                    ) : (
                                      <></>
                                    )}
                                  </div>
                                }
                              />
                            </MenuItem>
                          ) : null}
                          {details.product?.isCustomise === 'on' ? (
                            <MenuItem value={'custom'}>
                              <FormControlLabel
                                className={
                                  ProductDrop
                                    ? styles.FormControlLabel
                                    : styles.FormControlLabelS
                                }
                                checked={ProductType === 'custom'}
                                control={<CustomRadio />}
                                label={
                                  <div className={styles.ProductSelector}>
                                    <p className={styles.ChoicesBtnsLabels}>
                                      Customised
                                    </p>
                                    {ProductDrop ? (
                                      <h6 className={styles.ProductSelectorh6}>
                                        Lorem ipsum is placeholder text commonly
                                        used in the graphic er text commonly
                                        used in the graphic
                                      </h6>
                                    ) : (
                                      <></>
                                    )}
                                  </div>
                                }
                              />
                            </MenuItem>
                          ) : null}
                        </Select>
                        <HtmlTooltip
                          className={styles.ProductSelectorHelpBtn}
                          title={
                            <React.Fragment>
                              <h3 style={{ padding: 10 }}>
                                Lorem ipsum is placeholder text used in the
                                graphic er text commonly used in the graphic
                              </h3>
                            </React.Fragment>
                          }
                          placement={'right'}
                          arrow
                        >
                          <IconButton>
                            <HelpIcon />
                          </IconButton>
                        </HtmlTooltip>
                      </div>
                    </div>

                    {ProductType === 'ready made' ? (
                      <div className={styles.priceTab}>
                        {details.readymade_offer_price > 0 ? (
                          <>
                            <span>
                              {details.currency_symbol}
                              {details.readymade_offer_price}
                            </span>
                            <br />
                            <p>
                              <span>
                                {details.currency_symbol}
                                {details.readymade_price}
                              </span>
                              <span>
                                {'  '}
                                {details.readymade_discount}% OFF
                              </span>
                            </p>
                          </>
                        ) : (
                          <span>
                            {details.currency_symbol}
                            {details.readymade_price}
                          </span>
                        )}
                      </div>
                    ) : (
                      <div className={styles.priceTab}>
                        {details.custom_offer_price > 0 ? (
                          <>
                            <span>
                              {details.currency_symbol}
                              {details.custom_offer_price}
                            </span>
                            <br />
                            <p>
                              <span>
                                {details.currency_symbol}
                                {details.custom_price}
                              </span>
                              <span>
                                {'  '}
                                {details.custom_discount}%
                              </span>
                            </p>
                          </>
                        ) : (
                          <span>
                            {details.currency_symbol}
                            {details.custom_price}
                          </span>
                        )}
                      </div>
                    )}
                  </>
                )}
                {mobileView && (
                  <>
                    <div className={styles.productDetails}>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                        }}
                      >
                        <div>
                          <h1 className={styles.mobile__heading}>
                            {details.brand}
                          </h1>
                        </div>
                        {/* <span style={{ float: 'right' }}>
                          <FavoriteIcon
                            style={{
                              color: 'red',
                              height: '24px',
                              width: '24px',
                            }}
                          />
                          <Share style={{ height: '24px', width: '24px' }} />
                        </span> */}
                        <>
                          {isAddToWishList ? (
                            <div>
                              <IconButton
                                aria-label='product'
                                onClick={() => {
                                  remove_from_wishlist(details.product);
                                }}
                                style={{
                                  backgroundColor: '#fff',
                                }}
                              >
                                <FavoriteIcon style={{ color: 'red' }} />
                              </IconButton>
                              <IconButton>
                                <Share
                                  style={{ width: '24px', height: '24px' }}
                                />
                              </IconButton>
                            </div>
                          ) : (
                            <div
                              style={{ display: 'flex', alignItems: 'center' }}
                            >
                              <IconButton
                                aria-label='product'
                                onClick={() => {
                                  add_to_wishlist(details.product);
                                }}
                                // className={styles.icons}
                                style={{
                                  backgroundColor: '#fff',
                                }}
                              >
                                <FavoriteBorderIcon />
                              </IconButton>
                              <IconButton>
                                <Share
                                  style={{ width: '24px', height: '24px' }}
                                />
                              </IconButton>
                            </div>
                          )}
                        </>
                      </div>
                      <span>{details.title}</span>
                    </div>
                    <div className={styles.selectProduct}>
                      <div
                        style={{
                          marginTop: 10,
                          marginBottom: -10,
                          fontWeight: 'bolder',
                        }}
                      >
                        Product Type
                      </div>
                      <br />
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Select
                          style={{ width: '80%' }}
                          input={<BootstrapInput />}
                          value={ProductType}
                          onOpen={() => setProductDrop(true)}
                          onClose={() => setProductDrop(false)}
                          onChange={e => setProductType(e.target.value)}
                        >
                          {details.product?.isVariant ? (
                            <MenuItem value={'ready made'}>
                              <FormControlLabel
                                className={
                                  ProductDrop
                                    ? styles.FormControlLabel
                                    : styles.FormControlLabelS
                                }
                                checked={ProductType === 'ready made'}
                                control={<CustomRadio />}
                                label={
                                  <div className={styles.ProductSelector}>
                                    <p className={styles.ChoicesBtnsLabels}>
                                      Ready Made
                                    </p>
                                    {ProductDrop ? (
                                      <h6 className={styles.ProductSelectorh6}>
                                        Lorem ipsum is placeholder text commonly
                                        used in the graphicer text commonly used
                                        in the graphic
                                      </h6>
                                    ) : (
                                      <></>
                                    )}
                                  </div>
                                }
                              />
                            </MenuItem>
                          ) : null}
                          {details.product?.isCustomise === 'on' ? (
                            <MenuItem value={'custom'}>
                              <FormControlLabel
                                className={
                                  ProductDrop
                                    ? styles.FormControlLabel
                                    : styles.FormControlLabelS
                                }
                                checked={ProductType === 'custom'}
                                control={<CustomRadio />}
                                label={
                                  <div className={styles.ProductSelector}>
                                    <p className={styles.ChoicesBtnsLabels}>
                                      Customised
                                    </p>
                                    {ProductDrop ? (
                                      <h6 className={styles.ProductSelectorh6}>
                                        Lorem ipsum is placeholder text commonly
                                        used in the graphic er text commonly
                                        used in the graphic
                                      </h6>
                                    ) : (
                                      <></>
                                    )}
                                  </div>
                                }
                              />
                            </MenuItem>
                          ) : null}
                        </Select>
                        <HtmlTooltip
                          className={styles.ProductSelectorHelpBtn}
                          style={{ marginLeft: 0 }}
                          title={
                            <React.Fragment>
                              <h3 style={{ padding: 10 }}>
                                Lorem ipsum is plaer text commonly used in the
                                graphic er text commonly used in the graphic
                              </h3>
                            </React.Fragment>
                          }
                          placement={'bottom'}
                          arrow
                        >
                          <IconButton>
                            <HelpIcon />
                          </IconButton>
                        </HtmlTooltip>
                      </div>
                    </div>
                    {ProductType === 'ready made' ? (
                      <div className={styles.price}>
                        {details.readymade_offer_price > 0 ? (
                          <>
                            <span>
                              {details.currency_symbol}
                              {details.readymade_offer_price}
                            </span>
                            <br />
                            <p>
                              <span>
                                {details.currency_symbol}
                                {details.readymade_price}
                              </span>
                              <span>
                                {'  '}
                                {details.readymade_discount}% OFF
                              </span>
                            </p>
                          </>
                        ) : (
                          <span>
                            {details.currency_symbol}
                            {details.readymade_price}
                          </span>
                        )}
                      </div>
                    ) : (
                      <div className={styles.price}>
                        {details.custom_offer_price > 0 ? (
                          <>
                            <span>
                              {details.currency_symbol}
                              {details.custom_offer_price}
                            </span>
                            <br />
                            <p>
                              <span>
                                {details.currency_symbol}
                                {details.custom_price}
                              </span>
                              <span>
                                {'  '}
                                {details.custom_discount}%
                              </span>
                            </p>
                          </>
                        ) : (
                          <span>
                            {details.currency_symbol}
                            {details.custom_price}
                          </span>
                        )}
                      </div>
                    )}
                  </>
                )}
                {customView && !mobileView && (
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  ></div>
                )}

                {!customView && (
                  <div>
                    {details.stock_quantity < 10 ? (
                      <div className={styles.alert}>
                        <img src={clockIcon} alt='clock' />
                        <span>
                          Hurry up! Only {details.stock_quantity} left in stock
                        </span>
                        <div>50:00</div>
                      </div>
                    ) : null}

                    {ProductType === 'ready made' ? (
                      <SelectSize variant={attributes.Size} />
                    ) : (
                      <></>
                    )}
                  </div>
                )}

                {mobileView && (
                  <div>
                    {details.stock_quantity < 10 ? (
                      <div className={styles.alert}>
                        <img src={clockIcon} alt='clock' />
                        <span>
                          Hurry up! Only {details.stock_quantity} left in stock
                        </span>
                        <div>50:00</div>
                      </div>
                    ) : null}
                    {ProductType === 'ready made' ? (
                      <SelectSize variant={attributes.Size} />
                    ) : (
                      <></>
                    )}
                  </div>
                )}
                <div className={styles.selectColor}>
                  <div>Select colour</div>
                  <br />

                  <div className={styles.SelectColorCard}>
                    <IconButton
                      className={styles.ColorBTN}
                      onClick={() => setSelectedColor('#DAD3C1')}
                      style={{
                        backgroundColor: '#DAD3C1',
                        borderColor:
                          selectedColor === '#DAD3C1' ? '#DAD3C1' : 'white',
                      }}
                    >
                      <IconButton
                        className={styles.ColorInnerBTN}
                        style={{
                          borderColor:
                            selectedColor === '#DAD3C1'
                              ? '#fff'
                              : 'transparent',
                        }}
                      ></IconButton>
                    </IconButton>
                    <IconButton
                      className={styles.ColorBTN}
                      onClick={() => setSelectedColor('#FF543E')}
                      style={{
                        backgroundColor: '#FF543E',
                        borderColor:
                          selectedColor === '#FF543E' ? '#FF543E' : 'white',
                      }}
                    >
                      <IconButton
                        className={styles.ColorInnerBTN}
                        style={{
                          borderColor:
                            selectedColor === '#FF543E'
                              ? '#fff'
                              : 'transparent',
                        }}
                      ></IconButton>
                    </IconButton>
                    <IconButton
                      className={styles.ColorBTN}
                      onClick={() => setSelectedColor('#D1AA67')}
                      style={{
                        backgroundColor: '#D1AA67',
                        borderColor:
                          selectedColor === '#D1AA67' ? '#D1AA67' : 'white',
                      }}
                    >
                      <IconButton
                        className={styles.ColorInnerBTN}
                        style={{
                          borderColor:
                            selectedColor === '#D1AA67'
                              ? '#fff'
                              : 'transparent',
                        }}
                      ></IconButton>
                    </IconButton>
                    <IconButton
                      className={styles.ColorBTN}
                      onClick={() => setSelectedColor('#000000')}
                      style={{
                        backgroundColor: '#000000',
                        borderColor:
                          selectedColor === '#000000' ? '#000000' : 'white',
                      }}
                    >
                      <IconButton
                        className={styles.ColorInnerBTN}
                        style={{
                          borderColor:
                            selectedColor === '#000000'
                              ? '#fff'
                              : 'transparent',
                        }}
                      ></IconButton>
                    </IconButton>
                  </div>
                </div>

                <div className={styles.btnDiv}>
                  <div style={{ marginBottom: '2em', marginTop: '0em' }}>
                    <Button
                      variant='contained'
                      onClick={buy_now_handler}
                      color='default'
                      // startIcon={<ScissorsIcon />}
                      fullWidth
                      className={styles.customiseBtn}
                    >
                      Buy Now
                    </Button>

                    <HtmlTooltipButton
                      open={isAuthenticated && click}
                      onOpen={() => setClick(true)}
                      onClose={() => setClick(false)}
                      disableFocusListener
                      disableHoverListener
                      // className={styles.ProductSelectorHelpBtn}
                      // style={{ color: '#6a5b40', backgroundColor: 'red' }}
                      title={
                        <>
                          <div
                            // style={{
                            //   display: 'flex',
                            //   alignItems: 'center',
                            //   fontSize: '0.7rem',
                            // }}
                            className={animate && styles.shirtAnimate}
                          >
                            <img
                              src={Bag}
                              alt=''
                              style={{ height: '25px', width: '25px' }}
                            />
                            {/* <h3 style={{ padding: 10 }}> {cartMessage}</h3> */}
                          </div>
                        </>
                      }
                      placement={'bottom'}
                      arrow
                    >
                      <Button
                        onClick={() => {
                          add_bag_handler();
                          setClick(click => isAuthenticated && !click);
                          // setAnimate(animate => !animate);
                        }}
                        variant='outlined'
                        // startIcon={}
                        fullWidth
                        // className={
                        //   !animate
                        //     ? styles.addToBagBtn
                        //     : styles.addToBagBtnClicked
                        // }
                        className={styles.addToBagBtn}
                      >
                        <span
                          // className={
                          //   !animate ? styles.bagIcon : styles.bagIconclicked
                          // }
                          className={styles.bagIcon}
                        >
                          <BagIcon />
                        </span>
                        <span
                        // className={
                        //   !animate ? styles.addBag : styles.addBagclicked
                        // }
                        >
                          Add to Bag
                        </span>
                        {/* <span
                        // className={
                        //   !animate ? styles.addedBag : styles.addedBagclicked
                        // }
                        >
                          Added to Bag
                        </span> */}
                      </Button>
                    </HtmlTooltipButton>
                  </div>
                </div>

                <div></div>
                {tabView || mobileView ? (
                  <div
                    className={styles.container}
                    style={
                      mobileView ? { marginLeft: -10 } : { marginLeft: -30 }
                    }
                  >
                    <div className={styles.firstContainer}>
                      <div className={styles.deliveryDiv}>
                        <div>
                          <span>Delivery option</span>
                          <img src={deliveryTruckIcon} alt='deliver truck' />:
                        </div>
                        <div>
                          <label>Enter pincode*</label>
                          <input
                            type='text'
                            name='pincode/zipcode'
                            placeholder='560054'
                          />
                        </div>
                        <span>
                          Please enter the pincode to check delivery time{' '}
                        </span>
                        <Button
                          variant='contained'
                          color='default'
                          className={styles.checkBtn}

                          // onClick={() => history.push('/product-breakdown')}
                        >
                          Check
                        </Button>
                      </div>
                    </div>
                  </div>
                ) : tabViewPro ? (
                  <div
                    className={styles.container}
                    style={{ marginLeft: -50, marginTop: '-2em' }}
                  >
                    <div className={styles.firstContainer}>
                      <div className={styles.deliveryDiv}>
                        <div>
                          <span>Delivery option</span>
                          <img src={deliveryTruckIcon} alt='deliver truck' />:
                        </div>
                        <div>
                          <label>Enter pincode*</label>
                          <input type='text' name='pincode/zipcode' />
                        </div>
                        <span>
                          Please enter the pincode to check delivery time{' '}
                        </span>
                        <Button
                          variant='contained'
                          color='default'
                          className={styles.checkBtn}

                          // onClick={() => history.push('/product-breakdown')}
                        >
                          Check
                        </Button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <></>
                )}
                <div>
                  <DetailTabs product={details} type={ProductType} />
                </div>
              </div>
            </div>
          )
        )}
      </>
      {tags && tags.length > 0 && <SimilarProducts tags={tags} />}
    </Container>
  );
}
