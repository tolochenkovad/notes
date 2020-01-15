import {
  ADD_CATEGORY,
  ADD_CATEGORY_OF_NOTE,
  CHANGE_CATEGORY_OF_NOTE,
  CHANGE_CURRENT_CATEGORY,
  REMOVE_ARR_CATEGORY_OF_NOTE,
  REMOVE_CATEGORY,
  SET_ACTIVE_CATEGORY,
  SET_CATEGORY_VALUE,
  SET_CURRENT_CATEGORY,
  SET_CURRENT_ID_CATEGORY,
  SET_ID_PARENT,
  SET_PARENT_CATEGORY,
} from "./types";
import { Category } from "../ts-types/ts-types";
import { Actions } from "./actions";

const initialState = {
  category: [] as Category[],
  categoryArrNote: [] as Category[],
  categoryValue: "" as string,
  parentCategory: "" as string,
  currentCategory: "" as string,
  currentIdCategory: null as number | null,
  activeCategory: "" as string,
  idParentCategory: null as number | null,
};

const categoriesReducer = (state = initialState, action: Actions) => {
  switch (action.type) {
    case ADD_CATEGORY: {
      return {
        ...state,
        category: [
          ...state.category,
          {
            id: action.payload.id,
            categoryValue: action.payload.categoryValue,
            parent: action.payload.parent,
          },
        ],
      };
    }
    case CHANGE_CURRENT_CATEGORY: {
      return {
        ...state,
        category: [...state.category].map(item => {
          if (item.id === action.payload.id)
            item.categoryValue = action.payload.categoryValue;
          return item;
        }),
      };
    }
    case REMOVE_CATEGORY: {
      return {
        ...state,
        category: [
          ...state.category.filter(category => category.id !== action.payload),
        ],
      };
    }
    case ADD_CATEGORY_OF_NOTE: {
      let currentId = action.payload.id;
      let currentParent = action.payload.parent;
      const newCategory = [...state.category];
      const newCategoryArrNote = [...state.categoryArrNote];
      newCategory.map(c => {
        if (c.categoryValue === action.payload.categoryValue) {
          currentId = c.id;
          currentParent = c.parent;
        }
        return c;
      });
      newCategoryArrNote.map(item => {
        if (item.id === currentParent) {
          item.categoryValue = action.payload.categoryValue;
          item.id = currentId;
        }
        return item;
      });

      if (
        [...state.categoryArrNote].some(
          item => item.categoryValue === action.payload.categoryValue
        )
      ) {
        return { ...state };
      }
      return {
        ...state,
        categoryArrNote: [
          ...state.categoryArrNote,
          {
            id: currentId,
            categoryValue: action.payload.categoryValue,
            parent: currentParent,
          },
        ],
      };
    }

    case CHANGE_CATEGORY_OF_NOTE: {
      return {
        ...state,
        categoryArrNote: [...action.payload],
      };
    }
    case REMOVE_ARR_CATEGORY_OF_NOTE: {
      return {
        ...state,
        categoryArrNote: [
          ...state.categoryArrNote.filter(tag => tag.id !== action.payload),
        ],
      };
    }
    case SET_CATEGORY_VALUE: {
      return {
        ...state,
        categoryValue: action.payload,
      };
    }
    case SET_PARENT_CATEGORY:
      return {
        ...state,
        parentCategory: action.payload,
      };
    case SET_CURRENT_CATEGORY: {
      return {
        ...state,
        currentCategory: action.payload,
      };
    }
    case SET_CURRENT_ID_CATEGORY: {
      return {
        ...state,
        currentIdCategory: action.payload,
      };
    }
    case SET_ACTIVE_CATEGORY: {
      return {
        ...state,
        activeCategory: action.payload,
      };
    }
    case SET_ID_PARENT: {
      return {
        ...state,
        idParentCategory: action.payload.parent,
      };
    }
    default:
      return state;
  }
};

export default categoriesReducer;
