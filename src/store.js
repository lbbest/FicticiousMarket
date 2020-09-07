import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import cartReducer from "./Reducers/cartReducer";

// variable to connect to redux dev tool chrome extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

// initiate redux store with cartReducer and thunk middleware
const store = createStore(
  cartReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
