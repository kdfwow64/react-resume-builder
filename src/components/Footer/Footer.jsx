import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Avatar from "@material-ui/core/Avatar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import MoreIcon from "@material-ui/icons/ExpandMore";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { Grid, Box } from "@material-ui/core";
import Button from "../Button";
import { Link } from "react-router-dom";
import CustomButton from "../Button";
import Facebook from "../../assets/facebook.png";
import Twitter from "../../assets/twitter.png";

const useStyles = makeStyles(theme => ({
  bgGrey: {
    backgroundColor: "#f7f7f7"
  },
  bgBlack: {
    backgroundColor: "#262626"
  },
  bold: {
    fontWeight: "bold"
  },
  icon: {
    width: 32,
    height: 32,
    marginRight: 16
  },
  grey: {
    color: "#959595",
    fontSize: 12
  },
  marginvertical: {
    marginTop: 16,
    marginBottom: 16
  },
  marginBottom2: {
    marginBottom: 32
  }
}));

export default function Footer(props) {
  const classes = useStyles();

  return (
    <>
      <Box bgcolor="#E0E0E0" height={300} display="flex" alignItems="center">
        <Grid container justify="center">
          <Grid item md={9} style={{ paddingBottom: 0 }}>
            <Grid container spacing={10}>
              <Grid item md={3} style={{ paddingBottom: 0 }}>
                <Typography
                  className={[classes.bold, classes.marginBottom2]}
                  component="div"
                >
                  POPULAR LINKS
                </Typography>
                <Typography
                  className={[classes.marginvertical]}
                  component="div"
                  variant="caption"
                >
                  Help Center
                </Typography>
                <Typography
                  className={[classes.marginvertical]}
                  component="div"
                  variant="caption"
                >
                  Blogs
                </Typography>
                <Typography
                  className={[classes.marginvertical]}
                  component="div"
                  variant="caption"
                >
                  Reviews
                </Typography>
              </Grid>

              <Grid item md={3} style={{ paddingBottom: 0 }}>
                <Typography
                  className={[classes.bold, classes.marginBottom2]}
                  component="div"
                >
                  TOP RESOURCES
                </Typography>
                <Typography
                  className={[classes.marginvertical]}
                  component="div"
                  variant="caption"
                >
                  Resume Book{" "}
                </Typography>
                <Typography
                  className={[classes.marginvertical]}
                  component="div"
                  variant="caption"
                >
                  CV Writing
                </Typography>
                <Typography
                  className={[classes.marginvertical]}
                  component="div"
                  variant="caption"
                >
                  CV Formatting
                </Typography>
              </Grid>

              <Grid item md={3} style={{ paddingBottom: 0 }}>
                <Typography
                  className={[classes.bold, classes.marginBottom2]}
                  component="div"
                >
                  POPULAR CONTENT
                </Typography>
                <Typography
                  className={[classes.marginvertical]}
                  component="div"
                  variant="caption"
                >
                  Resume Guide
                </Typography>
                <Typography
                  className={[classes.marginvertical]}
                  component="div"
                  variant="caption"
                >
                  Better Job
                </Typography>
                <Typography
                  className={[classes.marginvertical]}
                  component="div"
                  variant="caption"
                >
                  Success Stories
                </Typography>
              </Grid>

              <Grid item md={3} style={{ paddingBottom: 0 }}>
                <Typography
                  className={[classes.bold, classes.marginBottom2]}
                  component="div"
                >
                  OUR COMPANY
                </Typography>
                <Typography
                  className={[classes.marginvertical]}
                  component="div"
                  variant="caption"
                >
                  About us
                </Typography>
                <Typography
                  className={[classes.marginvertical]}
                  component="div"
                  variant="caption"
                >
                  Affiliate Programs
                </Typography>
                <Typography
                  className={[classes.marginvertical]}
                  component="div"
                  variant="caption"
                >
                  Contact
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Grid container className={classes.bgBlack} justify="center">
        <Grid item xs={12} md={9}>
          <Box
            height={100}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <div />
            <Typography className={classes.grey}>
              © 2019 CREATE RESUME | All rights reserved{" "}
            </Typography>
            <Box>
              <img src={Facebook} className={classes.icon} />
              <img src={Twitter} className={classes.icon} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
