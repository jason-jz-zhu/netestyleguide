import React from 'react';
import './LeftNav.css';
import { Link } from 'react-router-dom';

const LeftNav = () => (
  <div>
    <h3>BASICS</h3>
    <nav className="nav_wrap">
      <ul>
        <li><Link to="/">Logo</Link></li>
        <li><Link to="/404">Colors</Link></li>
        <li><Link to="/404">Typography</Link></li>
        <li><Link to="/404">Icons</Link></li>
        <li><Link to="/404">PowerPoint</Link></li>
        <li><Link to="/404">Email</Link></li>
        <li><Link to="/404">Citation</Link></li>
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
