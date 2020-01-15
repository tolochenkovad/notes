import {
  NotesContainerStateProps,
  NotesListProps,
} from "../Notes/ts-types/ts-types";
import { FuncString } from "../../ts-types/ts-types";

export type FilterProps = {
  activeTag: NotesContainerStateProps["activeTag"];
  activeCategory: NotesContainerStateProps["activeCategory"];
  searchValue: NotesContainerStateProps["searchValue"];
  getActiveTag: NotesListProps["getActiveTag"];
  getSearchValue: FuncString;
  getActiveCategory: NotesListProps["getActiveCategory"];
};
