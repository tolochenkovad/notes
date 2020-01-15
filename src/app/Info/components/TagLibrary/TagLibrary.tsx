import React from "react";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import TagItem from "./TagItem";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { FormattedMessage } from "react-intl";
import { TagLibraryProps } from "../../ts-types/ts-types";

const useStyles = makeStyles((theme: Theme) => ({
  headline: {
    textAlign: "center",
    fontSize: theme.spacing(3.5),
    margin: theme.spacing(3, 0),
    fontWeight: 700,
  },
  tagsList: {
    margin: 0,
    padding: 0,
    listStyle: "none",
    display: "flex",
    flexWrap: "wrap",
  },
}));

type Props = TagLibraryProps;

const TagLibrary: React.FC<Props> = ({
  tags,
  getActiveFilterTag,
  onEditTag,
  isTagEdit,
  currentIdTag,
  tagValue,
  removeTag,
  addTag,
  onBlurFunc,
}) => {
  const classes = useStyles();

  return (
    <>
      <Typography variant="h2" className={classes.headline}>
        <FormattedMessage
          id="tagInfoComponent.title"
          defaultMessage="Default message"
        />
      </Typography>
      <List className={classes.tagsList}>
        {tags.map((tag, index) => (
          <TagItem
            getActiveFilterTag={getActiveFilterTag}
            onEditTag={onEditTag}
            isTagEdit={isTagEdit}
            currentIdTag={currentIdTag}
            tagValue={tagValue}
            addTag={addTag}
            onBlurFunc={onBlurFunc}
            removeTag={removeTag}
            key={index}
            tag={tag}
          />
        ))}
      </List>
    </>
  );
};

export default TagLibrary;
