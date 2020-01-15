import React from "react";
import clsx from "clsx";
import Grid from "@material-ui/core/Grid";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { FormattedMessage } from "react-intl";
import { AddNoteProps } from "../../ts-types/ts-types";

const useStyles = makeStyles((theme: Theme) => ({
  addNote: {
    position: "relative",
    borderBottom: "1px solid #ededed",
  },
  textarea: {
    fontFamily: '"Montserrat", sans-serif',
    fontSize: theme.spacing(2.5),
    padding: 0,
    paddingTop: theme.spacing(2),
    paddingLeft: theme.spacing(6.25),
    paddingBottom: theme.spacing(3),
    border: "none",
    background: "#ececec",
    width: "100%",
    boxSizing: "border-box",
    fontStyle: "italic",
    boxShadow: "inset 0 -2px 40px rgba(0, 0, 0, 0.03)",
    resize: "none",
    color: "transparent",
    textShadow: "0 0 0 black",
    cursor: "pointer",
  },
  icon: {
    position: "absolute",
    fontSize: theme.spacing(3),
    top: theme.spacing(3.75),
    transform: "translateY(-50%)",
    left: theme.spacing(2.5),
  },
}));

type Props = AddNoteProps;

const AddNote: React.FC<Props> = ({ clickItem }) => {
  const classes = useStyles();

  return (
    <Grid className={classes.addNote}>
      <i className={clsx(classes.icon, "fas fa-plus")} />
      <FormattedMessage
        id="addNotePlaceholder.text"
        defaultMessage="Default message"
      >
        {(placeholderText: string) => (
          <Grid
            className={classes.textarea}
            onClick={clickItem}
            component="input"
            placeholder={placeholderText}
          />
        )}
      </FormattedMessage>
    </Grid>
  );
};

export default AddNote;
