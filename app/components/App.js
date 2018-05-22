import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Columns, Column} from 'bloomer';
import QMenu from './QMenu';
import Home from './Home';
import Gamemode1 from './../components/Gamemode1';
import Mode2 from './../containers/Mode2';
import Mode3 from './../containers/Mode3';
import Gamemode4 from './../components/Gamemode4';
import LoginRegistration from './../components/LoginRegistration';

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
                <Route path="/choose" component={Mode2}/>
                <Route path="/split" component={Mode3}/>
                <Route path="/Gamemode4" component={Gamemode4}/>
            </Columns>
        </Router>
    );
}
