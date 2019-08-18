import React from 'react';
import { teal } from '@material-ui/core/colors';
import { withStyles, Checkbox, FormControlLabel } from '@material-ui/core';

const TealCheckbox = withStyles({
  root: {
    color: teal[400],
    '&$checked': {
      color: teal[600],
    },
  },
  checked: {},
})(props => <Checkbox color="default" {...props} />);
const CustomCheckbox = props => {
  const { label, handleChange, checked, value } = props;
  return (
    <FormControlLabel
      control={
        <TealCheckbox checked={checked} onChange={handleChange} value={value} />
      }
      label={label}
    />
  );
};
export default CustomCheckbox;
