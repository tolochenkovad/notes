import React from "react";
import EditElement from "../EditElement/EditElement";
import clsx from "clsx";
import ListItem from "@material-ui/core/ListItem";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { TagItemProps } from "../../ts-types/ts-types";

const useStyles = makeStyles((theme: Theme) => ({
  tag: {
    marginRight: theme.spacing(2.5),
    marginTop: theme.spacing(1.875),
    padding: theme.spacing(0.625, 1.25),
    background: "#baa4a4",
    borderRadius: theme.spacing(1.875),
    cursor: "pointer",
    width: "auto",
    "&:hover": {
      background: "white",
    },
  },
  iconDel: {
    marginLeft: theme.spacing(1.25),
    cursor: "pointer",
  },
  iconEdit: {
    marginRight: theme.spacing(1.25),
    cursor: "pointer",
  },
}));

type Props = TagItemProps;

const TagItem: React.FC<Props> = ({
  getActiveFilterTag,
  onEditTag,
  tag,
  isTagEdit,
  currentIdTag,
  tagValue,
  addTag,
  onBlurFunc,
  removeTag,
}) => {
  const onClickEditTag = () => {
    onEditTag(tag.id, tag.tag);
  };

  const onClickRemoveTag = () => {
    removeTag(tag.id, tag.tag);
  };

  const classes = useStyles();

  return (
    <ListItem onClick={getActiveFilterTag} className={classes.tag}>
      <i
        onClick={onClickEditTag}
        className={clsx(classes.iconEdit, "fas fa-edit")}
      />
      {isTagEdit && currentIdTag === tag.id ? (
        <EditElement
          elementValue={tagValue}
          id={tag.id}
          addElement={addTag}
          onBlurFun={onBlurFunc}
        />
      ) : (
        tag.tag
      )}
      <i
        onClick={onClickRemoveTag}
        className={clsx(classes.iconDel, "fas fa-times")}
      />
    </ListItem>
  );
};

export default TagItem;
