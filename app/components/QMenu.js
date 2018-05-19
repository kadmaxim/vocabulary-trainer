import React from 'react';
import { Menu, MenuList, MenuLabel } from 'bloomer';
import { NavLink } from 'react-router-dom';

export default function QMenu(props) {
  return (
    <Menu>
      <MenuLabel>Main Menu</MenuLabel>
      <MenuList>
        <li>
          <NavLink exact to="/" activeClassName="is-active">
            Home
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
      </MenuList>
    </Menu>
  );
}
