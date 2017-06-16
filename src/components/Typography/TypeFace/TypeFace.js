import React from 'react';
import PropTypes from 'prop-types';
import TypeStyle from './TypeStyle';

// A containter for different styles of the same font
const TypeFace = (props) => (
  <div className="type-face">
    <h3>{props.font}</h3>
    {props.weights.map(w => <TypeStyle {...props} weight={w} key={`${props.font}:${w[0]}`}/>)}
  </div>
);

TypeFace.propTypes = {
 font : PropTypes.string,
};

TypeFace.defaultProps = {
  weights: [['regular',400]],
}

export default TypeFace;
