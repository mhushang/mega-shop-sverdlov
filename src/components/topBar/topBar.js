import React, { Component } from 'react';
import './topBar.css';
import { NavLink } from 'react-router-dom'

import heart from '../../assets/images/heart.png'; 
import geoMarker from '../../assets/images/geo_marker.png'; 

import { Navbar, NavItem } from 'react-bootstrap';

class TopBar extends Component {
  render() {
    return (
      <div className="topBar">
        <Navbar inverse collapseOnSelect fixedTop>
          <Navbar.Header>
            <Navbar.Brand>
              <NavLink to="/">MEGA</NavLink>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <ul className="nav navbar-nav">
              <li>
                <NavLink to="" className="nav-link">Для Женщин</NavLink>
              </li>
              <li>
                <NavLink to="" className="nav-link">Для Мужчин</NavLink>
              </li>
              <li>
                <NavLink to="" className="nav-link">Для Детей</NavLink>
              </li>
              <li>
                <NavLink to="" className="nav-link">Игрушки</NavLink>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li>
                <NavLink to="/contact-us" activeClassName="active-link"  className="nav-link"><img src={geoMarker} className="geo-marker" alt="Geo marker"/>Как Добраться?</NavLink>
              </li>
              <NavItem eventKey={1} href="#"><img src={heart} className="favorites-icon" alt="favorites icon" />Избранное</NavItem>
            </ul>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default TopBar;
