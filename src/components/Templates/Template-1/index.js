import React, {Component} from 'react';
import {Box} from "@material-ui/core";

export default function Index(props) {
  const {theme, data, customColor} = props;

  return (
    <Box bgcolor={theme.mainColor} color={customColor}>
      {data.profile.firstName}, {data.profile.lastName}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </Box>
  );

}
