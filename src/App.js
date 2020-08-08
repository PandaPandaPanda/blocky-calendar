import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";

import CalendarView from "./components/calendar/CalendarView";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <CalendarView />
        </div>
      </Provider>
    );
  }
}

export default App;
