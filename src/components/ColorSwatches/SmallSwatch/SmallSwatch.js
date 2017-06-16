import React from 'react';
import PropTypes from 'prop-types';
import './SmallSwatch.css';

// Font-sized swatch that shows only color & code
const SmallSwatch = (props) => (
  <div className="smallSwatch">
    <div className="swatch-inline" style={{ backgroundColor: props.color, borderWidth: `${props.border}px` }}></div>
    <div className="color">{props.color}</div>
  </div>
);

SmallSwatch.propTypes = {
  color: PropTypes.string.isRequired,
  border: PropTypes.number,
};

SmallSwatch.defaultProps = {
  border: 0,
};

export default SmallSwatch;
