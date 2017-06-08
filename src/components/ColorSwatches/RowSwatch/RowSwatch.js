import React from 'react';
import PropTypes from 'prop-types';
import './RowSwatch.css';

// Horizontal swatch with color information
const RowSwatch = (props) => (
  <div className="rowSwatch">
    <div className="swatch-square" style={{ backgroundColor: props.color, borderWidth: `0 ${props.border}px` }}></div>
    <div className="colorName">{props.colorName.toUpperCase()}</div>
    <div className="hexValue" data-type="HEX">{props.hexValue}</div>
    <div className="rgbValue"  data-type="RGB">{props.rgbValue}</div>
  </div>
);

RowSwatch.propTypes = {
  color: PropTypes.string.isRequired,
  colorName: PropTypes.string.isRequired,
  hexValue: PropTypes.string.isRequired,
  rgbValue: PropTypes.string.isRequired,
  border: PropTypes.number,
};

RowSwatch.defaultProps = {
  border: 0,
};

export default RowSwatch;
