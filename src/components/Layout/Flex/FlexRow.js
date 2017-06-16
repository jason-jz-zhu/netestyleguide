import React from 'react';
import PropTypes from 'prop-types';

export const FlexRow = (props) => {
  return (
    <div className="flex-row" style={Object.assign({}, { display: 'flex', flex: 1 , margin: '0 -0.5rem'}, props.style)}>
      {props.children}
    </div>
  );
}

FlexRow.propTypes = {
  style: PropTypes.object,
};

FlexRow.defaultProps = {
  style: {},
};
