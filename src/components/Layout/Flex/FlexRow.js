import React from 'react';

export const FlexRow = (props) => {
  return (
    <div className="flex-row" style={{ display: 'flex', flex: 1 }}>
      {props.children}
    </div>
  );
}
