import { combineReducers, Reducer } from "redux";
import notesReducer from "../app/Notes/redux/reducer";
import tagsReducer from "../app/Info/redux-tags/reducer";
import localeReducer from "../utils/translator/localereducer";
import categoriesReducer from "../app/Info/redux-categories/reducer";
import { reducer as toastrReducer } from "react-redux-toastr";

const reducers = combineReducers({
  notes: notesReducer,
  tags: tagsReducer as Reducer<ReturnType<typeof tagsReducer>>,
  categories: categoriesReducer as Reducer<
    ReturnType<typeof categoriesReducer>
  >,
  locale: localeReducer as Reducer<ReturnType<typeof localeReducer>>,
  toastr: toastrReducer,
});

export default reducers;
