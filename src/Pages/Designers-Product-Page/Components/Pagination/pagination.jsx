// import { Pagination } from 'antd';
import React from 'react';
import ReactPaginate from 'react-paginate';
import './pagination.scss';
// import 'antd/dist/antd.css';
import Pagination from '@material-ui/lab/Pagination';
// import 'bootstrap/dist/css/bootstrap.css';
export default function Paginations({ handlePagination, count }) {
  const LIMIT = 10;

  const pages = Math.ceil(count / LIMIT);
  console.log(
    '🚀 ~ file: pagination.jsx ~ line 12 ~ Paginations ~ pages',
    pages
  );

  return (
    <div
      style={{
        display: 'grid',
        width: '100%',
        gridTemplateColumns: 'auto 1fr',
        placeItems: 'center',
        margin: '2rem 0',
      }}
      className='product_page_pagination--buttons'
    >
      <div>
        <p>Page: 1 to {pages}</p>
      </div>
      <div>
        {/* <ReactPaginate
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
        /> */}
        <div style={{}}>
          <Pagination
            count={pages}
            variant='outlined'
            shape='rounded'
            onChange={handlePagination}
          />
        </div>
      </div>
    </div>
  );
}
