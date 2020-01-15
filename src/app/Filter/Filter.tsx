import React from "react";
import clsx from "clsx";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { FormattedMessage } from "react-intl";
import { FilterProps } from "./ts-types";

const useStyles = makeStyles((theme: Theme) => ({
  filter: {
    marginBottom: theme.spacing(3.75),
    justifyContent: "flex-start",
    width: "100%",
  },
  search: {
    padding: theme.spacing(1.25),
    width: "100%",
  },
  tag: {
    fontSize: theme.spacing(1.5),
    padding: theme.spacing(0.625, 1.875),
    background: "#978989a1",
    borderRadius: theme.spacing(1.875),
    marginRight: theme.spacing(2.5),
  },
  iconDel: {
    marginLeft: theme.spacing(1.25),
    cursor: "pointer",
  },
  text: {
    fontSize: theme.spacing(1.5),
    padding: theme.spacing(0.625, 1.875),
    border: "1px solid black",
    marginRight: theme.spacing(2.5),
  },
}));

type Props = FilterProps;

const Filter: React.FC<Props> = ({
  activeTag,
  activeCategory,
  searchValue,
  getActiveTag,
  getSearchValue,
  getActiveCategory,
}) => {
  const classes = useStyles();

  const onSubmitForm = e => {
    e.preventDefault();
  };

  const onChangeSeacrhValue = e => {
    getSearchValue(e.target.value);
  };

  const onClickTag = () => {
    getActiveTag("");
  };

  const onClickCategory = () => {
    getActiveCategory("");
  };

  return (
    <>
      {activeTag === "" && activeCategory === "" ? (
        <FormControl
          component="form"
          className={classes.filter}
          onSubmit={onSubmitForm}
        >
          <FormattedMessage
            id="filterPlaceholder.text"
            defaultMessage="Default message"
          >
            {(placeholderText: string) => (
              <TextField
                type="text"
                value={searchValue}
                onChange={onChangeSeacrhValue}
                className={classes.search}
                placeholder={placeholderText}
              />
            )}
          </FormattedMessage>
        </FormControl>
      ) : (
        <Grid container className={classes.filter}>
          {activeTag !== "" ? (
            <Grid item className={classes.tag}>
              {activeTag}
              <i
                onClick={onClickTag}
                className={clsx(classes.iconDel, "fas fa-times")}
              />
            </Grid>
          ) : null}
          {activeCategory !== "" ? (
            <Grid item className={classes.text}>
              {activeCategory}
              <i
                onClick={onClickCategory}
                className={clsx(classes.iconDel, "fas fa-times")}
              />
            </Grid>
          ) : null}
        </Grid>
      )}
    </>
  );
};

export default Filter;
