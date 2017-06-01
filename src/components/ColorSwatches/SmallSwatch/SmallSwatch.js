import React from 'react';
import './SmallSwatch.css';

const SmallSwatch = (props) => (
  <div className="smallSwatch">
    <div className="swatch-inline" style={ {backgroundColor: props.color, borderWidth: `${props.border}px`}}></div>
    <div className="color">{props.color}</div>
  </div>
      );

SmallSwatch.propTypes = {
};

export default SmallSwatch;
