import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Columns, Column} from 'bloomer';
import QMenu from './QMenu';
import Home from './Home';
import Gamemode1 from './../containers/Gamemode1';
import Gamemode2 from '../containers/Gamemode2';
import Gamemode3 from '../containers/Gamemode3';
import Gamemode4 from './../containers/Gamemode4';
import LoginRegistration from './../containers/LoginRegistration';

export default function App(props) {
    return (
        <Router>
            <Columns>
                <Column isSize="1/4">
                    <QMenu/>
                </Column>
                <Route exact path="/LoginRegistration" component={LoginRegistration}/>
                <Route exact path="/" component={Home}/>
                <Route path="/Gamemode1" component={Gamemode1}/>
                <Route path="/Gamemode2" component={Gamemode2}/>
                <Route path="/Gamemode3" component={Gamemode3}/>
                <Route path="/Gamemode4" component={Gamemode4}/>
            </Columns>
        </Router>
    );
}
