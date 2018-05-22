import React, {Component} from 'react';

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
            <div className="container">
                <h1 className="panel-heading has-text-centered">Login & Registration</h1>

                <br/>

                <div className="container">

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
            </div>)
    }
}

export default LoginRegistration;
