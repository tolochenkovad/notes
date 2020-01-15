import React from "react";
import Grid from "@material-ui/core/Grid";
import ChildrenCategoryItem from "./ChildrenCategoryItem";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { ChildrenCategoryProps } from "../../ts-types/ts-types";

const useStyles = makeStyles((theme: Theme) => ({
  childBox: {
    marginBottom: theme.spacing(1.25),
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  childWrap: {
    display: "flex",
  },
}));

type Props = ChildrenCategoryProps;

const ChildrenCategory: React.FC<Props> = ({
  descendants,
  removeCategory,
  isEditIcon,
  editCategoryItem,
  onEditCategory,
  categoryValue,
  onBlurFunc,
  currentIdCategory,
  getActiveFilterCategory,
}) => {
  const classes = useStyles();

  return (
    <Grid className={classes.childBox}>
      {descendants.map(child =>
        child.children ? (
          <Grid className={classes.childWrap} key={child.id}>
            <ChildrenCategoryItem
              getActiveFilterCategory={getActiveFilterCategory}
              onEditCategory={onEditCategory}
              isEditIcon={isEditIcon}
              currentIdCategory={currentIdCategory}
              categoryValue={categoryValue}
              editCategoryItem={editCategoryItem}
              onBlurFunc={onBlurFunc}
              removeCategory={removeCategory}
              child={child}
            />
            {child.children && (
              <ChildrenCategory
                descendants={child.children}
                removeCategory={removeCategory}
                isEditIcon={isEditIcon}
                editCategoryItem={editCategoryItem}
                onBlurFunc={onBlurFunc}
                categoryValue={categoryValue}
                getActiveFilterCategory={getActiveFilterCategory}
                currentIdCategory={currentIdCategory}
                onEditCategory={onEditCategory}
              />
            )}
          </Grid>
        ) : (
          <ChildrenCategoryItem
            getActiveFilterCategory={getActiveFilterCategory}
            onEditCategory={onEditCategory}
            isEditIcon={isEditIcon}
            currentIdCategory={currentIdCategory}
            categoryValue={categoryValue}
            editCategoryItem={editCategoryItem}
            onBlurFunc={onBlurFunc}
            removeCategory={removeCategory}
            child={child}
            key={child.id}
          />
        )
      )}
    </Grid>
  );
};

export default ChildrenCategory;
