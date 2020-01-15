import { all, spawn } from "redux-saga/effects";
import notesSaga from "../app/Notes/redux/saga";
import tagsSaga from "../app/Info/redux-tags/saga";
import categoriesSaga from "../app/Info/redux-categories/saga";

function* rootSaga() {
  yield all([
    spawn(notesSaga),
    spawn(tagsSaga),
    spawn(categoriesSaga)
  ]);
}

export default rootSaga;