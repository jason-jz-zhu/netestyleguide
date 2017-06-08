import React from 'react';
import PropTypes from 'prop-types';
import s from './BigSwatch.css';

// Large swatch with color information
const BigSwatch = (props) => (
  <div className="bigSwatch">
    <div className="swatch" style={{ backgroundColor: props.color, borderWidth: props.border }}></div>
    <div className="colorName" style={{ margin:"1em 0" }}>{props.colorName}</div>
    <div>{props.hexValue}</div>
    <div>{props.rgbValue}</div>
  </div>
);

BigSwatch.propTypes = {
  color: PropTypes.string.isRequired,
  colorName: PropTypes.string.isRequired,
  hexValue: PropTypes.string.isRequired,
  rgbValue: PropTypes.string.isRequired,
  border: PropTypes.number,
};

BigSwatch.defaultProps = {
  border: 0,
};

export default BigSwatch;
