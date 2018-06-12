import React, {Component} from 'react';
import {Title, Tile, Column, Icon} from 'bloomer';
import AllWords from './../containers/AllWords';
import AddWord from './../containers/AddWord';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Tile hasTextAlign="centered" isChild>
        <Title>
          Wilkommen!
          <Icon isAlign="right" onClick={this.props.showModal}>
            <span className="fa fa-address-card" aria-hidden="true" />
          </Icon>
        </Title>

        <AllWords />
        <AddWord />
      </Tile>
    );
  }
}

export default Home;
