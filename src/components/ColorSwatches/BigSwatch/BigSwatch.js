import React from 'react';
import PropTypes from 'prop-types'
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
  border: PropTypes.number,
};

BigSwatch.defaultProps = {
  border: 0,
}

export default BigSwatch;
