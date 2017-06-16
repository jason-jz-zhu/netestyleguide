import React from 'react';
import PropTypes from 'prop-types';

export const FlexObject = (props) => {
  return (
    <div style={Object.assign({}, { flex: props.flex, margin: '0 0.5rem' }, props.style)}>
      {props.children}
    </div>
  );
};

FlexObject.propTypes = {
  flex: PropTypes.number,
  style: PropTypes.object
};

FlexObject.defaultProps = {
  flex: 1,
  style: {},
};
