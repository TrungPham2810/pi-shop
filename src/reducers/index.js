import { combineReducers } from "redux";

import productListReducer from "./product";

const rootReducer = combineReducers({
  productList: productListReducer,
});

export default rootReducer;
