import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Columns, Column } from 'bloomer'
import QMenu from './QMenu'
import Home from './Home'
import Mode2 from './Mode2'
import Mode3 from './Mode3'


import { Button } from 'bloomer'
import { connect } from 'react-redux';

class App extends Component {

  render(){
	  console.log(this.props.testStore)
    return (
      <Router>
        <Columns>
          <Column isSize='1/4'>
            <QMenu />
          </Column>
          <Route exact path="/" component={Home} />
          <Route path="/choose" component={Mode2} />
          <Route path="/split" component={Mode3} />
        </Columns>
      </Router>
    )
  }
}

export default connect(
	state => ({
		testStore: state
	}),
	dispatch => ({})
)(App);
