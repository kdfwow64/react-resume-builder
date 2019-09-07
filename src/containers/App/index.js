import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import Builder from "../Builder";
import Heading from "../Heading";
import { WorkHistory } from "../WorkHistory";
import { Skills } from "../Skills";
import { Summary } from "../Summary";
import { Finalize } from "../Finalize";
import { Edu } from "../Edu";
import HomePage from "../HomePage";

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/heading" render={ (props) => <Builder {...props} displayImage={true} component={Heading} ></Builder> } />
      <Route exact path="/work-history" render={ (props) => <Builder {...props} displayImage={true} component={WorkHistory} ></Builder> } />
      <Route exact path="/education" render={ (props) => <Builder {...props} displayImage={true} component={Edu} ></Builder> } />
      <Route exact path="/skills" render={ (props) => <Builder {...props} displayImage={true} component={Skills} ></Builder> } />
      <Route exact path="/summary" render={ (props) => <Builder {...props} displayImage={true} component={Summary} ></Builder> } />
      <Route exact path="/finalize" render={ (props) => <Builder {...props} displayImage={false} component={Finalize} ></Builder> } />
    </Switch>
  );
}
