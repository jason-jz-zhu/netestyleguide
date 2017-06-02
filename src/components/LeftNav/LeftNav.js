import React from 'react';
import './LeftNav.css';
import { Link } from 'react-router-dom';

const LeftNav = () => (
  <div>
    <h3>BASICS</h3>
    <nav className="nav_wrap">
      <ul>
        <li><Link to="/Logo">Logo</Link></li>
        <li><Link to="/Colors">Colors</Link></li>
        <li><Link to="/Typography">Typography</Link></li>
        <li><Link to="/Icons">Icons</Link></li>
        <li><Link to="/PowerPoint">PowerPoint</Link></li>
        <li><Link to="/Email">Email</Link></li>
        <li><Link to="/Citation">Citation</Link></li>
        <li><Link to="/404">One pagers</Link></li>
      </ul>
    </nav>
    <h3>TEMPLATE</h3>
    <nav className="nav_wrap">
      <ul>
        <li><Link to="/">Sketch</Link></li>
        <li><Link to="/404">Photoshop</Link></li>
        <li><Link to="/404">Indesign</Link></li>
        <li><Link to="/404">PowerPoint</Link></li>
      </ul>
    </nav>
  </div>
);

export default LeftNav;
