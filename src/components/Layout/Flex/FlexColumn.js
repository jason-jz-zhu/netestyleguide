import React from 'react';

export const FlexColumn = (props) => {
  return (
    <div className="flex-column" style={{ display: 'flex', flexDirection: 'column'}}>
      {props.children}
    </div>
  );
}
