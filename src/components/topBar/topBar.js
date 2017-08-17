import React, { Component } from 'react';
import './topBar.css';
import { NavLink } from 'react-router-dom'

import { Navbar, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';

class TopBar extends Component {
  render() {
    return (
      <div className="topBar">
        <Navbar inverse collapseOnSelect fixedTop>
          <Navbar.Header>
            <Navbar.Brand>
              <NavLink to="/">Home</NavLink>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <ul className="nav navbar-nav">
              <li>
                <NavLink to="/contact-us" activeClassName="active-link"  className="nav-link">Link1</NavLink>
              </li>
              <li>
                <NavLink to="/branches" activeClassName="active-link" className="nav-link">Link2</NavLink>
              </li>
              <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Action</MenuItem>
                <MenuItem eventKey={3.2}>Another action</MenuItem>
                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.3}>Separated link</MenuItem>
              </NavDropdown>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <NavItem eventKey={1} href="#">Link Right</NavItem>
              <NavItem eventKey={2} href="#">Link Right</NavItem>
            </ul>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default TopBar;
