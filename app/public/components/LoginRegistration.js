import React, {Component} from 'react';
import {Columns, Column, Title, Tile} from 'bloomer';

class LoginRegistration extends Component {
    constructor() {
        super();

    };

    login() {
        console.log("Login");
        console.log(document.getElementById("userName").value + " " + document.getElementById("userPassword").value)
    }

    register() {
        console.log("Registrieren")
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
                                <input className="input" id="userName"
                                       style={{height: 40}}
                                       placeholder="Nutzername"
                                />
                            </p>
                            <p className="control">
                                <input className="input" type="password" id="userPassword"
                                       style={{height: 40}}
                                       placeholder="Passwort"
                                />
                            </p>
                        </div>

                        <div className="field is-grouped is-grouped-centered">
                            <p className="control">
                                <a className="button" onClick={this.login.bind(this)} style={{width: 194}}>
                                    Login
                                </a>
                            </p>
                            <p className="control">
                                <a className="button" onClick={this.register.bind(this)} style={{width: 194}}>
                                    Registrieren
                                </a>
                            </p>
                        </div>
                    </div>

                </div>


            </Tile>)
    }
}

export default LoginRegistration;
