import api from "../../../services/api";
import { GetJokeSuccess, GetJokeFailure } from "./actions";
import { all, takeLatest, call, put } from "redux-saga/effects";
import { Types } from "./types";
interface CategoryProps {
  category: string;
  type: typeof Types.GET_JOKE_REQUEST;
}

export function* getJokeData({ category }: CategoryProps) {
  try {
    const response = yield call(api.get, "/random", {
      params: { category },
    });
    yield put(GetJokeSuccess(response.data));
  } catch (err) {
    yield put({
      ...GetJokeFailure(err),
    });
  }
}

export default all([takeLatest(Types.GET_JOKE_REQUEST, getJokeData)]);
