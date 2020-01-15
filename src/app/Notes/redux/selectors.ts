import { AppState } from "../../../store/store";

export const getNote = (state: AppState) => {
  return state.notes.notes;
};

export const getNoteValue = (state: AppState) => {
  return state.notes.noteValue;
};

export const getCurrentIdNote = (state: AppState) => {
  return state.notes.currentIdNote;
};

export const getColorArr = (state: AppState) => {
  return state.notes.colorArr;
};

export const getColorValue = (state: AppState) => {
  return state.notes.colorValue;
};

export const getSearchValue = (state: AppState) => {
  return state.notes.searchValue;
};
