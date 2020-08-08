import { createStore, applyMiddleware } from "redux";
// In order to use Redux extension
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
// Where all reducers are organized
import rootReducer from "./reducers";

const initialState = {};

// Add all middleware into this array
const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
