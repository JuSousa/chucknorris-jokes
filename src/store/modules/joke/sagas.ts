import api from "../../../services/api";
import { GetJokeSuccess, GetJokeFailure } from "./actions";
import { all, takeLatest, call, put } from "redux-saga/effects";
import { Types } from "./types";

interface NameProps {
  category: string;
}

function* getJokeData(name: any) {
  const { category } = name;
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
