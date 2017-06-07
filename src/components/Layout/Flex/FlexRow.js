import React from 'react';

export const FlexRow = (props) => {
  return (
    <div className="flex-row" style={{ display: 'flex', flex: 1 , margin: '0 -0.5rem'}}>
      {props.children}
    </div>
  );
}
