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
import {appStyles} from "./styles";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header";

export default withRouter(function App(props) {
  const classes = appStyles();
  const displayImage = false;
  console.log(displayImage)
  return (
    <>
      <Grid container justify='center' className={classes.main}>
        <Grid item xs={12} md={12} className={classes.content}>
          <Header/>
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/heading" render={(props) => <Builder {...props} component={Heading}/>}/>
            <Route exact path="/work-history/:index?" render={(props) => <Builder {...props} component={WorkHistory}/>}/>
            <Route exact path="/education" render={(props) => <Builder {...props} component={Edu}/>}/>
            <Route exact path="/skills" render={(props) => <Builder {...props} component={Skills}/>}/>
            <Route exact path="/summary" render={(props) => <Builder {...props} component={Summary}/>}/>
            <Route exact path="/finalize" render={(props) => <Builder {...props} component={Finalize}/>}/>
          </Switch>
        </Grid>
      </Grid>
      <Footer/>
    </>
  );
})
