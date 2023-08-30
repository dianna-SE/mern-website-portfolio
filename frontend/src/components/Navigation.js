import React from 'react';
import { NavLink } from 'react-router-dom';

// Change the function names and links
// to fit your portfolio topic.

function Navigation() {
  return (
    <nav>
        <NavLink exact to="/" activeClassName="active">Home</NavLink>
        <NavLink to="../mocktails" activeClassName="active">Mocktails</NavLink>
        <NavLink to="../topics" activeClassName="active">Topics</NavLink>
        <NavLink to="../gallery" activeClassName="active">Gallery</NavLink>
        <NavLink to="../order" activeClassName="active">Order</NavLink>
        <NavLink to="../contact" activeClassName="active">Contact</NavLink>
    </nav>

    
  );
}

export default Navigation;
