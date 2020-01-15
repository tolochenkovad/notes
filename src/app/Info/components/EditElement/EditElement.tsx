import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { EditItemProps } from "../../ts-types/ts-types";

const useStyles = makeStyles((theme: Theme) => ({
  input: {
    background: "transparent",
    border: "none",
    outline: "none",
  },
}));

type Props = EditItemProps;

const EditElement: React.FC<Props> = ({
  elementValue,
  onBlurFun,
  addElement,
  id,
}) => {
  const [valueEl, setEl] = useState(elementValue);

  const onBlurEdit = () => {
    onBlurFun();
    addElement(id, valueEl);
  };

  const onPressEnter = e => {
    if (e.keyCode === 13 || e.keyCode === 27) {
      e.preventDefault();
      onBlurFun();
      addElement(id, valueEl);
    }
  };

  const handleChange = e => {
    setEl(e.target.value);
  };

  const classes = useStyles();

  return (
    <TextField
      className={classes.input}
      InputProps={{ disableUnderline: true }}
      type="text"
      autoFocus
      value={valueEl}
      onKeyDown={onPressEnter}
      onChange={e => handleChange(e)}
      onBlur={onBlurEdit}
    />
  );
};

export default EditElement;
