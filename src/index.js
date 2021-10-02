import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import reportWebVitals from './reportWebVitals';
import store from './Redux/store';
import { Provider } from 'react-redux';
import { CookiesProvider } from 'react-cookie';
import ScrollToTop from './utils/ScrollToTop/ScrollToTop';

ReactDOM.render(
  <CookiesProvider>
    <Provider store={store}>
      <Router>
        <ScrollToTop />
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </Router>
    </Provider>
  </CookiesProvider>,
  document.getElementById('root')
);

serviceWorker.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
