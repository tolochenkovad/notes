import { AppState } from "../../../store/store";

export const getCategories = (state: AppState) => {
  return state.categories.category;
};

export const getCategoriesArrNote = (state: AppState) => {
  return state.categories.categoryArrNote;
};

export const getCategoryValue = (state: AppState) => {
  return state.categories.categoryValue;
};

export const getParentCategory = (state: AppState) => {
  return state.categories.parentCategory;
};

export const getCurrentCategory = (state: AppState) => {
  return state.categories.currentCategory;
};

export const getCurrentIdCategory = (state: AppState) => {
  return state.categories.currentIdCategory;
};

export const getActiveCategory = (state: AppState) => {
  return state.categories.activeCategory;
};

export const getIdParentCategory = (state: AppState) => {
  return state.categories.idParentCategory;
};
