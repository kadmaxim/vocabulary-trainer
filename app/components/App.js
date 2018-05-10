import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Columns, Column } from 'bloomer'
import QMenu from './QMenu'
import Home from './Home'
import Mode2 from './Mode2'

class App extends Component {

  render(){
    return (
      <Router>
        <Columns>
          <Column isSize='1/4'>
            <QMenu />
          </Column>
          <Route exact path="/" component={Home} />
          <Route path="/choose" component={Mode2} />
        </Columns>
      </Router>
    )
  }
}

export default App;
