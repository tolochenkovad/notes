import {
  ADD_TAG,
  ADD_TAG_OF_NOTE,
  ADD_TAG_OF_NOTE_SAGA,
  ADD_TAG_SAGA,
  CHANGE_ACTIVE_TAG,
  CHANGE_CURRENT_ID_TAG,
  CHANGE_CURRENT_TAG,
  CHANGE_TAG_OF_NOTE,
  CHANGE_TAG_VALUE,
  REMOVE_ARR_TAG_OF_NOTE,
  REMOVE_TAG,
  REMOVE_TAG_SAGA,
  SET_CURRENT_TAG,
} from "./types";
import { Tag } from "../ts-types/ts-types";

export const addTagAC = (data: Tag) => ({
  type: ADD_TAG_SAGA,
  payload: data,
});

export const removeTagAC = (id: number) => ({
  type: REMOVE_TAG_SAGA,
  payload: id,
});

export const addTagOfNoteAC = (tag: string) => ({
  type: ADD_TAG_OF_NOTE_SAGA,
  payload: tag,
});

export const removeArrTagOfNoteAC = (id: number) => ({
  type: REMOVE_ARR_TAG_OF_NOTE,
  payload: id,
});

export const changeTagOfNoteAC = (tags: Tag[]) => ({
  type: CHANGE_TAG_OF_NOTE,
  payload: tags,
});

export const changeTagsValueAC = (tag: string) => ({
  type: CHANGE_TAG_VALUE,
  payload: tag,
});

export const changeCurrentIdTagAC = (id: number) => ({
  type: CHANGE_CURRENT_ID_TAG,
  payload: id,
});

export const changeActiveTagAC = (tag: string) => ({
  type: CHANGE_ACTIVE_TAG,
  payload: tag,
});

export const setCurrentTagAC = (currentTag: string) => ({
  type: SET_CURRENT_TAG,
  payload: currentTag,
});

export const changeCurrentTag = (data: Tag) => ({
  type: CHANGE_CURRENT_TAG,
  payload: data,
});

export const addTag = (data: Tag) => ({
  type: ADD_TAG,
  payload: data,
});

export const addTagOfNote = (tag: string) => ({
  type: ADD_TAG_OF_NOTE,
  payload: tag,
});

export const removeTag = (id: number) => ({
  type: REMOVE_TAG,
  payload: id,
});

export type Actions =
  | ReturnType<typeof addTagAC>
  | ReturnType<typeof removeTagAC>
  | ReturnType<typeof addTagOfNoteAC>
  | ReturnType<typeof removeArrTagOfNoteAC>
  | ReturnType<typeof changeTagOfNoteAC>
  | ReturnType<typeof changeTagsValueAC>
  | ReturnType<typeof changeCurrentIdTagAC>
  | ReturnType<typeof changeActiveTagAC>
  | ReturnType<typeof setCurrentTagAC>
  | ReturnType<typeof changeCurrentTag>
  | ReturnType<typeof addTag>
  | ReturnType<typeof addTagOfNote>
  | ReturnType<typeof removeTag>;
