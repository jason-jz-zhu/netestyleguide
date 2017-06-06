import React from 'react';
import PropTypes from 'prop-types'
import './List.css';

const List = (props) => {
  return (
    <div className="list" style={{ flex: props.flex, margin: '0 1rem' }}>
      <div className="list-name">{props.listName}</div>
      {props.children}
    </div>
  );
}


List.propTypes = {
  flex: PropTypes.number,
};

List.defaultProps = {
  flex: 1,
}

export default List;
