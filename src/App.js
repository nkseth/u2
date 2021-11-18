import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
//Pages
import Home from './Pages/Home-Page/home';
import MensWear from './Pages/Mens-Wear/mensWear';
import Offer from './Pages/Offer/offer';
import DesignersProductPage from './Pages/Designers-Product-Page/designer-product-page';
import ProductDescription from './Pages/Product-Description/productDescription';
import ProductBreakdown from './Pages/Product-Breakdown/productBreakdown';
import CustomisedProductDetails from './Pages/Customised-Product-Details/customisedProductDetails';
import Simulate from './Pages/Simulate/simulate';
import AddMeasurement from './Pages/Add-Measurement/addMeasurement';
import MyMeasurements from './Pages/My-Measurements/myMeasurements';
import ChooseStandardSize from './Pages/Choose-Standard-Size/chooseSize';
import AddMeasurementGender from './Pages/Add-Measurement-Gender/gender';
import AddMeasurementBasicDetails from './Pages/Add-Measurement-Basic-Details/basicDetails';
import Measurement from './Pages/Measurement/measurement';
import OrderSummary from './Pages/Order-Summary/orderSummary';
import DeliveryAddress from './Pages/Delivery Address/deliveryAddress';
import Payment from './Pages/Payment/payment';
import Offers from './Pages/Offers/offers';
import Orders from './Pages/Orders/orders';
import AllOrders from './Pages/All-Orders/allOrders';
import { useDispatch, useSelector } from 'react-redux';
import Polls from './Pages/Polls/polls';
import FashionTips from './Pages/Daily-Fashion-Tips/fashionTips';
import StyleGuideMan from './Pages/Style-Guide-Man/style-guide-man';
import StyleGuide from './Pages/Style-Guide-Man/style-guide';
import DesignerProfile from './Pages/Designer-Profile/designer-profile';
import HomeExplore from './Pages/Home-Page/home-explore';
import VisualSearch from './Pages/Visual-Search/visual-search';
import DesignersPage from './Pages/Designer-Profile/designer';
import PollQuestion from './Pages/Polls/poll-question';
import PollResult from './Pages/Polls/poll-result';
import DesignerPosts from './Pages/Designer-Profile/designer-posts';

import {
  Page_Profile,
  Page_ProfileEdit,
  Page_AddNewAddress,
  Page_ChatExpert,
  Page_Designers,
  Page_EditPayments,
  Page_Measurement,
  Page_MyAddresses,
  Page_Wishlist,
  Page_Payments,
  Page_Review,
  Page_TrackOrders,
  Designers_Profile_Page,
  Expert_Chat_Page,
  About_Us,
  Contact_Us,
  Write_to_us,
  Order_details_page,
  Add_Review_Page,
  Page_Edit_Review,
} from './OtherPages/AllComponents';
import DesignerHome from './OtherPages/DesignerHome/DesignerHome';
import { Page_Login } from './LoginSceens/LoginSignUp';
import useLogin from './LoginSceens/useLogin';
import MeasurementAndSimulation from './OtherPages/MeasurementAndSimulation/MeasurementAndSimulation';
import { setUserData } from './Redux/actions/homepage';
import { useCookies } from 'react-cookie';

import styles from './App.module.scss';
import AddManMeasurement from './Pages/Add-Measurement-body-measurement/AddMeasurmentMan';
import AddWomanMeasurement from './Pages/Add-Measurement-body-measurement/AddMeasurmentWoman';
import MyBag from './Pages/My-Bag/MyBag';
import {
  getCategoryGroup,
  getCategorySubGroup,
} from './Redux/actions/designerHomePage';
import { loadUser } from './Redux/actions/auth';
import ViewMeasurement from './Pages/Measurement/ViewMeasurement';
import UploadImage from './Pages/Upload-Measument-Image/UploadImage';
import ProtectedRoute from './utils/routes/ProtectedRoute';
// COLLAB

import store from './Redux/store';
import CollabrateLogin from './Pages/Collabrate/CollabrateLogin/collabrateLogin';
import CollabrateRegister from './Pages/Collabrate/CollabrateRegistrationAsVendor/registrationAsVendor';
import CollabrateAsFashionDesigner from './Pages/Collabrate/CollabrateAsFashionDesigner/collabrateAsFashionDesigner';
import CollabrateAsVendor from './Pages/Collabrate/CollabrateAsVendor/collabrateAsVendor';
import CollabrateAsInfluencer from './Pages/Collabrate/CollabrateAsInfluencer/collabrateAsInfluencer';
import AboutUs from './OtherPages/AboutUs/AboutUs';
import MobileCategory from './utils/MobileCategoryPage/MobileCategory';
import ProductsByDesigner from './Pages/Designers-Product-Page/ProductsByDesigner';
import SelectMeasurement from './Pages/Select-Measurement/selectMeasurement';
// import OrderDetails from "./OtherPages/OrderDetails/OrderDetails";
import Geocode from "react-geocode";
import Review from './OtherPages/Review/Review';
//Start From Here

function App() {
  Geocode.setApiKey("AIzaSyA_nmZVriBFLHl4ZdmN7d_WVr9PEH2sZa4");
  Geocode.setLanguage("en");
  Geocode.setRegion("es");
  Geocode.setLocationType("ROOFTOP");
  const { isLoginModel } = useLogin();
  const dispatch = useDispatch();
  const [cookies, setCookie] = useCookies(['user']);
  const { isAuthenticated, loading } = useSelector(state => state.root.auth);
  useEffect(() => {
    if (!isAuthenticated && !loading) dispatch(loadUser());
    store.dispatch(loadUser());
  }, []);

  //const { category_grp } = useSelector(state => state.root.main)
  const arr = ['men', 'women', 'kids'];

  useEffect(() => {
    arr.forEach(item => {
      dispatch(getCategoryGroup(item));
      dispatch(getCategorySubGroup(item));
    });
  }, []);

  return (
    <div className={styles.container}>
      {/*All Other Screen on This Path ./LoginSceens/ */}
      {isLoginModel ? <Page_Login /> : null}
      <Switch>
        <Route exact path='/' component={DesignerHome} />
        <Route path='/home' component={Home} />
        {/* <Route path="/designer-home" component={Home} /> */}
        <Route path='/wear/:type' component={MensWear} />
        <Route path='/offers' component={Offer} />
        <Route
          path='/designers-product-page/:slug'
          component={DesignersProductPage}
          exact
        />
        <Route
          path='/designers-product-page/:type/:slug'
          component={DesignersProductPage}
          exact
        />
        <Route
          path='/designer-products/:designerId'
          component={ProductsByDesigner}
          exact
        />
        <Route
          path='/product-description/:slug'
          component={ProductDescription}
        />
        <Route path='/product-breakdown' component={ProductBreakdown} />
        <Route
          path='/customised-product-details'
          component={CustomisedProductDetails}
        />
        <Route path='/simulate' component={Simulate} />
        <ProtectedRoute path='/add-measurement' component={AddMeasurement} />
        <ProtectedRoute path='/my-measurements' component={MyMeasurements} />
        <ProtectedRoute
          path='/add-measurement-choose-standard-size/:orderId/:itemId'
          component={ChooseStandardSize}
          exact
        />
        <ProtectedRoute
          path='/add-measurement-choose-standard-size'
          component={ChooseStandardSize}
        />
        <ProtectedRoute
          path='/add-measurement-gender'
          component={AddMeasurementGender}
        />
        <ProtectedRoute
          path='/add-measurement-basic-details'
          component={AddMeasurementBasicDetails}
        />
        <ProtectedRoute
          path='/add-measurement-body-measurement-male/:basic_id'
          component={AddManMeasurement}
          exact
        />
        <ProtectedRoute
          path='/add-measurement-body-measurement-female/:basic_id'
          component={AddWomanMeasurement}
          exact
        />
        <ProtectedRoute
          path='/viewmeasurement/save/:id'
          component={Measurement}
          exact
        />
        <ProtectedRoute
          path='/add-measurement-image/:basic_id'
          component={UploadImage}
          exact
        />
        <ProtectedRoute
          path='/viewmeasurement/view/:id'
          component={ViewMeasurement}
          exact
        />
        <ProtectedRoute path='/order-summary' component={OrderSummary} />
        {/* New page added here */}

        <ProtectedRoute path='/my-bag' component={MyBag} />
        {/* New page added here */}
        <ProtectedRoute
          path='/delivery-address/:cartId'
          component={DeliveryAddress}
        />
        <ProtectedRoute path='/payment/:id' component={Payment} />
        <Route path='/offers' component={Offers} />
        <ProtectedRoute path='/all-orders' component={AllOrders} />
        {/* <ProtectedRoute path="/order/details" component={OrderDetails} exact /> */}
        <ProtectedRoute path='/rate_order/:orderId' component={Orders} />
        {/* other dev pages */}
        {/* <Route path='/designers-home-page' component={DesignersHomePage} /> */}
        {/* <Route path='/about' component={AboutPage} /> */}
        {/* Here New Pages Added */}

        <ProtectedRoute path={'/profile'} component={Page_Profile} />
        <ProtectedRoute path={'/profileEdit'} component={Page_ProfileEdit} />
        <ProtectedRoute path={'/designers'} component={Page_Designers} />
        <ProtectedRoute path={'/measurement'} component={Page_Measurement} />
        <ProtectedRoute path={'/myaddresses'} component={Page_MyAddresses} />
        <ProtectedRoute
          path={'/addNewaddress'}
          component={Page_AddNewAddress}
        />
        <ProtectedRoute
          path={'/edit_review/:id'}
          component={Page_Edit_Review}
        />
        <ProtectedRoute path={'/wishlist'} component={Page_Wishlist} />
        <ProtectedRoute path={'/payments'} component={Page_Payments} />
        <ProtectedRoute path={'/editpayments'} component={Page_EditPayments} />
        <ProtectedRoute
          path='/trackorder/:orderId/:item_id'
          component={Page_TrackOrders}
          exact
        />
        <ProtectedRoute
          path='/order-details/:orderid'
          component={Order_details_page}
          exact
        />

        <ProtectedRoute path={'/review'} component={Page_Review} />
        <Route path={'/chatexpert'} component={Page_ChatExpert} />
        <Route path={'/about-us'} component={About_Us} />
        <Route path={'/contact-us'} component={Contact_Us} />
        <Route path={'/write-to-us'} component={Write_to_us} />
        <Route path={'/add-review/:id'} component={Add_Review_Page} />
        {/* <Route path={'/chatexpert'} component={Page_ChatExpert} /> */}
        {/* Without Side Bar */}
        <Route path={'/designers-profile'} component={Designers_Profile_Page} />
        <Route path={'/talk-with-stylish'} component={Expert_Chat_Page} />
        {/* New 18 Screen Added here  */}
        <Route
          path='/measurement-and-simulation'
          component={MeasurementAndSimulation}
        />
        <Route path='/select-measurement/:id' component={SelectMeasurement} />
        {/* New pages */}
        <Route path={'/home/polls'} component={Polls} />
        <Route path={'/daily-fashion-tips'} component={FashionTips} />
        <Route exact path={'/style-guide'} component={StyleGuideMan} />
        <Route exact path={'/style-guide-man'} component={StyleGuide} />
        <Route
          exact
          path={'/designer-profile-home'}
          component={DesignerProfile}
        />
        <Route path={'/home/explore'} component={HomeExplore} />
        <Route path={'/visual-search'} component={VisualSearch} />
        <Route
          exact
          path={'/designer-page/:designerId'}
          component={DesignersPage}
        />
        <Route path={'/home/poll-question'} component={PollQuestion} />
        <Route path={'/home/poll-result'} component={PollResult} />
        <Route path={'/designer-posts'} component={DesignerPosts} />
        {/* New Urls */}
        <Route path={'/home/polls'} component={Polls} />
        <Route path={'/daily-fashion-tips'} component={FashionTips} />
        <Route exact path={'/style-guide'} component={StyleGuideMan} />
        <Route exact path={'/style-guide-man'} component={StyleGuide} />
        <Route
          exact
          path={'/designer-profile-home'}
          component={DesignerProfile}
        />
        <Route path={'/home/explore'} component={HomeExplore} />
        <Route path={'/visual-search'} component={VisualSearch} />
        <Route
          exact
          path={'/designer-page/:designerId'}
          component={DesignersPage}
        />
        <Route path={'/home/poll-question'} component={PollQuestion} />
        <Route path={'/home/poll-result'} component={PollResult} />
        {/* Collabrate */}
        <Route path={'/Collabrate-login'} component={CollabrateLogin} />
        <Route
          path={'/Collabrate-registration'}
          component={CollabrateRegister}
        />
        <Route
          path={'/Collabrate-as-fashion-designer'}
          component={CollabrateAsFashionDesigner}
        />
        <Route path={'/Collabrate-as-vendor'} component={CollabrateAsVendor} />
        <Route
          path={'/Collabrate-as-influencer'}
          component={CollabrateAsInfluencer}
        />
        <Route path={'/mobile-category'} component={MobileCategory} />
        <Route path={'/order-review/:id'} component={Add_Review_Page} />
      </Switch>
    </div>
  );
}

export default App;
