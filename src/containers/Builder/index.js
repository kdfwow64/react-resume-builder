import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import Heading from "../Heading";
import { WorkHistory } from "../WorkHistory";
import { Skills } from "../Skills";
import { Summary } from "../Summary";
import { Finalize } from "../Finalize";
import { Edu } from "../Edu";
import MenuAppBar from '../../components/Appbar';
import { Grid, Paper, Box } from '@material-ui/core';
import { builderStyles } from './styles';
import HomePage from "../HomePage";

export default function Builder(props) {
    const classes = builderStyles();
    const {displayImage, component} = props;
  return (
    <Grid container justify='center' className={classes.main}>
        <Grid item xs={10} md={11}>
            <MenuAppBar />
            <Paper className={classes.paper} elevation={0}>
                <Grid container spacing={3}>
                    <Grid item md={displayImage ? 8 : 12}>
                        <Switch>
                            <Route exact path="/heading" component={component} />
                            <Route exact path="/work-history" component={WorkHistory} />
                            <Route exact path="/education" component={Edu} />
                            <Route exact path="/skills" component={Skills} />
                            <Route exact path="/summary" component={Summary} />
                            <Route exact path="/finalize" component={Finalize} />
                        </Switch>
                    </Grid>
                    <Grid item md={4} className={displayImage ? classes.visible : classes.hidden}>
                        <Box boxShadow={2} borderRadius={4}>
                            <img src='https://via.placeholder.com/300x450' className={classes.img} alt='cv' />
                        </Box>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    </Grid>
  );
}
