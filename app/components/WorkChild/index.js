/**
 *
 * WorkChild
 *
 */

import React, { memo } from 'react';
import { AddOutlined } from '@material-ui/icons';
import { Typography, Paper, Grid, Box, Button } from '@material-ui/core';
import { workChildStyles } from './style';
import CustomInput from '../Input';
import CustomCheckbox from '../Checkbox';
import CustomButton from '../Button';

function WorkChild() {
  const classes = workChildStyles();
  return (
    <Paper className={classes.paper} elevation={0}>
      <Grid container spacing={3} classes={classes.container}>
        <Grid item md={8}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <CustomInput
                label="Job Title"
                placeholder="e.g. Teacher"
                state="success"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <CustomInput
                label="Employer"
                placeholder="e.g. Teacher"
                defaultValue="Jacob"
                state="error"
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
            <Grid item xs={12} md={6}>
              <CustomInput
                label="State/Province"
                placeholder="e.g. Teacher"
                defaultValue="Mark"
                state="success"
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <CustomInput
                label="Start Date"
                placeholder="Select"
                state="success"
                type="date"
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <CustomInput
                label="End Date"
                placeholder="Select"
                state="success"
                type="date"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <CustomCheckbox label="I currently work here" />
            </Grid>
            <Grid item xs={12} md={6}>
              <CustomInput
                label="Work Details"
                placeholder="Description"
                multiline
                rows={9}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                overflow="auto"
                height={210}
                bgcolor="#f7f7f7"
                p={2}
                borderRadius={6}
              >
                <Paper className={classes.panel}>
                  <AddOutlined className={classes.success} />
                  <Typography variant="caption">
                    Added shopping cart, streaming video files and "Try Before
                    You Buy" service to promote games.
                  </Typography>
                </Paper>
                <Paper className={classes.panel}>
                  <AddOutlined className={classes.success} />
                  <Typography variant="caption">
                    Added shopping cart, streaming video files and "Try Before
                    You Buy" service to promote games.
                  </Typography>
                </Paper>
                <Paper className={classes.panel}>
                  <AddOutlined className={classes.success} />
                  <Typography variant="caption">
                    Added shopping cart, streaming video files and "Try Before
                    You Buy" service to promote games.
                  </Typography>
                </Paper>
                <Paper className={classes.panel}>
                  <AddOutlined className={classes.success} />
                  <Typography variant="caption">
                    Added shopping cart, streaming video files and "Try Before
                    You Buy" service to promote games.
                  </Typography>
                </Paper>
              </Box>
            </Grid>
          </Grid>
          <Grid item xs={12} style={{ marginTop: 32 }}>
            <Grid container justify="space-between" classes={classes.container}>
              <Grid xs={12} md={2} item>
                <Button variant="contained" color="default" fullWidth>
                  Back
                </Button>
              </Grid>
              <Grid xs={12} md={3} item>
                <Button variant="contained" color="default" fullWidth>
                  <AddOutlined />
                  Add work
                </Button>
              </Grid>
              <Grid xs={12} md={2} item>
                <CustomButton>Next step</CustomButton>
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

WorkChild.propTypes = {};

export default memo(WorkChild);
