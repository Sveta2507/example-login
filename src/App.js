import React, { Component, Suspense } from "react";
import "./App.css";
import routes from "./routes";
import { Switch, Route } from "react-router-dom";
import axios from "axios";
import { connect } from "react-dom";
import operations from "./redux/auth/operations";
console.log(axios);
class App extends Component {
  render() {
    const { isAuthenticated } = this.props;
    return (
      <>
        {isAuthenticated ? (
          <button onClick={() => onLogout()} Log Out></button>
        ) : (
          <Suspense fallback="loading">
            <Switch>
              {routes.map((route) => {
                return <Route {...route} />;
              })}
            </Switch>
          </Suspense>
        )}
      </>
    );
  }
}

const mapDispatchToProps = {
  onLogout: operations.logout(),
};

export default App;
