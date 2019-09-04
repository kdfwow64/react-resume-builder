/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from "react";
import { Grid } from "@material-ui/core";
import { headingStyles } from "./styles";
import HomeChild from "../../components/HomeChild";

export default function HomePage() {
  const classes = headingStyles();
  return (
    <Grid container justify="center" className={classes.main}>
      <Grid item xs={10} md={12}>
        <HomeChild />
      </Grid>
    </Grid>
  );
}
