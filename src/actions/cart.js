import * as Types from "./../constants/cart";

export const removeProductInCart = (product) => {
  return {
    type: Types.DELETE_PRODUCT_IN_CART,
    product,
  };
};
export const actAddToCart = (product, quantity) => {
  return {
    type: Types.ADD_TO_CART,
    product,
    quantity,
  };
};
export const actUpdateProductInCart = (product, quantity) => {
  return {
    type: Types.UPDATE_PRODUCT_IN_CART,
    product,
    quantity,
  };
};
