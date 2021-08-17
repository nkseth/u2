import React from "react";
import { Switch, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
//Pages
import Home from "./Pages/Home-Page/home";
import MensWear from "./Pages/Mens-Wear/mensWear";
import Offer from "./Pages/Offer/offer";
import DesignersProductPage from "./Pages/Designers-Product-Page/designer-product-page";
import ProductDescription from "./Pages/Product-Description/productDescription";
import ProductBreakdown from "./Pages/Product-Breakdown/productBreakdown";
import CustomisedProductDetails from "./Pages/Customised-Product-Details/customisedProductDetails";
import Simulate from "./Pages/Simulate/simulate";
import AddMeasurement from "./Pages/Add-Measurement/addMeasurement";
import MyMeasurements from "./Pages/My-Measurements/myMeasurements";
import ChooseStandardSize from "./Pages/Choose-Standard-Size/chooseSize";
import AddMeasurementGender from "./Pages/Add-Measurement-Gender/gender";
import AddMeasurementBasicDetails from "./Pages/Add-Measurement-Basic-Details/basicDetails";
import AddMeasurementBodyMeasurement from "./Pages/Add-Measurement-body-measurement/bodyMeasurement";
import Measurement from "./Pages/Measurement/measurement";
import OrderSummary from "./Pages/Order-Summary/orderSummary";
import DeliveryAddress from "./Pages/Delivery Address/deliveryAddress";
import Payment from "./Pages/Payment/payment";
import Offers from "./Pages/Offers/offers";
import Orders from "./Pages/Orders/orders";
import AllOrders from "./Pages/All-Orders/allOrders";

import Polls from "./Pages/Polls/polls";
import FashionTips from "./Pages/Daily-Fashion-Tips/fashionTips";
import StyleGuideMan from "./Pages/Style-Guide-Man/style-guide-man";
import StyleGuide from "./Pages/Style-Guide-Man/style-guide";
import DesignerProfile from "./Pages/Designer-Profile/designer-profile";
import HomeExplore from "./Pages/Home-Page/home-explore";
import VisualSearch from "./Pages/Visual-Search/visual-search";
import DesignersPage from "./Pages/Designer-Profile/designer";
import PollQuestion from "./Pages/Polls/poll-question";
import PollResult from "./Pages/Polls/poll-result";
import DesignerPosts from "./Pages/Designer-Profile/designer-posts";

//other-dev-pages
// import { AboutPage, DesignersHomePage } from "./Other-Dev-Content/pages";
//Created By Neeraj Codes All Pages Import Here
import {
  Page_Profile,
  Page_ProfileEdit,
  Page_AddNewAddress,
  Page_ChatExpert,
  Page_Designers,
  Page_EditPayments,
  Page_Measurement,
  Page_MyAddresses,
  Page_Payments,
  Page_Review,
  Page_TrackOrders,
  Designers_Profile_Page,
  Expert_Chat_Page,
} from "./OtherPages/AllComponents";
import DesignerHome from "./OtherPages/DesignerHome/DesignerHome";
import { Page_Login } from "./LoginSceens/LoginSignUp";
import useLogin from "./LoginSceens/useLogin";
import MeasurementAndSimulation from "./OtherPages/MeasurementAndSimulation/MeasurementAndSimulation";
import Designers from "./OtherPages/Designers/Designers";

// Start From Here

function App() {
  const { isLoginModel } = useLogin();
  return (
    <>
      {/*All Other Screen on This Path ./LoginSceens/ */}
      {isLoginModel ? <Page_Login /> : null}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/designer-home" component={DesignerHome} />
        <Route path="/mens-wear" component={MensWear} />
        <Route path="/offers" component={Offer} />
        <Route
          path="/designers-product-page/:category"
          component={DesignersProductPage}
        />
        <Route path="/product-description" component={ProductDescription} />
        <Route path="/product-breakdown" component={ProductBreakdown} />
        <Route
          path="/customised-product-details"
          component={CustomisedProductDetails}
        />
        <Route path="/simulate" component={Simulate} />
        <Route path="/add-measurement" component={AddMeasurement} />
        <Route path="/my-measurements" component={MyMeasurements} />
        <Route
          path="/add-measurement-choose-standard-size"
          component={ChooseStandardSize}
        />
        <Route
          path="/add-measurement-gender"
          component={AddMeasurementGender}
        />
        <Route
          path="/add-measurement-basic-details"
          component={AddMeasurementBasicDetails}
        />
        <Route
          path="/add-measurement-body-measurement"
          component={AddMeasurementBodyMeasurement}
        />
        <Route path="/viewmeasurement" component={Measurement} />
        <Route path="/order-summary" component={OrderSummary} />
        <Route path="/delivery-address" component={DeliveryAddress} />
        <Route path="/payment" component={Payment} />
        <Route path="/offers" component={Offers} />
        <Route path="/all-orders" component={AllOrders} />
        <Route path="/orders" component={Orders} />
        {/* other dev pages */}
        {/* <Route path='/designers-home-page' component={DesignersHomePage} />
        <Route path='/about' component={AboutPage} /> */}

        {/* Here New Pages Added */}
        <Route path={"/profile"} component={Page_Profile} />
        <Route path={"/profileEdit"} component={Page_ProfileEdit} />
        <Route path={"/designers"} component={Page_Designers} />
        <Route path={"/measurement"} component={Page_Measurement} />
        <Route path={"/myaddresses"} component={Page_MyAddresses} />
        <Route path={"/addNewaddress"} component={Page_AddNewAddress} />
        <Route path={"/payments"} component={Page_Payments} />
        <Route path={"/editpayments"} component={Page_EditPayments} />
        <Route path={"/trackorder"} component={Page_TrackOrders} />
        <Route path={"/review"} component={Page_Review} />
        <Route path={"/chatexpert"} component={Page_ChatExpert} />
        {/* Without Side Bar */}
        <Route path={"/designers-profile"} component={Designers_Profile_Page} />
        <Route path={"/talk-with-stylish"} component={Expert_Chat_Page} />

        {/* New 18 Screen Added here  */}
        <Route
          path="/measurement-and-simulation"
          component={MeasurementAndSimulation}
        />
        {/* New pages */}
        <Route path={"/home/polls"} component={Polls} />
        <Route path={"/daily-fashion-tips"} component={FashionTips} />
        <Route exact path={"/style-guide"} component={StyleGuideMan} />
        <Route exact path={"/style-guide-man"} component={StyleGuide} />
        <Route
          exact
          path={"/designer-profile-home"}
          component={DesignerProfile}
        />
        <Route path={"/home/explore"} component={HomeExplore} />
        <Route path={"/visual-search"} component={VisualSearch} />
        <Route exact path={"/designer-page"} component={DesignersPage} />
        <Route path={"/home/poll-question"} component={PollQuestion} />
        <Route path={"/home/poll-result"} component={PollResult} />
        <Route path={"/designer-posts"} component={DesignerPosts} />
      </Switch>
    </>
  );
}

export default App;
