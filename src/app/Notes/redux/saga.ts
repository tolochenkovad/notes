import { takeLatest, put, select, call } from "redux-saga/effects";
import { ADD_NOTE_SAGA } from "./types";
import { getNote } from "./selectors";
import * as actions from "./actions";
import { toastr } from "react-redux-toastr";

function* addNote(action: ReturnType<typeof actions.addNoteAC>) {
  try {
    const { payload } = action;
    const notes = yield select(getNote);
    if (notes.some(note => note.id === payload.id)) {
      yield put(actions.editNote(payload));
      return;
    }
    yield put(actions.addNote(payload));
  } catch (error) {
    yield call(() => toastr.error(error, ""));
  }
}

function* notesSaga() {
  yield takeLatest(ADD_NOTE_SAGA, addNote);
}

export default notesSaga;
