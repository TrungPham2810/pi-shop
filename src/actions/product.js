import * as Types from "./../constants/product";

export const fetchListProduct = (data) => {
  return {
    type: Types.FETCH_LIST_PRODUCT,
    payLoad: {
      data,
    },
  };
};

export const fetchListProductSuccess = (data) => {
  return {
    type: Types.FETCH_LIST_PRODUCT_SUCCESS,
    payLoad: {
      data,
    },
  };
};

export const fetchListProductFalse = (error) => {
  return {
    type: Types.FETCH_LIST_PRODUCT_FALSE,
    payLoad: {
      error,
    },
  };
};
