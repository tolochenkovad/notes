import React from "react";
import clsx from "clsx";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";
import { ChoosedItemProps } from "../../../ts-types/ts-types";

type Props = ChoosedItemProps;

const ChoosedItem: React.FC<Props> = ({
  value,
  itemArr,
  removeFunc,
  classes,
  children,
}) => {
  let listClassBox = "";
  let itemClassBox = "";

  switch (value) {
    case "tag": {
      listClassBox = classes.tagsBox;
      itemClassBox = classes.choosedTag;
      break;
    }
    case "category": {
      listClassBox = classes.categoryBox;
      itemClassBox = classes.choosedCategory;
      break;
    }
    default:
      break;
  }

  const onClickRemove = item => {
    removeFunc(item.id);
  };

  return (
    <List className={listClassBox}>
      {itemArr.map(item => (
        <ListItem key={item.id} className={itemClassBox}>
          {children}
          <Typography variant="body2" className={classes.tagName}>
            {item[`${value}`]}
          </Typography>
          <i
            onClick={() => onClickRemove(item)}
            className={clsx(classes.iconDel, "fas fa-times")}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default ChoosedItem;
