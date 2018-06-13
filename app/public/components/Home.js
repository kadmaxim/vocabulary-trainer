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
    return (
      <Tile hasTextAlign="centered" isChild>
        {!userName ? (
          <Title>
            Login & Register {'  '}
            <Icon isAlign="right" onClick={showModal}>
              <span className="fa fa-address-card" aria-hidden="true" />
            </Icon>
          </Title>
        ) : (
          <Title>
            Wilkommen {userName}! {'  '}
            <Icon isAlign="right" onClick={logout}>
              <span className="fa fa-sign-out" aria-hidden="true" />
            </Icon>
          </Title>
        )}
        <AllWords />
        <AddWord />
      </Tile>
    );
  }
}

export default Home;
