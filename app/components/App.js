import React, { Component } from 'react'
import { BrowserRouter as Route } from "react-router-dom"
import { Columns, Column, Title } from 'bloomer'
import QMenu from './QMenu'
import Mode2 from './Mode2'

const Home = () => (
    <h1>Welkome!</h1>
)

class App extends Component {

  render(){
    return (
      <Columns>
        <Column isSize='1/4'>
          <QMenu />
        </Column>
        <Mode2 />
        <Route path="/" component={Home} />
        <Route path="/choose" component={Mode2} />
      </Columns>
    )
  }
}

export default App;
