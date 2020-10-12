import { combineReducers } from "redux";

import productListReducer from "./product";
import categoryListReducer from "./category";
import cartItemReducer from "./cart";

const rootReducer = combineReducers({
  productList: productListReducer,
  categoryList: categoryListReducer,
  cartItem: cartItemReducer,
});

export default rootReducer;
