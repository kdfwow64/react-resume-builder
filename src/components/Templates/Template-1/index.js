import React, {Component} from 'react';
import {finalizeChildStyles} from "./style";
import { Box } from "@material-ui/core";

export default function Index(props) {
  const { theme, data, customColor } = props;
  const classes = finalizeChildStyles();

  return (
    <Box className= { classes.container } bgcolor={theme.mainColor} color={ customColor } >
        { data.profile.firstName } { data.profile.lastName }
    </Box>
  );

}
