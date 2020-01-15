import {
  ADD_CATEGORY,
  ADD_CATEGORY_OF_NOTE,
  ADD_CATEGORY_OF_NOTE_SAGA,
  ADD_CATEGORY_SAGA,
  ADD_CHILD_CATEGORY_SAGA,
  CHANGE_CATEGORY_OF_NOTE,
  CHANGE_CURRENT_CATEGORY,
  REMOVE_ARR_CATEGORY_OF_NOTE,
  REMOVE_CATEGORY,
  REMOVE_CATEGORY_SAGA,
  SET_ACTIVE_CATEGORY,
  SET_CATEGORY_VALUE,
  SET_CURRENT_CATEGORY,
  SET_CURRENT_ID_CATEGORY,
  SET_ID_PARENT,
  SET_PARENT_CATEGORY,
} from "./types";
import { Category } from "../ts-types/ts-types";

export const removeCategoryAC = (id: number) => ({
  type: REMOVE_CATEGORY_SAGA,
  payload: id,
});

export const addCategoryOfNoteAC = (data: Category) => ({
  type: ADD_CATEGORY_OF_NOTE_SAGA,
  payload: data,
});

export const changeCategoryOfNoteAC = (categories: Category[]) => ({
  type: CHANGE_CATEGORY_OF_NOTE,
  payload: categories,
});

export const addCategoryAC = (data: Category) => ({
  type: ADD_CATEGORY_SAGA,
  payload: data,
});

export const removeArrCategoryOfNoteAC = (id: number) => ({
  type: REMOVE_ARR_CATEGORY_OF_NOTE,
  payload: id,
});

export const setCategoryValueAC = (text: string) => ({
  type: SET_CATEGORY_VALUE,
  payload: text,
});

export const setParentCategoryAC = (value: string) => ({
  type: SET_PARENT_CATEGORY,
  payload: value,
});

export const setCurrentCategoryAC = (currentCategory: string) => ({
  type: SET_CURRENT_CATEGORY,
  payload: currentCategory,
});

export const setCurrentCategoryIdAC = (id: number) => ({
  type: SET_CURRENT_ID_CATEGORY,
  payload: id,
});

export const setActiveCategoryAC = (category: string) => ({
  type: SET_ACTIVE_CATEGORY,
  payload: category,
});

export const addChildCategoryAC = (data: Category) => ({
  type: ADD_CHILD_CATEGORY_SAGA,
  payload: data,
});

export const changeCurrentCategory = (data: Category) => ({
  type: CHANGE_CURRENT_CATEGORY,
  payload: data,
});

export const addCategory = (data: Category) => ({
  type: ADD_CATEGORY,
  payload: data,
});

export const addCategoryOfNote = (data: Category) => ({
  type: ADD_CATEGORY_OF_NOTE,
  payload: data,
});

export const setIdParent = (data: Category) => ({
  type: SET_ID_PARENT,
  payload: data,
});

export const removeCategory = (id: number) => ({
  type: REMOVE_CATEGORY,
  payload: id,
});

export type Actions =
  | ReturnType<typeof removeCategoryAC>
  | ReturnType<typeof addCategoryOfNoteAC>
  | ReturnType<typeof changeCategoryOfNoteAC>
  | ReturnType<typeof addCategoryAC>
  | ReturnType<typeof removeArrCategoryOfNoteAC>
  | ReturnType<typeof setCategoryValueAC>
  | ReturnType<typeof setParentCategoryAC>
  | ReturnType<typeof setCurrentCategoryAC>
  | ReturnType<typeof setCurrentCategoryIdAC>
  | ReturnType<typeof setActiveCategoryAC>
  | ReturnType<typeof addChildCategoryAC>
  | ReturnType<typeof changeCurrentCategory>
  | ReturnType<typeof addCategory>
  | ReturnType<typeof addCategoryOfNote>
  | ReturnType<typeof setIdParent>
  | ReturnType<typeof removeCategory>;
