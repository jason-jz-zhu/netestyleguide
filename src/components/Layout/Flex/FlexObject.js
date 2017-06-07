import React from 'react';
import PropTypes from 'prop-types';

export const FlexObject = (props) => {
  return (
    <div style={{ flex: props.flex, margin: '0 0.5rem' }}>
      {props.children}
    </div>
  );
}

FlexObject.propTypes = {
  flex: PropTypes.number,
}

FlexObject.defaultProps = {
  flex: 1,
}
