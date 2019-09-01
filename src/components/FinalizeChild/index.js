/**
 *
 * SummaryChild
 *
 */

import React, { memo } from "react";
import { Grid, Box, Typography, Paper, Button } from "@material-ui/core";
import { AddOutlined } from "@material-ui/icons";
import CustomInput from "../Input";
import { summaryChildStyles } from "./style";
import CustomButton from "../Button";
import { Link } from "react-router-dom";
import SearchList from "../SearchList/SearchList";

function SummaryChild() {
  const classes = summaryChildStyles();

  const handleSearchItemSelected = item => {
    console.log(item);
  };

  return (
    <Paper className={classes.paper} elevation={0}>
      <Grid container spacing={7}>
        <Grid item md={3}>
          <Grid item xs={12} className={classes.leftWrapper}>
            <div>
              <Button
                variant="contained"
                color="default"
                fullWidth
                style={{ marginTop: 32 }}
              >
                spell check
              </Button>
              <Button
                variant="contained"
                color="default"
                fullWidth
                style={{ marginTop: 32 }}
              >
                +add section
              </Button>
              <Button
                variant="contained"
                color="default"
                fullWidth
                style={{ marginTop: 32 }}
              >
                download
              </Button>
            </div>
            <Grid container justify="space-between" spacing={2}>
              <Grid xs={12} md={6} item>
                <Button
                  component={Link}
                  to="/skills"
                  variant="contained"
                  color="default"
                  fullWidth
                >
                  Back
                </Button>
              </Grid>
              <Grid xs={12} md={6} item>
                <CustomButton component={Link} to="/finalize">
                  Save
                </CustomButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={9}>
          <Box boxShadow={2} borderRadius={4}>
            <img
              src="https://via.placeholder.com/300x450"
              className={classes.img}
              alt="cv"
            />
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}

SummaryChild.propTypes = {};

export default memo(SummaryChild);
