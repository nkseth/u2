import React from 'react';
import { Link } from 'react-router-dom';
import styles from './breadcrumb.module.scss';

export default function Breadcrumb({ path, activePath, style,crum }) {


  return (
    <div style={style} className={styles.breadcrumb}>

<p>
        { crum?.map((item,index) => {
          return( 
           <>
            {item.path!==``?<Link to={item?.path} replace  >{item?.label}</Link>:<label style={{fontWeight:'bold'}}>{item.label}</label>}
            {index===crum?.length-1 || item.label===null?null:<label>/</label>}
            </>
          )
        })} 
     
      </p>

 
    </div>
  );
}
