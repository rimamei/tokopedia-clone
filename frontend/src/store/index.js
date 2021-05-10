import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import {
  bannerReducer,
  productDetailReducer,
  productListReducer,
} from "./reducer";

const initialState = {};

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailReducer,
  bannerList: bannerReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
