import {
  ADD_NOTE,
  ADD_NOTE_SAGA,
  CHANGE_COLOR_VALUE,
  CHANGE_CURRENT_ID_NOTE,
  CHANGE_NOTE_VALUE,
  CHANGE_SEARCH_VALUE,
  CHECKING_CATEGORY,
  CHECKING_TAGS,
  EDIT_NOTE,
  REMOVE_CATEGORY_OF_NOTE,
  REMOVE_NOTE,
  REMOVE_TAG_OF_NOTE,
} from "./types";
import { CheckCategory, CheckTags, Note } from "../ts-types/ts-types";

export const addNoteAC = (data: Note) => ({
  type: ADD_NOTE_SAGA,
  payload: data,
});

export const removeNoteAC = (id: number | null) => ({
  type: REMOVE_NOTE,
  payload: id,
});

export const checkTagsNoteAC = (data: CheckTags) => ({
  type: CHECKING_TAGS,
  payload: data,
});

export const removeTagOfNoteAC = (currentTag: string) => ({
  type: REMOVE_TAG_OF_NOTE,
  payload: currentTag,
});

export const changeNoteValueAC = (text: string) => ({
  type: CHANGE_NOTE_VALUE,
  payload: text,
});

export const changeCurrentIdNoteAC = (id: number | null) => ({
  type: CHANGE_CURRENT_ID_NOTE,
  payload: id,
});

export const removeCategoryOfNoteAC = (currentCategoryDel: string) => ({
  type: REMOVE_CATEGORY_OF_NOTE,
  payload: currentCategoryDel,
});

export const checkCategoriesNoteAC = (data: CheckCategory) => ({
  type: CHECKING_CATEGORY,
  payload: data,
});

export const changeColorValueAC = (color: string) => ({
  type: CHANGE_COLOR_VALUE,
  payload: color,
});

export const changeSearchValueAC = (value: string) => ({
  type: CHANGE_SEARCH_VALUE,
  payload: value,
});

export const editNote = (data: Note) => ({
  type: EDIT_NOTE,
  payload: data,
});

export const addNote = (data: Note) => ({
  type: ADD_NOTE,
  payload: data,
});

export type Actions =
  | ReturnType<typeof addNoteAC>
  | ReturnType<typeof removeNoteAC>
  | ReturnType<typeof checkTagsNoteAC>
  | ReturnType<typeof removeTagOfNoteAC>
  | ReturnType<typeof changeNoteValueAC>
  | ReturnType<typeof changeCurrentIdNoteAC>
  | ReturnType<typeof removeCategoryOfNoteAC>
  | ReturnType<typeof checkCategoriesNoteAC>
  | ReturnType<typeof changeColorValueAC>
  | ReturnType<typeof changeSearchValueAC>
  | ReturnType<typeof editNote>
  | ReturnType<typeof addNote>;
