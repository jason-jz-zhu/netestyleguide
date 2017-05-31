import React from 'react';
import './RowSwatch.css';

const RowSwatch = (props) => (
  <div className="rowSwatch">
    <div className="swatch-square" style={ {backgroundColor: props.color, borderWidth: `0 ${props.border}px`}}></div>
    <div className="colorName">{props.colorName.toUpperCase()}</div>
    <div className="hexValue" data-type="HEX">{props.hexValue}</div>
    <div className="rgbValue"  data-type="RGB">{props.rgbValue}</div>
  </div>
      );

RowSwatch.propTypes = {
};

export default RowSwatch;
