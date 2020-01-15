import React from "react";
import ChildrenCategory from "../ChildrenCategory/ChildrenCategory";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import CategoryItem from "./CategoryItem";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { FormattedMessage } from "react-intl";
import { CategoryLibraryProps } from "../../ts-types/ts-types";

const useStyles = makeStyles((theme: Theme) => ({
  headline: {
    textAlign: "center",
    fontSize: theme.spacing(3.5),
    margin: theme.spacing(4.5, 0),
    fontWeight: 700,
  },
  categoryList: {
    margin: 0,
    padding: 0,
    listStyle: "none",
  },
  item: {
    marginBottom: theme.spacing(4),
    padding: 0,
    display: "flex",
    alignItems: "flex-start",
    flexWrap: "nowrap",
    cursor: "pointer",
  },
}));

type Props = CategoryLibraryProps;

const CategoryLibrary: React.FC<Props> = ({
  tree,
  getActiveFilterCategory,
  onEditCategory,
  isEditIcon,
  currentIdCategory,
  categoryValue,
  editCategoryItem,
  onBlurFunc,
  removeCategory,
}) => {
  const classes = useStyles();

  return (
    <>
      <Typography variant="h3" className={classes.headline}>
        <FormattedMessage
          id="categoryInfoComponent.title"
          defaultMessage="Default message"
        />
      </Typography>
      <List className={classes.categoryList}>
        {tree.map(item =>
          item.children && item.parent === null ? (
            <ListItem className={classes.item} key={item.id}>
              <CategoryItem
                getActiveFilterCategory={getActiveFilterCategory}
                onEditCategory={onEditCategory}
                isEditIcon={isEditIcon}
                currentIdCategory={currentIdCategory}
                categoryValue={categoryValue}
                editCategoryItem={editCategoryItem}
                onBlurFunc={onBlurFunc}
                removeCategory={removeCategory}
                item={item}
              />
              <ChildrenCategory
                descendants={item.children}
                removeCategory={removeCategory}
                isEditIcon={isEditIcon}
                getActiveFilterCategory={getActiveFilterCategory}
                editCategoryItem={editCategoryItem}
                onBlurFunc={onBlurFunc}
                categoryValue={categoryValue}
                currentIdCategory={currentIdCategory}
                onEditCategory={onEditCategory}
              />
            </ListItem>
          ) : !item.children && item.parent === null ? (
            <ListItem className={classes.item} key={item.id}>
              <CategoryItem
                getActiveFilterCategory={getActiveFilterCategory}
                onEditCategory={onEditCategory}
                isEditIcon={isEditIcon}
                currentIdCategory={currentIdCategory}
                categoryValue={categoryValue}
                editCategoryItem={editCategoryItem}
                onBlurFunc={onBlurFunc}
                removeCategory={removeCategory}
                item={item}
              />
            </ListItem>
          ) : null
        )}
      </List>
    </>
  );
};

export default CategoryLibrary;
