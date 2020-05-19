import * as Types from "./../constants/category";

export const fetchListCategory = (data) => {
  return {
    type: Types.FETCH_LIST_CATEGORY,
    payLoad: {
      data,
    },
  };
};

export const fetchListCategorySuccess = (data) => {
  return {
    type: Types.FETCH_LIST_CATEGORY_SUCCESS,
    payLoad: {
      data,
    },
  };
};

export const fetchListCategoryFalse = (error) => {
  return {
    type: Types.FETCH_LIST_CATEGORY_FALSE,
    payLoad: {
      error,
    },
  };
};
