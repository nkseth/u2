import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router';
import { Loader } from 'semantic-ui-react';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { loading, isAuthenticated, user } = useSelector(
    state => state.root.auth
  );
  console.log(
    '🚀 ~ file: ProtectedRoute.jsx ~ line 10 ~ ProtectedRoute ~ loading',
    loading
  );
  console.log(
    '🚀 ~ file: ProtectedRoute.jsx ~ line 8 ~ ProtectedRoute ~ isAuthenticated',
    isAuthenticated
  );
  return loading ? (
    <Loader />
  ) : (
    <div>
      <Route
        {...rest}
        render={props => {
          const isLogged = localStorage.getItem('isLogged');
          if (!isAuthenticated) return <Redirect to='/' />;
          if (isAuthenticated) return <Component {...props} />;
        }}
      />
    </div>
  );
};

export default ProtectedRoute;
