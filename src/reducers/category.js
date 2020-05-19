import * as categoryConstants from "../constants/category";

const initialState = {
  listCategory: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case categoryConstants.FETCH_LIST_CATEGORY: {
      return {
        ...state,
        listCategory: [],
      };
    }
    case categoryConstants.FETCH_LIST_CATEGORY_SUCCESS: {
      const { data } = action.payLoad;
      return {
        ...state,
        listCategory: data,
      };
    }
    case categoryConstants.FETCH_LIST_CATEGORY_FALSE: {
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
