import React, {Component} from 'react';
import {Title, Tile, Column, Icon} from 'bloomer';
import AllWords from './../containers/AllWords';
import AddWord from './../containers/AddWord';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {userName, showModal, logout} = this.props;
    return !userName ? (
      <Tile hasTextAlign="centered" isChild>
        <Title>
          Login & Register {'  '}
          <Icon isAlign="right" onClick={showModal}>
            <span
              className="fa fa-address-card has-text-info"
              aria-hidden="true"
            />
          </Icon>
        </Title>
      </Tile>
    ) : (
      <Tile hasTextAlign="centered" isChild>
        <Title>
          Wilkommen {userName}! {'  '}
          <Icon isAlign="right" onClick={logout} title="Beenden">
            <span
              className="fa fa-sign-out has-text-primary"
              aria-hidden="true"
            />
          </Icon>
        </Title>

        <AllWords />
        <AddWord />
      </Tile>
    );
  }
}

export default Home;
