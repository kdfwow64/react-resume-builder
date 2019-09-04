/**
 *
 * HeadingChild
 *
 */

import React, { memo } from "react";
import { Grid, Box, Typography, Paper } from "@material-ui/core";
import { homeChildStyles } from "./style";
import CustomButton from "../Button";
import { Link } from "react-router-dom";
import CV from "../../assets/cv.png";
import { useSelector, useDispatch } from "react-redux";
import { AttachFile, FontDownload } from "@material-ui/icons";
import MenuAppBar from "../Appbar/Appbar";

function HomeChild() {
  const classes = homeChildStyles();
  return (
    <Grid container spacing={6} justify="center">
      <Grid item xs={12}>
        <MenuAppBar variant="home" />
      </Grid>
      <Grid item md={11}>
        <Grid container justify="space-between" alignItems="center">
          <Grid item md={6}>
            <Typography
              className={[classes.title, classes.letterSpacing3]}
              variant="h4"
            >
              Crowdsource your resume building
            </Typography>
            <Typography className={[classes.container]}>
              Everyone using this site draws on a global database of current,
              crowdsourced resume data (not the actual resume) to create a
              personalized, easily editable resume. In turn, you are sharing
              your resume content (minus your contacts/personal info) to further
              update and improve the database.
            </Typography>
            <Box ml={7}>
              <CustomButton
                style={{ width: 250 }}
                className={classes.container}
              >
                build your resume
              </CustomButton>
              <Typography className={classes.mt3}>
                Sign-up FREE. No Credit Card Required.
              </Typography>
            </Box>
          </Grid>
          <Grid item md={5}>
            <img src={CV} style={{ height: 740, width: "100%" }} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={10} className={classes.container}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography
            className={[classes.title, classes.w60, classes.letterSpacing3]}
            variant="h4"
          >
            BUILD YOUR RESUME IN MINUTES, EDIT IN SECONDS, APPLY ASAP
          </Typography>
          <Typography variant="caption">
            Community driven resume builder{" "}
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} md={5}>
        <Box>
          <Box display="flex" alignItems="center">
            <AttachFile className={classes.icon} />
            <Typography
              variant="h5"
              className={[classes.title, classes.letterSpacing3]}
            >
              Free{" "}
            </Typography>
          </Box>
          <Box>
            <Typography>
              There is no hidden charges or "Premium" accounts. It is absolutely
              free, no Credit Card required.
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} md={5}>
        <Box>
          <Box display="flex" alignItems="center">
            <AttachFile className={classes.icon} />
            <Typography
              variant="h5"
              className={[classes.title, classes.letterSpacing3]}
            >
              CROWDSOURCED CONTENT{" "}
            </Typography>
          </Box>
          <Box>
            <Typography>
              Everyone who uses the site shares their resume content to help
              themselves and others to build the resumes that can't be ignored
              by recruiters.
            </Typography>
          </Box>
        </Box>
      </Grid>

      <Grid item xs={12} md={5}>
        <Box>
          <Box display="flex" alignItems="center">
            <AttachFile className={classes.icon} />
            <Typography
              variant="h5"
              className={[classes.title, classes.letterSpacing3]}
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
          <CustomButton
            className={[classes.w20, classes.h40]}
            component={Link}
            to="/heading"
          >
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
