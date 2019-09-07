import React from "react";
import {Switch, Route, Router, withRouter} from "react-router-dom";
import Builder from "../Builder";
import Heading from "../Heading";
import {WorkHistory} from "../WorkHistory";
import {Skills} from "../Skills";
import {Summary} from "../Summary";
import {Finalize} from "../Finalize";
import {Edu} from "../Edu";
import HomePage from "../HomePage";
import MenuAppBar from "../../components/Appbar/Appbar";
import {Box, Grid, Paper} from "@material-ui/core";
import {builderStyles} from "../Builder/styles";

export default withRouter(function App(props) {
  const classes = builderStyles();
  const displayImage = props.location.pathname !== "/finalize";
  console.log(displayImage)
  return (
    <Switch>
      <Route exact path="/" component={HomePage}/>
      <Grid item xs={10} md={11}>
        <MenuAppBar/>
        <Paper className={classes.paper} elevation={0}>
          <Grid container spacing={3}>
            <Grid item md={displayImage ? 8 : 12}>
              <Switch>
                <Route exact path="/heading" render={(props) => <Builder {...props} component={Heading}/>}/>
                <Route exact path="/work-history" render={(props) => <Builder {...props} component={WorkHistory}/>}/>
                <Route exact path="/education" render={(props) => <Builder {...props} component={Edu}/>}/>
                <Route exact path="/skills" render={(props) => <Builder {...props} component={Skills}/>}/>
                <Route exact path="/summary" render={(props) => <Builder {...props} component={Summary}/>}/>
                <Route exact path="/finalize" render={(props) => <Builder {...props} component={Finalize}/>}/>
              </Switch>
            </Grid>
            <Grid item md={4} className={displayImage ? classes.visible : classes.hidden}>
              <Box boxShadow={2} borderRadius={4}>
                <img src='https://via.placeholder.com/300x450' className={classes.img} alt='cv'/>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Switch>
  );
})
