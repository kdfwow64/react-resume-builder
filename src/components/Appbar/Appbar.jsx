import React, {useState} from "react";
import {useSelector, useDispatch} from 'react-redux';
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
import { Grid } from "@material-ui/core";
import Button from "../Button";
import { Link } from "react-router-dom";
import CustomButton from "../Button";

const useStyles = makeStyles(theme => ({
  bgTrans: {
    backgroundColor: "transparent"
  },
  bgGrey: {
    backgroundColor: "#f7f7f7"
  },
  fontMd: {
    fontSize: 16
  },
  flex1: {
    flex: 1
  },
  fontHelp: {
    marginRight: 32,
    marginLeft: 32,
    fontWeight: "bold"
  },
  avatar: {
    marginLeft: 32
  },
  bold: {
    fontWeight: "bold"
  },
  displayRight: {
    display: "flex",
    alignItems: "center"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    fontSize: 14,
    fontWeight: "bold",
    display: "flex",
    alignItems: "center"
  },
  colorGreen: {
    color: "#13806c"
  },
  root: {
    flexWrap: "wrap"
  }
}));

export default function MenuAppBar(props) {
  const classes = useStyles();
  const { variant } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const query = useSelector(state => state);
  const {templateKey} = query;

  function handleMenu(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
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
        <Button component={Link} to={ "/finalize?template=" + templateKey} >
          5.Finalize
        </Button>
      </Grid>
    </Grid>
  );
}
