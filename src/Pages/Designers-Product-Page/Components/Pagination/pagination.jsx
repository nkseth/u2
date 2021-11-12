import React from 'react';
import ReactPaginate from 'react-paginate';
import './pagination.scss';
// import 'bootstrap/dist/css/bootstrap.css';
export default function Paginations() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <div>
        <p>Page: 1 to 10</p>
      </div>
      <div>
        <ReactPaginate
          previousLabel={'Previous'}
          nextLabel={'Next'}
          breakLabel={'...'}
          pageCount={10}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          containerClassName={'pagination'}
          pageClassName={'page-item'}
          pageLinkClassName={'page-link'}
          previousClassName={'page-item'}
          previousLinkClassName={'page-link'}
          nextClassName={'page-item'}
          nextLinkClassName={'page-link'}
          breakClassName={'page-item'}
          breakLinkClassName={'page-link'}
          activeClassName={'active'}
        />
      </div>
    </div>
  );
}
