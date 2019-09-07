import React from "react";
import {Switch, Route, Router} from "react-router-dom";
import Heading from "../Heading";
import {WorkHistory} from "../WorkHistory";
import {Skills} from "../Skills";
import {Summary} from "../Summary";
import {Finalize} from "../Finalize";
import {Edu} from "../Edu";
import MenuAppBar from '../../components/Appbar';
import {Grid, Paper, Box} from '@material-ui/core';
import HomePage from "../HomePage";

export default function Builder(props) {
  const {displayImage} = props;
  return (
    <Grid item md={displayImage ? 8 : 12}>
      <Switch>
        <Route exact path="/heading" component={Heading}/>
        <Route exact path="/work-history" component={WorkHistory}/>
        <Route exact path="/education" component={Edu}/>
        <Route exact path="/skills" component={Skills}/>
        <Route exact path="/summary" component={Summary}/>
        <Route exact path="/finalize" component={Finalize}/>
      </Switch>
    </Grid>
  );
}
