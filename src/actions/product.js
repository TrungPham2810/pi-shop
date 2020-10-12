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

export const fetchProductDetail = (productId) => {
  return {
    type: Types.FETCH_PRODUCT_DETAIL,
    payLoad: {
      productId,
    },
  };
};

export const fetchProductDetailSuccess = (data) => {
  return {
    type: Types.FETCH_PRODUCT_DETAIL_SUCCESS,
    payLoad: {
      data,
    },
  };
};

export const fetchProductDetailFalse = (error) => {
  return {
    type: Types.FETCH_PRODUCT_DETAIL_FALSE,
    payLoad: {
      error,
    },
  };
};
