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
                        Login & Registrierung
                    </NavLink>
                </li>

                <p className="menu-label">Hauptmenu</p>
                <li>
                    <NavLink exact to="/" activeClassName="is-active">
                        Home
                    </NavLink>
                </li>

                <p className="menu-label">Spielmodi</p>
                <ul className="menu-list">
                    <li>
                        <NavLink to="/Gamemode1" activeClassName="is-active">
                            Spielmodus 1
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/Gamemode2" activeClassName="is-active">
                            Spielmodus 2
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/Gamemode3" activeClassName="is-active">
                            Spielmodus 3
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/Gamemode4" activeClassName="is-active">
                            Spielmodus 4
                        </NavLink>
                    </li>
                </ul>
            </MenuList>
        </Menu>
    );
}
