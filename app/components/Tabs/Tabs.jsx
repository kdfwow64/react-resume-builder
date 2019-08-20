import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Paper, makeStyles, Box } from '@material-ui/core';
import Button from '../Button';
import Content from '../Content';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: 12,
    marginTop: 16,
    marginBottom: 32,
  },
  img: {
    width: '100%',
    height: '100%',
    borderRadius: 4,
  },
}));
const Tabs = props => {
  const classes = useStyles();
  const { variant } = props;
  function handleVariant(variant) {
    setVariant(variant);
  }
  return (
    <>
      <Grid
        container
        justify="space-between"
        style={{ paddingLeft: 78, paddingRight: 78 }}
        spacing={2}
      >
        <Grid item xs>
          <Button component={Link} to="/heading">
            1.Heading
          </Button>
        </Grid>
        <Grid item xs>
          <Button component={Link} to="/work-history">
            2.Work History
          </Button>
        </Grid>
        <Grid item xs>
          <Button component={Link} to="/education">
            3.Education
          </Button>
        </Grid>
        <Grid item xs>
          <Button component={Link} to="/skills">
            4.Skills
          </Button>
        </Grid>
        <Grid item xs>
          <Button component={Link} to="/summary">
            5.Summary
          </Button>
        </Grid>
        <Grid item xs>
          <Button component={Link} to="/finalize">
            5.Finalize
          </Button>
        </Grid>
      </Grid>
      <Paper className={classes.paper} elevation={0}>
        <Grid container spacing={3}>
          <Grid item md={8}>
            <Content variant={variant} />
          </Grid>
          <Grid item md={4}>
            <Box boxShadow={2} borderRadius={4}>
              <img
                src="https://via.placeholder.com/300x450"
                className={classes.img}
              />
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default Tabs;
