import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";
import { Loader } from "semantic-ui-react";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { loading, isAuthenticated, user } = useSelector(
    (state) => state.root.auth
  );
  return (
    loading === false && (
      <div>
        <Route
          {...rest}
          render={(props) => {
            // if (loading) return <Loader />;
            // if (!isAuthenticated && !loading) return <Redirect to="/" />;
            return <Component {...props} />;
          }}
        />
      </div>
    )
  );
};

export default ProtectedRoute;
