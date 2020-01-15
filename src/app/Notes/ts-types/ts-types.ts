import { Category, Tag } from "../../Info/ts-types/ts-types";
import {
  FuncEmpty,
  FuncNumber,
  FuncNumberString,
} from "../../../ts-types/ts-types";
import { addNoteAC, changeColorValueAC, removeNoteAC } from "../redux/actions";
import {
  addTagOfNoteAC,
  changeActiveTagAC,
  changeTagsValueAC,
  removeArrTagOfNoteAC,
} from "../../Info/redux-tags/actions";
import {
  addCategoryAC,
  addCategoryOfNoteAC,
  addChildCategoryAC,
  setActiveCategoryAC,
  setParentCategoryAC,
} from "../../Info/redux-categories/actions";

export type Note = {
  id: number | null;
  text: string;
  tags: Tag[];
  categories: Category[];
  color: string;
  date?: string | number;
};

export type CheckTags = {
  id: number;
  tag: string;
  currentTag: string;
};

export type CheckCategory = {
  id: number;
  category: string;
  currentCategory: string;
};

export type NotesContainerStateProps = {
  notes: Note[];
  noteValue: string;
  currentIdNote: number | null;
  category: Category[];
  categoryArrNote: Category[];
  categoryValue: string;
  currentCategory: string;
  activeCategory: string;
  currentIdCategory: number | null;
  idParentCategory: number | null | undefined;
  tags: Tag[];
  tagsArrNote: Tag[];
  tagValue: string;
  currentIdTag: string | number | null;
  activeTag: string;
  currentTag: string;
  colorValue: string;
  searchValue: string;
  colorArr: string[];
};

export type AddNoteProps = {
  clickItem: (e: any) => void;
};

export type NotesListProps = {
  notes: Note[];
  removeNote: typeof removeNoteAC;
  editNote: (
    id: number | null,
    text: string,
    tags: Tag[],
    categories: Category[],
    color: string
  ) => void;
  getActiveTag: typeof changeActiveTagAC;
  getActiveCategory: typeof setActiveCategoryAC;
  activeTag: NotesContainerStateProps["activeTag"];
  activeCategory: NotesContainerStateProps["activeCategory"];
  searchValue: NotesContainerStateProps["searchValue"];
};

export type NoteItemProps = {
  id: Note["id"];
  note: Note["text"];
  color: Note["color"];
  date: Note["date"];
  removeNote: NotesListProps["removeNote"];
  editNote: NotesListProps["editNote"];
  tags: Note["tags"];
  categories: Note["categories"];
  getActiveCategory: NotesListProps["getActiveCategory"];
  getActiveTag: NotesListProps["getActiveTag"];
};

export type NoteInfoContainerProps = {
  addNote: typeof addNoteAC;
  tags: NotesContainerStateProps["tags"];
  addTag: FuncNumberString;
  changeNoteInfo: (value: boolean) => void;
  currentIdNote: NotesContainerStateProps["currentIdNote"];
  noteValue: NotesContainerStateProps["noteValue"];
  changeTag: typeof changeTagsValueAC;
  addTagsArrOfNote: typeof addTagOfNoteAC;
  tagsArrNote: NotesContainerStateProps["tagsArrNote"];
  removeTagNoteInfo: typeof removeArrTagOfNoteAC;
  colorArr: NotesContainerStateProps["colorArr"];
  getColorValue: typeof changeColorValueAC;
  colorValue: NotesContainerStateProps["colorValue"];
  addCategory: typeof addCategoryAC;
  category: NotesContainerStateProps["category"];
  getParentCategory: typeof setParentCategoryAC;
  addChildCategory: typeof addChildCategoryAC;
  categoryArrNote: NotesContainerStateProps["categoryArrNote"];
  idParentCategory: NotesContainerStateProps["idParentCategory"];
  addCategoryArrOfNote: typeof addCategoryOfNoteAC;
  removeCategoryNoteInfo: FuncNumber;
};

export type NoteFormProps = {
  refForm: any;
  submitHandler: (e: any) => void;
  refTextarea: any;
  onFocusFunc: FuncEmpty;
  onPressEnter: (e: any) => void;
  textarea: any;
  onPressTag: FuncEmpty;
  onPressColor: FuncEmpty;
  onPressCategory: FuncEmpty;
  showTag: boolean;
  clickTag: (e: any) => void;
  onKeyFunc: (e: any) => void;
  tags: NotesContainerStateProps["tags"];
  showInputTag: boolean;
  submitHandlerTag: (e: any) => void;
  onBlurFunc: FuncEmpty;
  showColorPicker: boolean;
  clickColor: (e: any) => void;
  colorArr: NotesContainerStateProps["colorArr"];
  showCategory: boolean;
  clickCategory: (e: any) => void;
  category: NotesContainerStateProps["category"];
  isNeighboringCategory: boolean;
  submitCategory: (e: any) => void;
  isChildCategory: boolean;
  clickParentCategory: (e: any) => void;
  isParentHasChild: boolean;
  submitChildCategory: (e: any) => void;
  refBtn: any;
};

export type ToolItemProps = {
  name: string;
  handleClick: NoteFormProps["onPressCategory"];
  classes: any;
};

export type ChoosedCharacteristicsProps = {
  tagsArrNote: NotesContainerStateProps["tagsArrNote"];
  categoryArrNote: NotesContainerStateProps["categoryArrNote"];
  delTag: FuncNumber;
  delCategory: FuncNumber;
};

export type ChoosedItemProps = {
  value: string;
  itemArr: any;
  removeFunc: FuncNumber;
  classes: any;
};
