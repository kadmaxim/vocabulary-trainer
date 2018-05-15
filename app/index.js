import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import 'bulma';
import {Container, Box} from 'bloomer';
import App from './components/App'
import Gamemode1 from './components/Gamemode1'
import Gamemode4 from './components/Gamemode4'

ReactDOM.render(
    <Router>
        <div>
            <p className="menu">
                <div className="menu-list">
                    <Link to="/Home">Home</Link>
                </div>
                <p className="menu-label">
                    Gamemodes
                </p>
                <p className="menu-list">
                    <ul>
                        <li>
                            <Link to="/Gamemode1">Gamemode 1</Link>
                        </li>
                        <li>
                            <Link to="/Gamemode4">Gamemode 4</Link>
                        </li>
                    </ul>
                </p>
            </p>
            <Route path="/Home" component={App}/>
            <Route path="/Gamemode1" component={Gamemode1}/>
            <Route path="/Gamemode4" component={Gamemode4}/>
        </div>
    </Router>,
    document.getElementById('root'),
)
;
