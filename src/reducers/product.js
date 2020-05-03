import * as productConstants from "../constants/product";

const initialState = {
  listProduct: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case productConstants.FETCH_LIST_PRODUCT: {
      return {
        ...state,
        listProduct: [],
      };
    }
    case productConstants.FETCH_LIST_PRODUCT_SUCCESS: {
      const { data } = action.payLoad;
      return {
        ...state,
        listProduct: data,
      };
    }
    case productConstants.FETCH_LIST_PRODUCT_FALSE: {
      const { error } = action.payLoad;
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};

export default reducer;
