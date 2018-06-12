import React, {Component} from 'react';
import {Columns, Column, Title, Tile} from 'bloomer';
import LoginButton from './../containers/LoginButton';
import RegisterButton from './../containers/RegisterButton';

export default class LoginRegistration extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick() {}

  handleChange(e) {
    this.props.loginRegistration[e.target.name] = e.target.value;
    this.props.addLoginRegistrationStore(this.props.loginRegistration);
  }

  render() {
    return (
      <Tile>
        <div className="columns is-multiline">
          <div className="column is-12">
            <div className="title has-text-centered"> Login & Registration</div>
          </div>
          <div className="column is-12">
            <div className="field is-grouped is-grouped-centered">
              <p className="control">
                <input
                  className="input"
                  style={{height: 40}}
                  onChange={this.updateUserName.bind(this)}
                  value={this.props.userName}
                  placeholder="Nutzername"
                />
              </p>
              <p className="control">
                <input
                  className="input"
                  type="password"
                  style={{height: 40}}
                  onChange={this.updateUserPassword.bind(this)}
                  value={this.props.userPassword}
                  placeholder="Passwort"
                />
              </p>
            </div>

            <div className="field is-grouped is-grouped-centered">
              <div className="control">
                <LoginButton data={this.state} />
              </div>
              <div className="control">
                <RegisterButton data={this.state} />
              </div>
            </div>
          </div>
        </div>
      </Tile>
    );
  }
}
