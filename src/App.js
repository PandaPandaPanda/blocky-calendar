import React, { Component, Fragment } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import store from "./store";

import Navbar from "./components/layout/Navbar";
import CalendarView from "./components/calendar/CalendarView";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
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
              <Route exact path="/day" render={() => <Fragment></Fragment>} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
