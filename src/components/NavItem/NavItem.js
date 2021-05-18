import React from 'react';
import { NavLink } from 'react-router-dom';

// Styles
import './NavItem.styles.css';

const NavItem = ({ itemText, itemRoute }) => {
  return (
    <NavLink className="navItem__item" to={itemRoute}>
      {itemText}
    </NavLink>
  );
};

export default NavItem;
