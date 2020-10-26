import * as cartConstants from "../constants/cart";

var data = JSON.parse(localStorage.getItem("CART_PI_SHOP"));
var initialState = data ? data : [];

const reducer = (state = initialState, action) => {
  var { product, quantity } = action;
  var index = -1;
  switch (action.type) {
    case cartConstants.ADD_TO_CART:
      index = findProductInCart(state, product);
      if (index !== -1) {
        state[index].quantity =
          parseFloat(state[index].quantity) + parseFloat(quantity);
      } else {
        state.push({
          product,
          quantity,
        });
      }
      localStorage.setItem("CART_PI_SHOP", JSON.stringify(state));
      return [...state];
    case cartConstants.DELETE_PRODUCT_IN_CART:
      index = findProductInCart(state, product);
      if (index !== -1) {
        state.splice(index, 1);
      }
      localStorage.setItem("CART_PI_SHOP", JSON.stringify(state));
      return [...state];
    case cartConstants.UPDATE_PRODUCT_IN_CART:
      index = findProductInCart(state, product);
      if (index !== -1) {
        state[index].quantity = quantity;
      }
      localStorage.setItem("CART_PI_SHOP", JSON.stringify(state));
      return [...state];
    default:
      return [...state];
  }
};
var findProductInCart = (cart, product) => {
  var index = -1;
  if (cart.length > 0) {
    for (var i = 0; i < cart.length; i++) {
      if (cart[i].product.id === product.id) {
        index = i;
        break;
      }
    }
  }
  return index;
};
export default reducer;
