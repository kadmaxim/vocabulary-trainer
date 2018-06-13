import React from 'react';
import {Menu, MenuList, MenuLabel} from 'bloomer';
import {NavLink} from 'react-router-dom';

export default function QMenu(props) {
  return (
    <Menu>
      <MenuLabel>Hauptmenu</MenuLabel>
      <MenuList>
        <li>
          <NavLink exact to="/" activeClassName="is-active">
            Home
          </NavLink>
        </li>
      </MenuList>
      <MenuLabel>Spielmodi</MenuLabel>
      {props.userName ? (
        <MenuList>
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
        </MenuList>
      ) : (
        ''
      )}
    </Menu>
  );
}
