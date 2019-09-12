import React from 'react';
import { NavLink } from 'react-router-dom';


export default () => (
  <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
    <div className="navbar-brand">Note App</div>

    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <li className="nav-item">
        <NavLink to="/" exact className="nav-link">Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/about" exact className="nav-link">About</NavLink>
      </li>
    </ul>
  </nav>
);
