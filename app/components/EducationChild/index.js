/**
 *
 * EducationChild
 *
 */

import React, { memo } from 'react';
import { Paper, Grid, Typography, Box, Button } from '@material-ui/core';
import { AddOutlined } from '@material-ui/icons';
import CustomInput from '../Input';
import CustomCheckbox from '../Checkbox';
import { educationChildStyles } from './style';
import CustomButton from '../Button';
function EducationChild() {
  const classes = educationChildStyles();
  return (
    <Paper className={classes.paper} elevation={0}>
      <Grid container spacing={3}>
        <Grid item md={8}>
          <Grid container spacing={3} className={classes.container}>
            <Grid item xs={12} md={6}>
              <CustomInput
                label="School Name"
                placeholder="e.g. Teacher"
                state="success"
                defaultValue="Tadi"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <CustomInput
                label="Degree"
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
              <CustomCheckbox label="I currently study here" checked />
            </Grid>
            <Grid item xs={12} md={6}>
              <CustomInput
                label="Study Details"
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
                    Professional development completed in [Subject]
                  </Typography>
                </Paper>
                <Paper className={classes.panel}>
                  <AddOutlined className={classes.success} />
                  <Typography variant="caption">
                    Professional development completed in [Subject]
                  </Typography>
                </Paper>
                <Paper className={classes.panel}>
                  <AddOutlined className={classes.success} />
                  <Typography variant="caption">
                    Professional development completed in [Subject]
                  </Typography>
                </Paper>
                <Paper className={classes.panel}>
                  <AddOutlined className={classes.success} />
                  <Typography variant="caption">
                    Professional development completed in [Subject]
                  </Typography>
                </Paper>
              </Box>
            </Grid>
          </Grid>
          <Grid item xs={12} style={{ marginTop: 32 }}>
            <Grid container justify="space-between">
              <Grid xs={12} md={2} item>
                <Button variant="contained" color="default" fullWidth>
                  Back
                </Button>
              </Grid>
              <Grid xs={12} md={3} item>
                <Button variant="contained" color="default" fullWidth>
                  <AddOutlined />
                  Add education
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

EducationChild.propTypes = {};

export default memo(EducationChild);
