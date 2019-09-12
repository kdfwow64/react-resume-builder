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
import { Grid } from "@material-ui/core";
import Button from "../Button";
import { Link } from "react-router-dom";
import CustomButton from "../Button";

const useStyles = makeStyles(theme => {
  return ({
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
  });
});

export default function Header(props) {
  const classes = useStyles();
  const { variant } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  function handleMenu(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <>
      <AppBar
        position="static"
        className={classes.bgGrey }
        elevation={0}
        color="default"
      >
        <Toolbar className={classes.root}>
          <Typography variant="h6" className={classes.title}>
            <Link to="/">RESUMATCHER</Link> <EditIcon className={classes.fontMd} />
          </Typography>
          <div className={variant === "home" && classes.flex1}>
            <div className={classes.displayRight}>
              <>
                {" "}
                <Typography variant="subtitle2" className={classes.fontHelp}>
                  FAQ
                </Typography>
                |
                <Avatar
                  alt="Remy Sharp"
                  src="https://material-ui.com/static/images/avatar/1.jpg"
                  className={classes.avatar}
                />
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <MoreIcon className={classes.colorGreen} />
                </IconButton>
              </>
            </div>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
}
