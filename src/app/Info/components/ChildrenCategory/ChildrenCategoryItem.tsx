import React from "react";
import clsx from "clsx";
import EditElement from "../EditElement/EditElement";
import Grid from "@material-ui/core/Grid";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { ChildrenCategoryItemProps } from "../../ts-types/ts-types";

const useStyles = makeStyles((theme: Theme) => ({
  category: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing(0.625, 1.25),
    border: "1px solid black",
    fontSize: theme.spacing(1.5),
    margin: theme.spacing(0, 2.5),
    position: "relative",
    marginBottom: theme.spacing(1.25),
    "&:before": {
      content: "=>",
      color: "black",
      position: "absolute",
      left: 0,
      bottom: 0,
      transform: "translator(-30px)",
    },
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

type Props = ChildrenCategoryItemProps;

const ChildrenCategoryItem: React.FC<Props> = ({
  getActiveFilterCategory,
  onEditCategory,
  isEditIcon,
  currentIdCategory,
  categoryValue,
  editCategoryItem,
  onBlurFunc,
  removeCategory,
  child,
}) => {
  const onClickEditCategory = () => {
    onEditCategory(child.id, child.categoryValue);
  };

  const onClickRemoveCategory = () => {
    removeCategory(child.id, child.categoryValue);
  };

  const classes = useStyles();

  return (
    <Grid onClick={getActiveFilterCategory} className={classes.category}>
      <i
        onClick={onClickEditCategory}
        className={clsx(classes.iconEdit, "fas fa-edit")}
      />
      {isEditIcon && currentIdCategory === child.id ? (
        <EditElement
          elementValue={categoryValue}
          id={child.id}
          addElement={editCategoryItem}
          onBlurFun={onBlurFunc}
        />
      ) : (
        child.categoryValue
      )}
      <i
        onClick={onClickRemoveCategory}
        className={clsx(classes.iconDel, "fas fa-times")}
      />
    </Grid>
  );
};

export default ChildrenCategoryItem;
