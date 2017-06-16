import React from 'react';
import PropTypes from 'prop-types';

export const FlexColumn = (props) => {
  return (
    <div className="flex-column" style={Object.assign({}, { display: 'flex', flexDirection: 'column' }, props.style)}>
      {props.children}
    </div>
  );
};

FlexColumn.propTypes = {
  style: PropTypes.object,
};

FlexColumn.defaultProps = {
  style: {},
};
