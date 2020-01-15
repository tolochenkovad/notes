import React, { useState, useEffect } from "react";
import NoteForm from "./NoteForm/NoteForm";
import ChoosedCharacteristics from "./ChoosedCharacteristics/ChoosedCharacteristics";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { NoteInfoContainerProps } from "../../ts-types/ts-types";

const useStyles = makeStyles((theme: Theme) => ({
  wrap: {
    position: "fixed",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    background: "rgba(0, 0, 0, 0.8)",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
  },
}));

type Props = NoteInfoContainerProps;

const NoteInfoContainer: React.FC<Props> = ({
  addNote,
  tags,
  addTag,
  changeNoteInfo,
  currentIdNote,
  noteValue,
  changeTag,
  addTagsArrOfNote,
  tagsArrNote,
  removeTagNoteInfo,
  colorArr,
  getColorValue,
  colorValue,
  addCategory,
  category,
  getParentCategory,
  addChildCategory,
  categoryArrNote,
  idParentCategory,
  addCategoryArrOfNote,
  removeCategoryNoteInfo,
}) => {
  const useInputValue = () => {
    const [value, setValue] = useState(noteValue);
    return {
      bind: {
        value,
        onChange: e => setValue(e.target.value),
      },
      value: () => value,
    };
  };

  const textarea = useInputValue();

  const [showTag, setShowTag] = useState(false);
  const [showInputTag, setShowInputTag] = useState(false);

  const [showCategory, setCategory] = useState(false);
  const [isNeighboringCategory, setNeighboringCategory] = useState(false);
  const [isChildCategory, setChildCategory] = useState(false);
  const [isParentHasChild, setParentChild] = useState(false);

  const [showColorPicker, setColorPicker] = useState(false);

  const refTextarea = React.createRef<any>();
  const refBtn = React.createRef<any>();
  const refForm = React.createRef<any>();

  useEffect(() => {
    refTextarea.current.style.background = colorValue;
  }, []);

  // basic func
  const submitHandler = e => {
    e.preventDefault();
    const value = textarea.value();
    if (value.trim()) {
      const data = {
        id: currentIdNote,
        text: value,
        tags: tagsArrNote,
        categories: categoryArrNote,
        color: colorValue,
      };
      addNote(data);
    }
    changeNoteInfo(false);
  };

  const onFocusFunc = () => {
    setShowTag(false);
    setShowInputTag(false);
    setColorPicker(false);
    setCategory(false);
  };

  const onPressEnter = e => {
    if (e.keyCode === 13) {
      e.preventDefault();
      refBtn.current.click();
      changeNoteInfo(false);
    } else if (e.keyCode === 27) {
      changeNoteInfo(false);
    }
  };

  const onKeyFunc = e => {
    if (e.keyCode === 27) {
      setShowTag(false);
      setColorPicker(false);
      setCategory(false);
      refTextarea.current.focus();
    }
  };

  const onBlurFunc = () => {
    setShowTag(false);
    setShowInputTag(false);
    setColorPicker(false);
    setCategory(false);
    setNeighboringCategory(false);
    setChildCategory(false);
    setParentChild(false);
  };

  // colorTheme func
  const onPressColor = () => {
    setColorPicker(true);
  };

  const clickColor = e => {
    const value = e.target.value;
    if (value === "") return;
    refTextarea.current.style.background = value;
    getColorValue(value);
    setColorPicker(false);
    e.target.value = "";
    refTextarea.current.focus();
  };

  // tags func
  const onPressTag = () => {
    setShowTag(true);
  };

  const clickTag = e => {
    const value = e.target.value;
    if (value === "") return;
    else if (value === "add") {
      setShowTag(false);
      setShowInputTag(true);
      return;
    }
    changeTag(value);
    addTagsArrOfNote(value);
    e.target.value = "";
    setShowTag(false);
    refTextarea.current.focus();
  };

  const submitHandlerTag = e => {
    if (e.keyCode === 13) {
      addTag(Date.now(), e.target.value);
      addTagsArrOfNote(e.target.value);
      setShowInputTag(false);
      changeTag(e.target.value);
      refTextarea.current.focus();
    }
    if (e.keyCode === 27) {
      setShowInputTag(false);
      refTextarea.current.focus();
    }
  };

  const delTag = id => {
    removeTagNoteInfo(id);
    refTextarea.current.focus();
  };

  // categories func
  const onPressCategory = () => {
    setCategory(true);
  };

  const clickCategory = e => {
    const value = e.target.value;
    if (value === "") return;
    setCategory(false);
    if (value === "category") setNeighboringCategory(true);
    if (value === "child") setChildCategory(true);
    if (value !== "" && value !== "category" && value !== "child") {
      const data = { categoryValue: value };
      addCategoryArrOfNote(data);
    }

    e.target.value = "";
    refTextarea.current.focus();
  };

  const clickParentCategory = e => {
    const value = e.target.value;
    if (value === "") return;
    getParentCategory(value);
    e.target.value = "";
    setChildCategory(false);
    setParentChild(true);
  };

  const submitCategory = e => {
    if (e.keyCode === 13) {
      const id = Date.now();
      const parent = null;
      const currentCategory = e.target.value;
      const data = {
        id,
        categoryValue: currentCategory,
        parent,
      };
      addCategory(data);
      addCategoryArrOfNote(data);
      e.target.value = "";
      setNeighboringCategory(false);
      refTextarea.current.focus();
    }
    if (e.keyCode === 27) {
      setNeighboringCategory(false);
      e.target.value = "";
      refTextarea.current.focus();
    }
  };

  const submitChildCategory = e => {
    if (e.keyCode === 13) {
      const id = Date.now();
      const data = {
        id,
        categoryValue: e.target.value,
      };
      addChildCategory(data);
      const dataCategoryArrOfNote = {
        id,
        categoryValue: e.target.value,
        parent: idParentCategory,
      };
      addCategoryArrOfNote(dataCategoryArrOfNote);
      setParentChild(false);
      refTextarea.current.focus();
    }
    if (e.keyCode === 27) {
      setParentChild(false);
      refTextarea.current.focus();
    }
  };

  const delCategory = id => {
    removeCategoryNoteInfo(id);
    refTextarea.current.focus();
  };

  const classes = useStyles();

  return (
    <Grid container className={classes.wrap}>
      <NoteForm
        refForm={refForm}
        tags={tags}
        showTag={showTag}
        showColorPicker={showColorPicker}
        showInputTag={showInputTag}
        clickTag={clickTag}
        refTextarea={refTextarea}
        refBtn={refBtn}
        textarea={textarea}
        onFocusFunc={onFocusFunc}
        onPressEnter={onPressEnter}
        onPressTag={onPressTag}
        onPressColor={onPressColor}
        onPressCategory={onPressCategory}
        submitHandler={submitHandler}
        onKeyFunc={onKeyFunc}
        submitHandlerTag={submitHandlerTag}
        onBlurFunc={onBlurFunc}
        clickColor={clickColor}
        colorArr={colorArr}
        showCategory={showCategory}
        clickCategory={clickCategory}
        category={category}
        isNeighboringCategory={isNeighboringCategory}
        submitCategory={submitCategory}
        isChildCategory={isChildCategory}
        clickParentCategory={clickParentCategory}
        isParentHasChild={isParentHasChild}
        submitChildCategory={submitChildCategory}
      />

      <ChoosedCharacteristics
        tagsArrNote={tagsArrNote}
        categoryArrNote={categoryArrNote}
        delTag={delTag}
        delCategory={delCategory}
      />
    </Grid>
  );
};

export default NoteInfoContainer;
