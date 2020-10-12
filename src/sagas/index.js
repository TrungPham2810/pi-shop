import {
  fork,
  take,
  call,
  put,
  delay,
  takeLatest,
  select,
  takeEvery,
} from "redux-saga/effects";
import * as productType from "../constants/product";
import * as categoryType from "../constants/category";
import { getList, loadProduct } from "../apis/product";
import { getListCategory } from "../apis/category";
import { STATUS_CODE } from "../constants/index";
import {
  fetchListProductSuccess,
  fetchListProductFalse,
  fetchProductDetailSuccess,
  fetchProductDetailFalse,
} from "../actions/product";

import {
  fetchListCategoryFalse,
  fetchListCategorySuccess,
} from "../actions/category";
function* watchFetchProductListAction({ payLoad }) {
  // while (true) {
  //   const action = yield take(productType.FETCH_LIST_PRODUCT);
  //   const { params } = action.payLoad;
  //   console.log('param:' +params);

  const params = payLoad.data;
  const res = yield call(getList, params);
  const { data, status } = res;
  if (status === STATUS_CODE.SUCCESS) {
    // dispatch action fetchListProductSuccess
    const result = {
      listProduct: data,
      filter: params,
    };

    yield put(fetchListProductSuccess(result));
  } else {
    // dispatch action fetchListProductFalse
    yield put(fetchListProductFalse(data));
  }
  yield delay(500);
  // }
}

function* watchFetchProductDetailAction({ payLoad }) {
  const productId = payLoad.productId;
  const res = yield call(loadProduct, productId);
  const { data, status } = res;
  if (status === STATUS_CODE.SUCCESS) {
    // dispatch action fetchProductDetailSuccess
    const result = {
      currentProduct: data,
    };
    yield put(fetchProductDetailSuccess(result));
  } else {
    // dispatch action fetchProductDetailFalse
    yield put(fetchProductDetailFalse(data));
  }
}

function* watchFetchCategoryListAction() {
  while (true) {
    const action = yield take(categoryType.FETCH_LIST_CATEGORY);
    const { params } = action.payLoad;
    const res = yield call(getListCategory, params);
    const { data, status } = res;

    if (status === STATUS_CODE.SUCCESS) {
      // dispatch action fetchListCategorySuccess
      yield put(fetchListCategorySuccess(res.data));
    } else {
      // dispatch action fetchListCategoryFalse
      yield put(fetchListCategoryFalse(data));
    }
    yield delay(500);
  }
}

function* rootSaga() {
  // yield fork(watchFetchProductListAction);
  yield takeEvery(productType.FETCH_LIST_PRODUCT, watchFetchProductListAction);
  yield takeEvery(
    productType.FETCH_PRODUCT_DETAIL,
    watchFetchProductDetailAction
  );
  yield fork(watchFetchCategoryListAction);
}

export default rootSaga;
