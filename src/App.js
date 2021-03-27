import React, { Component, Suspense } from "react";
import "./App.css";
import routes from "./routes";
import { Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <>
        <Suspense fallback="loading">
          <Switch>
            {routes.map((route) => {
              return <Route {...route} />;
            })}
          </Switch>
        </Suspense>
      </>
    );
  }
}

export default App;
