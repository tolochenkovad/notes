import { FuncNumberString, FuncString } from "../../../ts-types/ts-types";
import {
  NoteInfoContainerProps,
  NotesContainerStateProps,
  NotesListProps,
} from "../../Notes/ts-types/ts-types";

export type Category = {
  id?: number;
  categoryValue: string;
  parent?: number | null;
  children?: [];
};

export type Tag = {
  id: number;
  tag: string;
};

export type InfoProps = {
  tags: NotesContainerStateProps["tags"];
  removeTag: FuncNumberString;
  tagValue: NotesContainerStateProps["tagValue"];
  categoryValue: NotesContainerStateProps["categoryValue"];
  currentIdTag: NotesContainerStateProps["currentIdTag"];
  currentIdCategory: NotesContainerStateProps["currentIdCategory"];
  addTag: NoteInfoContainerProps["addTag"];
  editCategoryItem: FuncNumberString;
  editTag: FuncNumberString;
  getActiveTag: NotesListProps["getActiveTag"];
  getActiveCategory: NotesListProps["getActiveCategory"];
  getTagBeforeEdit: FuncString;
  removeCategory: FuncNumberString;
  getCategoryBeforeEdit: FuncString;
  editCategory: FuncNumberString;
  tree: any;
};

export type TagLibraryProps = {
  tags: NotesContainerStateProps["tags"];
  getActiveFilterTag: (e: any) => void;
  onEditTag: FuncNumberString;
  isTagEdit: boolean;
  currentIdTag: NotesContainerStateProps["currentIdTag"];
  tagValue: NotesContainerStateProps["tagValue"];
  removeTag: InfoProps["removeTag"];
  addTag: InfoProps["addTag"];
  onBlurFunc: () => void;
};

export type TagItemProps = {
  getActiveFilterTag: TagLibraryProps["getActiveFilterTag"];
  onEditTag: TagLibraryProps["onEditTag"];
  tag: Tag;
  isTagEdit: TagLibraryProps["isTagEdit"];
  currentIdTag: NotesContainerStateProps["currentIdTag"];
  tagValue: NotesContainerStateProps["tagValue"];
  addTag: InfoProps["addTag"];
  onBlurFunc: TagLibraryProps["onBlurFunc"];
  removeTag: InfoProps["removeTag"];
};

export type EditItemProps = {
  elementValue: NotesContainerStateProps["tagValue"];
  onBlurFun: TagLibraryProps["onBlurFunc"];
  addElement: InfoProps["addTag"];
  id: number;
};

export type CategoryLibraryProps = {
  tree: InfoProps["tree"];
  getActiveFilterCategory: (e: any) => void;
  onEditCategory: FuncNumberString;
  isEditIcon: boolean;
  currentIdCategory: NotesContainerStateProps["currentIdCategory"];
  categoryValue: NotesContainerStateProps["categoryValue"];
  editCategoryItem: FuncNumberString;
  onBlurFunc: TagLibraryProps["onBlurFunc"];
  removeCategory: FuncNumberString;
};

export type CategoryItemProps = {
  getActiveFilterCategory: CategoryLibraryProps["getActiveFilterCategory"];
  onEditCategory: FuncNumberString;
  isEditIcon: CategoryLibraryProps["isEditIcon"];
  currentIdCategory: NotesContainerStateProps["currentIdCategory"];
  categoryValue: NotesContainerStateProps["categoryValue"];
  editCategoryItem: FuncNumberString;
  onBlurFunc: TagLibraryProps["onBlurFunc"];
  removeCategory: FuncNumberString;
  item: any;
};

export type ChildrenCategoryProps = {
  descendants: any;
  removeCategory: FuncNumberString;
  isEditIcon: CategoryLibraryProps["isEditIcon"];
  editCategoryItem: FuncNumberString;
  onEditCategory: FuncNumberString;
  categoryValue: NotesContainerStateProps["categoryValue"];
  onBlurFunc: TagLibraryProps["onBlurFunc"];
  currentIdCategory: NotesContainerStateProps["currentIdCategory"];
  getActiveFilterCategory: CategoryLibraryProps["getActiveFilterCategory"];
};

export type ChildrenCategoryItemProps = {
  getActiveFilterCategory: CategoryLibraryProps["getActiveFilterCategory"];
  onEditCategory: FuncNumberString;
  isEditIcon: CategoryLibraryProps["isEditIcon"];
  currentIdCategory: NotesContainerStateProps["currentIdCategory"];
  categoryValue: NotesContainerStateProps["categoryValue"];
  editCategoryItem: FuncNumberString;
  onBlurFunc: TagLibraryProps["onBlurFunc"];
  removeCategory: FuncNumberString;
  child: any;
};
