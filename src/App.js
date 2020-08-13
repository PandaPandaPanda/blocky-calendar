import React, { Component, Fragment } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import store from "./store";

import Navbar from "./components/layout/Navbar";
import CalendarView from "./components/calendar";
import TimeGrids from "./components/timeGrids";

import "./css/App.css";

class App extends Component {
  render() {
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
  }
}

export default App;
