import { createStore, compose, applyMiddleware, combineReducers } from "redux";

import addSearchResultReducer from "../reducers/add-search-result";
import { dispatchObjectToMiddleware } from "../middleware";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({ addSearchResultReducer });

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(dispatchObjectToMiddleware))
);
export default store;
