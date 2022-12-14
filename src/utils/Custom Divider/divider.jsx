import React from 'react';

export default function CustomDivider(props) {
  return (
    <div
      style={{
        height: '1px',
        background: `${props.customBg || '#9D8E73'}`,
        flex: 1,
        ...props.style,
      }}
    ></div>
  );
}
