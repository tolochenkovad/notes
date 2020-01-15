import { takeLatest, put, select, call } from "redux-saga/effects";
import {
  ADD_CATEGORY_OF_NOTE_SAGA,
  ADD_CATEGORY_SAGA,
  ADD_CHILD_CATEGORY_SAGA,
  REMOVE_CATEGORY_SAGA,
} from "./types";
import {
  getCategories,
  getCategoriesArrNote,
  getParentCategory,
} from "./selectors";
import store from "../../../store/store";
import * as actions from "./actions";
import { toastr } from "react-redux-toastr";

function* removeCategory(action: ReturnType<typeof actions.removeCategoryAC>) {
  try {
    const { payload } = action;
    yield put(actions.removeCategory(payload));
  } catch (error) {
    yield call(() => toastr.error(error, ""));
  }
}

function* addCategory(action: ReturnType<typeof actions.addCategoryAC>) {
  try {
    const { payload } = action;
    const category = yield select(getCategories);
    if (category.some(item => item.categoryValue === payload.categoryValue)) {
      yield call(() => toastr.success("This category is already added!", ""));
      return;
    } else if (category.some(item => item.id === payload.id)) {
      yield put(actions.changeCurrentCategory(payload));
      return;
    } else {
      yield put(actions.addCategory(payload));
    }
  } catch (error) {
    yield call(() => toastr.error(error, ""));
  }
}

function* addCategoryOfNote(
  action: ReturnType<typeof actions.addCategoryOfNoteAC>
) {
  try {
    const { payload } = action;
    const categoryArrNote = yield select(getCategoriesArrNote);
    if (categoryArrNote.some(item => item.category === payload.categoryValue)) {
      yield call(() => toastr.success("This category is already added!", ""));
      return;
    }
    yield put(actions.addCategoryOfNote(payload));
  } catch (error) {
    yield call(() => toastr.error(error, ""));
  }
}

function* addChildCategory(
  action: ReturnType<typeof actions.addChildCategoryAC>
) {
  try {
    const { payload } = action;
    const category = yield select(getCategories);
    const parentCategory = yield select(getParentCategory);
    const newCategory = [...category];
    let parentId = null;
    newCategory.forEach(item => {
      if (item.categoryValue === parentCategory) {
        parentId = item.id;
        payload.parent = parentId;
        store.dispatch(actions.addCategoryAC(payload));
      }
    });
    payload.parent = parentId;
    yield put(actions.setIdParent(payload));
  } catch (error) {
    yield call(() => toastr.error(error, ""));
  }
}

function* categoriesSaga() {
  yield takeLatest(REMOVE_CATEGORY_SAGA, removeCategory);
  yield takeLatest(ADD_CATEGORY_SAGA, addCategory);
  yield takeLatest(ADD_CATEGORY_OF_NOTE_SAGA, addCategoryOfNote);
  yield takeLatest(ADD_CHILD_CATEGORY_SAGA, addChildCategory);
}

export default categoriesSaga;
