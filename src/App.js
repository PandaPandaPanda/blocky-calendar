import React, { useEffect, Fragment } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import store from "./store";

import Navbar from "./components/layout/Navbar";
import CalendarView from "./components/Calendar";
import TimeGrids from "./components/TimeGrids";

import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";

import "./css/App.css";

const App = () => {
  useEffect(() => {
    M.AutoInit();
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Route
            path="/"
            render={() => (
              <Fragment>
                <Navbar />
              </Fragment>
            )}
          />
          <Switch>
            <Route
              exact
              path="/calendar"
              render={() => (
                <Fragment>
                  <CalendarView />
                </Fragment>
              )}
            />
            <Route
              exact
              path="/day"
              render={() => (
                <Fragment>
                  <TimeGrids />
                </Fragment>
              )}
            />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
