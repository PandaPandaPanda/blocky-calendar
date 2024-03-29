import React, { useEffect, Fragment } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import store from "./store";

import Navbar from "./components/layout/Navbar";
import CalendarView from "./components/Calendar";
import TimeGrids from "./components/TimeGrids";
import EventTypes from "./components/EventTypes";

import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";

import "./css/App.css";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div id="App">
          <Route
            path="/blocky-calendar"
            render={() => (
              <Fragment>
                <Navbar />
              </Fragment>
            )}
          />
          <Switch>
            <Route
              exact
              path="/blocky-calendar/calendar"
              render={() => (
                <Fragment>
                  <CalendarView />
                </Fragment>
              )}
            />
            <Route
              exact
              path={["/blocky-calendar/", "/blocky-calendar/day"]}
              render={() => (
                <Fragment>
                  <TimeGrids />
                </Fragment>
              )}
            />
            <Route
              exact
              path="/blocky-calendar/event-types"
              render={() => (
                <Fragment>
                  <EventTypes />
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
