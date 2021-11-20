import React, { useEffect, useState } from 'react';
import styles from './SelectSize.module.scss';
import {
  Button,
  IconButton,
  Radio,
  Select,
  useMediaQuery,
} from '@material-ui/core';
function SelectSize({variant,selectedsize,setselectedsize}) {
  console.log(
    '🚀 ~ file: SelectSize.js ~ line 11 ~ SelectSize ~ variant',
    selectedsize
  );
  const [size, setSize] = useState('xs');
  const customView = useMediaQuery('(max-width:1044px)');
  const tabView = useMediaQuery('(max-width:768px)');
  const mobileView = useMediaQuery('(max-width:550px)');
const [ss,setss]=useState([])
  useEffect(()=>{
    const gg=[]
    variant.map((vari)=>{
      vari.values.map((atti)=>{
          if(atti.attribute_name==='Size')
          if(!gg.includes(atti.attributeValue)) gg.push(atti.attributeValue)
      })
    })

    setss(gg)
  },[variant])

// const clickhandler=(name,attribute_id,variant_id,id)=>{
//   setselectedsize(name);
// //   console.log("thifsifsdifsdf",{...v,size:{attribute_id:attribute_id ,attr_value_id:id,variant_id:variant_id}});
// //   debugger
// //  onvarientchangehandler({...v,size:{attribute_id:attribute_id ,attr_value_id:id,variant_id:variant_id}});
// }
  return (
    <div className={styles.container}>
      <h4 className={styles.heading_1}>Select Size</h4>
      <div className={styles.radioBtnDiv}>
        {ss?.map((item,index) => {
         return <IconButton
            key={index}
            className={
              selectedsize === item ? styles.BtnSelected : styles.radioBtnOutline
            }
            onClick={() =>{
              setselectedsize(item)
            } }
          >
            {item}
          </IconButton>
          
})}
        {/* <IconButton
          className={
            size === "xs" ? styles.BtnSelected : styles.radioBtnOutline
          }
          onClick={() => setSize("xs")}
        >
          XS
        </IconButton>
        <IconButton
          className={size === "s" ? styles.BtnSelected : styles.radioBtnOutline}
          onClick={() => setSize("s")}
        >
          S
        </IconButton>
        <IconButton
          className={size === "m" ? styles.BtnSelected : styles.radioBtnOutline}
          onClick={() => setSize("m")}
        >
          M
        </IconButton>
        <IconButton
          className={size === "l" ? styles.BtnSelected : styles.radioBtnOutline}
          onClick={() => setSize("l")}
        >
          L
        </IconButton>
        <IconButton
          className={
            size === "xl" ? styles.BtnSelected : styles.radioBtnOutline
          }
          onClick={() => setSize("xl")}
        >
          XL
        </IconButton>
        <IconButton
          className={
            size === "xxl" ? styles.BtnSelected : styles.radioBtnOutline
          }
          onClick={() => setSize("xxl")}
        >
          XXL
        </IconButton> */}
      </div>
    </div>
  );
}

export default SelectSize;
