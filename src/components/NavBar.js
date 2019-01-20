import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <ul>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/home'>Home</NavLink></li>
        <li><NavLink to='/actors'>Actors</NavLink></li>
        <li><NavLink to='/movies'>Movies</NavLink></li>
      </ul>
    </div>
  );
};

export default NavBar;
