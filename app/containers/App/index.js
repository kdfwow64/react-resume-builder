import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Heading } from '../Heading';
import { WorkHistory } from '../WorkHistory';
import { Education } from '../Education';
import { Skills } from '../Skills';
import { Summary } from '../Summary';
import { Finalize } from '../Finalize';

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={Heading} />
      <Route exact path="/heading" component={Heading} />
      <Route exact path="/work-history" component={WorkHistory} />
      <Route exact path="/education" component={Education} />
      <Route exact path="/skills" component={Skills} />
      <Route exact path="/summary" component={Summary} />
      <Route exact path="/finalize" component={Finalize} />
    </Switch>
  );
}
