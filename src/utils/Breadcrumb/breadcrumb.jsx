import React from 'react';
import { Link } from 'react-router-dom';
import styles from './breadcrumb.module.scss';

export default function Breadcrumb({ path, activePath, style }) {
  const pathItem = path.split('/');
  console.log(
    '🚀 ~ file: breadcrumb.jsx ~ line 7 ~ Breadcrumb ~ pathItem',
    pathItem
  );

  return (
    <div style={style} className={styles.breadcrumb}>
      <p>
        {/* {pathItem.map(item => {
          return (
            <Link to={`/${item.split(' ').join('').trim()}`}>{item} /</Link>
          );
        })} */}
        <span>{path}</span>
        &nbsp;
        <span> {activePath}</span>
      </p>
    </div>
  );
}
