import { AppState } from "../../../store/store";

export const getTags = (state: AppState) => {
  return state.tags.tags;
};

export const getTagsOfNote = (state: AppState) => {
  return state.tags.tagsArrNote;
};

export const getTagValue = (state: AppState) => {
  return state.tags.tagValue;
};

export const getCurrentIdTag = (state: AppState) => {
  return state.tags.currentIdTag;
};
export const getActiveTag = (state: AppState) => {
  return state.tags.activeTag;
};

export const getCurrentTag = (state: AppState) => {
  return state.tags.currentTag;
};
