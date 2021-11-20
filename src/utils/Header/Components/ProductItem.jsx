import React from 'react';

export function ProductItem({ hit, components }) {
  return (
    <a href='#' className='aa-ItemLink' style={{ zIndex: 10 }}>
      <div className='aa-ItemContent' style={{ zIndex: 10 }}>
        <div className='aa-ItemTitle'>
          <components.Highlight hit={hit} attribute='name' />
        </div>
      </div>
    </a>
  );
}
