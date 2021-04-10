import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import selectors from "../redux/auth/selectors";
console.log(selectors);

const PrivateRoute = ({ isAuthenticated, ...props }) => {
  console.log(this.props.isAuthenticated);
  return <Route {...props} render={(props)=> {
      if (isAuthenticated) {
          <Component {...props} />;
      } else {
          <Redirect to="/login" />
      }
  }} />;
};

const mapStateToProps = (store) => {
  return {
    isAuthenticated: selectors.isAuth(store),
  };
};

export default connect(mapStateToProps)(PrivateRoute);
