import { combineReducers } from "redux";

import productListReducer from "./product";
import categoryListReducer from "./category";

const rootReducer = combineReducers({
  productList: productListReducer,
  categoryList: categoryListReducer,
});

export default rootReducer;
