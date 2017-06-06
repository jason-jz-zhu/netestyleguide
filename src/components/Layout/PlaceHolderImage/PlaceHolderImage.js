import React from 'react';
import PropTypes from 'prop-types';

const PlaceHolderImage = (props) => {
  return (
    <div style={{ width:props.width, height: props.height, backgroundColor:'#DDD', border: '1px solid #555'}} />
  );
}

PlaceHolderImage.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
};
PlaceHolderImage.defaultProps = {
  width: '50px',
  height: '50px',
};

export default PlaceHolderImage;
