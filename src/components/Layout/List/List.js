import React from 'react';
import PropTypes from 'prop-types'
import './List.css';

// NETE style guide list
const List = (props) => {
  return (
    <div className="list" style={Object.assign({}, { flex: props.flex, margin: '0 0.5rem' }, props.style,)}>
      <div className="list-name">{props.listName}</div>
      {props.children}
    </div>
  );
};


List.propTypes = {
  flex: PropTypes.number,
  style: PropTypes.object,
};

List.defaultProps = {
  flex: 1,
  style: {},
};

export default List;
