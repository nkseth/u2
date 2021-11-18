import Layout from './Layout';
import Profile from './Profile/Profile';
import ProfileEdit from './Profile/ProfileEdit';
import Designers from './Designers/Designers';
import Measurement from './Measurement/Measurement';
import AddNewAddress from './Addresses/AddNewAddress';
import MyAddresses from './Addresses/MyAddresses';
import Payments from './Payments/Payments';
import EditPayments from './Payments/EditPayments';
import ChatExpert from './Chat/ChatExpert';
import TrackOrders from './TrackOrders/TrackOrders';
import Review from './Review/Review';
import Container from '../utils/Container/container';
import WishListPage from './Wishlist/WishList';
import AboutUs from './AboutUs/AboutUs';
import ContactUs from './ContactUs/ContactUs';
import WriteToUs from './ContactUs/component/WriteToUs';
import OrderDetails from './OrderDetails/OrderDetails';
import OrderReview from './OrderReview/OrderReview';
import EditReview from './EditReview';

export const Page_Profile = () => {
  return (
    <Layout title={'Profile'}>
      <Profile />
    </Layout>
  );
};
export const Page_ProfileEdit = () => {
  return (
    <Layout title={'Edit Profile'}>
      <ProfileEdit />
    </Layout>
  );
};
export const Page_Designers = () => {
  return (
    <Layout title={'Designers'}>
      <Designers />
    </Layout>
  );
};
export const Page_Measurement = () => {
  return (
    <Layout title={'Measurement'}>
      <Measurement />
    </Layout>
  );
};
export const Page_Wishlist = () => {
  return (
    <Layout title={'Wishlist'}>
      <WishListPage />
    </Layout>
  );
};

export const Page_AddNewAddress = () => {
  return (
    <Layout title={'Add New Address'}>
      <AddNewAddress />
    </Layout>
  );
};
export const Page_MyAddresses = () => {
  return (
    <Layout title={'My Addresses'}>
      <MyAddresses />
    </Layout>
  );
};
export const Page_Payments = () => {
  return (
    <Layout title={'Payments'}>
      <Payments />
    </Layout>
  );
};
export const Page_EditPayments = () => {
  return (
    <Layout title={'Saved Cards'}>
      <EditPayments />
    </Layout>
  );
};
export const Page_ChatExpert = () => {
  return (
    <Layout title={'Chat Expert'}>
      <ChatExpert />
    </Layout>
  );
};
export const Page_TrackOrders = ({ match }) => {
  return (
    <Layout title={'Track Order'}>
      <TrackOrders match={match} />
    </Layout>
  );
};
export const Order_details_page = () => {
  return (
    <Layout title={'Orders'}>
      <OrderDetails />
    </Layout>
  );
};
export const Add_Review_Page = () => {
  return (
    <Layout title={'Review'}>
      <OrderReview />
    </Layout>
  );
};
export const Page_Review = () => {
  return (
    <Layout title={'Review'}>
      <Review />
    </Layout>
  );
};
export const About_Us = () => {
  return (
    <Layout title={'About us'}>
      <AboutUs />
    </Layout>
  );
};
export const Contact_Us = () => {
  return (
    <Layout title={'Contact us'}>
      <ContactUs />
    </Layout>
  );
};
export const Write_to_us = () => {
  return (
    <Layout title={'Contact us'}>
      <WriteToUs />
    </Layout>
  );
};

export const Page_Edit_Review = ({ match }) => {
  return (
    <Layout title={'Edit review'}>
      <EditReview match={match} />
    </Layout>
  );
};

//Here Without SideBaar
export const Designers_Profile_Page = () => {
  return (
    <Container bottomDivider footerOnAllView>
      <div style={{ width: '85%', margin: '0 auto' }}>
        <Designers />
      </div>
    </Container>
  );
};
//Here Without SideBaar
export const Expert_Chat_Page = () => {
  return (
    <Container bottomDivider footerOnAllView>
      <div style={{ width: '85%', margin: '0 auto' }}>
        <ChatExpert />
      </div>
    </Container>
  );
};
