import {
  ADD_NOTE,
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
import moment from "moment";
import { Note } from "../ts-types/ts-types";
import { Actions } from "./actions";

const initialState = {
  notes: [] as Note[],
  noteValue: "" as string,
  currentIdNote: null as number | null,
  colorValue: "#fdcb6e" as string,
  searchValue: "" as string,
  colorArr: [
    "#ff7675",
    "#fdcb6e",
    "#EE5A24",
    "#00b894",
    "#74b9ff",
    "#9980FA",
  ] as string[],
};

const notesReducer = (state = initialState, action: Actions) => {
  switch (action.type) {
    case ADD_NOTE: {
      const date = moment().format("lll");
      return {
        ...state,
        notes: [
          ...state.notes,
          {
            id: Date.now(),
            text: action.payload.text,
            tags: action.payload.tags,
            categories: action.payload.categories,
            color: action.payload.color,
            date: date,
          },
        ],
      };
    }
    case REMOVE_NOTE:
      return {
        ...state,
        notes: [...state.notes].filter(note => note.id !== action.payload),
      };
    case EDIT_NOTE: {
      const newDate = moment().format("lll");
      return {
        ...state,
        notes: [
          ...state.notes.map(note => {
            if (note.id === action.payload.id) {
              if (note.text !== action.payload.text) note.date = newDate;
              note.text = action.payload.text;
              note.tags = action.payload.tags;
              note.categories = action.payload.categories;
              note.color = action.payload.color;
            }
            return note;
          }),
        ],
      };
    }
    case CHECKING_TAGS:
      return {
        ...state,
        notes: [
          ...state.notes.map(note => {
            note.tags.map(item =>
              item.tag === action.payload.currentTag
                ? (item.tag = action.payload.tag)
                : null
            );
            return note;
          }),
        ],
      };
    case CHECKING_CATEGORY:
      return {
        ...state,
        notes: [
          ...state.notes.map(note => {
            note.categories.map(item =>
              item.categoryValue === action.payload.currentCategory
                ? (item.categoryValue = action.payload.category)
                : null
            );
            return note;
          }),
        ],
      };
    case REMOVE_TAG_OF_NOTE:
      return {
        ...state,
        notes: [...state.notes].filter(
          note =>
            (note.tags = [...note.tags.filter(t => t.tag !== action.payload)])
        ),
      };
    case REMOVE_CATEGORY_OF_NOTE:
      return {
        ...state,
        notes: [
          ...state.notes.map(note => {
            note.categories = note.categories.filter(
              t => t.categoryValue !== action.payload
            );
            return note;
          }),
        ],
      };
    case CHANGE_NOTE_VALUE:
      return {
        ...state,
        noteValue: action.payload,
      };
    case CHANGE_CURRENT_ID_NOTE:
      return {
        ...state,
        currentIdNote: action.payload,
      };
    case CHANGE_COLOR_VALUE:
      return {
        ...state,
        colorValue: action.payload,
      };
    case CHANGE_SEARCH_VALUE:
      return {
        ...state,
        searchValue: action.payload,
      };
    default:
      return state;
  }
};

export default notesReducer;
