import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => (
  <div className="nav-wrapper">
    <ul>
      <li>
        <NavLink exact activeClassName="active" activeStyle={{color: 'orange'}} to="/">
          One
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" activeStyle={{color: 'orange'}} to="/two">
          Two
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" activeStyle={{color: 'orange'}} to="/three">
          Three
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" activeStyle={{color: 'orange'}} to="/four">
          Four
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" activeStyle={{color: 'orange'}} to="/five">
          Five
        </NavLink>
      </li>
    </ul>
  </div>
)

export default Nav;
