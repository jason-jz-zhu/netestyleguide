import React from 'react';
import logo from '../../logo.svg';
import './Header.css';

const Header = () => (
  <div className="header">
    <img src={logo} className="logo" alt="logo" />
    <h2>A style guide for building a unique experience</h2>
  </div>
);

export default Header;
