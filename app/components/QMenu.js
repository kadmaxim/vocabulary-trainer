import React, { Component } from 'react'
import { Menu, MenuLink, MenuList, MenuLabel } from 'bloomer'
import { NavLink } from 'react-router-dom'

class QMenu extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <Menu>
          <MenuLabel>Main Menu</MenuLabel>
          <MenuList>
              <li><NavLink exact to="/" activeClassName="is-active">Home</NavLink></li>
              <li><NavLink to="/choose" activeClassName="is-active">Game Mode 2</NavLink></li>
          </MenuList>
      </Menu>
    )
  }

}

export default QMenu;
