import React, { useState, useEffect } from "react";
import NotesList from "./NotesList/Noteslist";
import NoteInfoContainer from "./NoteInfo/NoteInfoContainer";
import Info from "../../Info/components/Info";
import { buildTree } from "../../../utils/makeTree";
import Filter from "../../Filter/Filter";
import AddNote from "./AddNote/AddNote";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import * as noteActionCreatores from "../redux/actions";
import { connect } from "react-redux";
import {
  getColorArr,
  getColorValue,
  getCurrentIdNote,
  getNote,
  getNoteValue,
  getSearchValue,
} from "../redux/selectors";
import * as tagsActionCreatores from "../../Info/redux-tags/actions";
import {
  getActiveTag,
  getCurrentIdTag,
  getCurrentTag,
  getTags,
  getTagsOfNote,
  getTagValue,
} from "../../Info/redux-tags/selectors";
import {
  getActiveCategory,
  getCategories,
  getCategoriesArrNote,
  getCategoryValue,
  getCurrentCategory,
  getCurrentIdCategory,
  getIdParentCategory,
} from "../../Info/redux-categories/selectors";
import * as categoriesActionCreatores from "../../Info/redux-categories/actions";
import { bindActionCreators } from "redux";
import { NotesContainerStateProps } from "../ts-types/ts-types";

const useStyles = makeStyles((theme: Theme) => ({
  notesContainer: {
    padding: theme.spacing(0, 2.5, 2.5, 2.5),
  },
  info: {
    width: "30%",
    background: "#ececec",
  },
  notes: {
    width: "65%",
  },
  "@media (max-width: 992px)": {
    notesContainer: {
      flexDirection: "column",
    },
    info: {
      width: "100%",
      order: 2,
      marginTop: "30px",
    },
    notes: {
      width: "100%",
    },
  },
}));

type Props = NotesContainerStateProps & DispatchProps;

const NotesContainer: React.FC<Props> = ({
  notes,
  noteValue,
  currentIdNote,
  tags,
  tagsArrNote,
  tagValue,
  currentIdTag,
  activeTag,
  currentTag,
  category,
  categoryArrNote,
  categoryValue,
  currentCategory,
  currentIdCategory,
  activeCategory,
  idParentCategory,
  colorValue,
  searchValue,
  colorArr,
  tagsActions,
  notesActions,
  categoriesActions,
}) => {
  const [isNoteInfo, setNoteInfo] = useState(false);
  const [tree, setTree] = useState([]);

  useEffect(() => {
    // @ts-ignore
    setTree(buildTree(category));
  }, [category]);

  const editNote = (id, text, tags, categories, color) => {
    setNoteInfo(true);
    notesActions.changeNoteValueAC(text);
    notesActions.changeCurrentIdNoteAC(id);
    tagsActions.changeTagOfNoteAC(tags);
    categoriesActions.changeCategoryOfNoteAC(categories);
    notesActions.changeColorValueAC(color);
  };

  const addTag = (id, tag) => {
    const data = { id, tag, currentTag };
    notesActions.checkTagsNoteAC(data);
    const addTagData = { id, tag };
    tagsActions.addTagAC(addTagData);
  };

  const removeTag = (id, currentTagDel) => {
    tagsActions.removeTagAC(id);
    notesActions.removeTagOfNoteAC(currentTagDel);
  };

  const editTag = (id, text) => {
    tagsActions.changeTagsValueAC(text);
    tagsActions.changeCurrentIdTagAC(id);
  };

  const removeCategory = (id, currentCategoryDel) => {
    categoriesActions.removeCategoryAC(id);
    notesActions.removeCategoryOfNoteAC(currentCategoryDel);
  };

  const editCategoryItem = (id, category) => {
    const data = { id, category, currentCategory };
    notesActions.checkCategoriesNoteAC(data);
    const addCategoryData = { id, categoryValue: category };
    categoriesActions.addCategoryAC(addCategoryData);
  };

  const editCategory = (id, text) => {
    categoriesActions.setCategoryValueAC(text);
    categoriesActions.setCurrentCategoryIdAC(id);
  };

  const cleanValue = () => {
    notesActions.changeNoteValueAC("");
    tagsActions.changeTagsValueAC("");
    tagsActions.changeTagOfNoteAC([]);
    categoriesActions.changeCategoryOfNoteAC([]);
    notesActions.changeColorValueAC("#fdcb6e");
  };

  const clickItem = e => {
    e.target.blur();
    setNoteInfo(true);
    cleanValue();
    notesActions.changeCurrentIdNoteAC(null);
  };

  const classes = useStyles();
  return (
    <Grid container justify="space-between" className={classes.notesContainer}>
      <Grid item className={classes.info}>
        <Info
          tags={tags}
          tagValue={tagValue}
          categoryValue={categoryValue}
          editTag={editTag}
          editCategory={editCategory}
          addTag={addTag}
          editCategoryItem={editCategoryItem}
          currentIdTag={currentIdTag}
          currentIdCategory={currentIdCategory}
          getActiveTag={tagsActions.changeActiveTagAC}
          getActiveCategory={categoriesActions.setActiveCategoryAC}
          getTagBeforeEdit={tagsActions.setCurrentTagAC}
          getCategoryBeforeEdit={categoriesActions.setCurrentCategoryAC}
          removeCategory={removeCategory}
          tree={tree}
          removeTag={removeTag}
        />
      </Grid>

      <Grid item className={classes.notes}>
        <Filter
          activeTag={activeTag}
          activeCategory={activeCategory}
          searchValue={searchValue}
          getActiveTag={tagsActions.changeActiveTagAC}
          getSearchValue={notesActions.changeSearchValueAC}
          getActiveCategory={categoriesActions.setActiveCategoryAC}
        />

        <AddNote clickItem={clickItem} />

        {notes.length ? (
          <NotesList
            notes={notes}
            removeNote={notesActions.removeNoteAC}
            getActiveTag={tagsActions.changeActiveTagAC}
            getActiveCategory={categoriesActions.setActiveCategoryAC}
            activeTag={activeTag}
            activeCategory={activeCategory}
            searchValue={searchValue}
            editNote={editNote}
          />
        ) : null}
      </Grid>

      {isNoteInfo ? (
        <NoteInfoContainer
          addNote={notesActions.addNoteAC}
          addTag={addTag}
          tags={tags}
          changeNoteInfo={setNoteInfo}
          currentIdNote={currentIdNote}
          changeTag={tagsActions.changeTagsValueAC}
          addTagsArrOfNote={tagsActions.addTagOfNoteAC}
          tagsArrNote={tagsArrNote}
          removeTagNoteInfo={tagsActions.removeArrTagOfNoteAC}
          colorArr={colorArr}
          colorValue={colorValue}
          getColorValue={notesActions.changeColorValueAC}
          addCategory={categoriesActions.addCategoryAC}
          category={category}
          idParentCategory={idParentCategory}
          getParentCategory={categoriesActions.setParentCategoryAC}
          addChildCategory={categoriesActions.addChildCategoryAC}
          categoryArrNote={categoryArrNote}
          addCategoryArrOfNote={categoriesActions.addCategoryOfNoteAC}
          removeCategoryNoteInfo={categoriesActions.removeArrCategoryOfNoteAC}
          noteValue={noteValue}
        />
      ) : null}
    </Grid>
  );
};

type DispatchProps = {
  tagsActions: typeof tagsActionCreatores;
  notesActions: typeof noteActionCreatores;
  categoriesActions: typeof categoriesActionCreatores;
};

const mapStateToProps = (state): NotesContainerStateProps => ({
  notes: getNote(state),
  noteValue: getNoteValue(state),
  currentIdNote: getCurrentIdNote(state),
  tags: getTags(state),
  tagsArrNote: getTagsOfNote(state),
  tagValue: getTagValue(state),
  currentIdTag: getCurrentIdTag(state),
  activeTag: getActiveTag(state),
  currentTag: getCurrentTag(state),
  category: getCategories(state),
  categoryArrNote: getCategoriesArrNote(state),
  categoryValue: getCategoryValue(state),
  currentCategory: getCurrentCategory(state),
  currentIdCategory: getCurrentIdCategory(state),
  activeCategory: getActiveCategory(state),
  idParentCategory: getIdParentCategory(state),
  colorValue: getColorValue(state),
  searchValue: getSearchValue(state),
  colorArr: getColorArr(state),
});

export default connect<NotesContainerStateProps, DispatchProps>(
  mapStateToProps,
  dispatch => ({
    tagsActions: bindActionCreators(
      {
        ...tagsActionCreatores,
      },
      dispatch
    ),
    notesActions: bindActionCreators(
      {
        ...noteActionCreatores,
      },
      dispatch
    ),
    categoriesActions: bindActionCreators(
      {
        ...categoriesActionCreatores,
      },
      dispatch
    ),
  })
)(NotesContainer);
