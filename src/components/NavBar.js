import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <ul>
        <li><NavLink to='/'/></li>
        <li><NavLink to='/home'/></li>
        <li><NavLink to='/actors'/></li>
        <li><NavLink to='/movies'/></li>
      </ul>
    </div>
  );
};

export default NavBar;
