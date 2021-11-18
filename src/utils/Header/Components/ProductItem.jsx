import React from 'react';

export function ProductItem({ hit, components }) {
  return (
    <a href="#" className="aa-ItemLink">
      <div className="aa-ItemContent">
        <div className="aa-ItemTitle">
          <components.Highlight hit={hit} attribute="name" />
        </div>
      </div>
    </a>
  );
}