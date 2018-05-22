import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Columns, Column } from 'bloomer';
import QMenu from './QMenu';
import Home from './Home';
import Mode2 from './../containers/Mode2';
import Mode3 from './../containers/Mode3';

export default function App(props) {
  return (
    <Router>
      <Columns>
        <Column isSize="1/4">
          <QMenu />
        </Column>
        <Route exact path="/" component={Home} />
        <Route path="/choose" component={Mode2} />
        <Route path="/split" component={Mode3} />
      </Columns>
    </Router>
  );
}
