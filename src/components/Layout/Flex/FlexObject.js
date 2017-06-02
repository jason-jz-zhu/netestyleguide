import React from 'react';
import PropTypes from 'prop-types';

export const FlexObject = (props) => {
  return (
    <div style={{ flex: props.flex}}>
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
