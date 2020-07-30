import { all } from "redux-saga/effects";

import category from "./home/sagas";
import joke from "./joke/sagas";

export default function* rootSaga() {
  return yield all([category, joke]);
}
