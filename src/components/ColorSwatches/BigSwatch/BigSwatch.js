import React from 'react';
import './BigSwatch.css';

const BigSwatch = (props) => (
  <div className="bigSwatch">
    <div className="swatch" style={ {backgroundColor: props.color, borderWidth: props.border}}></div>
    <div className="colorName">{props.colorName}</div>
    <div>{props.hexValue}</div>
    <div>{props.rgbValue}</div>
  </div>
      );

BigSwatch.propTypes = {
};

export default BigSwatch;
