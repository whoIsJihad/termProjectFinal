// Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navbarStyle = {
    background: '#3498db', // Blue background color
    padding: '10px', // Padding around the navbar
  };

  const ulStyle = {
    listStyleType: 'none', // Remove default list styles
    margin: '0',
    padding: '0',
  };

  const liStyle = {
    display: 'inline-block', // Display list items horizontally
    margin: '0 10px', // Add margin between list items
  };

  const linkStyle = {
    color: '#fff', // White text color
    textDecoration: 'none', // Remove underlines from links
    fontSize: '18px', // Font size for links
  };

  return (
    <nav style={navbarStyle}>
      <ul style={ulStyle}>
        <li style={liStyle}>
          <Link to="/" style={linkStyle}>
            Home
          </Link>
        </li>
        <li style={liStyle}>
          <Link to="/products" style={linkStyle}>
            Products
          </Link>
        </li>
        <li style={liStyle}>
          <Link to="/categories" style={linkStyle}>
            Categories
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
