import * as productConstants from "../constants/product";

const initialState = {
  listProduct: [],
  filter: [234234],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case productConstants.FETCH_LIST_PRODUCT: {
      const { data } = action.payLoad;
      console.log(data);

      return {
        ...state,
        filter: [],
      };
    }
    case productConstants.FETCH_LIST_PRODUCT_SUCCESS: {
      const { data } = action.payLoad;
      return {
        ...state,
        filter: data.filter,
        listProduct: data.listProduct,
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
