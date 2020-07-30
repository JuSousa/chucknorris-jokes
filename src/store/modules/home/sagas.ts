import api from "../../../services/api";
import { GetCategorySuccess, GetCategoryFailure } from "./actions";
import { all, takeLatest, call, put } from "redux-saga/effects";
import { Types } from "./types";

function* getCategoryData() {
  try {
    const response = yield call(api.get, "/categories");
    yield put(GetCategorySuccess(response.data));
  } catch (err) {
    yield put({
      ...GetCategoryFailure(err),
    });
  }
}

export default all([takeLatest(Types.GET_CATEGORY_REQUEST, getCategoryData)]);
