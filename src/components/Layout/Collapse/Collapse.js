import React from 'react';
import './Collapse.css';

const Collapse = (props) => {
  return (
    <div>
      <h2 className="category-header">{props.header}<div className="toggler">+</div></h2>
      {props.children}
    </div>
  );
}

export default Collapse;
