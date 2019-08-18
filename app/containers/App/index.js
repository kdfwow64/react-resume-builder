import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import MenuAppBar from 'components/Appbar';
import Tabs from 'components/Tabs';

const useStyles = makeStyles(theme => ({
  main: {
    backgroundColor: '#f7f7f7' || theme.palette.grey,
    minHeight: '100vh',
  },
}));
export default function App() {
  const classes = useStyles();
  return (
    <Grid container justify="center" className={classes.main}>
      <Grid item xs={10} md={11}>
        <MenuAppBar />
        <Tabs />
      </Grid>
    </Grid>
  );
}
