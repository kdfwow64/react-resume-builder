import React, {Component} from 'react';
import {finalizeChildStyles} from "./style";
import { Box } from "@material-ui/core";

export default function Index(props) {
  const { theme } = props;
  const classes = finalizeChildStyles();

  return (
    <Box className= { classes.container } color={theme.mainColor} >
        TEMPLATE 1
    </Box>
  );

}
