/**
 *
 * HeadingChild
 *
 */

import React, { memo } from "react";
import { Grid, Box, Typography, Paper, Avatar } from "@material-ui/core";
import { homeChildStyles } from "./style";
import CustomButton from "../Button";
import { Link } from "react-router-dom";
import CV from "../../assets/cv.png";
import F1 from "../../assets/face1.png";
import F2 from "../../assets/face2.png";
import F3 from "../../assets/face3.png";
import { useSelector, useDispatch } from "react-redux";
import { AttachFile, FontDownload } from "@material-ui/icons";
import MenuAppBar from "../Appbar/Appbar";
import TextMobileStepper from "../Stepper";
import SwipeableTextMobileStepper from "../Stepper";
import Footer from "../Footer/Footer";

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
              <Typography className={classes.greenNumber} component="div">
                4
              </Typography>
              <Typography className={classes.blackName} component="div">
                Repeat
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={10} className={classes.container}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography
            className={[classes.title, classes.w60, classes.letterSpacing3]}
            variant="h4"
          >
            CHOSE THE RIGHT TEMPLATE FOR THE JOB
          </Typography>

          <Typography variant="caption">
            Recent Graduates to seasoned professional
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} md={5}>
        <SwipeableTextMobileStepper />
      </Grid>
      <Grid item xs={10} className={classes.container}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography
            className={[classes.w60, classes.letterSpacing3]}
            variant="h4"
          >
            Here is what the users got{" "}
          </Typography>
          <div>
            <Typography variant="caption" component="div">
              Got suggestions or comments ?
            </Typography>
            <Typography variant="caption" component="div">
              {" "}
              Please let us know.{" "}
            </Typography>
          </div>
        </Box>
      </Grid>
      <Grid item xs={12} md={10}>
        <Grid container spacing={10}>
          <Grid item xs={12} md={4}>
            <Paper elevation={11}>
              <Box p={4}>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  mb={3}
                  alignItems="center"
                >
                  <Box>
                    <Typography
                      variant="caption"
                      component="div"
                      className={classes.bold}
                    >
                      Stephan E.{" "}
                    </Typography>
                    <Typography
                      variant="caption"
                      component="div"
                      className={classes.muted}
                    >
                      College Student{" "}
                    </Typography>
                  </Box>
                  <Avatar src={F1} className={classes.avatar} />
                </Box>

                <Typography variant="caption" component="div">
                  "I wrote my first resume about 4 years ago, I got hired right
                  away. Changing careers meant a new updated resume. The sales
                  resume helped me land my new job."
                </Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={11}>
              <Box p={4}>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  mb={3}
                  alignItems="center"
                >
                  <Box>
                    <Typography
                      variant="caption"
                      component="div"
                      className={classes.bold}
                    >
                      Erica B.
                    </Typography>
                    <Typography
                      variant="caption"
                      component="div"
                      className={classes.muted}
                    >
                      {"PR & Communication"}
                    </Typography>
                  </Box>
                  <Avatar src={F2} className={classes.avatar} />
                </Box>

                <Typography variant="caption" component="div">
                  "Applying for jobs takes a lot of time. Resume.io helps me
                  manage my resume and create new ones for specific job
                  applications. It has saved me a lot time!"
                </Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={11}>
              <Box p={4}>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  mb={3}
                  alignItems="center"
                >
                  <Box>
                    <Typography
                      variant="caption"
                      component="div"
                      className={classes.bold}
                    >
                      Peter S.
                    </Typography>
                    <Typography
                      variant="caption"
                      component="div"
                      className={classes.muted}
                    >
                      Retail Manager
                    </Typography>
                  </Box>
                  <Avatar src={F3} className={classes.avatar} />
                </Box>

                <Typography variant="caption" component="div">
                  "I have never had a resume. In fact, I was clueless about how
                  to even build a resume. The easy process here helped me get a
                  resume without hassle."
                </Typography>
              </Box>
            </Paper>
          </Grid>
          <CustomButton className={classes.readmore}>read more</CustomButton>
        </Grid>
      </Grid>
      <Grid item xs={12} style={{ paddingBottom: 0 }}>
        <Footer />
      </Grid>
    </Grid>
  );
}

HomeChild.propTypes = {};

export default memo(HomeChild);
