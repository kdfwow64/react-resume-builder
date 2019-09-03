/**
 *
 * HeadingChild
 *
 */

import React, { memo, useState, useEffect } from "react";
import { Grid, Box, Typography, Paper } from "@material-ui/core";
import { headingChildStyles, homeChildStyles } from "./style";
import CustomButton from "../Button";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { AttachFile, FontDownload } from "@material-ui/icons";

function HomeChild() {
  const classes = homeChildStyles();
  return (
    <Grid container className={classes.container} spacing={6} justify="center">
      <Grid item xs={12} md={5}>
        <Box>
          <Box display="flex" alignItems="center">
            <AttachFile className={classes.icon} />
            <Typography
              variant="h5"
              className={[classes.title, , classes.letterSpacing3]}
            >
              No Writer's block
            </Typography>
          </Box>
          <Box>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse eu accumsan tellus, finibus sagittis ipsum. Proin nunc
              nisl, pharetra eu sapien consectetur, ultricies efficitur odio.
              Proin faucibus, ligula vel molestie elementum, odio ligula
              imperdiet purus, non ultrices mauris ex id tellus.
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} md={5}>
        <Box>
          <Box display="flex" alignItems="center">
            <FontDownload className={classes.icon} />
            <Typography
              variant="h5"
              className={[classes.title, classes.letterSpacing3]}
            >
              Build, edit, re-apply
            </Typography>
          </Box>
          <Box>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse eu accumsan tellus, finibus sagittis ipsum. Proin nunc
              nisl, pharetra eu sapien consectetur, ultricies efficitur odio.
              Proin faucibus, ligula vel molestie elementum, odio ligula
              imperdiet purus, non ultrices mauris ex id tellus.
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={10} className={classes.container}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography
            className={[classes.title, classes.w60, classes.letterSpacing3]}
            variant="h4"
          >
            Complete these easy steps, get hired fast
          </Typography>
          <CustomButton className={[classes.w20, classes.h40]}>
            Get started now
          </CustomButton>
        </Box>
      </Grid>
      <Grid item xs={10}>
        <Grid container spacing={10} justify="space-between">
          <Grid item xs={3}>
            <Paper elevation={11} className={classes.paper}>
              <Typography className={classes.greenNumber} component="div">
                1
              </Typography>
              <Typography className={classes.blackName} component="div">
                Login
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper elevation={11} className={classes.paper}>
              <Typography className={classes.greenNumber} component="div">
                2
              </Typography>
              <Typography className={classes.blackName} component="div">
                Build
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper elevation={11} className={classes.paper}>
              <Typography className={classes.greenNumber} component="div">
                3
              </Typography>
              <Typography className={classes.blackName} component="div">
                Print
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper elevation={11} className={classes.paper}>
              <Typography className={classes.blackName} component="div">
                4
              </Typography>
              <Typography className={classes.blackName} component="div">
                Login
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

HomeChild.propTypes = {};

export default memo(HomeChild);
