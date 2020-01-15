import React from "react";
import clsx from "clsx";
import EditElement from "../EditElement/EditElement";
import Grid from "@material-ui/core/Grid";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { CategoryItemProps } from "../../ts-types/ts-types";

const useStyles = makeStyles((theme: Theme) => ({
  category: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing(0.625, 1.25),
    border: "1px solid black",
    marginRight: theme.spacing(2.5),
    fontSize: theme.spacing(1.5),
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

type Props = CategoryItemProps;

const CategoryItem: React.FC<Props> = ({
  getActiveFilterCategory,
  onEditCategory,
  isEditIcon,
  currentIdCategory,
  categoryValue,
  editCategoryItem,
  onBlurFunc,
  removeCategory,
  item,
}) => {
  const onClickEditCategory = () => {
    onEditCategory(item.id, item.categoryValue);
  };

  const onClickRemoveCategory = () => {
    removeCategory(item.id, item.categoryValue);
  };

  const classes = useStyles();

  return (
    <Grid onClick={getActiveFilterCategory} className={classes.category}>
      <i
        onClick={onClickEditCategory}
        className={clsx(classes.iconEdit, "fas fa-edit")}
      />
      {isEditIcon && currentIdCategory === item.id ? (
        <EditElement
          elementValue={categoryValue}
          id={item.id}
          addElement={editCategoryItem}
          onBlurFun={onBlurFunc}
        />
      ) : (
        item.categoryValue
      )}

      <i
        onClick={onClickRemoveCategory}
        className={clsx(classes.iconDel, "fas fa-times")}
      />
    </Grid>
  );
};

export default CategoryItem;
