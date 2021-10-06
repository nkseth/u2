import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { loading, isAuthenticated, user } = useSelector(
    (state) => state.root.auth
  );
  return (
    !loading && (
      <div>
        <Route
          {...rest}
          render={(props) => {
            if (!isAuthenticated && !loading) return <Redirect to="/" />;
            return <Component {...props} />;
          }}
        />
      </div>
    )
  );
};

export default ProtectedRoute;
