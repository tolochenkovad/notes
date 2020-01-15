import { ADD_TAG_OF_NOTE_SAGA, ADD_TAG_SAGA, REMOVE_TAG_SAGA } from "./types";
import { takeLatest, put, select, call } from "redux-saga/effects";
import { getTags, getTagsOfNote } from "./selectors";
import * as actions from "./actions";
import { toastr } from "react-redux-toastr";

function* addTag(action: ReturnType<typeof actions.addTagAC>) {
  try {
    const { payload } = action;
    const tags = yield select(getTags);
    if (tags.some(item => item.id === payload.id || item.tag === payload.tag)) {
      yield put(actions.changeCurrentTag(payload));
      return;
    }
    yield put(actions.addTag(payload));
  } catch (error) {
    yield call(() => toastr.error(error, ""));
  }
}

function* addTagOfNote(action: ReturnType<typeof actions.addTagOfNoteAC>) {
  try {
    const { payload } = action;
    const tagsArrNote = yield select(getTagsOfNote);
    if (tagsArrNote.some(item => item.tag === payload)) {
      yield call(() => toastr.success("This tags is already added!", ""));
      return;
    }
    yield put(actions.addTagOfNote(payload));
  } catch (error) {
    yield call(() => toastr.error(error, ""));
  }
}

function* removeTag(action: ReturnType<typeof actions.removeTagAC>) {
  try {
    const { payload } = action;
    yield put(actions.removeTag(payload));
  } catch (error) {
    yield call(() => toastr.error(error, ""));
  }
}

function* tagsSaga() {
  yield takeLatest(ADD_TAG_SAGA, addTag);
  yield takeLatest(ADD_TAG_OF_NOTE_SAGA, addTagOfNote);
  yield takeLatest(REMOVE_TAG_SAGA, removeTag);
}

export default tagsSaga;
