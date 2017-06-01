import React from 'react';
import './List.css';

const List = (props) => {
  return (
    <div className="list">
      <div className="list-name">{props.listName}</div>
      {props.children}
    </div>
  );
}


List.propTypes = {
  // props: React.PropTypes.
};

export default List;
