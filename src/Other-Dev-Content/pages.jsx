import React from "react";

import "semantic-ui-css/semantic.min.css";
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./store/rootReducer";

import { Layout } from "antd";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HeaderComponent from "./Component/Header/Header.container";
import { Container } from "semantic-ui-react";
import Banner from "./Component/Banner/Banner.component";
import TopCatagoryContainer from "./Component/TopCategory/TopCategoryContainer/TopCatagoryContainer.container";
import CelebrityStyleContainer from "./Component/CelebrityStyle/CelebrityStyle.container";
import TopOfferContainer from "./Component/TopOffers/TopOffer.container";
import RecommendationComponent from "./Component/Recommendation/Recommendation.container";
import FooterContainer from "./Component/Footer/Footer.container";
import DesignerProductContainer from "./Component/Designers/DesignerProduct.container";
const { Header, Content, Sider } = Layout;

const enhancers = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStore(
  rootReducer,
  // applyMiddleware(thunk),
  enhancers
);

export function AboutPage() {
  return (
    <Provider store={store}>
      <Layout>
        <Container>
          <HeaderComponent />
        </Container>
        <Content>
          <DesignerProductContainer />
        </Content>
        <FooterContainer />
      </Layout>
    </Provider>
  );
}

export function DesignersHomePage() {
  return (
    <Provider store={store}>
      <Layout>
        <Container>
          <HeaderComponent />
        </Container>
        <Banner />
        <Content>
          <TopCatagoryContainer />
          <CelebrityStyleContainer />
          <TopOfferContainer />
          <RecommendationComponent />
          <Link to='/wear'>Next Page</Link>
        </Content>
      </Layout>
    </Provider>
  );
}
