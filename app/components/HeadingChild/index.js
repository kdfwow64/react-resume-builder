/**
 *
 * HeadingChild
 *
 */

import React, { memo } from 'react';
import { Paper, Grid, Box, Typography, Button } from '@material-ui/core';
import { Person } from '@material-ui/icons';
import { headingChildStyles } from './style';
import CustomInput from '../Input';
import CustomButton from '../Button';

function HeadingChild() {
  const classes = headingChildStyles();
  return (
    <Paper className={classes.paper} elevation={0}>
      <Grid container spacing={3}>
        <Grid item md={8}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Box display="flex" alignItems="center">
                <Box
                  borderRadius={4}
                  bgcolor="#f7f7f7"
                  width={80}
                  height={80}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  mr={1}
                >
                  <Person className={classes.person} />
                </Box>
                <Typography variant="caption">Upload photo</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <CustomInput
                label="Job Title"
                placeholder="e.g. Teacher"
                state="loading"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <CustomInput
                label="First Name"
                placeholder="e.g. Teacher"
                defaultValue="Jacob"
                state="success"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <CustomInput
                label="Last Name"
                placeholder="e.g. Teacher"
                defaultValue="Mark"
                state="success"
              />
            </Grid>
            <Grid item xs={12}>
              <CustomInput
                label="Street Address"
                placeholder="e.g. Teacher"
                defaultValue="Mark"
                state="success"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <CustomInput
                label="City"
                placeholder="e.g. Teacher"
                defaultValue="Mark"
                state="success"
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <CustomInput
                label="State/Province"
                placeholder="e.g. Teacher"
                defaultValue="Mark"
                state="success"
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <CustomInput
                label="ZIP Code"
                placeholder="e.g. Teacher"
                defaultValue="Mark"
                state="success"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <CustomInput
                label="Phone"
                placeholder="e.g. Teacher"
                defaultValue="Mark"
                state="success"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <CustomInput
                label="Email"
                placeholder="e.g. Teacher"
                defaultValue="Mark"
                state="success"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <CustomInput
                label="Website"
                placeholder="e.g. Teacher"
                defaultValue="Mark"
                state="success"
              />
            </Grid>

            <Grid item xs={12} style={{ marginTop: 32 }}>
              <Grid container justify="space-between">
                <Grid xs={12} md={2} item>
                  <Button variant="contained" color="default" fullWidth>
                    Back
                  </Button>
                </Grid>

                <Grid xs={12} md={2} item>
                  <CustomButton>Next step</CustomButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={4}>
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

HeadingChild.propTypes = {};

export default memo(HeadingChild);
