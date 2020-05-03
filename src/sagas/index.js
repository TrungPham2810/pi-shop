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
import { getList } from "../apis/product";
import { STATUS_CODE } from "../constants/index";
import {
  fetchListProductSuccess,
  fetchListProductFalse,
} from "../actions/product";
function* watchFetchProductListAction() {
  while (true) {
    const action = yield take(productType.FETCH_LIST_PRODUCT);
    const { params } = action.payLoad;
    const res = yield call(getList, params);
    const { data, status } = res;
    if (status === STATUS_CODE.SUCCESS) {
      // dispatch action fetchListProductSuccess
      console.log(res);

      yield put(fetchListProductSuccess(res.data));
    } else {
      // dispatch action fetchListProductFalse
      yield put(fetchListProductFalse(data));
    }
    yield delay(500);
  }
}

function* rootSaga() {
  console.log("this is  root saga");
  yield fork(watchFetchProductListAction);
}

export default rootSaga;
