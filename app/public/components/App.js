import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Columns, Column } from "bloomer";
import QMenu from "./../containers/QMenu";
import Home from "./../containers/Home";
import Gamemode1 from "./../containers/Gamemode1";
import Gamemode2 from "./../containers/Gamemode2";
import Gamemode3 from "./../containers/Gamemode3";
import Gamemode4 from "./../containers/Gamemode4";
import Gamemode5 from "./../containers/Gamemode5";
import Gamemode6 from "./../containers/Gamemode6";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.props.checkAuth();
  }
  render() {
    return (
      <Router>
        <Columns>
          <Column isSize="1/4">
            <QMenu />
          </Column>
          <Route exact path="/" component={Home} />
          <Route path="/Gamemode1" component={Gamemode1} />
          <Route path="/Gamemode2" component={Gamemode2} />
          <Route path="/Gamemode3" component={Gamemode3} />
          <Route path="/Gamemode4" component={Gamemode4} />
          <Route path="/Gamemode5" component={Gamemode5} />
          <Route path="/Gamemode6" component={Gamemode6} />
        </Columns>
      </Router>
    );
  }
}
