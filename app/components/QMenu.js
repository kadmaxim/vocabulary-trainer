import React from 'react';
import {Menu, MenuList, MenuLabel} from 'bloomer';
import {NavLink} from 'react-router-dom';

export default function QMenu(props) {
    return (
        <Menu>
            <MenuList>
                <p className="menu-label">Login & Registration</p>
                <li>
                    <NavLink exact to="/LoginRegistration" activeClassName="is-active">
                        Login & Registration
                    </NavLink>
                </li>

                <p className="menu-label">Main Menu</p>
                <li>
                    <NavLink exact to="/" activeClassName="is-active">
                        Home
                    </NavLink>
                </li>

                <p className="menu-label">Gamemodes</p>
                <ul className="menu-list">
                    <li>
                        <NavLink to="/Gamemode1" activeClassName="is-active">
                            Game Mode 1
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/choose" activeClassName="is-active">
                            Game Mode 2
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/split" activeClassName="is-active">
                            Game Mode 3
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/Gamemode4" activeClassName="is-active">
                            Game Mode 4
                        </NavLink>
                    </li>
                </ul>
            </MenuList>
        </Menu>
    );
}
