import Layout from "./Layout";
import Profile from "./Profile/Profile";
import ProfileEdit from "./Profile/ProfileEdit";
import Designers from "./Designers/Designers";
import Measurement from "./Measurement/Measurement";
import AddNewAddress from "./Addresses/AddNewAddress";
import MyAddresses from "./Addresses/MyAddresses";
import Payments from "./Payments/Payments";
import EditPayments from "./Payments/EditPayments";
import ChatExpert from "./Chat/ChatExpert";
import TrackOrders from "./TrackOrders/TrackOrders";
import Review from "./Review/Review";
import Container from "../utils/Container/container";

export const Page_Profile = () => {
  return (
    <Layout title={"Profile"}>
      <Profile />
    </Layout>
  );
};
export const Page_ProfileEdit = () => {
  return (
    <Layout title={"Edit Profile"}>
      <ProfileEdit />
    </Layout>
  );
};
export const Page_Designers = () => {
  return (
    <Layout title={"Designers"}>
      <Designers />
    </Layout>
  );
};
export const Page_Measurement = () => {
  return (
    <Layout title={"Measurement"}>
      <Measurement />
    </Layout>
  );
};

export const Page_AddNewAddress = () => {
  return (
    <Layout title={"Add New Address"}>
      <AddNewAddress />
    </Layout>
  );
};
export const Page_MyAddresses = () => {
  return (
    <Layout title={"My Addresses"}>
      <MyAddresses />
    </Layout>
  );
};
export const Page_Payments = () => {
  return (
    <Layout title={"Payments"}>
      <Payments />
    </Layout>
  );
};
export const Page_EditPayments = () => {
  return (
    <Layout title={"Saved Cards"}>
      <EditPayments />
    </Layout>
  );
};
export const Page_ChatExpert = () => {
  return (
    <Layout title={"Chat Expert"}>
      <ChatExpert />
    </Layout>
  );
};
export const Page_TrackOrders = () => {
  return (
    <Layout title={"Track Order"}>
      <TrackOrders />
    </Layout>
  );
};
export const Page_Review = () => {
  return (
    <Layout title={"Review"}>
      <Review />
    </Layout>
  );
};

//Here Without SideBaar
export const Designers_Profile_Page = () => {
  return (
    <Container bottomDivider footerOnAllView>
      <div style={{ width: "85%", margin: "0 auto" }}>
        <Designers />
      </div>
    </Container>
  );
};
//Here Without SideBaar
export const Expert_Chat_Page = () => {
  return (
    <Container bottomDivider footerOnAllView>
      <div style={{ width: "85%", margin: "0 auto" }}>
        <ChatExpert />
      </div>
    </Container>
  );
};
